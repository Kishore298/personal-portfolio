import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Double Tap Innovations and Technologies',
    role: 'MERN Stack Developer',
    period: 'Nov 2025 – Present',
    projects: [
      {
        name: 'Fulupo – E-commerce Platform',
        tech: ['MERN Stack'],
        points: [
          'Owned end-to-end backend development for the Delivery Partner module including order allocation and order status management.',
          'Contributed to Store Admin, Master Admin, and Consumer modules by implementing new features and resolving production issues.',
          'Designed and maintained scalable REST APIs for smooth communication between services.',
          'Improved system maintainability by following clean architecture and modular backend practices.',
          'Collaborated within the development team to enhance application performance and production stability.',
        ],
      },
      {
        name: 'Infysec – Educational Training Platform',
        tech: ['MERN Stack'],
        points: [
          'Worked as a MERN Full Stack Developer handling backend development and CRM frontend dashboard implementation.',
          'Built RESTful APIs for course workflows, bootcamp management, voucher management, and admin operations.',
          'Developed responsive CRM dashboards for internal operations and data management.',
          'Implemented scalable backend logic and optimized API workflows for better performance.',
          'Successfully delivered production-ready modules with stable functionality.',
        ],
      },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-24 px-6"
      style={{ background: '#000000' }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="section-heading">Experience</h2>
        </motion.div>

        {experiences.map((exp, ei) => (
          <motion.div
            key={ei}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-10"
          >
            {/* Company Header */}
            <div className="glass-card p-6 mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3
                      className="text-xl font-bold text-white"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {exp.company}
                    </h3>
                    <span
                      className="text-xs px-2.5 py-0.5 rounded-full font-mono flex items-center gap-1.5"
                      style={{
                        background: 'rgba(57, 255, 20, 0.1)',
                        border: '1px solid rgba(57, 255, 20, 0.35)',
                        color: 'var(--green)',
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-pulse" />
                      Nov 2025 – Present
                    </span>
                  </div>
                  <span className="neon-text text-sm font-semibold" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {exp.role}
                  </span>
                </div>
                <span
                  className="category-badge self-start sm:self-auto"
                >
                  {exp.period}
                </span>
              </div>
            </div>

            {/* Projects */}
            <div className="flex flex-col gap-8 pl-6 relative">
              {/* Timeline line */}
              <div className="timeline-line" />

              {exp.projects.map((proj, pi) => (
                <motion.div
                  key={pi}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55, delay: 0.1 + pi * 0.12 }}
                  className="glass-card p-6 relative"
                >
                  {/* Timeline dot */}
                  <div
                    className="timeline-dot absolute"
                    style={{ left: '-2.1rem', top: '1.5rem' }}
                  />

                  {/* Project name + tech */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-5">
                    <h4
                      className="text-lg font-bold"
                      style={{ color: 'rgba(255,255,255,0.92)', fontFamily: 'Inter, sans-serif' }}
                    >
                      {proj.name}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {proj.tech.map((t) => (
                        <span key={t} className="tech-tag">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="flex flex-col gap-3">
                    {proj.points.map((pt, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm leading-relaxed"
                        style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif' }}
                      >
                        <span
                          className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                          style={{ background: 'var(--green)', boxShadow: '0 0 6px var(--green)' }}
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
