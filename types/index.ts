export type Theme = 'cultura' | 'crypto' | 'deportes';
export type Difficulty = 'easy' | 'medium' | 'hard';
export type Lang = 'es' | 'en';

export interface Question {
    id: string;
    question: {
        es: string;
        en: string;
    };
    options: {
        es: string[];
        en: string[];
    };
    correctIndex: number;
}

export type QuestionBank = Record<Theme, Record<Difficulty, Question[]>>;

export interface UserStats {
    dailyStreak: number;
    lastClaimDate: string | null;
    points: number;
}

export interface GameState {
    status: 'idle' | 'playing' | 'result';
    selectedTheme: Theme | null;
    currentQuestionIndex: number;
    score: number;
    inGameStreak: number;
    questions: Question[];
}
