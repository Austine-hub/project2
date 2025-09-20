import React, { useState } from "react";
import styles from "./Header.module.css";
import pharmacistImg from "@/assets/smiling-pharmacist.jpg";

const Header = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark-mode");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
    }
  };

  return (
    <header className={styles.header}>
      {/* === TOP BAR === */}
      <div className={styles.topbar}>
        <h1 className={styles.siteTitle}>
          AjanjaCare <span>Pharmacy &amp; Health</span>
        </h1>

        <div className={styles.actions}>
          <form
            onSubmit={handleSearch}
            role="search"
            className={styles.searchContainer}
          >
            <input
              type="text"
              placeholder="Search medicines, services..."
              aria-label="Search this site"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
            <button type="submit" className={styles.searchBtn}>
              🔍
            </button>
          </form>

          <button
            onClick={toggleTheme}
            className={styles.themeBtn}
            aria-label="Toggle light/dark theme"
          >
            🌓
          </button>
        </div>
      </div>

      {/* === NAVIGATION === */}
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

      {/* === HERO / BANNER === */}
    <div className={styles.banner}>
        <img
           src={pharmacistImg}
           alt="Friendly pharmacist assisting a patient"
           className={styles.bannerImg}
           
        />
        
        </div>

        <div className={styles.bannerOverlay}>
          <h2 className={styles.bannerTitle}>Your Trusted Health Partner</h2>
          <p className={styles.bannerSubtitle}>
            Safe. Reliable. Compassionate Care for You &amp; Your Family.
          </p>
          <a href="#services" className={styles.ctaBtn}>
            Explore Our Services
          </a>
        </div>
      
    </header>
  );
};

export default Header;


