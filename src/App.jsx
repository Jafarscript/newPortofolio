import React,{useState} from 'react';
import './App.css';
import { FaArrowUp } from 'react-icons/fa';
import Experience from './components/Experience/Experience';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [dark, setDark] = useState(false)
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if(scrolled > 300){
      setVisible(true)
    }else if(scrolled <= 300){
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top : 0,
      behavior: 'smooth'
    })
  }

  window.addEventListener('scroll', toggleVisible)
  return (
    <div className={dark ? 'AppDark' : 'App'}>
      <Header dark={dark} setDark={setDark}/>
      <Hero dark={dark}/>
      <Experience  dark={dark}/>
      <Work dark={dark}/>
      <Contact dark={dark}/>
      <Footer />
      { visible && <button className={dark ? 'scrollUp dark' : 'scrollUp light'}  onClick={scrollToTop}><FaArrowUp /></button>}
    </div>
  );
}

export default App;
