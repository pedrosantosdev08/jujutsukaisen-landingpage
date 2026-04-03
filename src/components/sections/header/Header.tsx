import { useState } from "react";
import "./Header.css";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header-container">
      <h1 className="header-title">呪術廻戦</h1>

      <nav>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a className="nav-item" href="#wizards" onClick={closeMenu}>
              PERSONAGENS
            </a>
          </li>
          <li>
            <a className="nav-item" href="#tecnics" onClick={closeMenu}>
              TÉCNICAS
            </a>
          </li>
          <li>
            <a className="nav-item" href="#history" onClick={closeMenu}>
              HISTÓRIA
            </a>
          </li>
        </ul>
      </nav>

      {/* Botão Hambúrguer */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
