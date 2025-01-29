import React from "react";

import styles from "./Contact.module.css";

import emailIcon from "../../assets/contact/emailIcon.png";
import linkedinIcon from "../../assets/contact/linkedinIcon.png";
import githubIcon from "../../assets/contact/githubIcon.png";

export const Contact = () => {
  return (
      <footer id="contact" className={styles.container}>
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={emailIcon} alt="Email icon" />
            <a href="katarina@kataray.dev">katarina@kataray.dev</a>
          </li>
          <li className={styles.link}>
            <img src={linkedinIcon} alt="LinkedIn icon" />
            <a href="https://www.linkedin.com/in/katarina-bulz-mantay-157ab932b">linkedin.com/KatarinaBulzMantay</a>
          </li>
          <li className={styles.link}>
            <img src={githubIcon} alt="Github icon" />
            <a href="https://github.com/Kataray">github.com/Kataray</a>
          </li>
        </ul>
      </footer>
  );
};
