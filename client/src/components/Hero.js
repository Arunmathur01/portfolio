import React, { useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaDownload, FaArrowDown } from 'react-icons/fa';
import Typed from 'typed.js';
import './Hero.css';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ['Full Stack Developer', 'MERN Stack Expert', 'UI/UX Enthusiast', 'Problem Solver'],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 2000,
        loop: true
      });
      return () => typed.destroy();
    }
  }, []);

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Arunmathur01', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/arun88829', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://www.instagram.com/arun_mathur_1/', label: 'Instagram' },
    { icon: FaWhatsapp, href: 'https://wa.me/+918882992249', label: 'WhatsApp' }
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text animate-fadeIn">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">Arun <span className="name-accent">Mathur</span></h1>
            <div className="hero-role">
              <span>I'm a </span>
              <span className="typed-text" ref={typedRef}></span>
            </div>
            <p className="hero-description">
              I am a dedicated Full Stack Developer skilled in building user-friendly web applications using the MERN stack. 
              I focus on writing clean and efficient code and enjoy solving real problems with simple and effective solutions.
            </p>

            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                More About Me <FaArrowDown />
              </button>
              <a href="/resume.pdf" className="btn btn-secondary" download>
                <FaDownload /> Download CV
              </a>
            </div>

            <div className="hero-social">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={social.label}>
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          <div className="hero-image animate-fadeIn">
            <div className="image-container">
              <div className="image-wrapper">
                <img src="/portfolio22.png" alt="Arun Mathur" className="profile-image" />
                <div className="image-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;