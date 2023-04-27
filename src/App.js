import React,{useState} from 'react';
import './App.css';
import Experience from './components/Experience/Experience';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';

function App() {
  const [dark, setDark] = useState(false)
  return (
    <div className={dark ? 'AppDark' : 'App'}>
      <Header dark={dark} setDark={setDark}/>
      <Hero dark={dark}/>
      <Experience  dark={dark}/>
      <Work dark={dark}/>
      <Contact dark={dark}/>
    </div>
  );
}

export default App;
