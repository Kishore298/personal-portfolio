import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { init, send } from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

  init('hOhSwbDg3fFCjLx34');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    const e = {};
    if (!form.name) e.name = 'Name is required.';
    if (!form.email) {
      e.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      e.email = 'Invalid email address.';
    }
    if (!form.subject) e.subject = 'Subject is required.';
    if (!form.message) e.message = 'Message is required.';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus('sending');
    send('service_i9vamxe', 'template_b84z0gp', form)
      .then(() => {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      })
      .catch(() => setStatus('error'));
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const socials = [
    { href: 'https://github.com/kishore298', icon: <FaGithub />, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/kishore-k-63b4aa250', icon: <FaLinkedin />, label: 'LinkedIn' },
    { href: 'https://www.instagram.com/k_i_s_h_o_r_e_02_09_08', icon: <FaInstagram />, label: 'Instagram' },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 px-6"
      style={{ background: '#000000' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="section-heading">Contact Me</h2>
          <p
            className="mt-4 text-sm max-w-md"
            style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}
          >
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form — wider */}
          <motion.div
            className="lg:col-span-3"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    className="contact-input"
                  />
                  {errors.name && <p className="text-xs mt-1" style={{ color: '#ff6b6b' }}>{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    className="contact-input"
                  />
                  {errors.email && <p className="text-xs mt-1" style={{ color: '#ff6b6b' }}>{errors.email}</p>}
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="contact-input"
                />
                {errors.subject && <p className="text-xs mt-1" style={{ color: '#ff6b6b' }}>{errors.subject}</p>}
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your message..."
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="contact-input resize-none"
                />
                {errors.message && <p className="text-xs mt-1" style={{ color: '#ff6b6b' }}>{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="neon-btn-filled neon-btn self-start"
                style={{ opacity: status === 'sending' ? 0.7 : 1 }}
              >
                <FontAwesomeIcon icon={faPaperPlane} />
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm"
                  style={{ color: 'var(--green)', fontFamily: 'JetBrains Mono, monospace' }}
                >
                  ✓ Message sent successfully!
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm"
                  style={{ color: '#ff6b6b', fontFamily: 'JetBrains Mono, monospace' }}
                >
                  ✗ Failed to send. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact Info sidebar */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div className="glass-card p-5">
              <p
                className="text-xs mb-4"
                style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'JetBrains Mono, monospace' }}
              >
                {"// contact details"}
              </p>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(57,255,20,0.1)', border: '1px solid rgba(57,255,20,0.2)' }}
                  >
                    <FontAwesomeIcon icon={faPhone} className="neon-text text-sm" />
                  </div>
                  <div>
                    <p className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'JetBrains Mono, monospace' }}>Phone</p>
                    <a
                      href="tel:6374418536"
                      className="text-sm text-white transition-colors duration-200"
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#39FF14')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
                    >
                      +91 6374418536
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(57,255,20,0.1)', border: '1px solid rgba(57,255,20,0.2)' }}
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="neon-text text-sm" />
                  </div>
                  <div>
                    <p className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'JetBrains Mono, monospace' }}>Email</p>
                    <a
                      href="mailto:Kishore103345@gmail.com"
                      className="text-sm text-white transition-colors duration-200 break-all"
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#39FF14')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
                    >
                      Kishore103345@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="glass-card p-5">
              <p
                className="text-xs mb-4"
                style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'JetBrains Mono, monospace' }}
              >
                {"// find me online"}
              </p>
              <div className="flex flex-col gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm transition-all duration-200 group"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#39FF14')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                  >
                    <span className="text-base">{s.icon}</span>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
