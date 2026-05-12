import React from 'react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Grocery Mart',
      semester: '1st Semester',
      description: 'A grocery store website with product listings and shopping features built with vanilla web technologies.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      highlights: ['Responsive Design', 'Product Catalog', 'Shopping Cart']
    },
    {
      title: 'Whack-a-Mole Game',
      semester: '2nd Semester',
      description: 'An interactive game where players click on appearing moles to score points. Features game logic, scoring system, and animations.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'MongoDB'],
      highlights: ['Game Logic', 'Score Tracking', 'Animations']
    },
    {
      title: 'To-Do List Application',
      semester: '2nd Semester',
      description: 'A task management application allowing users to create, update, and delete tasks with a clean interface.',
      technologies: ['HTML5', 'CSS3', 'JavaScript (Vanilla)'],
      highlights: ['CRUD Operations', 'Local Storage', 'Responsive UI']
    },
    {
      title: 'CompanyFlow Dashboard',
      semester: '3rd Semester',
      description: 'An admin dashboard for managing company operations with different user roles and permissions.',
      technologies: ['Python', 'PHP', 'SQL'],
      highlights: ['Role-based Access', 'Data Management', 'Admin Panel']
    },
    {
      title: 'Sudoku Puzzle Game',
      semester: '3rd Semester',
      description: 'An interactive Sudoku game with game logic, validation, and progress saving using browser local storage.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
      highlights: ['Game Logic', 'Data Persistence', 'User Interface']
    },
    {
      title: 'Virtual Keyboard',
      semester: '3rd Semester',
      description: 'A virtual keyboard application using hand detection and gesture recognition with webcam input.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'TensorFlow.js', 'MediaPipe Hands', 'Tailwind CSS'],
      highlights: ['Hand Detection', 'Gesture Recognition', 'WebRTC Integration']
    },
    {
      title: 'Attendify',
      semester: '4th Semester',
      description: 'An attendance management system with JWT authentication and secure API endpoints.',
      technologies: ['React JS', 'Node.js', 'MongoDB', 'JWT', 'Fast API'],
      highlights: ['Authentication', 'REST APIs', 'Real-time Updates']
    }
  ]

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">My academic and personal projects</p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="semester">{project.semester}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-highlights">
                {project.highlights.map((highlight, idx) => (
                  <span key={idx} className="highlight">{highlight}</span>
                ))}
              </div>
              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
