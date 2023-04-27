import React from 'react'
import { FaGithub, FaLinkedin, FaFacebookF, FaTwitter } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <section className="footer">
      <div>jafarscript</div>
      <div className="navBar">
        <a href="https://github.com/Jafarscript">
          <FaGithub style={{ fontSize: "1.4rem" }} />
        </a>
        <a href="https://www.linkedin.com/in/jafar-li-hammed-8817a91b4/">
          <FaLinkedin style={{ fontSize: "1.4rem" }} />
        </a>
        <a href="https://web.facebook.com/jafar.olamide">
          <FaFacebookF style={{ fontSize: "1.4rem" }} />
        </a>
        <a href="https://www.linkedin.com/in/jafar-li-hammed-8817a91b4/">
          <FaTwitter style={{ fontSize: "1.4rem" }} />
        </a>
      </div>
    </section>
  )
}

export default Footer