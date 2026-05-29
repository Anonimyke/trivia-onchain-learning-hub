import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../data/i18n';
import { GameMode } from '../components/GameScreen'; // Or imported from a shared types file if preferred

interface ResultScreenProps {
    score: number;
    total: number;
    mode?: GameMode;
    stake?: number;
    grossReward?: number;
    netChange?: number;
    onPlayAgain: () => void;
    onBackHome: () => void;
}

export default function ResultScreen({ score, total, mode = 'practice', stake, grossReward, netChange, onPlayAgain, onBackHome }: ResultScreenProps) {
    const { lang } = useLanguage();
    const [displayScore, setDisplayScore] = useState(0);
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        let start = 0;
        const duration = 1000;
        const incrementTime = score > 0 ? duration / score : duration;

        if (score === 0) return;

        const timer = setInterval(() => {
            start += 1;
            setDisplayScore(start);
            if (start >= score) clearInterval(timer);
        }, incrementTime);

        return () => clearInterval(timer);
    }, [score]);

    useEffect(() => {
        // Confetti for high score or winning challenge
        if (mode === 'practice' && score >= 4) setShowConfetti(true);
        if (mode === 'challenge' && (netChange ?? 0) > 0) setShowConfetti(true);
    }, [score, mode, netChange]);

    const percentage = Math.round((score / total) * 100);

    let ringColor = '#ef4444'; // Red (Bad)
    if (score >= 2) ringColor = '#facc15'; // Yellow (Mid)
    if (score >= 4) ringColor = '#10b981'; // Green (Good)

    let message = t(lang, 'result.performance.low');
    if (percentage >= 80) message = t(lang, 'result.performance.high');
    else if (percentage >= 50) message = t(lang, 'result.performance.medium');

    const isNetPositive = (netChange ?? 0) > 0;

    return (
        <div className="container" style={{ textAlign: 'center' }}>
            {showConfetti && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'hidden', zIndex: 0 }}>
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="confetti-piece"
                            style={{
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`,
                                backgroundColor: i % 2 === 0 ? '#facc15' : '#60a5fa'
                            }}
                        ></div>
                    ))}
                </div>
            )}

            {/* Profile Card */}
            <div className="card profile-card" style={{ position: 'relative', zIndex: 1, padding: '3rem 1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                    <div
                        className="avatar-ring"
                        style={{
                            width: '100px', height: '100px', borderRadius: '50%',
                            border: `4px solid ${ringColor}`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            background: '#1f2937', color: ringColor, fontSize: '2.5rem', fontWeight: 'bold'
                        }}
                    >
                        {mode === 'challenge' ? '🏆' : 'P'}
                    </div>
                </div>

                <h1 className="title" style={{ fontSize: '2rem' }}>
                    {mode === 'challenge' ? t(lang, 'challenge.result.modeTitle') : t(lang, 'result.title')}
                </h1>
                <p className="subtitle">{message}</p>

                {mode === 'practice' && (
                    <div style={{ margin: '2rem 0', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                        <div>
                            <div style={{ fontSize: '0.9rem', color: '#9ca3af' }}>{t(lang, 'result.correctAnswers')}</div>
                            <div className="counter-text" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
                                {displayScore}<span style={{ fontSize: '1.5rem', color: '#6b7280' }}>/{total}</span>
                            </div>
                        </div>
                        <div>
                            <div style={{ fontSize: '0.9rem', color: '#9ca3af' }}>%</div>
                            <div className="counter-text" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
                                {percentage}%
                            </div>
                        </div>
                    </div>
                )}

                {mode === 'challenge' && (
                    <div style={{ margin: '1.5rem 0', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '12px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#d1d5db' }}>
                            <span>{t(lang, 'challenge.result.stake')}</span>
                            <span>{stake} pts</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#d1d5db' }}>
                            <span>{t(lang, 'result.correctAnswers')}</span>
                            <span>{score}/{total}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.9rem', color: '#fbbf24' }}>
                            <span>{t(lang, 'challenge.result.gross')}</span>
                            <span>{grossReward} pts</span>
                        </div>
                        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '0.75rem', display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', fontWeight: 'bold' }}>
                            <span>{t(lang, 'challenge.result.net')}</span>
                            <span style={{ color: isNetPositive ? '#34d399' : '#f87171' }}>
                                {isNetPositive ? '+' : ''}{netChange} pts
                            </span>
                        </div>
                    </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <button onClick={onPlayAgain} className="btn btn-primary" style={{ padding: '1rem' }}>
                        {mode === 'challenge' ? t(lang, 'challenge.result.retry') : t(lang, 'result.playAgain')}
                    </button>
                    <button onClick={onBackHome} className="btn btn-outline" style={{ padding: '1rem' }}>
                        {t(lang, 'challenge.result.home')}
                    </button>
                </div>
            </div>
        </div>
    );
}
