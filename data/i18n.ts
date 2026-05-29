import type { Lang } from '../types/i18n';

export type TranslationKeys =
    | "app.title"
    | "app.subtitle"
    | "home.streak"
    | "home.points"
    | "home.chooseTheme"
    | "home.playPractice"
    | "home.challengeMode"
    | "home.challengeMode.soon"
    | "home.competitiveMode"
    | "home.competitiveMode.soon"
    | "game.questionLabel"
    | "game.correctLabel"
    | "result.title"
    | "result.subtitle"
    | "result.playAgain"
    | "result.correctAnswers"
    | "result.pointsEarned"
    | "result.performance.low"
    | "result.performance.medium"
    | "result.performance.high"
    | "challenge.setup.title"
    | "challenge.setup.subtitle"
    | "challenge.setup.current"
    | "challenge.setup.select"
    | "challenge.setup.start"
    | "challenge.setup.notEnough"
    | "challenge.result.modeTitle"
    | "challenge.result.stake"
    | "challenge.result.gross"
    | "challenge.result.net"
    | "challenge.result.retry"
    | "challenge.result.home";

export const TRANSLATIONS: Record<Lang, Record<TranslationKeys, string>> = {
    es: {
        "app.title": "Trivia & Onchain Learning Hub",
        "app.subtitle": "Aprende, juega y gana (pronto en Base)",
        "home.streak": "Racha",
        "home.points": "Puntos",
        "home.chooseTheme": "Elige tu tema:",
        "home.playPractice": "Jugar modo práctica (gratis)",
        "home.challengeMode": "Modo desafío (Beta)",
        "home.challengeMode.soon": "Próximamente",
        "home.competitiveMode": "Competitivo 1v1 (USDC)",
        "home.competitiveMode.soon": "Próximamente",
        "game.questionLabel": "Pregunta",
        "game.correctLabel": "Aciertos",
        "result.title": "Resumen",
        "result.subtitle": "Partida finalizada",
        "result.playAgain": "Volver a jugar",
        "result.correctAnswers": "Aciertos",
        "result.pointsEarned": "Puntos obtenidos",
        "result.performance.low": "Sigue practicando.",
        "result.performance.medium": "Buen trabajo, vas mejorando.",
        "result.performance.high": "¡Impecable! Rendimiento excelente.",
        "challenge.setup.title": "Modo Desafío (Beta)",
        "challenge.setup.subtitle": "Elige cuántos puntos quieres apostar. Juegas 5 preguntas. Tu premio depende de cuántas aciertas.",
        "challenge.setup.current": "Tus puntos:",
        "challenge.setup.select": "Selecciona apuesta:",
        "challenge.setup.start": "Comenzar desafío",
        "challenge.setup.notEnough": "No tienes puntos suficientes para esta apuesta.",
        "challenge.result.modeTitle": "Modo Desafío – Resultado",
        "challenge.result.stake": "Apuesta:",
        "challenge.result.gross": "Recompensa bruta:",
        "challenge.result.net": "Resultado neto:",
        "challenge.result.retry": "Reintentar desafío con la misma apuesta",
        "challenge.result.home": "Volver al inicio",
    },
    en: {
        "app.title": "Trivia & Onchain Learning Hub",
        "app.subtitle": "Learn, play and win (coming soon on Base)",
        "home.streak": "Streak",
        "home.points": "Points",
        "home.chooseTheme": "Choose your topic:",
        "home.playPractice": "Play practice mode (free)",
        "home.challengeMode": "Challenge mode (Beta)",
        "home.challengeMode.soon": "Coming soon",
        "home.competitiveMode": "Competitive 1v1 (USDC)",
        "home.competitiveMode.soon": "Coming soon",
        "game.questionLabel": "Question",
        "game.correctLabel": "Correct",
        "result.title": "Summary",
        "result.subtitle": "Game finished",
        "result.playAgain": "Play again",
        "result.correctAnswers": "Correct answers",
        "result.pointsEarned": "Points earned",
        "result.performance.low": "Keep practicing.",
        "result.performance.medium": "Nice work, you’re improving.",
        "result.performance.high": "Outstanding performance!",
        "challenge.setup.title": "Challenge Mode (Beta)",
        "challenge.setup.subtitle": "Choose how many points to stake. Play 5 questions. Your prize depends on how many you get right.",
        "challenge.setup.current": "Your points:",
        "challenge.setup.select": "Select stake:",
        "challenge.setup.start": "Start Challenge",
        "challenge.setup.notEnough": "You don't have enough points for this stake.",
        "challenge.result.modeTitle": "Challenge Mode – Result",
        "challenge.result.stake": "Stake:",
        "challenge.result.gross": "Gross reward:",
        "challenge.result.net": "Net result:",
        "challenge.result.retry": "Retry (same stake)",
        "challenge.result.home": "Back to Home",
    },
};

export function t(lang: Lang, key: TranslationKeys): string {
    return TRANSLATIONS[lang][key];
}
