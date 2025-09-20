import React, { useState } from "react";
import styles from "./Topbar.module.css";

const Topbar = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [searchQuery, setSearchQuery] = useState("");

  // Toggle light/dark theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark-mode");
  };

  // Handle search form submit
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
    }
  };

  return (
    <div className={styles.topbar}>
      {/* === Site Title / Logo === */}
      <h1 className={styles.siteTitle}>
        AjanjaCare <span>Pharmacy &amp; Health</span>
      </h1>

      {/* === Actions (Search + Theme Toggle) === */}
      <div className={styles.actions}>
        {/* Search Bar */}
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

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={styles.themeBtn}
          aria-label="Toggle light/dark theme"
        >
          🌓
        </button>
      </div>
    </div>
  );
};

export default Topbar;
