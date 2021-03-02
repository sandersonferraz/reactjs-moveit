import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';

let countdownbuttonTimeout: NodeJS.Timeout;

export function Countdown() {
    const [time, setTime] = useState(0.05 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);


    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
        setIsActive(true);
    }

    function resetCoundown() {
        clearTimeout(countdownbuttonTimeout);
        setIsActive(false);
        setTime(0.05 * 60);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownbuttonTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (isActive && time == 0) {
            setHasFinished(true);
            setIsActive(false);

        }
    }, [isActive, time]);

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>


            </div>

            {hasFinished ? (
                <button
                    disabled
                    className={styles.countdownbutton}
                >
                    Ciclo encerrado <img src="icons/ok-marca.svg" />
                </button>
            ) : (
                    <>
                        {
                            isActive ? (
                                <button
                                    onClick={resetCoundown}
                                    type="button"
                                    className={styles.countdownbutton + ' ' + styles.countdownbuttonActive}
                                >
                                    Abandonar ciclo
                                </button>

                            ) : (

                                    <button
                                        onClick={startCountdown}
                                        type="button" className={styles.countdownbutton}
                                    >
                                        Iníciar ciclo
                                    </button>

                                )
                        }
                    </>

                )}




        </div >
    );
}