import React from "react";
import styles from "./Hero.module.css";

import heroImage from "../../assets/hero/kat.png";


export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Kat</h1>
                <p className={styles.description}>
                    Computer Science student at UofW
                </p>
                <p className={styles.additionalDescription}>
                    Check out my GitHub or feel free to reach out!

                </p>
                <a href="https://github.com/Kataray" className={styles.contactBtn}>
                    Kat's Github
                </a>
            </div>
            <img
                src={heroImage}  // Use the imported image directly
                alt="Hero image of me"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};
