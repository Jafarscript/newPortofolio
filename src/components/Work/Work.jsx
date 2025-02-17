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
            <h2 className="projectName">MovieBase</h2>
            <h5 className={dark ? 'dateDark' : 'date'}>2024</h5>
          </div>
          <div className="projectImage"  style={{backgroundImage: 'url(https://res.cloudinary.com/dvo8xhx6r/image/upload/v1733304602/ygvwofqljwtwqzljwl1j.png)'}}></div>
          <div className="projectStack">
          <div className="projectSkills">
              <span className={dark ? 'skillDark' : 'skillLight'}>HTML</span>
              <span className={dark ? 'skillDark' : 'skillLight'}>CSS</span>
              <span className={dark ? 'skillDark' : 'skillLight'}>React</span>
            </div>
            <div className="projectLink">
              <a href="https://github.com/Jafarscript/moviebase" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://moviebase-zeta.vercel.app/" target="_blank" rel="noopener noreferrer">
                <FiExternalLink />
              </a>
            </div>
          </div>
          <div className="projectDetials">
          Movie Explorer: Discover, Filter, and Bookmark Movies!
          </div>
        </div>
        <div className={dark ? 'eachProject eachDark' : 'eachProject eachLight'}>
          <div className="projectHead">
            <h2 className="projectName">Financial Wellness Tracking</h2>
            <h5 className={dark ? 'dateDark' : 'date'}>2024</h5>
          </div>
          <div className="projectImage" style={{backgroundImage: 'url(https://res.cloudinary.com/dvo8xhx6r/image/upload/v1733304733/t8lev8aojetixxdkcbor.png)'}}></div>
          <div className="projectStack">
          <div className="projectSkills">
              <span className={dark ? 'skillDark' : 'skillLight'}>Next JS</span>
              <span className={dark ? 'skillDark' : 'skillLight'}>Tailwind</span>
              <span className={dark ? 'skillDark' : 'skillLight'}>Drizzle ORM</span>
              <span className={dark ? 'skillDark' : 'skillLight'}>PostgreSQL</span>
              <span className={dark ? 'skillDark' : 'skillLight'}>Clerk</span>
            </div>
            <div className="projectLink">
              <a href="https://github.com/Jafarscript/final_year_project" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://final-year-project-seven-ebon.vercel.app/" target="_blank" rel="noopener noreferrer">
                <FiExternalLink />
              </a>
            </div>
          </div>
          <div className="projectDetials">
          Manage Your Expense, Control Your Money
          </div>
        </div>
        <div className={dark ? 'eachProject eachDark' : 'eachProject eachLight'}>
          <div className="projectHead">
            <h2 className="projectName">Oja Landing Page</h2>
            <h5 className={dark ? 'dateDark' : 'date'}>2024</h5>
          </div>
          <div className="projectImage" style={{backgroundImage: 'url(https://res.cloudinary.com/dvo8xhx6r/image/upload/v1733305862/q0wrxpfzw0zjdvi19btm.png)'}}></div>
          <div className="projectStack">
          <div className="projectSkills">
              <span className={dark ? 'skillDark' : 'skillLight'}>Tailwind</span>
              <span className={dark ? 'skillDark' : 'skillLight'}>React</span>
            </div>
            <div className="projectLink">
              <a href="https://github.com/Jafarscript/50react-projects/tree/main/marketing-website" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://ojamarket.netlify.app/" target="_blank" rel="noopener noreferrer">
                <FiExternalLink />
              </a>
            </div>
          </div>
          <div className="projectDetials">
          Shoe Store Landing Page
          </div>
        </div>
      </main>
    </section>
  );
};

export default Work;
