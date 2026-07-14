import React, { useState, useEffect } from 'react';
import './App.css';
import { FiArrowUp } from 'react-icons/fi';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Focus from './components/Focus/Focus';
import Experience from './components/Experience/Experience';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = typeof window !== 'undefined' && localStorage.getItem('theme');
    return saved || 'dark';
  });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(document.documentElement.scrollTop > 400);
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <Focus />
        <Experience />
        <Work />
        <Contact />
      </main>
      <Footer />
      <button
        className={`scrollUp ${visible ? 'show' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FiArrowUp />
      </button>
    </div>
  );
}

export default App;
