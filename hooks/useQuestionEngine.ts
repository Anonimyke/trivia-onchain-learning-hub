import { useState, useEffect, useCallback, useRef } from 'react';
import { Category, Difficulty, QUESTION_BANK, RawQuestion } from '../data/questions';
import { Lang } from '../types/i18n';

// Constants
const TOTAL_QUESTIONS = 5;
const RECENTLY_SEEN_LIMIT = 20; // Remember last 20 questions per category to avoid repeats

export interface QuestionEngineState {
    currentQuestion: RawQuestion | null;
    questionIndex: number; // 0-based index for logic, displayed as 1-based
    totalQuestions: number;
    score: number;
    streak: number;
    difficulty: Difficulty;
    isFinished: boolean;
    history: boolean[]; // track correct/incorrect for each question
}

export function useQuestionEngine(category: Category, lang: Lang) {
    // Core Game State
    const [state, setState] = useState<QuestionEngineState>({
        currentQuestion: null,
        questionIndex: 0,
        totalQuestions: TOTAL_QUESTIONS,
        score: 0,
        streak: 0,
        difficulty: 'easy', // Start Easy as requested
        isFinished: false,
        history: [],
    });

    // Validated Used IDs for this session to prevent duplicates
    const sessionUsedIds = useRef<Set<string>>(new Set());

    // --- Helpers ---

    // Get "Recently Seen" from LocalStorage
    const getRecentlySeen = (): string[] => {
        if (typeof window === 'undefined') return [];
        try {
            const key = `trivia_seen_${category}`;
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            return [];
        }
    };

    // Update "Recently Seen" in LocalStorage
    const addToRecentlySeen = (id: string) => {
        if (typeof window === 'undefined') return;
        try {
            const key = `trivia_seen_${category}`;
            let seen = getRecentlySeen();
            // Add new ID
            seen.push(id);
            // Trim to limit (keep newest)
            if (seen.length > RECENTLY_SEEN_LIMIT) {
                seen = seen.slice(seen.length - RECENTLY_SEEN_LIMIT);
            }
            localStorage.setItem(key, JSON.stringify(seen));
        } catch (e) {
            // ignore
        }
    };

    const getDifficultyForNextQuestion = (currentDiff: Difficulty, currentPerformance: boolean[]): Difficulty => {
        // Logic: 
        // - Start Easy (handled in initial state).
        // - If performing well (Accuracy > ~70% or Streak >= 2), bump up.
        // - If performing poorly (Streak = 0), bump down or stay.
        // - Target average correctness ~2.5 / 5.

        const correctCount = currentPerformance.filter(x => x).length;
        const totalAnswered = currentPerformance.length;
        
        // If just starting, keep current or move to medium if they aced the first easy one?
        // Let's be progressive.
        if (totalAnswered === 0) return 'easy';

        const lastWasCorrect = currentPerformance[totalAnswered - 1];

        // Aggressive promotion if correct
        if (lastWasCorrect) {
            if (currentDiff === 'easy') return 'medium';
            if (currentDiff === 'medium') return 'hard';
            return 'hard'; // Cap at hard
        } 
        
        // Demotion if incorrect
        if (!lastWasCorrect) {
            if (currentDiff === 'hard') return 'medium';
            if (currentDiff === 'medium') return 'easy';
            return 'easy';
        }

        return currentDiff;
    };

    const selectQuestion = (diff: Difficulty, excludeIds: Set<string>): RawQuestion | null => {
        const seenIds = new Set(getRecentlySeen());

        // Filter by Category and Difficulty
        const pool = QUESTION_BANK.filter(q => q.category === category && q.difficulty === diff);
        
        // Strategy 1: Exclude Session & Recently Seen
        let candidates = pool.filter(q => !excludeIds.has(q.id) && !seenIds.has(q.id));

        // Strategy 2: If empty, Exclude only Session (ignore recent memory)
        if (candidates.length === 0) {
            candidates = pool.filter(q => !excludeIds.has(q.id));
        }

        // Strategy 3: If still empty, try fallback difficulties (Session exclusive)
        if (candidates.length === 0) {
            // Try any difficulty not used in session
            const fallbackPool = QUESTION_BANK.filter(q => q.category === category && !excludeIds.has(q.id));
            if (fallbackPool.length > 0) {
                // Return random from fallback
                return fallbackPool[Math.floor(Math.random() * fallbackPool.length)];
            }
        }

        // Strategy 4: If literally everything used (unlikely with 30+ questions and 5 per game), allow repeats
        if (candidates.length === 0) {
           return pool[Math.floor(Math.random() * pool.length)]; 
        }

        return candidates[Math.floor(Math.random() * candidates.length)];
    };


    // --- Actions ---

    const initGame = useCallback(() => {
        sessionUsedIds.current.clear();
        
        // Initial Question
        const q = selectQuestion('easy', sessionUsedIds.current);
        
        if (q) {
            sessionUsedIds.current.add(q.id);
            // Add to localStorage "Seen" immediately? Or only after answering? 
            // Better only after answering or "committing" to it, but here is fine to ensure rotation.
            addToRecentlySeen(q.id);
        }

        setState({
            currentQuestion: q,
            questionIndex: 0, // CORRECT FIX: Start at 0
            totalQuestions: TOTAL_QUESTIONS,
            score: 0,
            streak: 0,
            difficulty: 'easy',
            isFinished: false,
            history: []
        });
    }, [category]); // Re-init if category changes (should not happen mid-game usually)

    // Call init on mount
    useEffect(() => {
        initGame();
    }, [initGame]);


    const submitAnswer = (answerIndex: number | null) => {
        if (!state.currentQuestion || state.isFinished) return;

        const isCorrect = answerIndex === state.currentQuestion.correctIndex;
        
        // Update History
        const newHistory = [...state.history, isCorrect];
        const newScore = isCorrect ? state.score + 1 : state.score;
        const newStreak = isCorrect ? state.streak + 1 : 0;
        
        // Prepare next
        const nextIndex = state.questionIndex + 1;
        
        if (nextIndex >= TOTAL_QUESTIONS) {
            // Game Over
            setState(prev => ({
                ...prev,
                score: newScore,
                streak: newStreak,
                history: newHistory,
                isFinished: true // Mark finished, component handles transition
            }));
            return;
        }

        // Determine Next Difficulty
        const nextDiff = getDifficultyForNextQuestion(state.difficulty, newHistory);

        // Select Next Question
        const nextQ = selectQuestion(nextDiff, sessionUsedIds.current);

        if (nextQ) {
            sessionUsedIds.current.add(nextQ.id);
            addToRecentlySeen(nextQ.id); // Remember we used this
        }

        setState(prev => ({
            ...prev,
            currentQuestion: nextQ,
            questionIndex: nextIndex,
            score: newScore,
            streak: newStreak,
            difficulty: nextDiff,
            history: newHistory,
        }));
    };

    return {
        ...state,
        submitAnswer,
        resetGame: initGame
    };
}
