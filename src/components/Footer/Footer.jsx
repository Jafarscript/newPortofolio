import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerInner">
        <span className="footerLogo">jafarscript</span>
        <div className="footerLinks">
          <a href="https://github.com/Jafarscript" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/jafar-li-hammed" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:lihammedjafar@gmail.com" aria-label="Email">
            <FiMail />
          </a>
        </div>
        <span className="footerNote">© {new Date().getFullYear()} Jafar Li-Hammed</span>
      </div>
    </footer>
  );
};

export default Footer;
