import styles from "../styles/components/ExperienceBar.module.css"; // Importando css module para o scopo do ExperienceBar.

export function ExperienceBar() {
    return (
        <header className={styles.experienceBar}>
            <span>0 px</span>
            <div>
                <div style={{ width: "60%" }} />
                <span className={styles.currentExperience} style={{ left: "60%" }}>300 px</span>
            </div>
            <span>600 px</span>
        </header>
    );
}