import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar} aria-label="Main navigation">
      <ul className={styles.navList}>
        <li><a href="#" className={styles.navLink}>Home</a></li>
        <li><a href="#" className={styles.navLink}>Our Services</a></li>
        <li><a href="#" className={styles.navLink}>Pharmacy Branches</a></li>
        <li><a href="#" className={styles.navLink}>About Us</a></li>
        <li><a href="#" className={styles.navLink}>Health Experts</a></li>
        <li><a href="#" className={styles.navLink}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
