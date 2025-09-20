import React from "react";
import styles from "./Navbar.module.css";

type NavbarProps = {
  onNavClick?: (id: string) => void; // scroll handler from App
};

const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onNavClick?.(id);
  };

  return (
    <nav className={styles.navbar} aria-label="Main navigation">
      <ul className={styles.navList}>
        <li>
          <a href="#home" className={styles.navLink} onClick={(e) => handleClick(e, "home")}>
            Home
          </a>
        </li>

        <li>
          <a
            href="#services"
            className={styles.navLink}
            onClick={(e) => handleClick(e, "services")}
          >
            Our Services
          </a>
        </li>

        <li>
          <a
            href="#branches"
            className={styles.navLink}
            onClick={(e) => handleClick(e, "branches")}
          >
            Pharmacy Branches
          </a>
        </li>

        <li>
          <a href="/about-us" className={styles.navLink}>
            About Us
          </a>
        </li>

        <li>
          <a
            href="#experts"
            className={styles.navLink}
            onClick={(e) => handleClick(e, "experts")}
          >
            Health Experts
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className={styles.navLink}
            onClick={(e) => handleClick(e, "contact")}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;



