import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm Shruti Sah</h1>
            <p className="subtitle">Final Year BCA Student | Software Developer</p>
            <p className="description">
              Passionate about building web applications and solving complex problems through code.
              Currently studying at Chitkara University, Himachal Pradesh, India.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Get in Touch</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="avatar">S</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
