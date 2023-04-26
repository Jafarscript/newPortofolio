import React from 'react'
import {FaCss3, FaHtml5, FaNodeJs} from 'react-icons/fa'
import {SiExpress, SiJavascript, SiReact} from 'react-icons/si'
import './Hero.css'

const Hero = ({dark}) => {
  return (
    <section className='hero' id='hero'>
        <h1>Hello I’m <br></br>Jafar Li-Hammed </h1>
        <p className='breif'>I am a creative problem-solver who thrives on designing and building beautiful, user-friendly interfaces. I have a keen eye for detail and a deep understanding of HTML, CSS, and JavaScript. I am passionate about staying up-to-date with the latest frontend development trends and techniques, and I am always looking for ways to improve the user experience of the products I work on. I am a great collaborator, able to work closely with designers, developers, and other stakeholders to create seamless and engaging user interfaces. My goal is to create intuitive, responsive, and visually appealing designs that make a positive impact on the end-user experience.</p>
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