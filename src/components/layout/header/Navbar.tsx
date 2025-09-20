import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

type NavbarProps = {
  onNavClick?: (id: string) => void;
};

// Navigation items configuration
const navItems = [
  { id: "home", label: " Home", type: "home" as const },
  { id: "services", label: " Our Services", type: "scroll" as const },
  { id: "branches", label: " Pharmacy Branches", type: "scroll" as const },
  { href: "/about-us", label: " About Us", type: "external" as const },
  { href: "/team", label: " Health Experts", type: "external" as const },
];

const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const navigate = useNavigate();

  const handleScrollClick = (id: string, event: React.MouseEvent) => {
    event.preventDefault();
    onNavClick?.(id);
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const renderNavItem = (item: typeof navItems[0], index: number) => {
    const commonProps = {
      key: index,
      className: styles.navLink,
      "aria-label": `Navigate to ${item.label}`,
    };

    switch (item.type) {
      case "scroll":
        return (
          <a
            {...commonProps}
            href={`#${item.id}`}
            onClick={(e) => handleScrollClick(item.id, e)}
            role="button"
          >
            {item.label}
          </a>
        );

      case "home":
        return (
          <button
            {...commonProps}
            className={`${styles.navLink} ${styles.homeButton}`}
            onClick={handleHomeClick}
            type="button"
          >
            {item.label}
          </button>
        );

      case "external":
        return (
          <a
            {...commonProps}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${item.label} (opens in new tab)`}
          >
            {item.label}
          </a>
        );

      default:
        return null;
    }
  };

  return (
    <nav className={styles.navbar} aria-label="Main navigation" role="navigation">
      <ul className={styles.navList} role="menubar">
        {navItems.map((item, index) => (
          <li key={index} role="none">
            {renderNavItem(item, index)}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

