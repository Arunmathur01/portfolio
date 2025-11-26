import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      _id: '1',
      title: 'AgriConnect - Farmer & Buyer Marketplace',
      description: 'Full-stack marketplace connecting farmers and buyers with JWT authentication, real-time bidding, in-app chat, and Cloudinary integration.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Cloudinary'],
      githubUrl: 'https://github.com/Arunmathur01',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&h=400&fit=crop',
      featured: true,
      status: 'completed',
      date: 'Oct 2025'
    },
    {
      _id: '2',
      title: 'Job Portal Website',
      description: 'Full-stack job portal with advanced job search filters, resume upload, and company dashboard for managing applications.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Cloudinary'],
      githubUrl: 'https://github.com/Arunmathur01/job-portal',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop',
      featured: true,
      status: 'completed',
      date: 'Jan 2025'
    },
    {
      _id: '3',
      title: 'X-CoinPay - Cryptocurrency Platform',
      description: 'Crypto payment platform with real-time WebSocket updates, secure JWT authentication, and responsive React frontend.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'WebSockets', 'JWT'],
      githubUrl: 'https://github.com/Arunmathur01/xcoinpay',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=400&fit=crop',
      featured: false,
      status: 'completed',
      date: 'Apr 2025'
    }
  ];

  const filters = ['all', 'featured', 'completed'];
  const filteredProjects = filter === 'all' ? projects : filter === 'featured' ? projects.filter(p => p.featured) : projects.filter(p => p.status === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My <span className="text-gradient">Projects</span></h2>
          <p className="section-subtitle">Here are some of the projects I've worked on</p>
        </div>

        <div className="projects-filter">
          {filters.map((f) => (
            <button key={f} className={`filter-btn ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project._id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-actions">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-btn">
                        <FaGithub />
                      </a>
                    )}
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-btn">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
                {project.featured && <div className="featured-badge">Featured</div>}
                <div className={`status-badge ${project.status}`}>
                  {project.status === 'completed' ? 'Completed' : 'In Progress'}
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => <span key={i} className="tech-tag">{tech}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <a href="https://github.com/Arunmathur01" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <FaGithub /> View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;