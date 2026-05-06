import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const socials = [
    { href: 'https://github.com/kishore298', icon: <FaGithub />, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/kishore-k-63b4aa250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', icon: <FaLinkedin />, label: 'LinkedIn' },
    { href: 'https://www.instagram.com/k_i_s_h_o_r_e_02_09_08?igsh=MTlwZzg4Mm5lcXB1aA==', icon: <FaInstagram />, label: 'Instagram' },
  ];

  return (
    <footer
      className="relative py-10 px-6 text-center"
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid rgba(57,255,20,0.1)',
      }}
    >
      {/* Logo */}
      <a
        href="#home"
        className="inline-block mb-6 text-lg font-bold"
        style={{ fontFamily: 'JetBrains Mono, monospace' }}
      >
        &lt;<span className="neon-text">Kishore</span>/&gt;
      </a>

      {/* Nav links */}
      <div className="flex justify-center flex-wrap gap-6 mb-6">
        {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-xs transition-colors duration-200"
            style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.08em' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#39FF14')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Social icons */}
      <div className="flex justify-center gap-5 mb-8">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="text-xl transition-all duration-200"
            style={{ color: 'rgba(255,255,255,0.35)' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#39FF14'; e.currentTarget.style.filter = 'drop-shadow(0 0 6px #39FF14)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.35)'; e.currentTarget.style.filter = 'none'; }}
          >
            {s.icon}
          </a>
        ))}
      </div>

      {/* Divider */}
      <div
        className="mx-auto mb-6 h-px max-w-sm"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(57,255,20,0.2), transparent)' }}
      />

      {/* Copyright */}
      <p
        className="text-xs"
        style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'JetBrains Mono, monospace' }}
      >
        © {new Date().getFullYear()} &nbsp;
        <span className="neon-text">Kishore K</span>
        &nbsp;— Designed &amp; Built with ❤️
      </p>
    </footer>
  );
};

export default Footer;
