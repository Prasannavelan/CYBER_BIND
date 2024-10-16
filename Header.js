import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/Company Logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" onClick={closeMobileMenu}>
            <img src={logo} alt="CYBER BIND Logo" className="logo" />
          </Link>
        </div>
        <div
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={handleToggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <nav className={`nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <Link to="/" onClick={closeMobileMenu}>Home</Link>
            </li>
            <li>
              <Link to="/internships" onClick={closeMobileMenu}>Internships Offered</Link>
            </li>
            <li>
              <Link to="/freelancing-services" onClick={closeMobileMenu}>Freelancing Services</Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMobileMenu}>About Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
