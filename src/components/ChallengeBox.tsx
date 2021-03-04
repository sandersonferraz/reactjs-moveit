import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CoundownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {

    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCoundown } = useContext(CoundownContext);

    function handleChallengesSucceeded() {
        completeChallenge();
        resetCoundown();
    }

    function handleChallengesFailed() {
        resetChallenge();
        resetCoundown();
    }

    return (
        <div className={styles.challengeBoxContainer}>

            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header> Ganhe {activeChallenge.amount} </header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={handleChallengesFailed}
                        >
                            Falhei
                        </button>

                        <button
                            type="button"
                            className={styles.challengeSucceededButton}
                            onClick={handleChallengesSucceeded}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (

                    <div className={styles.challengeNotActive}>
                        <strong>Finalize um cíclo para receber desafios.</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="level UP" />
                            Avance de level completando desafios.
                        </p>
                    </div>

                )}
        </div >
    );
}