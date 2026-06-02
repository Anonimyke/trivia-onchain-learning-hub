import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import LanguageSelector from '@/components/LanguageSelector';

export const metadata: Metadata = {
    title: 'Trivia & Onchain Learning Hub',
    description: 'A casual trivia app for learning and earning.',
    other: {
        "fc:frame": JSON.stringify({
            version: "next",
            imageUrl: "https://trivia-onchain-learning-hub.vercel.app/icon.png",
            button: {
                title: "Play Trivia",
                action: {
                    type: "launch_frame",
                    name: "Trivia & Onchain Learning Hub",
                    url: "https://trivia-onchain-learning-hub.vercel.app",
                    splashImageUrl: "https://trivia-onchain-learning-hub.vercel.app/icon.png",
                    splashBackgroundColor: "#ffffff"
                }
            }
        })
    }
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
