import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCoundown: () => void;
}

interface CountdownProviderProps {
    children: ReactNode;
}

export const CoundownContext = createContext({} as CountdownContextData);


let countdownbuttonTimeout: NodeJS.Timeout;


export function CountdownProvider({ children }: CountdownProviderProps) {

    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);


    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdown() {
        setIsActive(true);
    }

    function resetCoundown() {
        clearTimeout(countdownbuttonTimeout);
        setIsActive(false);
        setTime(0.05 * 60);
        setHasFinished(false);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownbuttonTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (isActive && time == 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time]);

    return (
        <CoundownContext.Provider
            value={{
                minutes,
                seconds,
                hasFinished,
                isActive,
                startCountdown,
                resetCoundown
            }}>
            { children}
        </CoundownContext.Provider>

    );

}