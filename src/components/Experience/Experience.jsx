import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const TIMELINE = [
  {
    period: 'Until May 2026',
    role: 'Learning & Development Support',
    org: 'Dangote Cement PLC',
    points: [
      'Supported training analytics and reporting for workforce L&D programmes.',
      'Worked with structured employee training data to help track programme outcomes.',
    ],
  },
  {
    period: 'Oct 2024 – Mar 2025',
    role: 'Data Analytics Tutor',
    org: 'Marusoft Technologies Limited',
    points: [
      'Taught data analytics fundamentals and coding concepts to learners.',
      'This is where I received my own foundational, formal coding training.',
    ],
  },
  {
    period: 'Ongoing',
    role: 'Volunteer Tech Instructor',
    org: 'TechinEjigbo',
    points: [
      'Teach HTML, CSS and JavaScript to secondary school students.',
      'Built an Islamic Quiz Competition app used in a community/school setting.',
    ],
  },
  {
    period: '2024',
    role: 'BSc Computer Science — Second Class Upper',
    org: 'Lagos State University',
    points: [
      'Completed NYSC afterward.',
      'Co-built ScreenerPlus, a malaria-detection CV tool — 1st runner-up at the NACOS LASU/DATICAN AI in Medicine competition.',
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <span className="eyebrow">Experience</span>
      <h2 className="section-heading">Where the work has taken me</h2>

      <div className="timeline">
        {TIMELINE.map((item, i) => (
          <motion.div
            className="timelineItem"
            key={item.role}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
          >
            <div className="timelineMarker">
              <span className="timelineNumber">{String(i + 1).padStart(2, '0')}</span>
              <span className="timelineLine" />
            </div>
            <div className="timelineContent">
              <div className="timelineHead">
                <h3>{item.role}</h3>
                <span className="timelinePeriod">{item.period}</span>
              </div>
              <span className="timelineOrg">{item.org}</span>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
