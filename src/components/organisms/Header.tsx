import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../atoms/Button";
import styles from "./Header.module.css";

type HeaderProps = {
  onMenuOpen: () => void;
};

export default function Header({ onMenuOpen }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link to="/" className={styles.linkWrap}><Button>Home</Button></Link>
      </div>
      <nav className={styles.right}>
        <Link to="/projects" className={styles.linkWrap}><Button>Projects</Button></Link>
        <Link to="/blog" className={styles.linkWrap}><Button>Blog</Button></Link>
        <a href="/Rachit_Gandhi_Updated_Resume.pdf" className={styles.linkWrap} download>
          <Button>Resume</Button>
        </a>
        <a href="mailto:rachitgandhi27@gmail.com" className={styles.linkWrap}>
          <Button>Contact Me</Button>
        </a>
      </nav>
      <button className={styles.menuToggle} aria-label="Open menu" onClick={onMenuOpen}>
        <Menu size={20} />
      </button>
    </header>
  );
}
