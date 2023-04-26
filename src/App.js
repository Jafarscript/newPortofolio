import React,{useState} from 'react';
import './App.css';
import Experience from './components/Experience/Experience';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  const [dark, setDark] = useState(false)
  return (
    <div className={dark ? 'AppDark' : 'App'}>
      <Header dark={dark} setDark={setDark}/>
      <Hero dark={dark}/>
      <Experience  dark={dark}/>
    </div>
  );
}

export default App;
