import React,{useState} from 'react'
import {IoIosArrowForward} from 'react-icons/io'
import './Experience.css'

const Experience = ({dark}) => {
    const [toogleSelect, settoogleSelect] = useState(3)

  const selected = (index) =>{
    settoogleSelect(index)
  }
  return (
    <section className='experience' id='about'>
        <h1>My experience</h1>
        <div className="company">
            <div className="name">
                <div className={dark ? "each selectedDark" : "each selected"}>
                    <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1682539451/WhatsApp_Image_2023-04-26_at_8.51.04_PM_bmwtro.jpg" alt="marusoft" />
                    <div className="info">
                        <h4>Marusoft</h4>
                        <span>Frontend Developer</span>
                    </div>
                </div>
            </div>
            <div className="response">
                <div className="position">
                    <h4>Frontend Develpoer <span className="Comap">@Marusoft</span></h4>
                    <p>2020 - 2022</p>
                </div>
                <span><IoIosArrowForward style={{display: 'inline', color: '#2563EB'}} />Developed tools and applications by producing clean, efficient code.</span>
                <span><IoIosArrowForward style={{display: 'inline', color: '#2563EB'}} />Collaborated with designers to translate mockups and wireframes into functional code.</span>
                <span><IoIosArrowForward style={{display: 'inline', color: '#2563EB'}} />Built the front-end of applications through appealing visual design.</span>
                <span><IoIosArrowForward style={{display: 'inline', color: '#2563EB'}} />Troubleshooted and debugged issues that arise in our applications.</span>
            </div>
        </div>
    </section>
  )
}

export default Experience