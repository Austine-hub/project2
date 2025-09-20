import React from "react";
import styles from "./Header.module.css";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Hero from "./Hero";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* === Sticky topbar + navbar wrapper === */}
      <div className={styles.headerSticky}>
        <Topbar />
        <Navbar />
      </div>

      {/* === Hero / Banner Section === */}
      <Hero />
    </header>
  );
};

export default Header;
