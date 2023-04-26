import React, { useState } from "react";
import "./Header.css";
import { FaGithub, FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { TbBrightnessUp } from "react-icons/tb";

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <section className="header">
      <div>jafarscript</div>
      <div className="navBar">
        <nav className={ isNavExpanded ? 'navLink expanded' : 'navLink'} onClick={() => {setIsNavExpanded(!isNavExpanded)}}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
          </ul>
        </nav>
        <a href="https://github.com/Jafarscript">
          <FaGithub style={{ fontSize: "1.2rem" }} />
        </a>
        <TbBrightnessUp style={{ cursor: "pointer", fontSize: "1.2rem" }} />
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
