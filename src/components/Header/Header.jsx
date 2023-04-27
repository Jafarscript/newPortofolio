import React, { useState } from "react";
import "./Header.css";
import { FaGithub, FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { TbBrightnessUp } from "react-icons/tb";

const Header = ({dark, setDark}) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <section className="header">
      <div>jafarscript</div>
      <div className="navBar">
        <nav className={ `${isNavExpanded ? 'navLink expanded' : 'navLink'} ${dark ? 'navDark' : 'navLight'}`} onClick={() => {setIsNavExpanded(!isNavExpanded)}}>
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
          </ul>
        </nav>
        <a href="https://github.com/Jafarscript">
          <FaGithub style={{ fontSize: "1.4rem" }} />
        </a>
        <TbBrightnessUp style={{ cursor: "pointer", fontSize: "1.4rem" }} onClick={() => setDark(!dark)} />
        <button className="contactBtn">{"Contact me ->"}</button>
        <button
          className="navToggler"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {isNavExpanded ? <RxCross1 /> : <FaBars />}
        </button>
      </div>
    </section>
  );
};

export default Header;
