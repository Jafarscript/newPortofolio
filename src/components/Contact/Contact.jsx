import React from 'react'
import './Contact.css'

const Contact = ({dark}) => {
  return (
    <div className='contact'>
        <h1 className={dark ? 'dark' : 'light'}>Ready to start your next project?<br /><span className="Comap">Get it touch me!</span></h1>
    </div>
  )
}

export default Contact