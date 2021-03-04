import { useState, useEffect, useContext } from 'react';
import { CoundownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {

    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCoundown
    } = useContext(CoundownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');



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