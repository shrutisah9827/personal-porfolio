import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm Shruti Sah, a final year BCA student at Chitkara University, Himachal Pradesh, India. 
              I'm passionate about software development and enjoy creating web applications that solve real problems.
            </p>
            <p>
              With a strong foundation in full-stack development, I have experience working with modern technologies 
              and frameworks. I love learning new technologies and pushing my boundaries as a developer.
            </p>
            <p>
              Beyond coding, I'm enthusiastic about problem-solving, data structures, and algorithms. 
              I believe in continuous learning and building practical applications that make an impact.
            </p>
            <div className="about-info">
              <div className="info-item">
                <span className="label">Location:</span>
                <span className="value">Baddi, Himachal Pradesh, India</span>
              </div>
              <div className="info-item">
                <span className="label">University:</span>
                <span className="value">Chitkara University</span>
              </div>
              <div className="info-item">
                <span className="label">Degree:</span>
                <span className="value">BCA (Final Year)</span>
              </div>
              <div className="info-item">
                <span className="label">Specialization:</span>
                <span className="value">Software Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
