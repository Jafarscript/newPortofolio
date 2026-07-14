import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const TERMINAL_LINES = [
  { cmd: 'whoami', out: 'jafar li-hammed — full-stack developer' },
  { cmd: 'location', out: 'Lagos, Nigeria' },
  { cmd: 'status', out: 'open to full-time roles & freelance work' },
  { cmd: 'stack', out: 'react · node.js · typescript · mongodb' },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.35, delayChildren: 0.3 },
  },
};

const line = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="heroGrid">
        <motion.div
          className="heroCopy"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="eyebrow">Full-Stack Developer · Lagos, NG</span>
          <h1 className="heroHeadline">
            I build software Nigerian businesses actually run on.
          </h1>
          <p className="heroBrief">
            From invoicing tools to civic-tech election systems, I design and
            ship full-stack products end to end — React and Node.js on the
            surface, careful data modelling and clean auth underneath. Second
            Class Upper, Computer Science, Lagos State University.
          </p>
          <div className="heroActions">
            <a
              href="https://wa.me/2347069013967?text=Hi%20Jafar%2C%20I%27d%20like%20to%20talk%20about%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btnPrimary"
            >
              Start a project
            </a>
            <a href="./Main.pdf" download className="btn btnGhost">
              Download résumé
            </a>
          </div>
        </motion.div>

        <motion.div
          className="terminal"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
        >
          <div className="terminalBar">
            <span className="dot dotRed" />
            <span className="dot dotYellow" />
            <span className="dot dotGreen" />
            <span className="terminalTitle">status.sh</span>
          </div>
          <motion.div
            className="terminalBody"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {TERMINAL_LINES.map((item, i) => (
              <motion.div className="terminalLine" key={item.cmd} variants={line}>
                <span className="terminalPrompt">$</span> {item.cmd}
                <div className="terminalOut">
                  {item.out}
                  {i === TERMINAL_LINES.length - 1 && <span className="cursor" />}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
