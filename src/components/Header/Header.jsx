import React from 'react'
import './Header.css'
import {FaGithub} from 'react-icons/fa'
import {TbBrightnessUp} from 'react-icons/tb'

const Header = () => {
  return (
    <section className='header'>
        <div>jafarscript</div>
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Work</a></li>
            </ul>
            <a href="https://github.com/Jafarscript"><FaGithub  style={{fontSize: '1.5rem'}}/></a>
            <TbBrightnessUp style={{cursor: 'pointer', fontSize: '1.5rem'}} />
            <button>{'Contact me ->'}</button>
        </nav>

    </section>
  )
}

export default Header