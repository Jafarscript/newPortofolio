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
          <div className="projectImage"></div>
          <div className="projectStack">
          <div className="projectSkills">
              <span className={dark ? 'skillDark' : 'skillLight'}>HTML</span>
              <span className={dark ? 'skillDark' : 'skillLight'}>CSS</span>
              <span className={dark ? 'skillDark' : 'skillLight'}>React</span>
            </div>
            <div className="projectLink">
              <a href="https://github.com/Jafarscript">
                <FaGithub />
              </a>
              <a href="https://github.com/Jafarscript">
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
            <h2 className="projectName">Rock,Paper&Scissors</h2>
            <h5 className={dark ? 'dateDark' : 'date'}>2022</h5>
          </div>
          <div className="projectImage"></div>
          <div className="projectStack">
            <div className="projectSkills">
              <span className={dark ? 'skillDark' : 'skillLight'}>HTML</span>
              <span className={dark ? 'skillDark' : 'skillLight'}>CSS</span>
              <span className={dark ? 'skillDark' : 'skillLight'}>React</span>
            </div>
            <div className="projectLink">
              <a href="https://github.com/Jafarscript">
                <FaGithub />
              </a>
              <a href="https://github.com/Jafarscript">
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
            <h2 className="projectName">Rock,Paper&Scissors</h2>
            <h5 className={dark ? 'dateDark' : 'date'}>2022</h5>
          </div>
          <div className="projectImage"></div>
          <div className="projectStack">
          <div className="projectSkills">
              <span className={dark ? 'skillDark' : 'skillLight'}>HTML</span>
              <span className={dark ? 'skillDark' : 'skillLight'}>CSS</span>
              <span className={dark ? 'skillDark' : 'skillLight'}>React</span>
            </div>
            <div className="projectLink">
              <a href="https://github.com/Jafarscript">
                <FaGithub />
              </a>
              <a href="https://github.com/Jafarscript">
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
            <h2 className="projectName">Rock,Paper&Scissors</h2>
            <h5 className={dark ? 'dateDark' : 'date'}>2022</h5>
          </div>
          <div className="projectImage"></div>
          <div className="projectStack">
          <div className="projectSkills">
              <span className={dark ? 'skillDark' : 'skillLight'}>HTML</span>
              <span className={dark ? 'skillDark' : 'skillLight'}>CSS</span>
              <span className={dark ? 'skillDark' : 'skillLight'}>React</span>
            </div>
            <div className="projectLink">
              <a href="https://github.com/Jafarscript">
                <FaGithub />
              </a>
              <a href="https://github.com/Jafarscript">
                <FiExternalLink />
              </a>
            </div>
          </div>
          <div className="projectDetials">
          Rock,Paper and Scissors game build with react JS
          </div>
        </div>
      </main>
    </section>
  );
};

export default Work;
