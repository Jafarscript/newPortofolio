import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <motion.div
        className="contactCard"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow">Get in touch</span>
        <h2 className="contactHeadline">Have a project in mind?</h2>
        <p className="contactBrief">
          Whether it's a business tool, a client website, or something more
          experimental — I'd like to hear about it.
        </p>
        <div className="contactActions">
          <a
            href="https://wa.me/2347069013967?text=Hi%20Jafar%2C%20I%27d%20like%20to%20talk%20about%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btnPrimary"
          >
            Message on WhatsApp
          </a>
          <a href="mailto:lihammedjafar@gmail.com" className="btn btnGhost">
            lihammedjafar@gmail.com
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
