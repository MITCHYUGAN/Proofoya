import { motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { Brand } from "./Brand";

const links = [{ href: "#how-it-works", label: "How It Works" }, { href: "#features", label: "Features" }, { href: "#creatives", label: "For Creatives" }, { href: "#for-clients", label: "For Clients" }];

export function Header({ onWaitlist }: { onWaitlist: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const modeLabel = `Switch to ${theme === "dark" ? "light" : "dark"} mode`;

  return <header className="site-nav"><div className="nav-inner"><Brand /><nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">{links.map((link) => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>)}</nav><div className="nav-actions"><motion.button whileTap={{ scale: 0.95 }} type="button" className="theme-toggle" aria-label={modeLabel} onClick={toggleTheme}>{theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}</motion.button><motion.button whileTap={{ scale: 0.97 }} type="button" className="button button-small button-light" onClick={onWaitlist}>Join Waitlist</motion.button><motion.button whileTap={{ scale: 0.95 }} type="button" className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={18} /> : <Menu size={18} />}</motion.button></div></div></header>;
}
