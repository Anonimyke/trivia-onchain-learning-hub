import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import LanguageSelector from '@/components/LanguageSelector';

export const metadata: Metadata = {
    title: 'Trivia & Onchain Learning Hub',
    description: 'A casual trivia app for learning and earning.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <LanguageProvider>
                    <div className="main-layout-wrapper">
                        <LanguageSelector />
                        {children}
                    </div>
                </LanguageProvider>
            </body>
        </html>
    );
}
