import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import project1 from './assets/images/rps.webp';
import project2 from './assets/images/portfolio.webp';
import project3 from './assets/images/v-crackers-logo.png';
import project4 from './assets/images/leo-crackers-logo.jpg';
import dolphinoLogo from './assets/images/dolphino-logo.png';
import muthusPetalsLogo from './assets/images/muthuspetals-logo.jpeg';
import paapiLogo from './assets/images/paapi-logo.png';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const companyProjects = [
  {
    name: 'Fulupo',
    subtitle: 'E-commerce Platform',
    category: 'Company — Double Tap Innovations',
    tech: ['MERN Stack', 'REST APIs', 'Node.js', 'MongoDB'],
    description:
      'End-to-end backend development for the Delivery Partner module including order allocation and status management. Contributed to Store Admin, Master Admin, and Consumer modules.',
    highlights: ['Order Allocation Engine', 'Multi-role REST APIs', 'Modular Architecture'],
    sourceCode: null,
    liveDemo: null,
  },
  {
    name: 'Infysec',
    subtitle: 'Educational Training Platform',
    category: 'Company — Double Tap Innovations',
    tech: ['MERN Stack', 'CRM Dashboard', 'REST APIs'],
    description:
      'Full Stack development covering backend APIs for course workflows, bootcamp management, voucher management, and admin operations. Developed responsive CRM dashboards for internal operations.',
    highlights: ['Bootcamp Management', 'Voucher System', 'CRM Dashboard'],
    sourceCode: null,
    liveDemo: null,
  },
];

const personalProjects = [
  {
    name: "Muthu's Petals",
    subtitle: 'Floral & Event Decor E-commerce',
    category: 'Client Project',
    tech: ['MERN Stack', 'Node.js', 'MongoDB', 'REST APIs', 'Razorpay'],
    description:
      'Custom e-commerce platform for ordering fresh flower bouquets, garlands, and event decorations. Features catalog management, smooth cart workflows, and secure online ordering.',
    highlights: ['Product Catalog', 'Order Management', 'E-commerce Checkout'],
    image: muthusPetalsLogo,
    sourceCode: 'https://github.com/Kishore298/muthus-petals',
    liveDemo: 'https://muthuspetals.com',
  },
  {
    name: 'Paapi Crackers',
    subtitle: 'Fireworks E-commerce Website',
    category: 'Client Project',
    tech: ['MERN Stack', 'Razorpay', 'WhatsApp Cloud API', 'Node.js'],
    description:
      'Full-scale festival fireworks e-commerce platform with live price calculation, festival discounts, instant WhatsApp order alerts, and integrated Razorpay payment gateway.',
    highlights: ['Instant Checkout', 'WhatsApp Alerts', 'Razorpay Gateway'],
    image: paapiLogo,
    sourceCode: 'https://github.com/Kishore298/paapi-crackers',
    liveDemo: 'https://paapicrackers.com',
  },
  {
    name: 'Dolphino Swimming Pool',
    subtitle: 'Academy & Booking Platform',
    category: 'Client Project',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    description:
      'Interactive web platform for a professional swimming academy and pool facility. Features service details, slot & membership inquiries, gallery showcase, and responsive UI.',
    highlights: ['Booking Inquiries', 'Modern UI/UX', 'RESTful Backend'],
    image: dolphinoLogo,
    sourceCode: 'https://github.com/Kishore298/dolphino-pool',
    liveDemo: null,
  },
  {
    name: 'V Crackers',
    subtitle: 'E-commerce Website',
    category: 'Client Project',
    tech: ['MERN Stack', 'Razorpay', 'WhatsApp Cloud API'],
    description:
      'Integrated Razorpay payment gateway for secure checkout workflows. Implemented WhatsApp authentication and automated order notifications. Deployed on MilesWeb cPanel shared hosting.',
    highlights: ['Razorpay Integration', 'WhatsApp Auth', 'cPanel Deployment'],
    image: project3,
    sourceCode: 'https://github.com/Kishore298/crackers-mern',
    liveDemo: 'https://vcrackers.in',
  },
  {
    name: 'Leo Crackers',
    subtitle: 'E-commerce Website',
    category: 'Client Project',
    tech: ['MERN Stack', 'WhatsApp Cloud API', 'Nodemailer'],
    description:
      'WhatsApp-based authentication and automated order communication systems. Email notification workflows using Nodemailer. Full product catalog and admin dashboard modules.',
    highlights: ['WhatsApp OTP Auth', 'Nodemailer Emails', 'Admin Dashboard'],
    image: project4,
    sourceCode: 'https://github.com/Kishore298/leo-crackers-mern',
    liveDemo: 'https://leocrackers.in',
  },
  {
    name: 'Personal Portfolio',
    subtitle: 'Developer Portfolio',
    category: 'Personal Project',
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    description:
      'This very portfolio — built with React, Tailwind CSS, and premium animations including particle network, glassmorphism cards, and interactive typing effects.',
    highlights: ['Particle Network', 'Framer Motion', 'Black + Green Theme'],
    image: project2,
    sourceCode: 'https://github.com/Kishore298',
    liveDemo: '#home',
  },
  {
    name: 'Rock Paper Scissors',
    subtitle: 'Interactive Game',
    category: 'Personal Project',
    tech: ['JavaScript', 'HTML5', 'CSS3'],
    description:
      'A fun and interactive Rock Paper Scissors game with clean UI and smooth animations. Fully deployed as a live demo on GitHub Pages.',
    highlights: ['Animated UI', 'Score Tracking', 'GitHub Pages'],
    image: project1,
    sourceCode: 'https://github.com/Kishore298/rock-paper-scissors-game',
    liveDemo: 'https://kishore298.github.io/rock-paper-scissors-game/',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1 },
  }),
};

const CompanyCard = ({ project, index }) => (
  <motion.div
    custom={index}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
  >
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      glareEnable={true}
      glareMaxOpacity={0.05}
      glareColor="#39FF14"
      glarePosition="all"
      scale={1.01}
      transitionSpeed={1200}
    >
      <div className="glass-card p-6 h-full flex flex-col">
        {/* Top row */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <span className="category-badge text-xs mb-2 block">{project.category}</span>
            <h3
              className="text-xl font-bold text-white"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {project.name}
            </h3>
            <p
              className="text-sm mt-0.5"
              style={{ color: 'var(--green)', fontFamily: 'JetBrains Mono, monospace' }}
            >
              {project.subtitle}
            </p>
          </div>
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(57,255,20,0.1)', border: '1px solid rgba(57,255,20,0.25)' }}
          >
            <span className="neon-text text-lg font-black" style={{ fontFamily: 'JetBrains Mono' }}>
              {project.name[0]}
            </span>
          </div>
        </div>

        {/* Description */}
        <p
          className="text-sm leading-relaxed mb-5 flex-1"
          style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}
        >
          {project.description}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.highlights.map((h) => (
            <span key={h} className="tech-tag">{h}</span>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: '1px solid rgba(57,255,20,0.1)' }}>
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 rounded"
              style={{ color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.05)', fontFamily: 'JetBrains Mono, monospace' }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Confidential badge */}
        <p
          className="text-xs mt-3"
          style={{ color: 'rgba(57,255,20,0.4)', fontFamily: 'JetBrains Mono, monospace' }}
        >
          {"// source code — proprietary"}
        </p>
      </div>
    </Tilt>
  </motion.div>
);

const PersonalCard = ({ project, index }) => (
  <motion.div
    custom={index}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
  >
    <Tilt
      tiltMaxAngleX={6}
      tiltMaxAngleY={6}
      glareEnable={true}
      glareMaxOpacity={0.06}
      glareColor="#39FF14"
      glarePosition="all"
      scale={1.02}
      transitionSpeed={1200}
      className="h-full"
    >
      <div className="glass-card overflow-hidden h-full flex flex-col group">
        {/* Image */}
        {project.image && (
          <div className="relative overflow-hidden h-44 flex-shrink-0 bg-[#090d13] flex items-center justify-center p-3 border-b border-[rgba(57,255,20,0.1)]">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(13,17,23,0.9))' }}
            />
            <span className="absolute bottom-3 left-4 category-badge text-xs">
              {project.category}
            </span>
          </div>
        )}

        <div className="p-5 flex flex-col flex-1 justify-between">
          <div>
            {/* Name */}
            <div className="flex items-start justify-between gap-2 mb-3">
              <div>
                <h3
                  className="text-lg font-bold text-white group-hover:text-[var(--green)] transition-colors duration-200"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {project.name}
                </h3>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: 'var(--green)', fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {project.subtitle}
                </p>
              </div>

              {/* Links */}
              <div className="flex items-center gap-2 flex-shrink-0">
                {project.sourceCode && (
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md hover:bg-[rgba(57,255,20,0.1)]"
                    style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', transition: 'all 0.2s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#39FF14'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
                    title="Source Code"
                  >
                    <FaGithub />
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md hover:bg-[rgba(57,255,20,0.1)]"
                    style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', transition: 'all 0.2s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#39FF14'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
                    title="Live Demo"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif' }}
            >
              {project.description}
            </p>

            {/* Highlights */}
            {project.highlights && (
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.highlights.map((h) => (
                  <span
                    key={h}
                    className="text-[11px] px-2 py-0.5 rounded font-mono"
                    style={{
                      background: 'rgba(57,255,20,0.06)',
                      color: 'rgba(255,255,255,0.8)',
                      border: '1px solid rgba(57,255,20,0.15)',
                    }}
                  >
                    {h}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 pt-3" style={{ borderTop: '1px solid rgba(57,255,20,0.1)' }}>
            {project.tech.map((t) => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </Tilt>
  </motion.div>
);

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-24 px-6"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="section-heading">Projects</h2>
        </motion.div>

        {/* Company Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <p
            className="text-sm font-semibold mb-5 flex items-center gap-2"
            style={{ fontFamily: 'JetBrains Mono, monospace', color: 'var(--green)' }}
          >
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ background: 'var(--green)', boxShadow: '0 0 8px var(--green)' }}
            />
            Company Projects
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {companyProjects.map((project, i) => (
              <CompanyCard key={project.name} project={project} index={i} />
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div
          className="my-12 h-px w-full"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(57,255,20,0.25), transparent)' }}
        />

        {/* Client & Personal Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <p
            className="text-sm font-semibold mb-5 flex items-center gap-2"
            style={{ fontFamily: 'JetBrains Mono, monospace', color: 'var(--green)' }}
          >
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ background: 'var(--green)', boxShadow: '0 0 8px var(--green)' }}
            />
            Client &amp; Personal Projects
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalProjects.map((project, i) => (
              <PersonalCard key={project.name} project={project} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

