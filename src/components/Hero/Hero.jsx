import React from 'react'
import {FaCss3, FaHtml5, FaNodeJs} from 'react-icons/fa'
import {SiExpress, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss} from 'react-icons/si'
import './Hero.css'

const Hero = ({dark}) => {
  return (
    <section className='hero' id='hero'>
        <h1>Hello I’m <br></br>Jafar Li-Hammed </h1>
        <p className='breif'>Welcome to my portfolio! I specialize in crafting scalable, user-centric web applications with a focus on performance and seamless functionality. With a strong foundation in modern web technologies and a commitment to delivering innovative solutions, I transform complex ideas into elegant, efficient digital experiences. Explore my projects to see the depth of my expertise and dedication to excellence in web development.</p>
        <div className="skills">
            <span className={dark ? 'skill skillDark' : 'skill skillLight'}><FaHtml5 />HTML</span>
            <span className={dark ? 'skill skillDark' : 'skill skillLight'}><FaCss3 />CSS</span>
            <span className={dark ? 'skill skillDark' : 'skill skillLight'}><SiJavascript />JavaScript</span>
            <span className={dark ? 'skill skillDark' : 'skill skillLight'}><SiExpress />Express</span>
            <span className={dark ? 'skill skillDark' : 'skill skillLight'}><SiReact />React</span>
            <span className={dark ? 'skill skillDark' : 'skill skillLight'}><FaNodeJs />Nodejs</span>
            <span className={dark ? 'skill skillDark' : 'skill skillLight'}><SiNextdotjs />Next Js</span>
            <span className={dark ? 'skill skillDark' : 'skill skillLight'}><SiTailwindcss />Tailwind</span>
            <span className={dark ? 'skill skillDark' : 'skill skillLight'}><FaNodeJs />Nodejs</span>
        </div>
        <a href="/Main.pdf" download className="download-btn">
        <button className={dark ? 'skill skillDark' : 'skill skillLight'}>Download Resume</button>
      </a>
    </section>
  )
}

export default Hero