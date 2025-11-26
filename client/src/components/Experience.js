import React from 'react';
import { FaGraduationCap, FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaTrophy, FaCertificate } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Indian Institute of Information Technology, Manipur',
      duration: 'June 2022 - 2026',
      location: 'Manipur, India'
    }
  ];

  const workExperience = [
    {
      position: 'Web Development Intern',
      company: 'Oasis Infobyte',
      duration: 'May 2024 - Jun 2024',
      location: 'Remote',
      description: [
        'Developed modern user interfaces using HTML, CSS, JavaScript',
        'Applied CSS Grid/Flexbox for responsive layouts',
        'Deployed projects on GitHub Pages'
      ]
    }
  ];

  const certifications = [
    { name: 'Web Development Course', issuer: 'LearnVern', date: 'Nov 2023 - Jan 2024' },
    { name: 'C/C++ Programming', issuer: 'Udemy', date: 'Jul 2023 - Oct 2023' },
    { name: 'The Joy of Computing Using Python', issuer: 'NPTEL (Top 5%)', date: 'Jul 2024 - Oct 2024' }
  ];

  const awards = [
    { title: '2nd Prize', event: 'RoboWars Competition, IIITM Techfest (2024)' }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education & <span className="text-gradient">Experience</span></h2>
          <p className="section-subtitle">My academic background and professional experience</p>
        </div>

        <div className="experience-content">
          <div className="experience-section">
            <h3 className="section-heading"><FaGraduationCap className="section-icon" /> Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"><FaGraduationCap /></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">{edu.degree}</h4>
                    <h5 className="timeline-subtitle">{edu.institution}</h5>
                    <div className="timeline-meta">
                      <span><FaCalendarAlt /> {edu.duration}</span>
                      <span><FaMapMarkerAlt /> {edu.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="experience-section">
            <h3 className="section-heading"><FaBriefcase className="section-icon" /> Experience</h3>
            <div className="timeline">
              {workExperience.map((work, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"><FaBriefcase /></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">{work.position}</h4>
                    <h5 className="timeline-subtitle">{work.company}</h5>
                    <div className="timeline-meta">
                      <span><FaCalendarAlt /> {work.duration}</span>
                      <span><FaMapMarkerAlt /> {work.location}</span>
                    </div>
                    <ul className="timeline-description">
                      {work.description.map((desc, i) => <li key={i}>{desc}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="achievements-grid">
          <div className="achievements-section">
            <h3 className="section-heading"><FaCertificate className="section-icon" /> Certifications</h3>
            <div className="achievements-list">
              {certifications.map((cert, index) => (
                <div key={index} className="achievement-card">
                  <div className="achievement-icon"><FaCertificate /></div>
                  <div className="achievement-content">
                    <h4>{cert.name}</h4>
                    <p>{cert.issuer}</p>
                    <span className="achievement-date">{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="achievements-section">
            <h3 className="section-heading"><FaTrophy className="section-icon" /> Awards</h3>
            <div className="achievements-list">
              {awards.map((award, index) => (
                <div key={index} className="achievement-card award-card">
                  <div className="achievement-icon award-icon"><FaTrophy /></div>
                  <div className="achievement-content">
                    <h4>{award.title}</h4>
                    <p>{award.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;