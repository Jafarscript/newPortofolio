import React from 'react'
import './Contact.css'

const Contact = ({dark}) => {
  return (
    <div className='contact'>
        <h1 className={dark ? 'dark' : 'light'}>Ready to start your next project?<br /><span className="Comap"><a href="https://wa.me/7069013967?text=I'm%20interested%20in%20creating%20my%20business%20website">Get it touch me!</a></span></h1>
    </div>
  )
}

export default Contact