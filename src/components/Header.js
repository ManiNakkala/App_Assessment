import { useState } from 'react';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-top">
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2"/>
            <line x1="3" y1="6" x2="21" y2="6" strokeWidth="2"/>
            <line x1="3" y1="18" x2="21" y2="18" strokeWidth="2"/>
          </svg>
        </button>

        <div className="logo-container">
          <svg className="logo-icon" width="40" height="40" viewBox="0 0 40 40">
            <rect x="5" y="5" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2"/>
            <line x1="5" y1="5" x2="35" y2="35" stroke="currentColor" strokeWidth="2"/>
            <line x1="35" y1="5" x2="5" y2="35" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>

        <div className="logo">LOGO</div>

        <div className="header-icons">
          <button className="icon-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
          <button className="icon-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
          <button className="icon-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
          </button>
          <button className="icon-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </button>
          <button className="lang-btn">
            ENG
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="3 4.5 6 7.5 9 4.5"/>
            </svg>
          </button>
        </div>
      </div>

      <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
        <a href="#shop" className="nav-link">SHOP</a>
        <a href="#skills" className="nav-link">SKILLS</a>
        <a href="#stories" className="nav-link">STORIES</a>
        <a href="#about" className="nav-link">ABOUT</a>
        <a href="#contact" className="nav-link">CONTACT US</a>
      </nav>
    </header>
  );
}

export default Header;
