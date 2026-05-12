import React from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Shruti Sah</h3>
            <p>BCA Student | Software Developer</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Me</h4>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/shruti-sah-900257347" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/shrutisah9827" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://www.instagram.com/riyanshisah9827?igsh=dmd1Y2N1OWJmb3V4" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Shruti Sah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
