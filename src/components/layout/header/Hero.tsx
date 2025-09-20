import React from "react";
import styles from "./Hero.module.css";
import pharmacistImg from "@/assets/smiling-pharmacist.jpg";

const Hero = () => {
  return (
    <div className={styles.hero}>
      {/* === Banner Image === */}
      <img
        src={pharmacistImg}
        alt="Friendly pharmacist assisting a patient"
        className={styles.heroImg}
      />

      {/* === Overlay Content === */}
      <div className={styles.overlay}>
        <h2 className={styles.title}>Your Trusted Health Partner</h2>
        <p className={styles.subtitle}>
          Safe. Reliable. Compassionate Care for You &amp; Your Family.
        </p>
        <a href="#services" className={styles.ctaBtn}>
          Explore Our Services
        </a>
      </div>
    </div>
  );
};

export default Hero;
