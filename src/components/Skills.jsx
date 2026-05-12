import React from 'react'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React JS', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      skills: ['Node JS', 'Python', 'PHP', 'Fast API']
    },
    {
      category: 'Database',
      skills: ['SQL', 'MongoDB']
    },
    {
      category: 'Tools & Other',
      skills: ['Git', 'Linux', 'Operating System', 'C', 'C++ (OOP)', 'TensorFlow.js', 'MediaPipe', 'Local Storage']
    },
    {
      category: 'Specialization',
      skills: ['Problem Solving', 'Data Structures & Algorithms (DSA)', 'Full Stack Development', 'REST APIs']
    }
  ]

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <h3>{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
