import React, { useState } from 'react';
import './Header.css';
import { FaGithub, FaBars } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import { FiSun, FiMoon } from 'react-icons/fi';

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Focus', href: '#focus' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
];

const Header = ({ theme, setTheme }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const isDark = theme === 'dark';

  const closeNav = () => setIsNavExpanded(false);

  return (
    <header className="header">
      <div className="headerInner">
        <a href="#hero" className="logo">
          <span className="logoBracket">{'<'}</span>
          jafarscript
          <span className="logoBracket">{'/>'}</span>
        </a>

        <nav className={`navLinks ${isNavExpanded ? 'expanded' : ''}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeNav}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="headerActions">
          <a
            href="https://github.com/Jafarscript"
            target="_blank"
            rel="noopener noreferrer"
            className="iconLink"
            aria-label="GitHub profile"
          >
            <FaGithub />
          </a>
          <button
            className="themeToggle"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label="Toggle color theme"
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>
          <a
            href="https://wa.me/2347069013967?text=Hi%20Jafar%2C%20I%27d%20like%20to%20talk%20about%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="contactBtn"
          >
            Let's talk
          </a>
          <button
            className="navToggler"
            onClick={() => setIsNavExpanded(!isNavExpanded)}
            aria-label="Toggle navigation menu"
          >
            {isNavExpanded ? <RxCross1 /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
