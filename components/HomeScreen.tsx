import React, { useState } from 'react';
import { Theme, UserStats } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../data/i18n';

import ChallengeSetupDialog from './ChallengeSetupDialog';

interface HomeScreenProps {
    userStats: UserStats;
    onStartGame: (theme: Theme) => void;
    onStartChallenge: (theme: Theme, stake: number) => void;
    onClaimReward: () => void;
    rewardAvailable: boolean;
}

export default function HomeScreen({ userStats, onStartGame, onStartChallenge, onClaimReward, rewardAvailable }: HomeScreenProps) {
    const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);
    const [showChallengeSetup, setShowChallengeSetup] = useState(false);
    const { lang } = useLanguage();

    const handlePlayPractice = () => {
        if (!selectedTheme) {
            alert(lang === 'es' ? 'Por favor selecciona una temática' : 'Please select a topic');
            return;
        }
        onStartGame(selectedTheme);
    };

    const showComingSoon = (feature: string) => {
        const msg = lang === 'es'
            ? `${feature} - ¡Próximamente!\n\nEstamos construyendo el modelo onchain en Base con premios reales.`
            : `${feature} - Coming Soon!\n\nWe are building the onchain model on Base with real rewards.`;
        alert(msg);
    };

    const handleChallengeClick = () => {
        if (!selectedTheme) {
            alert(lang === 'es' ? 'Por favor selecciona una temática' : 'Please select a topic');
            return;
        }
        setShowChallengeSetup(true);
    };

    return (
        <div className="container" style={{ position: 'relative' }}>

            {showChallengeSetup && (
                <ChallengeSetupDialog
                    currentPoints={userStats.points}
                    onConfirm={(stake) => {
                        setShowChallengeSetup(false);
                        onStartChallenge(selectedTheme!, stake);
                    }}
                    onCancel={() => setShowChallengeSetup(false)}
                />
            )}

            {/* Note: Language Selector is now global in layout.tsx */}

            <div className="card">
                <h1 className="title">{t(lang, 'app.title')}</h1>
                <p className="subtitle">{t(lang, 'app.subtitle')}</p>

                <div className="stat-box">
                    <div>
                        <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{t(lang, 'home.streak')}</div>
                        <div style={{ fontWeight: 'bold' }}>🔥 {userStats.dailyStreak}</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{t(lang, 'home.points')}</div>
                        <div style={{ fontWeight: 'bold' }}>💎 {userStats.points}</div>
                    </div>
                </div>

                {rewardAvailable && (
                    <button onClick={onClaimReward} className="btn btn-success">
                        🎁 {lang === 'es' ? 'Reclamar recompensa diaria' : 'Claim Daily Reward'}
                    </button>
                )}

                <div style={{ textAlign: 'left', marginBottom: '0.5rem', marginTop: '1.5rem', fontSize: '0.9rem' }}>
                    {t(lang, 'home.chooseTheme')}
                </div>
                <div className="theme-grid">
                    <button
                        className={`theme-btn ${selectedTheme === 'cultura' ? 'active' : ''}`}
                        onClick={() => setSelectedTheme('cultura')}
                    >
                        Cultura
                    </button>
                    <button
                        className={`theme-btn ${selectedTheme === 'crypto' ? 'active' : ''}`}
                        onClick={() => setSelectedTheme('crypto')}
                    >
                        Crypto
                    </button>
                    <button
                        className={`theme-btn ${selectedTheme === 'deportes' ? 'active' : ''}`}
                        onClick={() => setSelectedTheme('deportes')}
                    >
                        Deportes
                    </button>
                </div>

                <button onClick={handlePlayPractice} className="btn btn-primary">
                    {t(lang, 'home.playPractice')}
                </button>

                <button onClick={handleChallengeClick} className="btn btn-outline" style={{ border: '2px solid #facc15', color: '#facc15' }}>
                    {t(lang, 'home.challengeMode')} <span style={{ fontSize: '0.8em', opacity: 0.8 }}>(Beta)</span>
                </button>

                <button onClick={() => showComingSoon(t(lang, 'home.competitiveMode'))} className="btn btn-outline" style={{ opacity: 0.5 }}>
                    {t(lang, 'home.competitiveMode')}
                </button>
            </div>
        </div>
    );
}
