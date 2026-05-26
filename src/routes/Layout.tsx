import { useState } from "react";
import Header from "../components/organisms/Header";
import Sidebar from "../components/organisms/Sidebar";
import Footer from "../components/organisms/Footer";

type LayoutProps = {
  children: React.ReactNode;
  themeName: string;
  onThemeToggle: () => void;
};

export default function Layout({ children, themeName, onThemeToggle }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="page">
      <Header
        onMenuOpen={() => setMenuOpen(true)}
        themeName={themeName}
        onThemeToggle={onThemeToggle}
      />
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
}
