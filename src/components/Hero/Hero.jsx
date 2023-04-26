import React from 'react'
import {FaCss3, FaHtml5, FaNodeJs} from 'react-icons/fa'
import {SiExpress, SiJavascript, SiReact} from 'react-icons/si'
import './Hero.css'

const Hero = ({dark}) => {
  return (
    <section className='hero'>
        <h1>Hello I’m <br></br>Jafar Li-Hammed </h1>
        <p className='breif'>I am a UI Engineer at Google, where I design and develop user-centered interfaces for cutting-edge technology products. I work with a talented team to create visually appealing and intuitive designs that enhance user experience. I am passionate about using technology to create beautiful and functional designs that solve real-world problems.</p>
        <div className="skills">
            <span className={dark ? 'skill skillDark' : 'skill skillLight'}><FaHtml5 />HTML</span>
            <span className={dark ? 'skill skillDark' : 'skill skillLight'}><FaCss3 />CSS</span>
            <span className={dark ? 'skill skillDark' : 'skill skillLight'}><SiJavascript />JavaScript</span>
            <span className={dark ? 'skill skillDark' : 'skill skillLight'}><SiExpress />Express</span>
            <span className={dark ? 'skill skillDark' : 'skill skillLight'}><SiReact />React</span>
            <span className={dark ? 'skill skillDark' : 'skill skillLight'}><FaNodeJs />Nodejs</span>
        </div>
    </section>
  )
}

export default Hero