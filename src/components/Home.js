import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import resume from './assets/images/Kishore_K_Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  const mouseGlowRef = useRef(null);

  useEffect(() => {
    const section = document.getElementById('home');
    const handleMouseMove = (e) => {
      if (!mouseGlowRef.current || !section) return;
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseGlowRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(57,255,20,0.06), transparent 60%)`;
    };
    section?.addEventListener('mousemove', handleMouseMove);
    return () => section?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center min-h-screen px-6 overflow-hidden"
      style={{ background: '#000000' }}
    >
      {/* Mouse glow overlay */}
      <div
        ref={mouseGlowRef}
        className="pointer-events-none absolute inset-0 transition-all duration-300"
        style={{ zIndex: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Terminal prompt line */}
        <motion.div
          className="mb-6 flex items-center justify-center gap-2 text-sm"
          style={{ fontFamily: 'JetBrains Mono, monospace', color: 'rgba(57,255,20,0.7)' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <FontAwesomeIcon icon={faTerminal} />
          <span>portfolio@kishore:~$</span>
          <span className="text-white opacity-60">whoami</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="gradient-name font-black tracking-tight mb-4"
          style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1.1 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          KISHORE K
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          className="mb-8 text-xl md:text-2xl font-semibold"
          style={{ fontFamily: 'JetBrains Mono, monospace', minHeight: '2em' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span className="text-white opacity-50">&gt; </span>
          <TypeAnimation
            sequence={[
              'MERN Stack Developer',
              2200,
              'Backend Engineer',
              2200,
              'Full Stack Developer',
              2200,
              'API Architect',
              2200,
            ]}
            wrapper="span"
            speed={55}
            deletionSpeed={70}
            repeat={Infinity}
            className="neon-text"
          />
          <span className="neon-text">_</span>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          Passionate MERN Stack Developer crafting scalable web applications
          and production-grade REST APIs. Experienced in backend architecture,
          real-world deployments, and end-to-end module ownership.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <a href="#contact" className="neon-btn-filled neon-btn">
            Contact Me
          </a>
          <a href={resume} download className="neon-btn">
            <FontAwesomeIcon icon={faFileDownload} />
            Download CV
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.1 }}
        >
          <a
            href="https://github.com/kishore298"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl transition-all duration-300"
            style={{ color: 'rgba(255,255,255,0.5)' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#39FF14'; e.currentTarget.style.filter = 'drop-shadow(0 0 8px #39FF14)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.filter = 'none'; }}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kishore-k-63b4aa250"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl transition-all duration-300"
            style={{ color: 'rgba(255,255,255,0.5)' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#39FF14'; e.currentTarget.style.filter = 'drop-shadow(0 0 8px #39FF14)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.filter = 'none'; }}
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2"
        style={{ translateX: '-50%' }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div
          className="w-6 h-10 rounded-full border flex items-start justify-center pt-2"
          style={{ borderColor: 'rgba(57,255,20,0.4)' }}
        >
          <div
            className="w-1 h-3 rounded-full"
            style={{ background: 'var(--green)', boxShadow: '0 0 8px var(--green)' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
