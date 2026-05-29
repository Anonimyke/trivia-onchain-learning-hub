"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSelector() {
    const { lang, setLang } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Close when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    const handleSelect = (l: 'es' | 'en') => {
        setLang(l);
        setIsOpen(false);
    };

    return (
        <div className="language-selector-wrapper" ref={wrapperRef}>
            <button
                className={`lang-globe-btn ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Select Language"
            >
                {/* Globe Icon - 1.9rem size from CSS */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="globe-icon">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
            </button>

            {isOpen && (
                <div className="lang-dropdown">
                    <button
                        className={`lang-option ${lang === 'es' ? 'selected' : ''}`}
                        onClick={() => handleSelect('es')}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span>🇪🇸</span> Español
                        </div>
                    </button>
                    <button
                        className={`lang-option ${lang === 'en' ? 'selected' : ''}`}
                        onClick={() => handleSelect('en')}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span>🇺🇸</span> English
                        </div>
                    </button>
                </div>
            )}
        </div>
    );
}
