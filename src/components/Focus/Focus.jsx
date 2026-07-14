import React from 'react';
import { motion } from 'framer-motion';
import './Focus.css';

const AREAS = [
  {
    label: 'Business & Fintech Tools',
    detail:
      'Invoicing platforms, checkout flows and Paystack-integrated storefronts built for small and growing Nigerian businesses.',
  },
  {
    label: 'AI-Assisted Applications',
    detail:
      'Gemini-powered resume review and computer-vision diagnostics — practical AI layered onto real workflows, not novelty demos.',
  },
  {
    label: 'Civic & Education Tech',
    detail:
      'A full election-management system used in an actual NYSC election, plus quiz and learning tools for community education.',
  },
  {
    label: 'Client Websites',
    detail:
      'Brand-ready sites for real businesses — from a Lagos confectionery to a Hajj & Umrah travel agency — shipped end to end.',
  },
];

const Focus = () => {
  return (
    <section className="focus section" id="focus">
      <motion.span
        className="eyebrow"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4 }}
      >
        What I build
      </motion.span>
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, delay: 0.05 }}
      >
        Four kinds of problems I keep coming back to
      </motion.h2>

      <div className="focusGrid">
        {AREAS.map((area, i) => (
          <motion.div
            className="focusCard"
            key={area.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
          >
            <h3>{area.label}</h3>
            <p>{area.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Focus;
