import { Lang } from '../types';

export type FeedbackCategory = 'good' | 'medium' | 'bad' | 'rare';

export const FEEDBACK_MESSAGES: Record<Lang, Record<FeedbackCategory, string[]>> = {
    es: {
        good: [
            "🔥 Modo experto activado.",
            "⚡ Estás volando.",
            "🚀 Respuesta perfecta tras respuesta perfecta.",
            "🏆 Nivel leyenda.",
            "🔥 Ritmo imparable.",
            "🌟 Dominando la trivia.",
            "⚔️ Precisión total.",
            "😎 ¿Quién te para ahora?"
        ],
        medium: [
            "👌 Bien hecho, sigue así.",
            "👍 Buen ritmo.",
            "💪 Vas por buen camino.",
            "🎯 Respuesta sólida.",
            "✨ Nada mal.",
            "🤝 Mantén el enfoque."
        ],
        bad: [
            "😅 Esta no salió bien.",
            "🙃 No pasa nada, la siguiente será mejor.",
            "💀 Respuesta incorrecta.",
            "🫠 Se nos escapó esa.",
            "🤔 Tómate un segundo para la próxima."
        ],
        rare: [
            "👑 Jugada digna de leyenda.",
            "🧠 Inteligencia al máximo.",
            "🪙 Bonus especial desbloqueado (próximamente)."
        ]
    },
    en: {
        good: [
            "🔥 Expert mode activated.",
            "⚡ You’re on fire.",
            "🚀 Perfect answer after perfect answer.",
            "🏆 Legend level.",
            "🔥 Unstoppable pace.",
            "🌟 You’re owning this quiz.",
            "⚔️ Total precision.",
            "😎 Who can stop you now?"
        ],
        medium: [
            "👌 Nice one, keep going.",
            "👍 Good pace.",
            "💪 You’re on the right track.",
            "🎯 Solid answer.",
            "✨ Not bad at all.",
            "🤝 Stay focused."
        ],
        bad: [
            "😅 That one didn’t go well.",
            "🙃 No worries, next one will be better.",
            "💀 Wrong answer.",
            "🫠 That one slipped away.",
            "🤔 Take a second to think next time."
        ],
        rare: [
            "👑 Legendary move.",
            "🧠 Brainpower at max level.",
            "🪙 Special bonus unlocked (coming soon)."
        ]
    }
};
