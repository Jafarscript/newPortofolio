import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import './Work.css';

// Add `github` or `live` fields as URLs become available — cards render
// the link icons only when a URL is provided, nothing is a placeholder link.
const PROJECTS = [
  {
    name: 'InvoiceNaija',
    year: '2026',
    stack: ['React', 'TypeScript', 'Tailwind', 'Node.js', 'MongoDB'],
    blurb:
      'An invoicing platform for freelancers and small businesses — JWT auth, invoice CRUD, PDF generation, a forgot/reset password flow, and a public landing page.',
    github: 'https://github.com/Jafarscript/invoice-naija',
  },
  {
    name: 'CDS Election Management System',
    year: '2024',
    stack: ['Next.js', 'MongoDB Atlas', 'JWT'],
    blurb:
      'A full election system used in an actual NYSC election — voter verification, one-time ballot submission, bulk CSV voter upload, live results, and an admin dashboard.',
  },
  {
    name: 'ScreenerPlus',
    year: '2024',
    stack: ['Computer Vision', 'Python'],
    blurb:
      'A malaria-detection tool built with a university team, supervised by Prof. Benjamin Aribisala — 1st runner-up at the NACOS LASU/DATICAN Undergraduate Competition on AI in Medicine.',
  },
  {
    name: 'AI Resume Reviewer',
    year: '2025',
    stack: ['Gemini API', 'React', 'Node.js'],
    blurb:
      'A resume feedback tool that uses the Gemini API to review structure, content and clarity, and returns actionable, specific suggestions.',
  },
  {
    name: 'E-Commerce Platform',
    year: '2025',
    stack: ['React', 'Node.js', 'Paystack', 'MongoDB'],
    blurb:
      'A store scaffold with Paystack payment integration and role-based access control, built to be a reusable base for client storefronts.',
  },
  {
    name: 'AL-AMANAT Travels & Services',
    year: '2025',
    stack: ['React Router', 'Client Site'],
    blurb:
      'A multi-page redesign for a Hajj & Umrah travel agency — brand palette of burnt saffron, deep navy and emerald teal, built and delivered end to end.',
  },
];

const Work = () => {
  return (
    <section className="work section" id="work">
      <span className="eyebrow">Selected work</span>
      <h2 className="section-heading">Things I've shipped</h2>

      <div className="projectsGrid">
        {PROJECTS.map((project, i) => (
          <motion.article
            className="projectCard"
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
          >
            <div className="projectTop">
              <h3>{project.name}</h3>
              <span className="projectYear">{project.year}</span>
            </div>
            <p className="projectBlurb">{project.blurb}</p>
            <div className="projectStack">
              {project.stack.map((s) => (
                <span key={s} className="stackChip">{s}</span>
              ))}
            </div>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                <FaGithub /> View code
              </a>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Work;
