import React, { useState, useEffect } from 'react';
import Hamburger from 'hamburger-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar flex items-center justify-between px-6 py-4 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-4'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Logo */}
      <a href="#home" className="group flex items-center gap-2">
        <span
          style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1.2rem', fontWeight: 700 }}
          className="text-white"
        >
          &lt;
          <span className="neon-text">Kishore</span>
          /&gt;
        </span>
      </a>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            className="nav-link"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.4 }}
          >
            <span className="neon-text-dim text-xs mr-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              {String(i + 1).padStart(2, '0')}.
            </span>
            {link.label}
          </motion.a>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <Hamburger toggled={isOpen} toggle={setIsOpen} color="#39FF14" size={22} />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu absolute top-full left-0 w-full flex flex-col gap-0 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="px-6 py-4 text-sm border-b"
                style={{
                  borderColor: 'rgba(57,255,20,0.1)',
                  fontFamily: 'JetBrains Mono, monospace',
                  color: 'rgba(255,255,255,0.85)',
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
                onClick={() => setIsOpen(false)}
              >
                <span className="neon-text mr-2 text-xs">
                  {String(i + 1).padStart(2, '0')}.
                </span>
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
