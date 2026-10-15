import React from 'react';
import { motion } from 'framer-motion';
import { FaProjectDiagram, FaRocket, FaBriefcase, FaGlobe } from 'react-icons/fa';

const stats = [
  {
    number: '4+',
    label: 'Projects Completed',
    tag: '// delivered',
    description: 'Full-stack web apps & production platforms',
    icon: <FaProjectDiagram />,
  },
  {
    number: '2',
    label: 'Ongoing Projects',
    tag: '// active sprint',
    description: 'E-commerce & client modules under development',
    icon: <FaRocket />,
  },
  {
    number: '1+',
    label: 'Years of Experience',
    tag: '// professional',
    description: 'MERN stack, REST APIs & backend architecture',
    icon: <FaBriefcase />,
  },
  {
    number: '4+',
    label: 'Live Deployments',
    tag: '// in production',
    description: 'Client websites with active user bases',
    icon: <FaGlobe />,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const Stats = () => {
  return (
    <section
      id="stats"
      className="relative py-16 px-6"
      style={{
        background: 'linear-gradient(180deg, #000000 0%, var(--bg-secondary) 100%)',
        borderTop: '1px solid rgba(57,255,20,0.1)',
        borderBottom: '1px solid rgba(57,255,20,0.1)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="glass-card p-6 flex flex-col justify-between relative group hover:border-[var(--green)] transition-all duration-300"
            >
              {/* Top tag & icon */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-xs"
                  style={{
                    color: 'rgba(57,255,20,0.6)',
                    fontFamily: 'JetBrains Mono, monospace',
                  }}
                >
                  {stat.tag}
                </span>
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-lg transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: 'rgba(57,255,20,0.08)',
                    color: 'var(--green)',
                    border: '1px solid rgba(57,255,20,0.2)',
                  }}
                >
                  {stat.icon}
                </div>
              </div>

              {/* Number */}
              <div className="mb-2">
                <span
                  className="text-4xl md:text-5xl font-black text-white tracking-tight group-hover:text-[var(--green)] transition-colors duration-300"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {stat.number}
                </span>
              </div>

              {/* Label & Description */}
              <div>
                <h3
                  className="text-base font-bold text-white mb-1"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {stat.label}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{
                    color: 'rgba(255,255,255,0.5)',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {stat.description}
                </p>
              </div>

              {/* Bottom subtle glow line */}
              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--green)] group-hover:w-full transition-all duration-500 rounded-b-xl"
                style={{
                  boxShadow: '0 0 10px var(--green)',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
