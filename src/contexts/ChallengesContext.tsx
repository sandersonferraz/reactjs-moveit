import { createContext, ReactNode, useState } from 'react';
import challenges from '../../challenges.json';

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}
interface ChallengesContextData {

    level: number;
    currentExperience: number;
    challengesCompleted: number;
    experienceToNextLevel: number;
    activeChallenge: Challenge;
    completeChallenge: () => void;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
}

interface ChallengesProviderProps {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {

    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);


    function levelUp() {
        setLevel(level + 1);

    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);
    }

    function resetChallenge() {
        setActiveChallenge(null);
    }


    function completeChallenge() {
        if (!activeChallenge) {
            return;
        }

        const { amount } = activeChallenge;

        // let it change | ELa pode receber um novo valor no futuro.
        let finalExxperience = currentExperience + amount;

        if (finalExxperience >= experienceToNextLevel) {
            finalExxperience = finalExxperience - experienceToNextLevel;
            levelUp();

            setCurrentExperience(finalExxperience);
            setActiveChallenge(null);
            setChallengesCompleted(challengesCompleted + 1);
        }
    }

    return (
        // Podemos passar dados ou fi=unções do contexto para os componentes.
        <ChallengesContext.Provider
            value={{
                level,
                currentExperience,
                challengesCompleted,
                levelUp,
                startNewChallenge,
                activeChallenge,
                experienceToNextLevel,
                resetChallenge,
                completeChallenge,
            }}
        >
            {children}
        </ChallengesContext.Provider>//Todos os elementos dentro do provider vão ter acesso aos dados do contexto em questão.

    );
}
