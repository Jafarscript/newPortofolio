import React from 'react'
import {FaCss3, FaHtml5, FaNodeJs} from 'react-icons/fa'
import {SiExpress, SiJavascript, SiReact} from 'react-icons/si'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero'>
        <h1>Hello I’m <br></br>Jafar Li-Hammed </h1>
        <p className='breif'>I am a UI Engineer at Google, where I design and develop user-centered interfaces for cutting-edge technology products. I work with a talented team to create visually appealing and intuitive designs that enhance user experience. I am passionate about using technology to create beautiful and functional designs that solve real-world problems.</p>
        <div className="skills">
            <span><FaHtml5 />HTML</span>
            <span><FaCss3 />CSS</span>
            <span><SiJavascript />JavaScript</span>
            <span><SiExpress />Express</span>
            <span><SiReact />React</span>
            <span><FaNodeJs />Nodejs</span>
        </div>
    </section>
  )
}

export default Hero