import { Menu, SunMoon } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../atoms/Button";
import styles from "./Header.module.css";

type HeaderProps = {
  onMenuOpen: () => void;
  themeName: string;
  onThemeToggle: () => void;
};

export default function Header({ onMenuOpen, themeName, onThemeToggle }: HeaderProps) {
  const nextTheme = themeName === "mint-latte" ? "night" : "day";

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.linkWrap}><Button>Home</Button></Link>
        <Link to="/projects" className={styles.linkWrap}><Button>Projects</Button></Link>
        <Link to="/blog" className={styles.linkWrap}><Button>Blog</Button></Link>
        <a href="/Rachit_Gandhi_Updated_Resume.pdf" className={styles.linkWrap} download>
          <Button>Resume</Button>
        </a>
        <a href="mailto:rachitgandhi27@gmail.com" className={styles.linkWrap}>
          <Button>Contact Me</Button>
        </a>
        <button
          className={styles.themeToggle}
          aria-label={`Switch to ${nextTheme} theme`}
          title={`Switch to ${nextTheme} theme`}
          onClick={onThemeToggle}
        >
          <SunMoon size={18} />
        </button>
      </nav>
      <div className={styles.mobileActions}>
        <button
          className={styles.themeToggle}
          aria-label={`Switch to ${nextTheme} theme`}
          onClick={onThemeToggle}
        >
          <SunMoon size={18} />
        </button>
        <button className={styles.menuToggle} aria-label="Open menu" onClick={onMenuOpen}>
          <Menu size={18} />
        </button>
      </div>
    </header>
  );
}
