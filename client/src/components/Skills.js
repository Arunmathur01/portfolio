import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skills = [
    { name: 'C/C++', level: 85, category: 'languages', icon: 'bx-code-alt', color: '#00599C' },
    { name: 'JavaScript', level: 88, category: 'languages', icon: 'bxl-javascript', color: '#F7DF1E' },
    { name: 'HTML/CSS', level: 90, category: 'frontend', icon: 'bxl-html5', color: '#E34F26' },
    { name: 'Python', level: 80, category: 'languages', icon: 'bxl-python', color: '#3776AB' },
    { name: 'React.js', level: 85, category: 'frontend', icon: 'bxl-react', color: '#61DAFB' },
    { name: 'Node.js', level: 82, category: 'backend', icon: 'bxl-nodejs', color: '#339933' },
    { name: 'Express.js', level: 80, category: 'backend', icon: 'bx-server', color: '#000000' },
    { name: 'MongoDB', level: 78, category: 'database', icon: 'bxl-mongodb', color: '#47A248' },
    { name: 'Tailwind CSS', level: 85, category: 'frontend', icon: 'bx-palette', color: '#06B6D4' },
    { name: 'Git/GitHub', level: 85, category: 'tools', icon: 'bxl-git', color: '#F05032' },
    { name: 'VS Code', level: 90, category: 'tools', icon: 'bx-code-alt', color: '#007ACC' },
    { name: 'Hostinger', level: 80, category: 'deployment', icon: 'bx-cloud-upload', color: '#673DE6' },
    { name: 'Deployment', level: 82, category: 'deployment', icon: 'bx-rocket', color: '#FF6B6B' }
  ];

  const categories = ['all', 'frontend', 'backend', 'languages', 'database', 'tools', 'deployment'];

  const filteredSkills = activeCategory === 'all' ? skills : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My <span className="text-gradient">Skills</span></h2>
          <p className="section-subtitle">Technologies and tools I use to bring ideas to life</p>
        </div>

        <div className="skills-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <div className="skill-icon" style={{ color: skill.color }}>
                <i className={`bx ${skill.icon}`}></i>
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-progress-container">
                <div className="skill-progress-bg">
                  <div className="skill-progress-bar" style={{ width: `${skill.level}%`, backgroundColor: skill.color }} />
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-category">{skill.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;