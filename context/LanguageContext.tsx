"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Lang } from '../types/i18n';

interface LanguageContextType {
    lang: Lang;
    setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLangState] = useState<Lang>('es');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // 1. Try to get specific preference
        const saved = localStorage.getItem('preferredLanguage');
        if (saved === 'es' || saved === 'en') {
            setLangState(saved);
        } else {
            // 2. Fallback to browser lang
            const browserLang = navigator.language;
            if (browserLang.toLowerCase().startsWith('es')) {
                setLangState('es');
            } else {
                setLangState('en');
            }
        }
        setLoaded(true);
    }, []);

    const setLang = (newLang: Lang) => {
        setLangState(newLang);
        localStorage.setItem('preferredLanguage', newLang);
    };

    // We must render the Provider even if not loaded, otherwise useLanguage throws error in children
    // if (!loaded) return <>{children}</>;

    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
