import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaArrowRight,
  FaExternalLinkAlt,
} from 'react-icons/fa';

const contactDetails = [
  {
    icon: <FaPhoneAlt />,
    tag: '// direct line',
    label: 'Phone',
    value: '+91 6374418536',
    href: 'tel:6374418536',
    actionLabel: 'Call Directly',
    isExternal: false,
  },
  {
    icon: <FaEnvelope />,
    tag: '// personal inbox',
    label: 'Email',
    value: 'Kishore103345@gmail.com',
    href: 'mailto:Kishore103345@gmail.com',
    actionLabel: 'Send Email',
    isExternal: false,
  },
  {
    icon: <FaLinkedin />,
    tag: '// professional network',
    label: 'LinkedIn',
    value: 'Kishore K',
    href: 'https://www.linkedin.com/in/kishore-k-63b4aa250',
    actionLabel: 'Let’s Connect',
    isExternal: true,
  },
  {
    icon: <FaGithub />,
    tag: '// repositories & code',
    label: 'GitHub',
    value: 'Kishore298',
    href: 'https://github.com/kishore298',
    actionLabel: 'Explore GitHub',
    isExternal: true,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 px-6"
      style={{ background: '#000000' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center max-w-2xl mx-auto"
        >
          <h2 className="section-heading mb-4">Contact Me</h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}
          >
            Have an opportunity, project in mind, or just want to say hi?
            Reach out directly through any of my channels below.
          </p>
        </motion.div>

        {/* Contact Details — side by side on same line */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactDetails.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.isExternal ? '_blank' : undefined}
              rel={item.isExternal ? 'noopener noreferrer' : undefined}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="glass-card p-6 flex flex-col justify-between group hover:border-[var(--green)] transition-all duration-300 no-underline"
              style={{ textDecoration: 'none' }}
            >
              <div>
                {/* Top bar with tag & icon */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="text-xs"
                    style={{
                      color: 'rgba(57,255,20,0.6)',
                      fontFamily: 'JetBrains Mono, monospace',
                    }}
                  >
                    {item.tag}
                  </span>
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-lg transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: 'rgba(57,255,20,0.08)',
                      color: 'var(--green)',
                      border: '1px solid rgba(57,255,20,0.25)',
                      boxShadow: '0 0 12px rgba(57,255,20,0.1)',
                    }}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Label */}
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-1"
                  style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {item.label}
                </p>

                {/* Value */}
                <h3
                  className="text-base md:text-lg font-bold text-white mb-6 break-all group-hover:text-[var(--green)] transition-colors duration-200"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {item.value}
                </h3>
              </div>

              {/* Action Button */}
              <div
                className="pt-4 flex items-center justify-between text-xs font-semibold"
                style={{
                  borderTop: '1px solid rgba(57,255,20,0.12)',
                  color: 'var(--green)',
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              >
                <span>{item.actionLabel}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  {item.isExternal ? <FaExternalLinkAlt className="text-[11px]" /> : <FaArrowRight />}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Availability Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background: 'linear-gradient(135deg, rgba(13,17,23,0.95), rgba(7,10,14,0.95))',
            borderColor: 'rgba(57,255,20,0.25)',
          }}
        >
          <div className="flex items-center gap-4 text-left">
            <div className="relative flex-shrink-0">
              <span className="flex h-3.5 w-3.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--green)] opacity-75" />
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[var(--green)]" />
              </span>
            </div>
            <div>
              <p
                className="text-sm font-semibold text-white mb-0.5"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Currently Available for New Opportunities
              </p>
              <p
                className="text-xs"
                style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'JetBrains Mono, monospace' }}
              >
                {"// open to full-time developer roles & freelance web projects"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:Kishore103345@gmail.com"
              className="neon-btn-filled neon-btn text-xs py-2 px-5"
            >
              <FaEnvelope />
              Get in Touch
            </a>
            <a
              href="https://www.instagram.com/k_i_s_h_o_r_e_02_09_08"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-[rgba(57,255,20,0.2)] text-white hover:text-[var(--green)] hover:border-[var(--green)] transition-all duration-200"
              title="Instagram"
            >
              <FaInstagram className="text-base" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
