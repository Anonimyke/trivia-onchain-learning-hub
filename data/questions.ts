import { Lang } from '../types/i18n';

export type Category = 'cultura' | 'crypto' | 'deportes';
export type Difficulty = 'easy' | 'medium' | 'hard';

export interface RawQuestion {
    id: string;
    category: Category;
    difficulty: Difficulty;
    question: Record<Lang, string>;
    options: Record<Lang, string[]>;
    correctIndex: number;
}

export const QUESTION_BANK: RawQuestion[] = [
    // ==========================================
    // CATEGORY: CULTURA (Culture)
    // ==========================================

    // --- EASY (20) ---
    { id: 'c_e_1', category: 'cultura', difficulty: 'easy', question: { es: '¿En qué país se encuentra la Torre Eiffel?', en: 'In which country is the Eiffel Tower located?' }, options: { es: ['Italia', 'España', 'Francia', 'Alemania'], en: ['Italy', 'Spain', 'France', 'Germany'] }, correctIndex: 2 },
    { id: 'c_e_2', category: 'cultura', difficulty: 'easy', question: { es: '¿Quién pintó la Mona Lisa?', en: 'Who painted the Mona Lisa?' }, options: { es: ['Van Gogh', 'Picasso', 'Da Vinci', 'Rembrandt'], en: ['Van Gogh', 'Picasso', 'Da Vinci', 'Rembrandt'] }, correctIndex: 2 },
    { id: 'c_e_3', category: 'cultura', difficulty: 'easy', question: { es: '¿Cuál es el océano más grande del mundo?', en: 'What is the largest ocean in the world?' }, options: { es: ['Atlántico', 'Índico', 'Ártico', 'Pacífico'], en: ['Atlantic', 'Indian', 'Arctic', 'Pacific'] }, correctIndex: 3 },
    { id: 'c_e_4', category: 'cultura', difficulty: 'easy', question: { es: '¿Cuál es el planeta rojo?', en: 'Which is the Red Planet?' }, options: { es: ['Venus', 'Marte', 'Júpiter', 'Saturno'], en: ['Venus', 'Mars', 'Jupiter', 'Saturn'] }, correctIndex: 1 },
    { id: 'c_e_5', category: 'cultura', difficulty: 'easy', question: { es: '¿En qué continente está Egipto?', en: 'In which continent is Egypt?' }, options: { es: ['Asia', 'África', 'Europa', 'América'], en: ['Asia', 'Africa', 'Europe', 'America'] }, correctIndex: 1 },
    { id: 'c_e_6', category: 'cultura', difficulty: 'easy', question: { es: '¿Cuál es el idioma más hablado del mundo?', en: 'What is the most spoken language in the world?' }, options: { es: ['Inglés', 'Mandarín', 'Español', 'Hindi'], en: ['English', 'Mandarin', 'Spanish', 'Hindi'] }, correctIndex: 0 },
    { id: 'c_e_7', category: 'cultura', difficulty: 'easy', question: { es: '¿Cuál es la capital de Italia?', en: 'What is the capital of Italy?' }, options: { es: ['Venecia', 'Milán', 'Roma', 'Nápoles'], en: ['Venice', 'Milan', 'Rome', 'Naples'] }, correctIndex: 2 },
    { id: 'c_e_8', category: 'cultura', difficulty: 'easy', question: { es: '¿Cuántos continentes hay (modelo común)?', en: 'How many continents are there (common model)?' }, options: { es: ['5', '6', '7', '8'], en: ['5', '6', '7', '8'] }, correctIndex: 2 },
    { id: 'c_e_9', category: 'cultura', difficulty: 'easy', question: { es: '¿Quién escribió Romeo y Julieta?', en: 'Who wrote Romeo and Juliet?' }, options: { es: ['Cervantes', 'Shakespeare', 'Dante', 'Goethe'], en: ['Cervantes', 'Shakespeare', 'Dante', 'Goethe'] }, correctIndex: 1 },
    { id: 'c_e_10', category: 'cultura', difficulty: 'easy', question: { es: '¿Qué animal es el rey de la selva?', en: 'Which animal is the king of the jungle?' }, options: { es: ['Tigre', 'León', 'Elefante', 'Gorila'], en: ['Tiger', 'Lion', 'Elephant', 'Gorilla'] }, correctIndex: 1 },
    { id: 'c_e_11', category: 'cultura', difficulty: 'easy', question: { es: '¿Cuál es el país más grande del mundo?', en: 'What is the largest country in the world?' }, options: { es: ['China', 'EE.UU.', 'Rusia', 'Canadá'], en: ['China', 'USA', 'Russia', 'Canada'] }, correctIndex: 2 },
    { id: 'c_e_12', category: 'cultura', difficulty: 'easy', question: { es: '¿En qué ciudad está la Estatua de la Libertad?', en: 'In which city is the Statue of Liberty?' }, options: { es: ['Washington D.C.', 'Nueva York', 'Los Ángeles', 'Chicago'], en: ['Washington D.C.', 'New York', 'Los Angeles', 'Chicago'] }, correctIndex: 1 },
    { id: 'c_e_13', category: 'cultura', difficulty: 'easy', question: { es: '¿Cuál es la moneda de Japón?', en: 'What is the currency of Japan?' }, options: { es: ['Yuan', 'Won', 'Yen', 'Dólar'], en: ['Yuan', 'Won', 'Yen', 'Dollar'] }, correctIndex: 2 },
    { id: 'c_e_14', category: 'cultura', difficulty: 'easy', question: { es: '¿Qué instrumento tiene teclas blancas y negras?', en: 'Which instrument has black and white keys?' }, options: { es: ['Guitarra', 'Violín', 'Piano', 'Flauta'], en: ['Guitar', 'Violin', 'Piano', 'Flute'] }, correctIndex: 2 },
    { id: 'c_e_15', category: 'cultura', difficulty: 'easy', question: { es: '¿En qué país se originó el Sushi?', en: 'In which country did Sushi originate?' }, options: { es: ['China', 'Japón', 'Corea', 'Tailandia'], en: ['China', 'Japan', 'Korea', 'Thailand'] }, correctIndex: 1 },
    { id: 'c_e_16', category: 'cultura', difficulty: 'easy', question: { es: '¿Cuál es el color de la paz?', en: 'What is the color of peace?' }, options: { es: ['Rojo', 'Azul', 'Blanco', 'Verde'], en: ['Red', 'Blue', 'White', 'Green'] }, correctIndex: 2 },
    { id: 'c_e_17', category: 'cultura', difficulty: 'easy', question: { es: '¿Quién fue el primer hombre en la luna?', en: 'Who was the first man on the moon?' }, options: { es: ['Yuri Gagarin', 'Neil Armstrong', 'Buzz Aldrin', 'Michael Collins'], en: ['Yuri Gagarin', 'Neil Armstrong', 'Buzz Aldrin', 'Michael Collins'] }, correctIndex: 1 },
    { id: 'c_e_18', category: 'cultura', difficulty: 'easy', question: { es: '¿Cuántas horas tiene un día?', en: 'How many hours are in a day?' }, options: { es: ['12', '20', '24', '48'], en: ['12', '20', '24', '48'] }, correctIndex: 2 },
    { id: 'c_e_19', category: 'cultura', difficulty: 'easy', question: { es: '¿Qué fruto dan los olivos?', en: 'What fruit do olive trees produce?' }, options: { es: ['Cerezas', 'Aceitunas', 'Uvas', 'Higos'], en: ['Cherries', 'Olives', 'Grapes', 'Figs'] }, correctIndex: 1 },
    { id: 'c_e_20', category: 'cultura', difficulty: 'easy', question: { es: '¿Cuál es el metal más caro tradicionalmente?', en: 'What is traditionally the most expensive metal?' }, options: { es: ['Plata', 'Bronce', 'Oro', 'Hierro'], en: ['Silver', 'Bronze', 'Gold', 'Iron'] }, correctIndex: 2 },

    // --- MEDIUM (15) ---
    { id: 'c_m_1', category: 'cultura', difficulty: 'medium', question: { es: '¿Quién escribió "Cien años de soledad"?', en: 'Who wrote "One Hundred Years of Solitude"?' }, options: { es: ['Borges', 'Cortázar', 'García Márquez', 'Vargas Llosa'], en: ['Borges', 'Cortázar', 'García Márquez', 'Vargas Llosa'] }, correctIndex: 2 },
    { id: 'c_m_2', category: 'cultura', difficulty: 'medium', question: { es: '¿Cuál es el nombre químico del agua?', en: 'What is the chemical name for water?' }, options: { es: ['H2O', 'CO2', 'O2', 'NaCl'], en: ['H2O', 'CO2', 'O2', 'NaCl'] }, correctIndex: 0 },
    { id: 'c_m_3', category: 'cultura', difficulty: 'medium', question: { es: '¿En qué año comenzó la Segunda Guerra Mundial?', en: 'In what year did World War II begin?' }, options: { es: ['1914', '1939', '1945', '1950'], en: ['1914', '1939', '1945', '1950'] }, correctIndex: 1 },
    { id: 'c_m_4', category: 'cultura', difficulty: 'medium', question: { es: '¿Cuál es la capital de Australia?', en: 'What is the capital of Australia?' }, options: { es: ['Sídney', 'Melbourne', 'Canberra', 'Brisbane'], en: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'] }, correctIndex: 2 },
    { id: 'c_m_5', category: 'cultura', difficulty: 'medium', question: { es: '¿Qué pintor es famoso por cortarse la oreja?', en: 'Which painter is famous for cutting off his ear?' }, options: { es: ['Monet', 'Van Gogh', 'Dalí', 'Matisse'], en: ['Monet', 'Van Gogh', 'Dalí', 'Matisse'] }, correctIndex: 1 },
    { id: 'c_m_6', category: 'cultura', difficulty: 'medium', question: { es: '¿Cuál es el río más largo del mundo?', en: 'What is the longest river in the world?' }, options: { es: ['Nilo', 'Amazonas', 'Yangtsé', 'Misisipi'], en: ['Nile', 'Amazon', 'Yangtze', 'Mississippi'] }, correctIndex: 1 },
    { id: 'c_m_7', category: 'cultura', difficulty: 'medium', question: { es: '¿En qué país se usó la primera bomba atómica?', en: 'In which country was the first atomic bomb used?' }, options: { es: ['Alemania', 'Japón', 'Rusia', 'Vietnam'], en: ['Germany', 'Japan', 'Russia', 'Vietnam'] }, correctIndex: 1 },
    { id: 'c_m_8', category: 'cultura', difficulty: 'medium', question: { es: '¿Quién inventó la bombilla eléctrica?', en: 'Who invented the light bulb?' }, options: { es: ['Tesla', 'Edison', 'Bell', 'Franklin'], en: ['Tesla', 'Edison', 'Bell', 'Franklin'] }, correctIndex: 1 },
    { id: 'c_m_9', category: 'cultura', difficulty: 'medium', question: { es: '¿Qué gas respiramos para vivir?', en: 'What gas do we breathe to live?' }, options: { es: ['Hidrógeno', 'Helio', 'Oxígeno', 'Carbono'], en: ['Hydrogen', 'Helium', 'Oxygen', 'Carbon'] }, correctIndex: 2 },
    { id: 'c_m_10', category: 'cultura', difficulty: 'medium', question: { es: '¿Cuál es la montaña más alta del mundo?', en: 'What is the highest mountain in the world?' }, options: { es: ['K2', 'Everest', 'Makalu', 'Lhotse'], en: ['K2', 'Everest', 'Makalu', 'Lhotse'] }, correctIndex: 1 },
    { id: 'c_m_11', category: 'cultura', difficulty: 'medium', question: { es: '¿Qué civilización construyó Machu Picchu?', en: 'Which civilization built Machu Picchu?' }, options: { es: ['Azteca', 'Maya', 'Inca', 'Olmeca'], en: ['Aztec', 'Maya', 'Inca', 'Olmec'] }, correctIndex: 2 },
    { id: 'c_m_12', category: 'cultura', difficulty: 'medium', question: { es: '¿Cuál es el hueso más largo del cuerpo humano?', en: 'What is the longest bone in the human body?' }, options: { es: ['Tibia', 'Fémur', 'Húmero', 'Radio'], en: ['Tibia', 'Femur', 'Humerus', 'Radius'] }, correctIndex: 1 },
    { id: 'c_m_13', category: 'cultura', difficulty: 'medium', question: { es: '¿En qué continente está el desierto del Sahara?', en: 'On which continent is the Sahara Desert?' }, options: { es: ['Asia', 'Australia', 'África', 'América'], en: ['Asia', 'Australia', 'Africa', 'America'] }, correctIndex: 2 },
    { id: 'c_m_14', category: 'cultura', difficulty: 'medium', question: { es: '¿Quién dirigió la película "El Padrino"?', en: 'Who directed "The Godfather"?' }, options: { es: ['Scorsese', 'Spielberg', 'Coppola', 'Kubrick'], en: ['Scorsese', 'Spielberg', 'Coppola', 'Kubrick'] }, correctIndex: 2 },
    { id: 'c_m_15', category: 'cultura', difficulty: 'medium', question: { es: '¿Cuántos elementos hay en la tabla periódica (aprox)?', en: 'How many elements are in the periodic table (approx)?' }, options: { es: ['80', '100', '118', '150'], en: ['80', '100', '118', '150'] }, correctIndex: 2 },

    // --- HARD (10) ---
    { id: 'c_h_1', category: 'cultura', difficulty: 'hard', question: { es: '¿Quién descubrió la penicilina?', en: 'Who discovered penicillin?' }, options: { es: ['Marie Curie', 'Louis Pasteur', 'Alexander Fleming', 'Robert Koch'], en: ['Marie Curie', 'Louis Pasteur', 'Alexander Fleming', 'Robert Koch'] }, correctIndex: 2 },
    { id: 'c_h_2', category: 'cultura', difficulty: 'hard', question: { es: '¿En qué año cayó el Muro de Berlín?', en: 'In what year did the Berlin Wall fall?' }, options: { es: ['1987', '1989', '1991', '1993'], en: ['1987', '1989', '1991', '1993'] }, correctIndex: 1 },
    { id: 'c_h_3', category: 'cultura', difficulty: 'hard', question: { es: '¿Quién escribió "La Divina Comedia"?', en: 'Who wrote "The Divine Comedy"?' }, options: { es: ['Homero', 'Virgilio', 'Dante Alighieri', 'Boccaccio'], en: ['Homer', 'Virgil', 'Dante Alighieri', 'Boccaccio'] }, correctIndex: 2 },
    { id: 'c_h_4', category: 'cultura', difficulty: 'hard', question: { es: '¿Cuál es la capital de Canadá?', en: 'What is the capital of Canada?' }, options: { es: ['Toronto', 'Vancouver', 'Montreal', 'Ottawa'], en: ['Toronto', 'Vancouver', 'Montreal', 'Ottawa'] }, correctIndex: 3 },
    { id: 'c_h_5', category: 'cultura', difficulty: 'hard', question: { es: '¿Qué guerra duró de 1950 a 1953?', en: 'Which war lasted from 1950 to 1953?' }, options: { es: ['Guerra de Corea', 'Guerra de Vietnam', 'Guerra del Golfo', 'Guerra Civil Española'], en: ['Korean War', 'Vietnam War', 'Gulf War', 'Spanish Civil War'] }, correctIndex: 0 },
    { id: 'c_h_6', category: 'cultura', difficulty: 'hard', question: { es: '¿Quién postuló la teoría de la relatividad?', en: 'Who proposed the theory of relativity?' }, options: { es: ['Newton', 'Einstein', 'Hawking', 'Galileo'], en: ['Newton', 'Einstein', 'Hawking', 'Galileo'] }, correctIndex: 1 },
    { id: 'c_h_7', category: 'cultura', difficulty: 'hard', question: { es: '¿Cuál es el libro más vendido de la historia (no religioso)?', en: 'What is the best-selling book in history (non-religious)?' }, options: { es: ['Harry Potter', 'El Señor de los Anillos', 'Don Quijote', 'Historia de dos ciudades'], en: ['Harry Potter', 'Lord of the Rings', 'Don Quixote', 'A Tale of Two Cities'] }, correctIndex: 2 },
    { id: 'c_h_8', category: 'cultura', difficulty: 'hard', question: { es: '¿En qué año llegó Colón a América?', en: 'In what year did Columbus arrive in America?' }, options: { es: ['1492', '1498', '1502', '1510'], en: ['1492', '1498', '1502', '1510'] }, correctIndex: 0 },
    { id: 'c_h_9', category: 'cultura', difficulty: 'hard', question: { es: '¿Cuál es el elemento más denso?', en: 'What is the densest element?' }, options: { es: ['Plomo', 'Oro', 'Osmio', 'Mercurio'], en: ['Lead', 'Gold', 'Osmium', 'Mercury'] }, correctIndex: 2 },
    { id: 'c_h_10', category: 'cultura', difficulty: 'hard', question: { es: '¿Quién pintó "El Guernica"?', en: 'Who painted "Guernica"?' }, options: { es: ['Dalí', 'Miró', 'Picasso', 'Velázquez'], en: ['Dalí', 'Miró', 'Picasso', 'Velázquez'] }, correctIndex: 2 },
    { id: 'c_h_11', category: 'cultura', difficulty: 'hard', question: { es: '¿En qué año se fundó Roma (según la leyenda)?', en: 'In which year was Rome founded (legend)?' }, options: { es: ['753 a.C.', '500 a.C.', '1 d.C.', '476 d.C.'], en: ['753 BC', '500 BC', '1 AD', '476 AD'] }, correctIndex: 0 },
    { id: 'c_h_12', category: 'cultura', difficulty: 'hard', question: { es: '¿Cuál es el río más caudaloso del mundo?', en: 'What is the river with the highest discharge?' }, options: { es: ['Nilo', 'Amazonas', 'Yangtsé', 'Misisipi'], en: ['Nile', 'Amazon', 'Yangtze', 'Mississippi'] }, correctIndex: 1 },
    { id: 'c_h_13', category: 'cultura', difficulty: 'hard', question: { es: '¿Quién escribió "Ulises"?', en: 'Who wrote "Ulysses"?' }, options: { es: ['James Joyce', 'Virginia Woolf', 'Hemingway', 'Orwell'], en: ['James Joyce', 'Virginia Woolf', 'Hemingway', 'Orwell'] }, correctIndex: 0 },
    { id: 'c_h_14', category: 'cultura', difficulty: 'hard', question: { es: '¿Cuál es la capital de Turquía?', en: 'What is the capital of Turkey?' }, options: { es: ['Estambul', 'Ankara', 'Esmirna', 'Bursa'], en: ['Istanbul', 'Ankara', 'Izmir', 'Bursa'] }, correctIndex: 1 },
    { id: 'c_h_15', category: 'cultura', difficulty: 'hard', question: { es: '¿Qué filósofo dijo "Pienso, luego existo"?', en: 'Which philosopher said "I think, therefore I am"?' }, options: { es: ['Platón', 'Aristóteles', 'Descartes', 'Sócrates'], en: ['Plato', 'Aristotle', 'Descartes', 'Socrates'] }, correctIndex: 2 },

    // ==========================================
    // CATEGORY: CRYPTO (Cryptocurrency)
    // ==========================================

    // --- EASY (20) ---
    { id: 'cr_e_1', category: 'crypto', difficulty: 'easy', question: { es: '¿Quién creó Bitcoin?', en: 'Who created Bitcoin?' }, options: { es: ['Vitalik Buterin', 'Satoshi Nakamoto', 'Elon Musk', 'Charlie Lee'], en: ['Vitalik Buterin', 'Satoshi Nakamoto', 'Elon Musk', 'Charlie Lee'] }, correctIndex: 1 },
    { id: 'cr_e_2', category: 'crypto', difficulty: 'easy', question: { es: '¿Cuál es el símbolo de Ethereum?', en: 'What is the symbol for Ethereum?' }, options: { es: ['BTC', 'ETH', 'SOL', 'USDC'], en: ['BTC', 'ETH', 'SOL', 'USDC'] }, correctIndex: 1 },
    { id: 'cr_e_3', category: 'crypto', difficulty: 'easy', question: { es: '¿Qué protege tu Wallet?', en: 'What protects your Wallet?' }, options: { es: ['Tu email', 'Tu clave privada / semilla', 'Tu nombre', 'El banco'], en: ['Your email', 'Your private key / seed', 'Your name', 'The bank'] }, correctIndex: 1 },
    { id: 'cr_e_4', category: 'crypto', difficulty: 'easy', question: { es: '¿Qué es Bitcoin?', en: 'What is Bitcoin?' }, options: { es: ['Una empresa', 'Una criptomoneda', 'Un banco', 'Una app'], en: ['A company', 'A cryptocurrency', 'A bank', 'An app'] }, correctIndex: 1 },
    { id: 'cr_e_5', category: 'crypto', difficulty: 'easy', question: { es: '¿Qué animal representa a Dogecoin?', en: 'Which animal represents Dogecoin?' }, options: { es: ['Gato', 'Perro', 'Toro', 'Oso'], en: ['Cat', 'Dog', 'Bull', 'Bear'] }, correctIndex: 1 },
    { id: 'cr_e_6', category: 'crypto', difficulty: 'easy', question: { es: '¿Qué significa "To the Moon"?', en: 'What does "To the Moon" mean?' }, options: { es: ['El precio sube mucho', 'El precio baja', 'La moneda murió', 'Ir al espacio físico'], en: ['Price goes up high', 'Price goes down', 'Coin is dead', 'Going to physical space'] }, correctIndex: 0 },
    { id: 'cr_e_7', category: 'crypto', difficulty: 'easy', question: { es: '¿Qué usas para comprar cripto?', en: 'What do you use to buy crypto?' }, options: { es: ['Un Exchange', 'Una librería', 'Una farmacia', 'Un cine'], en: ['An Exchange', 'A bookstore', 'A pharmacy', 'A cinema'] }, correctIndex: 0 },
    { id: 'cr_e_8', category: 'crypto', difficulty: 'easy', question: { es: '¿Qué es HODL (jerga)?', en: 'What is HODL (slang)?' }, options: { es: ['Vender', 'Mantener', 'Perder', 'Regalar'], en: ['Sell', 'Hold', 'Lose', 'Gift'] }, correctIndex: 1 },
    { id: 'cr_e_9', category: 'crypto', difficulty: 'easy', question: { es: '¿El mercado cripto cierra?', en: 'Does the crypto market close?' }, options: { es: ['Sí, los fines de semana', 'No, es 24/7', 'Sí, por la noche', 'Solo en feriados'], en: ['Yes from weekends', 'No, it is 24/7', 'Yes at night', 'Only on holidays'] }, correctIndex: 1 },
    { id: 'cr_e_10', category: 'crypto', difficulty: 'easy', question: { es: '¿Qué es una "Whale" (Ballena)?', en: 'What is a "Whale"?' }, options: { es: ['Un pez', 'Alguien con mucho cripto', 'Un token pequeño', 'Un error'], en: ['A fish', 'Someone with lots of crypto', 'A small token', 'A bug'] }, correctIndex: 1 },
    { id: 'cr_e_11', category: 'crypto', difficulty: 'easy', question: { es: '¿Cuál es la criptomoneda más valiosa?', en: 'What is the most valuable cryptocurrency?' }, options: { es: ['Ethereum', 'Bitcoin', 'Ripple', 'Litecoin'], en: ['Ethereum', 'Bitcoin', 'Ripple', 'Litecoin'] }, correctIndex: 1 },
    { id: 'cr_e_12', category: 'crypto', difficulty: 'easy', question: { es: '¿Dónde se guardan las criptomonedas?', en: 'Where are cryptocurrencies stored?' }, options: { es: ['En el bolsillo', 'En la Blockchain', 'En tu PC física', 'En el banco'], en: ['In your pocket', 'On the Blockchain', 'On your physical PC', 'In the bank'] }, correctIndex: 1 },
    { id: 'cr_e_13', category: 'crypto', difficulty: 'easy', question: { es: '¿Qué es Coinbase?', en: 'What is Coinbase?' }, options: { es: ['Una moneda', 'Un Exchange', 'Un protocolo', 'Un minero'], en: ['A coin', 'An Exchange', 'A protocol', 'A miner'] }, correctIndex: 1 },
    { id: 'cr_e_14', category: 'crypto', difficulty: 'easy', question: { es: '¿Qué es un "Bull Market"?', en: 'What is a "Bull Market"?' }, options: { es: ['Mercado bajista', 'Mercado alcista', 'Mercado estable', 'Mercado cerrado'], en: ['Bearish market', 'Bullish market', 'Stable market', 'Closed market'] }, correctIndex: 1 },
    { id: 'cr_e_15', category: 'crypto', difficulty: 'easy', question: { es: '¿Qué es un "Bear Market"?', en: 'What is a "Bear Market"?' }, options: { es: ['Mercado bajista', 'Mercado alcista', 'Mercado rápido', 'Mercado lento'], en: ['Bearish market', 'Bullish market', 'Fast market', 'Slow market'] }, correctIndex: 0 },
    { id: 'cr_e_16', category: 'crypto', difficulty: 'easy', question: { es: '¿Qué es USDT?', en: 'What is USDT?' }, options: { es: ['Una memecoin', 'Una Stablecoin', 'Un NFT', 'Una acción'], en: ['A memecoin', 'A Stablecoin', 'An NFT', 'A stock'] }, correctIndex: 1 },
    { id: 'cr_e_17', category: 'crypto', difficulty: 'easy', question: { es: '¿Puedes enviar cripto por email?', en: 'Can you send crypto via email?' }, options: { es: ['Directamente no (protocolo)', 'Sí, como archivo adjunto', 'Sí, siempre', 'Solo Bitcoin'], en: ['Not directly (protocol)', 'Yes, as attachment', 'Yes, always', 'Only Bitcoin'] }, correctIndex: 0 },
    { id: 'cr_e_18', category: 'crypto', difficulty: 'easy', question: { es: '¿Bitcoin tiene dueño?', en: 'Does Bitcoin have an owner?' }, options: { es: ['El gobierno', 'Satoshi', 'Nadie (Descentralizado)', 'El banco'], en: ['The government', 'Satoshi', 'No one (Decentralized)', 'The bank'] }, correctIndex: 2 },
    { id: 'cr_e_19', category: 'crypto', difficulty: 'easy', question: { es: '¿Qué pierdes si olvidas tu "Seed"?', en: 'What do you lose if you forget your "Seed"?' }, options: { es: ['Nada', 'Tu acceso a los fondos', 'Tu contraseña del email', 'Tu identidad'], en: ['Nothing', 'Access to funds', 'Email password', 'Your identity'] }, correctIndex: 1 },
    { id: 'cr_e_20', category: 'crypto', difficulty: 'easy', question: { es: '¿Qué es "Mining"?', en: 'What is "Mining"?' }, options: { es: ['Cavar tierra', 'Validar bloques', 'Robar monedas', 'Comprar barato'], en: ['Digging dirt', 'Validating blocks', 'Stealing coins', 'Buying cheap'] }, correctIndex: 1 },

    // --- MEDIUM (15) ---
    { id: 'cr_m_1', category: 'crypto', difficulty: 'medium', question: { es: '¿Qué es la Blockchain?', en: 'What is the Blockchain?' }, options: { es: ['Un banco central', 'Un libro contable distribuido', 'Una empresa de software', 'Una moneda física'], en: ['A central bank', 'A distributed ledger', 'A software company', 'A physical coin'] }, correctIndex: 1 },
    { id: 'cr_m_2', category: 'crypto', difficulty: 'medium', question: { es: '¿Qué significa DeFi?', en: 'What does DeFi mean?' }, options: { es: ['Define Finance', 'Decentralized Finance', 'Digital Fidelity', 'Direct Funds'], en: ['Define Finance', 'Decentralized Finance', 'Digital Fidelity', 'Direct Funds'] }, correctIndex: 1 },
    { id: 'cr_m_3', category: 'crypto', difficulty: 'medium', question: { es: '¿Qué es "Gas" en Ethereum?', en: 'What is "Gas" in Ethereum?' }, options: { es: ['Combustible líquido', 'Comisión por transacción', 'Un token nuevo', 'Velocidad de internet'], en: ['Liquid fuel', 'Transaction fee', 'A new token', 'Internet speed'] }, correctIndex: 1 },
    { id: 'cr_m_4', category: 'crypto', difficulty: 'medium', question: { es: '¿Qué es un Smart Contract?', en: 'What is a Smart Contract?' }, options: { es: ['Un contrato legal en papel', 'Un código autoejecutable', 'Un acuerdo verbal', 'Un seguro'], en: ['Paper legal contract', 'Self-executing code', 'Verbal agreement', 'Insurance'] }, correctIndex: 1 },
    { id: 'cr_m_5', category: 'crypto', difficulty: 'medium', question: { es: '¿Cuál es el límite de suministro de Bitcoin?', en: 'What is Bitcoin\'s supply limit?' }, options: { es: ['21 Millones', '100 Millones', 'Infinito', '50 Millones'], en: ['21 Million', '100 Million', 'Infinite', '50 Million'] }, correctIndex: 0 },
    { id: 'cr_m_6', category: 'crypto', difficulty: 'medium', question: { es: '¿Qué es un NFT?', en: 'What is an NFT?' }, options: { es: ['Token Fungible', 'Token No Fungible', 'Nota Financiera', 'Nueva Tecnología'], en: ['Fungible Token', 'Non-Fungible Token', 'Financial Note', 'New Tech'] }, correctIndex: 1 },
    { id: 'cr_m_7', category: 'crypto', difficulty: 'medium', question: { es: '¿Qué red usa el token SOL?', en: 'Which network does the SOL token use?' }, options: { es: ['Ethereum', 'Bitcoin', 'Solana', 'Cardano'], en: ['Ethereum', 'Bitcoin', 'Solana', 'Cardano'] }, correctIndex: 2 },
    { id: 'cr_m_8', category: 'crypto', difficulty: 'medium', question: { es: '¿Qué es un "Airdrop"?', en: 'What is an "Airdrop"?' }, options: { es: ['Caída de precio', 'Regalo/Distribución de tokens', 'Hackeo', 'Venta privada'], en: ['Price drop', 'Token gift/distribution', 'Hack', 'Private sale'] }, correctIndex: 1 },
    { id: 'cr_m_9', category: 'crypto', difficulty: 'medium', question: { es: '¿Qué es MetaMask?', en: 'What is MetaMask?' }, options: { es: ['Un Exchange', 'Una Wallet de navegador', 'Una criptomoneda', 'Un minero'], en: ['An Exchange', 'A browser Wallet', 'A cryptocurrency', 'A miner'] }, correctIndex: 1 },
    { id: 'cr_m_10', category: 'crypto', difficulty: 'medium', question: { es: '¿Qué es "Staking"?', en: 'What is "Staking"?' }, options: { es: ['Vender rápido', 'Bloquear fondos para ganar recompensas', 'Comprar NFTs', 'Minar con tarjeta gráfica'], en: ['Sell fast', 'Lock funds to earn rewards', 'Buy NFTs', 'GPU Mining'] }, correctIndex: 1 },
    { id: 'cr_m_11', category: 'crypto', difficulty: 'medium', question: { es: '¿Qué es una "Seed Phrase"?', en: 'What is a "Seed Phrase"?' }, options: { es: ['Contraseña de 12-24 palabras', 'Tu usuario', 'Tu PIN', 'Tu email'], en: ['12-24 word password', 'Your username', 'Your PIN', 'Your email'] }, correctIndex: 0 },
    { id: 'cr_m_12', category: 'crypto', difficulty: 'medium', question: { es: '¿Qué significa "Peer-to-Peer"?', en: 'What does "Peer-to-Peer" mean?' }, options: { es: ['Persona a Banco', 'Persona a Persona', 'Computadora a Servidor', 'Servidor a Nube'], en: ['Person to Bank', 'Person to Person', 'Computer to Server', 'Server to Cloud'] }, correctIndex: 1 },
    { id: 'cr_m_13', category: 'crypto', difficulty: 'medium', question: { es: '¿Qué es un "Fork" en crypto?', en: 'What is a "Fork" in crypto?' }, options: { es: ['Un tenedor', 'Una bifurcación de la red', 'Un error de código', 'Una nueva wallet'], en: ['A utensil', 'A network split', 'A code bug', 'A new wallet'] }, correctIndex: 1 },
    { id: 'cr_m_14', category: 'crypto', difficulty: 'medium', question: { es: '¿Cuál NO es una criptomoneda?', en: 'Which is NOT a cryptocurrency?' }, options: { es: ['Bitcoin', 'Ethereum', 'PayPal', 'Litecoin'], en: ['Bitcoin', 'Ethereum', 'PayPal', 'Litecoin'] }, correctIndex: 2 },
    { id: 'cr_m_15', category: 'crypto', difficulty: 'medium', question: { es: '¿Qué es "Cold Storage"?', en: 'What is "Cold Storage"?' }, options: { es: ['Guardar en el refrigerador', 'Wallet sin conexión a internet', 'Wallet en la nube', 'Exchange centralizado'], en: ['Check the fridge', 'Offline wallet', 'Cloud wallet', 'Centralized Exchange'] }, correctIndex: 1 },

    // --- HARD (10) ---
    { id: 'cr_h_1', category: 'crypto', difficulty: 'hard', question: { es: '¿Qué es el "Halving" de Bitcoin?', en: 'What is the Bitcoin "Halving"?' }, options: { es: ['División del precio', 'Reducción de recompensa de bloque', 'División de la red', 'Quema de tokens'], en: ['Price split', 'Block reward reduction', 'Network split', 'Token burn'] }, correctIndex: 1 },
    { id: 'cr_h_2', category: 'crypto', difficulty: 'hard', question: { es: '¿Cuándo se minó el bloque génesis de Bitcoin?', en: 'When was the Bitcoin genesis block mined?' }, options: { es: ['2007', '2008', '2009', '2010'], en: ['2007', '2008', '2009', '2010'] }, correctIndex: 2 },
    { id: 'cr_h_3', category: 'crypto', difficulty: 'hard', question: { es: '¿Qué algoritmo usa Bitcoin?', en: 'What algorithm does Bitcoin use?' }, options: { es: ['Ethash', 'SHA-256', 'Scrypt', 'RandomX'], en: ['Ethash', 'SHA-256', 'Scrypt', 'RandomX'] }, correctIndex: 1 },
    { id: 'cr_h_4', category: 'crypto', difficulty: 'hard', question: { es: '¿Quién escribió el Whitepaper de Ethereum?', en: 'Who wrote the Ethereum Whitepaper?' }, options: { es: ['Satoshi Nakamoto', 'Vitalik Buterin', 'Gavin Wood', 'Charles Hoskinson'], en: ['Satoshi Nakamoto', 'Vitalik Buterin', 'Gavin Wood', 'Charles Hoskinson'] }, correctIndex: 1 },
    { id: 'cr_h_5', category: 'crypto', difficulty: 'hard', question: { es: '¿Qué es una DAO?', en: 'What is a DAO?' }, options: { es: ['Digital Asset Organization', 'Decentralized Autonomous Organization', 'Data Access Object', 'Direct Action Operation'], en: ['Digital Asset Organization', 'Decentralized Autonomous Organization', 'Data Access Object', 'Direct Action Operation'] }, correctIndex: 1 },
    { id: 'cr_h_6', category: 'crypto', difficulty: 'hard', question: { es: '¿Qué es el "Byzantine Generals Problem"?', en: 'What is the "Byzantine Generals Problem"?' }, options: { es: ['Un problema militar', 'Un problema de consenso distribuido', 'Un juego de mesa', 'Un error de hardware'], en: ['A military issue', 'Distributed consensus problem', 'Board game', 'Hardware error'] }, correctIndex: 1 },
    { id: 'cr_h_7', category: 'crypto', difficulty: 'hard', question: { es: '¿Qué es "Layer 2"?', en: 'What is "Layer 2"?' }, options: { es: ['Una segunda blockchain', 'Solución de escalabilidad sobre Layer 1', 'Un backup', 'Una copia de seguridad'], en: ['Second blockchain', 'Scalability solution on Layer 1', 'A backup', 'A security copy'] }, correctIndex: 1 },
    { id: 'cr_h_8', category: 'crypto', difficulty: 'hard', question: { es: '¿Qué es un "51% Attack"?', en: 'What is a "51% Attack"?' }, options: { es: ['Hackear el 51% de las wallets', 'Controlar la mayoría del hash rate', 'Comprar el 51% de la moneda', 'Bajar el precio 51%'], en: ['Hack 51% of wallets', 'Control majority of hash rate', 'Buy 51% of coin', 'Drop price 51%'] }, correctIndex: 1 },
    { id: 'cr_h_9', category: 'crypto', difficulty: 'hard', question: { es: '¿Qué significa EIP en Ethereum?', en: 'What does EIP stand for in Ethereum?' }, options: { es: ['Ethereum Internet Protocol', 'Ethereum Improvement Proposal', 'Early Investment Plan', 'Ether Internal Process'], en: ['Ethereum Internet Protocol', 'Ethereum Improvement Proposal', 'Early Investment Plan', 'Ether Internal Process'] }, correctIndex: 1 },
    { id: 'cr_h_10', category: 'crypto', difficulty: 'hard', question: { es: '¿Qué es "Impermanent Loss" (Pérdida Impermanente)?', en: 'What is "Impermanent Loss"?' }, options: { es: ['Perder la wallet', 'Pérdida temporal en AMMs/Liquidez', 'Hackeo de Exchange', 'Caída permanente del precio'], en: ['Losing wallet', 'Temporary loss in AMMs/Liquidity', 'Exchange hack', 'Permanent price drop'] }, correctIndex: 1 },
    { id: 'cr_h_11', category: 'crypto', difficulty: 'hard', question: { es: '¿Cuál fue el primer bloque de Bitcoin?', en: 'What was the first Bitcoin block?' }, options: { es: ['Bloque Alpha', 'Bloque Cero', 'Bloque Génesis', 'Bloque Uno'], en: ['Block Alpha', 'Block Zero', 'Genesis Block', 'Block One'] }, correctIndex: 2 },
    { id: 'cr_h_12', category: 'crypto', difficulty: 'hard', question: { es: '¿Qué significa zk-SNARK?', en: 'What does zk-SNARK stand for?' }, options: { es: ['Zero-Knowledge...', 'Zone Key...', 'Zinc Kernel...', 'Zigzag Knife...'], en: ['Zero-Knowledge...', 'Zone Key...', 'Zinc Kernel...', 'Zigzag Knife...'] }, correctIndex: 0 },
    { id: 'cr_h_13', category: 'crypto', difficulty: 'hard', question: { es: '¿Qué es "Sharding"?', en: 'What is "Sharding"?' }, options: { es: ['Compartir tokens', 'Dividir la blockchain en particiones', 'Vender en corto', 'Guardar en frío'], en: ['Sharing tokens', 'Partitioning blockchain', 'Short selling', 'Cold storage'] }, correctIndex: 1 },
    { id: 'cr_h_14', category: 'crypto', difficulty: 'hard', question: { es: '¿Qué es el "Trilemma" de la blockchain?', en: 'What is the blockchain "Trilemma"?' }, options: { es: ['Velocidad, Costo, Usabilidad', 'Seguridad, Descentralización, Escalabilidad', 'Privacidad, Precio, Potencia', 'Ninguno'], en: ['Speed, Cost, Usability', 'Security, Decentralization, Scalability', 'Privacy, Price, Power', 'None'] }, correctIndex: 1 },
    { id: 'cr_h_15', category: 'crypto', difficulty: 'hard', question: { es: '¿Quién creó Litecoin?', en: 'Who created Litecoin?' }, options: { es: ['Charlie Lee', 'Vitalik Buterin', 'Jed McCaleb', 'Roger Ver'], en: ['Charlie Lee', 'Vitalik Buterin', 'Jed McCaleb', 'Roger Ver'] }, correctIndex: 0 },

    // ==========================================
    // CATEGORY: DEPORTES (Sports)
    // ==========================================

    // --- EASY (20) ---
    { id: 'd_e_1', category: 'deportes', difficulty: 'easy', question: { es: '¿En qué deporte se usa una raqueta?', en: 'In which sport is a racket used?' }, options: { es: ['Fútbol', 'Tenis', 'Baloncesto', 'Natación'], en: ['Soccer', 'Tennis', 'Basketball', 'Swimming'] }, correctIndex: 1 },
    { id: 'd_e_2', category: 'deportes', difficulty: 'easy', question: { es: '¿Cuántos jugadores tiene un equipo de fútbol?', en: 'How many players are on a soccer team?' }, options: { es: ['9', '10', '11', '12'], en: ['9', '10', '11', '12'] }, correctIndex: 2 },
    { id: 'd_e_3', category: 'deportes', difficulty: 'easy', question: { es: '¿Qué país ganó el mundial 2022?', en: 'Which country won the 2022 World Cup?' }, options: { es: ['Francia', 'Brasil', 'Argentina', 'Alemania'], en: ['France', 'Brazil', 'Argentina', 'Germany'] }, correctIndex: 2 },
    { id: 'd_e_4', category: 'deportes', difficulty: 'easy', question: { es: '¿En qué deporte se anota un "Touchdown"?', en: 'In which sport is a "Touchdown" scored?' }, options: { es: ['Fútbol Americano', 'Rugby', 'Tenis', 'Golf'], en: ['American Football', 'Rugby', 'Tennis', 'Golf'] }, correctIndex: 0 },
    { id: 'd_e_5', category: 'deportes', difficulty: 'easy', question: { es: '¿Quién es "The King" en la NBA?', en: 'Who is "The King" in the NBA?' }, options: { es: ['Michael Jordan', 'LeBron James', 'Kobe Bryant', 'Steph Curry'], en: ['Michael Jordan', 'LeBron James', 'Kobe Bryant', 'Steph Curry'] }, correctIndex: 1 },
    { id: 'd_e_6', category: 'deportes', difficulty: 'easy', question: { es: '¿Cuál es el deporte rey en EE.UU.?', en: 'What is the most popular sport in the USA?' }, options: { es: ['Fútbol', 'Béisbol/Fútbol Americano', 'Tenis', 'Cricket'], en: ['Soccer', 'Baseball/Football', 'Tennis', 'Cricket'] }, correctIndex: 1 },
    { id: 'd_e_7', category: 'deportes', difficulty: 'easy', question: { es: '¿Qué se golpea en el Golf?', en: 'What do you hit in Golf?' }, options: { es: ['Una pelota pequeña', 'Un disco', 'Una pelota grande', 'Una raqueta'], en: ['A small ball', 'A puck', 'A large ball', 'A racket'] }, correctIndex: 0 },
    { id: 'd_e_8', category: 'deportes', difficulty: 'easy', question: { es: '¿Dónde se juegan los torneos de Wimbledon?', en: 'Where is Wimbledon played?' }, options: { es: ['Londres', 'París', 'Nueva York', 'Melbourne'], en: ['London', 'Paris', 'New York', 'Melbourne'] }, correctIndex: 0 },
    { id: 'd_e_9', category: 'deportes', difficulty: 'easy', question: { es: '¿Qué deporte usa una canasta?', en: 'Which sport uses a basket?' }, options: { es: ['Voleibol', 'Baloncesto', 'Fútbol', 'Tenis'], en: ['Volleyball', 'Basketball', 'Soccer', 'Tennis'] }, correctIndex: 1 },
    { id: 'd_e_10', category: 'deportes', difficulty: 'easy', question: { es: '¿Quién es Lionel Messi?', en: 'Who is Lionel Messi?' }, options: { es: ['Tenista', 'Futbolista', 'Nadador', 'Piloto'], en: ['Tennis player', 'Soccer player', 'Swimmer', 'Driver'] }, correctIndex: 1 },
    { id: 'd_e_11', category: 'deportes', difficulty: 'easy', question: { es: '¿Qué color de tarjeta expulsa a un jugador?', en: 'Which card color ejects a player?' }, options: { es: ['Amarilla', 'Roja', 'Azul', 'Verde'], en: ['Yellow', 'Red', 'Blue', 'Green'] }, correctIndex: 1 },
    { id: 'd_e_12', category: 'deportes', difficulty: 'easy', question: { es: '¿En qué deporte se usa la palabra "Ace"?', en: 'In which sport is the word "Ace" used?' }, options: { es: ['Fútbol', 'Tenis', 'Boxeo', 'Natación'], en: ['Soccer', 'Tennis', 'Boxing', 'Swimming'] }, correctIndex: 1 },
    { id: 'd_e_13', category: 'deportes', difficulty: 'easy', question: { es: '¿Qué deporte se juega en el Tour de Francia?', en: 'What sport is played in the Tour de France?' }, options: { es: ['Ciclismo', 'Automovilismo', 'Maratón', 'Natación'], en: ['Cycling', 'Racing', 'Marathon', 'Swimming'] }, correctIndex: 0 },
    { id: 'd_e_14', category: 'deportes', difficulty: 'easy', question: { es: '¿Cuál es el evento deportivo más grande?', en: 'What is the biggest sporting event?' }, options: { es: ['Super Bowl', 'Juegos Olímpicos', 'Copa Mundial', 'Wimbledon'], en: ['Super Bowl', 'Olympics', 'World Cup', 'Wimbledon'] }, correctIndex: 1 },
    { id: 'd_e_15', category: 'deportes', difficulty: 'easy', question: { es: '¿Qué deporte practica Usain Bolt?', en: 'What sport does Usain Bolt do?' }, options: { es: ['Natación', 'Atletismo', 'Fútbol', 'Boxeo'], en: ['Swimming', 'Athletics', 'Soccer', 'Boxing'] }, correctIndex: 1 },
    { id: 'd_e_16', category: 'deportes', difficulty: 'easy', question: { es: '¿Cuántos sets se necesitan para ganar en Grand Slam (H)?', en: 'How many sets to win a Grand Slam (M)?' }, options: { es: ['2', '3', '4', '5'], en: ['2', '3', '4', '5'] }, correctIndex: 1 },
    { id: 'd_e_17', category: 'deportes', difficulty: 'easy', question: { es: '¿Qué es la NBA?', en: 'What is the NBA?' }, options: { es: ['Liga de Béisbol', 'Liga de Baloncesto', 'Liga de Fútbol', 'Liga de Hockey'], en: ['Baseball League', 'Basketball League', 'Soccer League', 'Hockey League'] }, correctIndex: 1 },
    { id: 'd_e_18', category: 'deportes', difficulty: 'easy', question: { es: '¿En qué deporte se nada?', en: 'In which sport do you swim?' }, options: { es: ['Natación', 'Atletismo', 'Ciclismo', 'Esgrima'], en: ['Swimming', 'Athletics', 'Cycling', 'Fencing'] }, correctIndex: 0 },
    { id: 'd_e_19', category: 'deportes', difficulty: 'easy', question: { es: '¿Qué deporte usa un disco?', en: 'Which sport uses a puck?' }, options: { es: ['Hockey sobre hielo', 'Fútbol', 'Tenis', 'Golf'], en: ['Ice Hockey', 'Soccer', 'Tennis', 'Golf'] }, correctIndex: 0 },
    { id: 'd_e_20', category: 'deportes', difficulty: 'easy', question: { es: '¿Qué significan los anillos olímpicos?', en: 'What do the Olympic rings signify?' }, options: { es: ['Países', 'Continentes', 'Deportes', 'Ganadores'], en: ['Countries', 'Continents', 'Sports', 'Winners'] }, correctIndex: 1 },

    // --- MEDIUM (15) ---
    { id: 'd_m_1', category: 'deportes', difficulty: 'medium', question: { es: '¿Cuánto dura un partido de rugby?', en: 'How long is a rugby match?' }, options: { es: ['60 min', '80 min', '90 min', '100 min'], en: ['60 min', '80 min', '90 min', '100 min'] }, correctIndex: 1 },
    { id: 'd_m_2', category: 'deportes', difficulty: 'medium', question: { es: '¿En qué país se inventó el baloncesto?', en: 'In which country was basketball invented?' }, options: { es: ['Canadá', 'Reino Unido', 'EE.UU.', 'Francia'], en: ['Canada', 'UK', 'USA', 'France'] }, correctIndex: 2 },
    { id: 'd_m_3', category: 'deportes', difficulty: 'medium', question: { es: '¿Qué tenista tiene más Grand Slams (aprox)?', en: 'Which tennis player has the most Grand Slams (approx)?' }, options: { es: ['Federer', 'Nadal', 'Djokovic', 'Sampras'], en: ['Federer', 'Nadal', 'Djokovic', 'Sampras'] }, correctIndex: 2 },
    { id: 'd_m_4', category: 'deportes', difficulty: 'medium', question: { es: '¿Dónde se celebraron los JJOO 2016?', en: 'Where were the 2016 Olympics held?' }, options: { es: ['Londres', 'Pekín', 'Río de Janeiro', 'Tokio'], en: ['London', 'Beijing', 'Rio de Janeiro', 'Tokyo'] }, correctIndex: 2 },
    { id: 'd_m_5', category: 'deportes', difficulty: 'medium', question: { es: '¿Qué es un "Hat-trick"?', en: 'What is a "Hat-trick"?' }, options: { es: ['Marcar 2 goles', 'Marcar 3 goles', 'Ganar 3 partidos', 'Ganar 3 copas'], en: ['Score 2 goals', 'Score 3 goals', 'Win 3 games', 'Win 3 cups'] }, correctIndex: 1 },
    { id: 'd_m_6', category: 'deportes', difficulty: 'medium', question: { es: '¿Cuántos puntos vale un tiro libre en baloncesto?', en: 'How many points is a free throw worth in basketball?' }, options: { es: ['1', '2', '3', '4'], en: ['1', '2', '3', '4'] }, correctIndex: 0 },
    { id: 'd_m_7', category: 'deportes', difficulty: 'medium', question: { es: '¿Qué equipo de F1 tiene más campeonatos?', en: 'Which F1 team has the most championships?' }, options: { es: ['Mercedes', 'Red Bull', 'Ferrari', 'McLaren'], en: ['Mercedes', 'Red Bull', 'Ferrari', 'McLaren'] }, correctIndex: 2 },
    { id: 'd_m_8', category: 'deportes', difficulty: 'medium', question: { es: '¿Quién es Muhammad Ali?', en: 'Who is Muhammad Ali?' }, options: { es: ['Futbolista', 'Boxeador', 'Corredor', 'Nadador'], en: ['Soccer player', 'Boxer', 'Runner', 'Swimmer'] }, correctIndex: 1 },
    { id: 'd_m_9', category: 'deportes', difficulty: 'medium', question: { es: '¿Cuánto dura un partido de fútbol?', en: 'How long is a soccer match?' }, options: { es: ['45 min', '60 min', '90 min', '100 min'], en: ['45 min', '60 min', '90 min', '100 min'] }, correctIndex: 2 },
    { id: 'd_m_10', category: 'deportes', difficulty: 'medium', question: { es: '¿Qué país es famoso por los All Blacks?', en: 'Which country is famous for the All Blacks?' }, options: { es: ['Australia', 'Sudáfrica', 'Nueva Zelanda', 'Inglaterra'], en: ['Australia', 'South Africa', 'New Zealand', 'England'] }, correctIndex: 2 },
    { id: 'd_m_11', category: 'deportes', difficulty: 'medium', question: { es: '¿En qué deporte destaca Tiger Woods?', en: 'In what sport does Tiger Woods excel?' }, options: { es: ['Tenis', 'Golf', 'Béisbol', 'Cricket'], en: ['Tennis', 'Golf', 'Baseball', 'Cricket'] }, correctIndex: 1 },
    { id: 'd_m_12', category: 'deportes', difficulty: 'medium', question: { es: '¿Qué es el Super Bowl?', en: 'What is the Super Bowl?' }, options: { es: ['Final de Béisbol', 'Final de Fútbol Americano', 'Final de Hockey', 'Final de Tenis'], en: ['Baseball Final', 'American Football Final', 'Hockey Final', 'Tennis Final'] }, correctIndex: 1 },
    { id: 'd_m_13', category: 'deportes', difficulty: 'medium', question: { es: '¿Quién ganó la Copa Mundial femenina 2023?', en: 'Who won the 2023 Women\'s World Cup?' }, options: { es: ['Inglaterra', 'EE.UU.', 'España', 'Alemania'], en: ['England', 'USA', 'Spain', 'Germany'] }, correctIndex: 2 },
    { id: 'd_m_14', category: 'deportes', difficulty: 'medium', question: { es: '¿Cuál es la distancia de una piscina olímpica?', en: 'What is the length of an Olympic pool?' }, options: { es: ['25m', '50m', '100m', '200m'], en: ['25m', '50m', '100m', '200m'] }, correctIndex: 1 },
    { id: 'd_m_15', category: 'deportes', difficulty: 'medium', question: { es: '¿Qué significa KO en boxeo?', en: 'What does KO stand for in boxing?' }, options: { es: ['Kick Off', 'Knock Out', 'Keep On', 'King Out'], en: ['Kick Off', 'Knock Out', 'Keep On', 'King Out'] }, correctIndex: 1 },

    // --- HARD (10) ---
    { id: 'd_h_1', category: 'deportes', difficulty: 'hard', question: { es: '¿Quién ganó el primer mundial de fútbol?', en: 'Who won the first football World Cup?' }, options: { es: ['Brasil', 'Argentina', 'Uruguay', 'Italia'], en: ['Brazil', 'Argentina', 'Uruguay', 'Italy'] }, correctIndex: 2 },
    { id: 'd_h_2', category: 'deportes', difficulty: 'hard', question: { es: '¿En qué año se retiró Michael Jordan definitivamente?', en: 'In what year did Michael Jordan retire for good?' }, options: { es: ['1998', '2001', '2003', '2005'], en: ['1998', '2001', '2003', '2005'] }, correctIndex: 2 },
    { id: 'd_h_3', category: 'deportes', difficulty: 'hard', question: { es: '¿Qué distancia exacta tiene un maratón?', en: 'What is the exact distance of a marathon?' }, options: { es: ['40 km', '42.195 km', '42 km', '41.5 km'], en: ['40 km', '42.195 km', '42 km', '41.5 km'] }, correctIndex: 1 },
    { id: 'd_h_4', category: 'deportes', difficulty: 'hard', question: { es: '¿Quién tiene el récord de 100m lisos?', en: 'Who holds the 100m sprint record?' }, options: { es: ['Carl Lewis', 'Usain Bolt', 'Tyson Gay', 'Asafa Powell'], en: ['Carl Lewis', 'Usain Bolt', 'Tyson Gay', 'Asafa Powell'] }, correctIndex: 1 },
    { id: 'd_h_5', category: 'deportes', difficulty: 'hard', question: { es: '¿Cuál es el deporte nacional de Japón?', en: 'What is the national sport of Japan?' }, options: { es: ['Judo', 'Karate', 'Sumo', 'Béisbol'], en: ['Judo', 'Karate', 'Sumo', 'Baseball'] }, correctIndex: 2 },
    { id: 'd_h_6', category: 'deportes', difficulty: 'hard', question: { es: '¿Dónde fueron los primeros JJOO modernos?', en: 'Where were the first modern Olympics held?' }, options: { es: ['París', 'Atenas', 'Londres', 'Roma'], en: ['Paris', 'Athens', 'London', 'Rome'] }, correctIndex: 1 },
    { id: 'd_h_7', category: 'deportes', difficulty: 'hard', question: { es: '¿Quién es el máximo goleador histórico (oficial)?', en: 'Who is the all-time top scorer (official)?' }, options: { es: ['Pelé', 'Romario', 'Cristiano Ronaldo', 'Messi'], en: ['Pelé', 'Romario', 'Cristiano Ronaldo', 'Messi'] }, correctIndex: 2 },
    { id: 'd_h_8', category: 'deportes', difficulty: 'hard', question: { es: '¿En qué año ganó España el Mundial?', en: 'In what year did Spain win the World Cup?' }, options: { es: ['2006', '2010', '2014', '2018'], en: ['2006', '2010', '2014', '2018'] }, correctIndex: 1 },
    { id: 'd_h_9', category: 'deportes', difficulty: 'hard', question: { es: '¿Qué tenista ganó el "Golden Slam" (4 Slams + Oro)?', en: 'Which tennis player won the "Golden Slam"?' }, options: { es: ['Serena Williams', 'Steffi Graf', 'Nadal', 'Agassi'], en: ['Serena Williams', 'Steffi Graf', 'Nadal', 'Agassi'] }, correctIndex: 1 },
    { id: 'd_h_10', category: 'deportes', difficulty: 'hard', question: { es: '¿Cuántos jugadores tiene un equipo de Rugby 15?', en: 'How many players in a Rugby Union team?' }, options: { es: ['11', '13', '15', '17'], en: ['11', '13', '15', '17'] }, correctIndex: 2 },
    { id: 'd_h_11', category: 'deportes', difficulty: 'hard', question: { es: '¿Qué país ganó la Eurocopa 2004?', en: 'Which country won Euro 2004?' }, options: { es: ['Portugal', 'Grecia', 'Francia', 'España'], en: ['Portugal', 'Greece', 'France', 'Spain'] }, correctIndex: 1 },
    { id: 'd_h_12', category: 'deportes', difficulty: 'hard', question: { es: '¿Quién es el máximo anotador de la NBA (histórico)?', en: 'Who is the NBA all-time leading scorer?' }, options: { es: ['Kareem Abdul-Jabbar', 'Michael Jordan', 'LeBron James', 'Kobe Bryant'], en: ['Kareem Abdul-Jabbar', 'Michael Jordan', 'LeBron James', 'Kobe Bryant'] }, correctIndex: 2 },
    { id: 'd_h_13', category: 'deportes', difficulty: 'hard', question: { es: '¿En qué año fueron los JJOO de Barcelona?', en: 'In what year were the Barcelona Olympics?' }, options: { es: ['1988', '1992', '1996', '2000'], en: ['1988', '1992', '1996', '2000'] }, correctIndex: 1 },
    { id: 'd_h_14', category: 'deportes', difficulty: 'hard', question: { es: '¿Quién ganó el Tour de Francia 7 veces (luego anulado)?', en: 'Who won the Tour de France 7 times (later voided)?' }, options: { es: ['Indurain', 'Armstrong', 'Merckx', 'Lemond'], en: ['Indurain', 'Armstrong', 'Merckx', 'Lemond'] }, correctIndex: 1 },
    { id: 'd_h_15', category: 'deportes', difficulty: 'hard', question: { es: '¿Qué país inventó el Tenis de Mesa?', en: 'Which country invented Table Tennis?' }, options: { es: ['China', 'Japón', 'Inglaterra', 'Alemania'], en: ['China', 'Japan', 'England', 'Germany'] }, correctIndex: 2 },
];

// Helper: Get questions by category
export function getQuestionsByCategoryAndLang(
    category: Category,
    lang: Lang
): RawQuestion[] {
    return QUESTION_BANK.filter((q) => q.category === category);
}

// Helper: Get Random Question
// Now with stricter logic to avoid repetitions
export function getRandomQuestionFor(
    category: Category,
    lang: Lang,
    difficulty: Difficulty,
    usedIds: Set<string>
): { id: string; question: string; options: string[]; correctIndex: number; difficulty: Difficulty } | null {

    // 1. Try to find a question of the requested difficulty not yet used in THIS session
    let pool = QUESTION_BANK.filter(
        (q) =>
            q.category === category &&
            q.difficulty === difficulty &&
            !usedIds.has(q.id)
    );

    // 2. Fallback: If no questions of that difficulty left, expand to adjacent difficulties
    if (pool.length === 0) {
        // If we wanted Hard but none left, try Medium
        if (difficulty === 'hard') {
            pool = QUESTION_BANK.filter(q => q.category === category && q.difficulty === 'medium' && !usedIds.has(q.id));
        }
        // If we wanted Easy but none left, try Medium
        else if (difficulty === 'easy') {
            pool = QUESTION_BANK.filter(q => q.category === category && q.difficulty === 'medium' && !usedIds.has(q.id));
        }
        // If Medium requested, try Easy then Hard
        else {
            pool = QUESTION_BANK.filter(q => q.category === category && !usedIds.has(q.id));
        }
    }

    // 3. Last Resort: If absolutely NO new questions in category, allow repetition (should be rare with 45qs)
    if (pool.length === 0) {
        pool = QUESTION_BANK.filter(q => q.category === category && q.difficulty === difficulty);
    }

    // 4. If somehow still empty (e.g. bad category data), return null
    if (pool.length === 0) return null;

    const picked = pool[Math.floor(Math.random() * pool.length)];

    return {
        id: picked.id,
        question: picked.question[lang],
        options: picked.options[lang],
        correctIndex: picked.correctIndex,
        difficulty: picked.difficulty,
    };
}
