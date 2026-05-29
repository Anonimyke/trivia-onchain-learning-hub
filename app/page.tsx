"use client";

import React, { useState, useEffect } from 'react';
import HomeScreen from '../components/HomeScreen';
import GameScreen from '../components/GameScreen';
import ResultScreen from '../components/ResultScreen';
import { UserStats, Theme } from '../types';
import { CHALLENGE_PAYOUTS } from '../config/economy';

export type GameMode = "practice" | "challenge";

export default function Page() {
    const [view, setView] = useState<'home' | 'game' | 'result'>('home');
    const [userStats, setUserStats] = useState<UserStats>({ dailyStreak: 0, lastClaimDate: null, points: 0 });
    const [statsLoaded, setStatsLoaded] = useState(false);
    const [currentTheme, setCurrentTheme] = useState<Theme>('cultura');

    // Game Session State
    const [gameMode, setGameMode] = useState<GameMode>('practice');
    const [gameStake, setGameStake] = useState<number>(0);

    const [lastGameResult, setLastGameResult] = useState<{
        score: number;
        total: number;
        mode: GameMode;
        stake?: number;
        grossReward?: number;
        netChange?: number;
    } | null>(null);

    // Load stats from local storage
    useEffect(() => {
        const saved = localStorage.getItem('trivia_user_stats');
        if (saved) {
            setUserStats(JSON.parse(saved));
        }
        setStatsLoaded(true);
    }, []);

    // Save stats whenever they change
    useEffect(() => {
        if (statsLoaded) {
            localStorage.setItem('trivia_user_stats', JSON.stringify(userStats));
        }
    }, [userStats, statsLoaded]);

    const checkRewardAvailable = () => {
        if (!userStats.lastClaimDate) return true;
        const last = new Date(userStats.lastClaimDate);
        const now = new Date();
        return last.toDateString() !== now.toDateString();
    };

    const handleClaimReward = () => {
        if (!checkRewardAvailable()) return;

        const now = new Date();
        const last = userStats.lastClaimDate ? new Date(userStats.lastClaimDate) : null;
        let newStreak = userStats.dailyStreak;

        if (last) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);

            if (last.toDateString() === yesterday.toDateString()) {
                newStreak += 1;
            } else if (last.toDateString() !== now.toDateString()) {
                newStreak = 1;
            }
        } else {
            newStreak = 1;
        }

        const reward = newStreak * 5;

        setUserStats(prev => ({
            ...prev,
            dailyStreak: newStreak,
            lastClaimDate: new Date().toISOString(),
            points: prev.points + reward
        }));

        alert(`¡Recompensa reclamada! +${reward} puntos`);
    };

    const startGame = (theme: Theme) => {
        setCurrentTheme(theme);
        setGameMode('practice');
        setGameStake(0);
        setView('game');
    };

    const startChallenge = (theme: Theme, stake: number) => {
        setCurrentTheme(theme);
        setGameMode('challenge');
        setGameStake(stake);
        setView('game');
    };

    const finishGame = (score: number, total: number) => {
        if (gameMode === 'practice') {
            // Only add points for correct answers in practice (e.g. 1 point per Q? Optional/Existing behavior)
            // Existing app didn't specify points per question in practice, but usually users like gaining something.
            // Let's assume standard behavior is unchanged: no points for practice unless specified.
            // Re-reading original prompt: "Practice Mode... Points system...". 
            // In the previous code, there was no point addition logic on finishGame. 
            // Streak logic was internal to GameScreen but points global update was seemingly missing or simple.
            // I will implement a small reward for practice to keep it consistent if needed, 
            // BUT strict instructions say "Practice should keep working exactly as before". 
            // The previous 'finishGame' just set view to 'result'. So I won't add points here for practice.

            setLastGameResult({ score, total, mode: 'practice' });
        } else {
            // Challenge Mode Logic
            const multiplier = CHALLENGE_PAYOUTS[score as 0 | 1 | 2 | 3 | 4 | 5] ?? 0;
            const grossReward = Math.round(gameStake * multiplier);
            const netChange = grossReward - gameStake;

            const newPoints = Math.max(0, userStats.points + netChange);

            setUserStats(prev => ({
                ...prev,
                points: newPoints
            }));

            setLastGameResult({
                score,
                total,
                mode: 'challenge',
                stake: gameStake,
                grossReward,
                netChange
            });
        }

        setView('result');
    };

    const handlePlayAgain = () => {
        // If Challenge, check if user can afford same stake
        if (lastGameResult?.mode === 'challenge') {
            const stake = lastGameResult.stake || 0;
            if (userStats.points >= stake) {
                // Restart Challenge
                startChallenge(currentTheme, stake);
            } else {
                // Not enough points
                alert("No tienes suficientes puntos para reintentar con la misma apuesta.");
                setView('home');
            }
        } else {
            // Practice
            startGame(currentTheme);
        }
    };

    if (!statsLoaded) return null;

    return (
        <main>
            {view === 'home' && (
                <HomeScreen
                    userStats={userStats}
                    onStartGame={startGame}
                    onStartChallenge={startChallenge}
                    onClaimReward={handleClaimReward}
                    rewardAvailable={checkRewardAvailable()}
                />
            )}
            {view === 'game' && (
                <GameScreen
                    theme={currentTheme}
                    mode={gameMode}
                    stake={gameStake}
                    onFinish={finishGame}
                />
            )}
            {view === 'result' && lastGameResult && (
                <ResultScreen
                    score={lastGameResult.score}
                    total={lastGameResult.total}
                    mode={lastGameResult.mode}
                    stake={lastGameResult.stake}
                    grossReward={lastGameResult.grossReward}
                    netChange={lastGameResult.netChange}
                    onPlayAgain={handlePlayAgain}
                    onBackHome={() => setView('home')}
                />
            )}
        </main>
    );
}
