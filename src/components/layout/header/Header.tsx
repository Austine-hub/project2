import React from "react";
import styles from "./Header.module.css";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Hero from "./Hero";

type HeaderProps = {
  onNavClick?: (id: string) => void;
  hideHero?: boolean; // new prop to optionally hide Hero
};

const Header: React.FC<HeaderProps> = ({ onNavClick, hideHero = false }) => {
  return (
    <header className={styles.header}>
      {/* Sticky Topbar + Navbar */}
      <div className={styles.headerSticky}>
        <Topbar />
        <Navbar onNavClick={onNavClick} />
      </div>

      {/* Hero section only on landing page */}
      {!hideHero && <Hero />}
    </header>
  );
};

export default Header;

