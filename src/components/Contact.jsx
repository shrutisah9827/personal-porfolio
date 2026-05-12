import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  const contacts = [
    {
      icon: '📧',
      label: 'Email',
      value: 'sahshruti321@gmail.com'
    },
    {
      icon: '🔗',
      label: 'LinkedIn',
      value: 'shruti-sah-900257347',
      link: 'https://www.linkedin.com/in/shruti-sah-900257347'
    },
    {
      icon: '💻',
      label: 'GitHub',
      value: 'shrutisah9827',
      link: 'https://github.com/shrutisah9827'
    },
    {
      icon: '📱',
      label: 'Instagram',
      value: 'riyanshisah9827',
      link: 'https://www.instagram.com/riyanshisah9827?igsh=dmd1Y2N1OWJmb3V4'
    }
  ]

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's connect and collaborate</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-items">
              {contacts.map((contact, index) => (
                <div key={index} className="contact-item">
                  <span className="contact-icon">{contact.icon}</span>
                  <div className="contact-details">
                    <p className="label">{contact.label}</p>
                    {contact.link ? (
                      <a href={contact.link} target="_blank" rel="noopener noreferrer" className="contact-link">
                        {contact.value}
                      </a>
                    ) : (
                      <p className="value">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send me a Message</h3>
            {submitted && <div className="success-message">Message sent successfully! I'll get back to you soon.</div>}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
