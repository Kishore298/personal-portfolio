import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCode, faServer, faDatabase } from '@fortawesome/free-solid-svg-icons';
import image1 from './assets/images/web-design-technology-browsing-programming-concept_1206413-21760.webp';

const highlights = [
  { icon: faCode, label: 'Frontend', value: 'React.js & Modern UI' },
  { icon: faServer, label: 'Backend', value: 'Node.js & Express' },
  { icon: faDatabase, label: 'Database', value: 'MongoDB & MySQL' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-6"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          className="mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">About Me</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image */}
          <motion.div
            className="relative flex-shrink-0"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden"
              style={{
                border: '2px solid rgba(57,255,20,0.3)',
                boxShadow: '0 0 30px rgba(57,255,20,0.15), 0 0 60px rgba(57,255,20,0.05)',
              }}
            >
              <img
                src={image1}
                alt="Kishore - Full Stack Developer"
                className="w-full h-full object-cover"
              />
              {/* Overlay tint */}
              <div
                className="absolute inset-0"
                style={{ background: 'rgba(57,255,20,0.04)' }}
              />
            </div>
            {/* Decorative corner brackets */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2" style={{ borderColor: 'var(--green)' }} />
            <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2" style={{ borderColor: 'var(--green)' }} />
            <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2" style={{ borderColor: 'var(--green)' }} />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2" style={{ borderColor: 'var(--green)' }} />
          </motion.div>

          {/* Text Content */}
          <div className="flex-1">
            <motion.p
              className="text-base md:text-lg leading-relaxed mb-5"
              style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I'm a{' '}
              <span className="neon-text font-semibold">MERN Stack Developer</span>{' '}
              with hands-on professional experience building scalable web applications
              and production-grade REST APIs. I hold a degree in Computer Science
              and Engineering and have worked in startup environments delivering
              real-world modules end-to-end.
            </motion.p>

            <motion.p
              className="text-base md:text-lg leading-relaxed mb-8"
              style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I thrive on building backend architectures, optimizing API workflows,
              and integrating third-party services. My experience spans{' '}
              <span style={{ color: 'rgba(57,255,20,0.85)' }}>e-commerce platforms</span>,{' '}
              <span style={{ color: 'rgba(57,255,20,0.85)' }}>educational platforms</span>, and{' '}
              <span style={{ color: 'rgba(57,255,20,0.85)' }}>CRM dashboards</span> — always
              focusing on clean architecture and production stability.
            </motion.p>

            {/* Highlight Cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {highlights.map((h) => (
                <div key={h.label} className="glass-card p-4 text-center">
                  <FontAwesomeIcon icon={h.icon} className="neon-text text-xl mb-2" />
                  <p className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'JetBrains Mono, monospace' }}>
                    {h.label}
                  </p>
                  <p className="text-sm font-semibold text-white">{h.value}</p>
                </div>
              ))}
            </motion.div>

            {/* Social + CTA */}
            <motion.div
              className="flex flex-wrap items-center gap-4"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a href="#contact" className="neon-btn-filled neon-btn">
                <FontAwesomeIcon icon={faPhone} />
                Contact Me
              </a>

              <div className="flex gap-4 text-2xl">
                {[
                  { href: 'https://github.com/kishore298', icon: <FaGithub /> },
                  { href: 'https://www.linkedin.com/in/kishore-k-63b4aa250', icon: <FaLinkedin /> },
                  { href: 'https://www.instagram.com/k_i_s_h_o_r_e_02_09_08', icon: <FaInstagram /> },
                ].map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'rgba(255,255,255,0.4)', transition: 'all 0.2s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#39FF14'; e.currentTarget.style.filter = 'drop-shadow(0 0 6px #39FF14)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; e.currentTarget.style.filter = 'none'; }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
