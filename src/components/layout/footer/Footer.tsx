import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          &copy; {currentYear} AjanjaCare Pharmaceuticals AFRICA. All rights
          reserved.
        </p>

        {/* Optional future links */}
        {/*
        <div className={styles.links}>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/contact">Contact Us</a>
        </div>
        */}
      </div>
    </footer>
  );
};

export default Footer;
