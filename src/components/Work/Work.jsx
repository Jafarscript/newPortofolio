import React from "react";
import { FaGithub } from "react-icons/fa";
import {FiExternalLink} from 'react-icons/fi'
import "./Work.css";

const Work = ({dark}) => {
  return (
    <section className="work" id="work">
      <h1 className="heading">
        My lastest <span className="Comap">work</span>
      </h1>
      <main className="projects">
        <div className={dark ? 'eachProject eachDark' : 'eachProject eachLight'}>
          <div className="projectHead">
            <h2 className="projectName">Rock,Paper&Scissors</h2>
            <h5 className={dark ? 'dateDark' : 'date'}>2022</h5>
          </div>
          <div className="projectImage" style={{backgroundImage: 'url(https://res.cloudinary.com/dvo8xhx6r/image/upload/v1683109792/desktop-step-1_lc68sp.jpg)'}}></div>
          <div className="projectStack">
          <div className="projectSkills">
              <span className={dark ? 'skillDark' : 'skillLight'}>HTML</span>
              <span className={dark ? 'skillDark' : 'skillLight'}>CSS</span>
              <span className={dark ? 'skillDark' : 'skillLight'}>React</span>
            </div>
            <div className="projectLink">
              <a href="https://github.com/Jafarscript/React-Game" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://rps-game101.netlify.app" target="_blank" rel="noopener noreferrer" >
                <FiExternalLink />
              </a>
            </div>
          </div>
          <div className="projectDetials">
          Rock,Paper and Scissors game build with react JS
          </div>
        </div>
        <div className={dark ? 'eachProject eachDark' : 'eachProject eachLight'}>
          <div className="projectHead">
            <h2 className="projectName">PowerGym</h2>
            <h5 className={dark ? 'dateDark' : 'date'}>2022</h5>
          </div>
          <div className="projectImage" style={{backgroundImage: 'url(https://res.cloudinary.com/dvo8xhx6r/image/upload/v1683109190/maxresdefault_ttbim3.jpg)'}}></div>
          <div className="projectStack">
            <div className="projectSkills">
              <span className={dark ? 'skillDark' : 'skillLight'}>HTML</span>
              <span className={dark ? 'skillDark' : 'skillLight'}>CSS</span>
              <span className={dark ? 'skillDark' : 'skillLight'}>React</span>
            </div>
            <div className="projectLink">
              <a href="https://github.com/Jafarscript/gymClub"  target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://powergym450.netlify.app" target="_blank" rel="noopener noreferrer">
                <FiExternalLink />
              </a>
            </div>
          </div>
          <div className="projectDetials">
          In this club we will help build you ideal body for male and female
          </div>
        </div>
        <div className={dark ? 'eachProject eachDark' : 'eachProject eachLight'}>
          <div className="projectHead">
            <h2 className="projectName">AL-MANAT</h2>
            <h5 className={dark ? 'dateDark' : 'date'}>2022</h5>
          </div>
          <div className="projectImage"  style={{backgroundImage: 'url(https://res.cloudinary.com/dvo8xhx6r/image/upload/v1683110020/travel-agency-web-design_txi7j5.jpg)'}}></div>
          <div className="projectStack">
          <div className="projectSkills">
              <span className={dark ? 'skillDark' : 'skillLight'}>HTML</span>
              <span className={dark ? 'skillDark' : 'skillLight'}>CSS</span>
              <span className={dark ? 'skillDark' : 'skillLight'}>React</span>
            </div>
            <div className="projectLink">
              <a href="https://github.com/Jafarscript" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://al-manat.netlify.app" target="_blank" rel="noopener noreferrer">
                <FiExternalLink />
              </a>
            </div>
          </div>
          <div className="projectDetials">
          Travels and Tours agency, Umrah and Hajj agency website
          </div>
        </div>
        <div className={dark ? 'eachProject eachDark' : 'eachProject eachLight'}>
          <div className="projectHead">
            <h2 className="projectName">Short Video App</h2>
            <h5 className={dark ? 'dateDark' : 'date'}>2022</h5>
          </div>
          <div className="projectImage" style={{backgroundImage: 'url(https://res.cloudinary.com/dvo8xhx6r/image/upload/v1683110344/20201031052954_detail.036_atjb3v.jpg)'}}></div>
          <div className="projectStack">
          <div className="projectSkills">
              <span className={dark ? 'skillDark' : 'skillLight'}>MERN</span>
            </div>
            <div className="projectLink">
              <a href="https://github.com/Jafarscript/short-mern-video" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://short-video-app.netlify.app" target="_blank" rel="noopener noreferrer">
                <FiExternalLink />
              </a>
            </div>
          </div>
          <div className="projectDetials">
          Short Video App created with MERN stack
          </div>
        </div>
      </main>
    </section>
  );
};

export default Work;
