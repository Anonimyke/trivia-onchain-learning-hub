import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../data/i18n';
import { CHALLENGE_PAYOUTS } from '../config/economy'; // Ensure this path is correct based on structure

interface ChallengeSetupDialogProps {
    currentPoints: number;
    onConfirm: (stake: number) => void;
    onCancel: () => void;
}

export default function ChallengeSetupDialog({ currentPoints, onConfirm, onCancel }: ChallengeSetupDialogProps) {
    const { lang } = useLanguage();
    const [selectedStake, setSelectedStake] = useState<number>(50);

    const stakes = [10, 50, 100];

    const canAfford = currentPoints >= selectedStake;

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 1000
        }}>
            <div className="card" style={{ maxWidth: '400px', width: '90%', animation: 'float 0.3s ease-out' }}>
                <h2 style={{ color: '#facc15', marginBottom: '1rem' }}>{t(lang, 'challenge.setup.title')}</h2>

                <p style={{ fontSize: '0.9rem', color: '#d1d5db', marginBottom: '1rem', lineHeight: '1.4' }}>
                    {t(lang, 'challenge.setup.subtitle')}
                </p>

                <div style={{ marginBottom: '1rem', background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '8px' }}>
                    <span style={{ color: '#9ca3af', fontSize: '0.8rem' }}>{t(lang, 'challenge.setup.current')} </span>
                    <span style={{ fontWeight: 'bold', color: '#fff' }}>💎 {currentPoints}</span>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#9ca3af', marginBottom: '0.5rem' }}>
                        {t(lang, 'challenge.setup.select')}
                    </label>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        {stakes.map(stake => (
                            <button
                                key={stake}
                                onClick={() => setSelectedStake(stake)}
                                className={`btn ${selectedStake === stake ? 'btn-active-stake' : 'btn-outline'}`}
                                style={{
                                    flex: 1,
                                    border: selectedStake === stake ? '2px solid #facc15' : '1px solid #4b5563',
                                    backgroundColor: selectedStake === stake ? 'rgba(250, 204, 21, 0.1)' : 'transparent',
                                    color: selectedStake === stake ? '#facc15' : '#9ca3af'
                                }}
                            >
                                {stake}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Payout Table visualization could go here, for now stripped to core as requested by UI prompt style */}
                <div style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '1.5rem', textAlign: 'center' }}>
                    5/5 Correct = 1.5x Multiplier
                </div>

                {!canAfford && (
                    <div style={{ color: '#ef4444', fontSize: '0.8rem', marginBottom: '1rem', textAlign: 'center' }}>
                        {t(lang, 'challenge.setup.notEnough')}
                    </div>
                )}

                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button onClick={onCancel} className="btn btn-outline" style={{ flex: 1 }}>
                        Cancel
                    </button>
                    <button
                        onClick={() => onConfirm(selectedStake)}
                        className="btn btn-primary"
                        style={{ flex: 1, opacity: canAfford ? 1 : 0.5, cursor: canAfford ? 'pointer' : 'not-allowed' }}
                        disabled={!canAfford}
                    >
                        {t(lang, 'challenge.setup.start')}
                    </button>
                </div>

            </div>
        </div>
    );
}
