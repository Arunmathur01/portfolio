import React from 'react';
import { FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';
import './About.css';

const About = () => {
  const personalInfo = [
    { icon: FaUser, label: 'Name', value: 'Arun Mathur' },
    { icon: FaPhone, label: 'Phone', value: '+91-8882992249' },
    { icon: FaEnvelope, label: 'Email', value: 'mathurarun102@gmail.com' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Faridabad, Haryana, India' }
  ];

  const stats = [
    { number: '10+', label: 'Projects Completed' },
    { number: '10+', label: 'Technologies' },
    { number: '100%', label: 'Dedication' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
          <p className="section-subtitle">Get to know more about who I am and what I do</p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <img src="/portfolio22.png" alt="Arun Mathur" className="about-img" />
            </div>
          </div>

          <div className="about-info">
            <div className="about-text">
              <h3>Full Stack Web Developer</h3>
              <p>
                I am a dedicated Full Stack Developer skilled in building user-friendly web applications using the MERN stack. 
                Currently pursuing B.Tech in Computer Science and Engineering from Indian Institute of Information Technology, Manipur.
              </p>
              <p>
                My technical expertise spans across multiple programming languages including C/C++, JavaScript, HTML/CSS, 
                and frameworks like React.js, Node.js, Express.js, and MongoDB. I'm also experienced in deploying 
                MERN stack applications on Hostinger and managing web hosting environments.
              </p>
            </div>

            <div className="personal-info">
              {personalInfo.map((info) => (
                <div key={info.label} className="info-item">
                  <div className="info-icon"><info.icon /></div>
                  <div className="info-text">
                    <span className="info-label">{info.label}:</span>
                    <span className="info-value">{info.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-actions">
              <a href="/resume.pdf" className="btn btn-primary" download>
                <FaDownload /> Download Resume
              </a>
              <button className="btn btn-secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        <div className="about-stats">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;