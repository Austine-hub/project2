import React, { useState } from "react";
import styles from "./Topbar.module.css";

const Topbar = () => {
  const [theme, setTheme] = useState("light");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark-mode");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real application, you'd perform a search here,
      // likely navigating to a search results page or filtering data.
      console.log(`Searching for "${searchQuery}" in category: "${selectedCategory}"`);
    }
  };

  return (
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
          <label htmlFor="searchInput" className="sr-only">Search</label>
          <input
            id="searchInput"
            type="text"
            placeholder="Search medicines, services..."
            aria-label="Search this site"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
          <label htmlFor="categorySelect" className="sr-only">Category</label>
          <select
            id="categorySelect"
            className={styles.categorySelect}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All categories</option>
            <option value="medicines">Medicines</option>
            <option value="services">Services</option>
            <option value="equipment">Equipment</option>
          </select>
          <button type="submit" className={styles.searchBtn}>🔍</button>
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
  );
};

export default Topbar;
