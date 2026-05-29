import React, { useState, useEffect, useRef } from 'react';
import { Theme } from '../types';
import { getRandomQuestionFor, Difficulty, Category } from '../data/questions'; // kept for types if needed, or remove if unused
import { FEEDBACK_MESSAGES, FeedbackCategory } from '../data/feedback';
import { useLanguage } from '../context/LanguageContext';
import { useQuestionEngine } from '../hooks/useQuestionEngine';
import { t } from '../data/i18n';

export type GameMode = "practice" | "challenge";

interface GameScreenProps {
    theme: Theme;
    mode: GameMode;
    stake?: number;
    onFinish: (score: number, total: number) => void;
}

const TIMER_DURATION = 8;
const CIRCLE_RADIUS = 24;
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;
const TOTAL_QUESTIONS = 5;

interface CurrentQuestion {
    id: string;
    question: string;
    options: string[];
    correctIndex: number;
    difficulty: Difficulty;
}

export default function GameScreen({ theme, mode, stake, onFinish }: GameScreenProps) {
    const { lang } = useLanguage();

    // Use the Question Engine Hook
    const {
        currentQuestion,
        questionIndex,
        totalQuestions,
        score,
        difficulty,
        isFinished,
        submitAnswer
    } = useQuestionEngine(theme, lang);

    // Local UI State
    const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [showAnswerState, setShowAnswerState] = useState(false);
    const [feedback, setFeedback] = useState<{ msg: string; category: FeedbackCategory } | null>(null);

    // Audio Refs
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const lockedRef = useRef(false);

    // Initial Start / Reset Timer when question changes
    useEffect(() => {
        if (!currentQuestion) return;
        if (isFinished) return;

        // Reset UI for new question
        setSelectedOption(null);
        setShowAnswerState(false);
        setFeedback(null);
        lockedRef.current = false;

        startTimer();

        return () => clearTimer();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentQuestion, isFinished]);

    // Handle Game Over
    useEffect(() => {
        if (isFinished) {
            clearTimer();
            // Small delay to show result of last question if needed, 
            // but usually hook switches isFinished immediately after answer logic?
            // Actually hook sets isFinished TRUE after answering last question.
            // We should probably wait a moment if we want to show feedback for the last question.
            // But the hook updates state immediately.
            // We will handle the "Finish" delay in handleAnswer.
        }
    }, [isFinished]);

    const playTickSound = () => {
        try {
            const audio = new Audio('/sounds/tick.mp3');
            audio.volume = 0.2;
            audio.play().catch(() => { });
        } catch (e) { }
    };

    const startTimer = () => {
        clearTimer();
        setTimeLeft(TIMER_DURATION);

        timerRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                const next = prev - 1;
                if (next <= 3 && next > 0) playTickSound();
                if (next <= 0) {
                    clearTimer();
                    handleTimeout();
                    return 0;
                }
                return next;
            });
        }, 1000);
    };

    const clearTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    };

    const handleTimeout = () => {
        if (lockedRef.current) return;
        handleAnswer(null);
    };

    const handleAnswer = (optionIndex: number | null) => {
        if (lockedRef.current) return;
        if (!currentQuestion) return;

        lockedRef.current = true;
        clearTimer();

        if (optionIndex !== null) setSelectedOption(optionIndex);
        setShowAnswerState(true);

        const isCorrect = optionIndex === currentQuestion.correctIndex;

        // Feedback
        let category: FeedbackCategory = 'bad';
        if (isCorrect) {
            // Simple feedback logic for UI
            category = 'good';
        }

        const messages = FEEDBACK_MESSAGES[lang][category];
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        setFeedback({ msg: randomMsg, category });

        const delay = isCorrect ? 1500 : 2500;

        // Wait then submit to hook
        setTimeout(() => {
            submitAnswer(optionIndex);

            // If that was the last question, the hook will set isFinished = true
            // We need to check if we are done based on index.
            // questionIndex is 0-based. If index was 4 (total 5), we are done.
            if (questionIndex >= totalQuestions - 1) {
                // Determine final score. 
                // CRITICAL: The hook updates 'score' immediately in 'submitAnswer'.
                // But React state update might not be reflected in 'score' variable yet inside this closure?
                // Actually 'submitAnswer' triggers a re-render.
                // We should call onFinish in a useEffect dependent on isFinished, OR ensure we pass the *predicted* score.
                // The hook's submitAnswer calculates the new score.
                // Let's rely on the useEffect([isFinished]) to call onFinish?
                // No, onFinish expects arguments.

                // Better: Calculate final score here to pass to onFinish, matching hooks logic
                const finalScore = isCorrect ? score + 1 : score;
                onFinish(finalScore, totalQuestions);
            }

        }, delay);
    };


    if (!currentQuestion) return <div className="container card">{lang === 'es' ? 'Cargando...' : 'Loading...'}</div>;

    // Visual logic for timer
    let strokeColor = '#3b82f6';
    if (timeLeft <= 4) strokeColor = '#facc15';
    if (timeLeft <= 2) strokeColor = '#ef4444';

    return (
        <div className="container">
            {/* Top bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.8rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {difficulty}
                </div>
                <div style={{ position: 'relative', width: '60px', height: '60px' }}>
                    <svg width="60" height="60" className={`circular-timer ${timeLeft <= 3 ? 'timer-tick' : ''}`}>
                        <circle
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="4"
                            fill="transparent"
                            r={CIRCLE_RADIUS}
                            cx="30"
                            cy="30"
                        />
                        <circle
                            stroke={strokeColor}
                            strokeWidth="4"
                            fill="transparent"
                            r={CIRCLE_RADIUS}
                            cx="30"
                            cy="30"
                            className="timer-circle-progress"
                            strokeDasharray={CIRCLE_CIRCUMFERENCE}
                            strokeDashoffset={CIRCLE_CIRCUMFERENCE - ((timeLeft / TIMER_DURATION) * CIRCLE_CIRCUMFERENCE)}
                        />
                    </svg>
                    <div style={{
                        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontWeight: 'bold', fontSize: '1.2rem', color: strokeColor
                    }}>
                        {timeLeft}
                    </div>
                </div>
            </div>

            <div className="card question-enter" key={currentQuestion.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: '#9ca3af', fontSize: '0.9rem' }}>
                    {/* Display 1-based index */}
                    <span>{t(lang, 'game.questionLabel')} {questionIndex + 1}/{totalQuestions}</span>
                    <span>{t(lang, 'game.correctLabel')}: {score}</span>
                </div>

                <h2 style={{ marginBottom: '0.5rem', minHeight: '60px' }}>{currentQuestion.question[lang]}</h2>

                {feedback ? (
                    <div className={`feedback feedback-${feedback.category}`}>
                        {feedback.msg}
                    </div>
                ) : (
                    <div className="feedback"></div>
                )}

                <div style={{ display: 'grid', gap: '0.75rem', marginTop: '1.5rem' }}>
                    {currentQuestion.options[lang].map((opt, idx) => {
                        let btnClass = "btn answer-btn";
                        if (showAnswerState) {
                            if (idx === currentQuestion.correctIndex) btnClass += " answer-correct";
                            else if (idx === selectedOption) btnClass += " answer-wrong";
                            else btnClass += " answer-dim";
                        }

                        return (
                            <button
                                key={idx}
                                onClick={() => handleAnswer(idx)}
                                className={btnClass}
                                style={{ textAlign: 'left', padding: '1rem', width: '100%' }}
                                disabled={lockedRef.current}
                            >
                                {opt}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
