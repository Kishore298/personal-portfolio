import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5, faCss3Alt, faJsSquare, faReact, faNodeJs,
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase, faComments, faUsers, faLightbulb, faClock, faServer,
} from '@fortawesome/free-solid-svg-icons';

const techSkills = [
  { name: 'HTML5', icon: faHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: faCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', icon: faJsSquare, color: '#F7DF1E' },
  { name: 'React.js', icon: faReact, color: '#61DAFB' },
  { name: 'Node.js', icon: faNodeJs, color: '#8CC84B' },
  { name: 'Express.js', icon: faServer, color: '#39FF14' },
  { name: 'MongoDB', icon: faDatabase, color: '#47A248' },
  { name: 'MySQL', icon: faDatabase, color: '#00758F' },
];

const softSkills = [
  { name: 'Communication', icon: faComments },
  { name: 'Teamwork', icon: faUsers },
  { name: 'Problem-Solving', icon: faLightbulb },
  { name: 'Adaptability', icon: faClock },
  { name: 'Leadership', icon: faUsers },
  { name: 'Work Ethic', icon: faLightbulb },
  { name: 'Fast Learner', icon: faLightbulb },
  { name: 'Time Management', icon: faClock },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07 },
  }),
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 px-6"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="section-heading">Skills</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <motion.h3
              className="text-lg font-semibold mb-6"
              style={{ fontFamily: 'JetBrains Mono, monospace', color: 'var(--green)' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {'>'} Technical Skills
            </motion.h3>
            <div className="grid grid-cols-2 gap-3">
              {techSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  className="skill-badge group"
                >
                  <FontAwesomeIcon
                    icon={skill.icon}
                    style={{ color: skill.color, fontSize: '1.4rem', flexShrink: 0 }}
                  />
                  <span className="text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <motion.h3
              className="text-lg font-semibold mb-6"
              style={{ fontFamily: 'JetBrains Mono, monospace', color: 'var(--green)' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {'>'} Soft Skills
            </motion.h3>
            <div className="grid grid-cols-2 gap-3">
              {softSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  className="skill-badge"
                >
                  <FontAwesomeIcon
                    icon={skill.icon}
                    style={{ color: 'var(--green)', fontSize: '1.2rem', flexShrink: 0 }}
                  />
                  <span className="text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Also knows */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p
            className="text-sm mb-4"
            style={{ fontFamily: 'JetBrains Mono, monospace', color: 'rgba(255,255,255,0.4)' }}
          >
            {"// also familiar with"}
          </p>
          <div className="flex flex-wrap gap-3">
            {['REST APIs', 'JWT Auth', 'WhatsApp Cloud API', 'Razorpay', 'Nodemailer', 'Git & GitHub', 'Postman', 'cPanel Hosting', 'GSAP', 'Framer Motion'].map((tag) => (
              <span key={tag} className="tech-tag">{tag}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
