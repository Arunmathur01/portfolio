import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaHeart, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Arunmathur01', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/arun88829', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://www.instagram.com/arun_mathur_1/', label: 'Instagram' },
    { icon: FaWhatsapp, href: 'https://wa.me/+918882992249', label: 'WhatsApp' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="brand-name">Arun <span className="brand-accent">Mathur</span></h3>
            <p className="brand-tagline">Full Stack Developer passionate about creating amazing web experiences</p>
            <div className="footer-social">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="social-link">
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={(e) => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }); }}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Get In Touch</h4>
            <div className="contact-info">
              <p><strong>Email:</strong> <a href="mailto:mathurarun102@gmail.com">mathurarun102@gmail.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+918882992249">+91-8882992249</a></p>
              <p><strong>Location:</strong> <span>Faridabad, Haryana, India</span></p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {new Date().getFullYear()} Arun Mathur. Made with <FaHeart className="heart-icon" /> using MERN Stack
            </p>
            <button className="scroll-to-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;