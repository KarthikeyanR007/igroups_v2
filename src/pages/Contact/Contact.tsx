import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    company: '', service: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="section-tag">Contact</div>
        <h1 className="section-title">Let's Build <span>Together</span></h1>
        <p>Have a project in mind? We'd love to hear about it. Reach out and our team will get back within 24 hours.</p>
      </div>

      <section className="contact-main">
        <div className="container">
          {/* Left Info */}
          <div className="contact-info">
            <div className="section-tag">Get in Touch</div>
            <h2>We're Here to <span style={{ background: 'linear-gradient(135deg,var(--accent),var(--accent2))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Help</span></h2>
            <p>Whether you're looking to start a new project, join our team, or just have a question — we're always happy to talk. Drop us a message and we'll respond promptly.</p>

            <div className="contact-cards">
              <div className="contact-card">
                <div className="cc-icon">📍</div>
                <div className="cc-text">
                  <h4>Headquarters</h4>
                  <p>123 Tech Park, Anna Nagar, Chennai – 600040</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="cc-icon">📞</div>
                <div className="cc-text">
                  <h4>Call Us</h4>
                  <p>+91 98765 43210 · Mon–Sat, 9am–7pm IST</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="cc-icon">✉️</div>
                <div className="cc-text">
                  <h4>Email Us</h4>
                  <p>hello@igroups.in · Replies within 24 hrs</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="cc-icon">💬</div>
                <div className="cc-text">
                  <h4>Live Chat</h4>
                  <p>Available on our website · 24/7 support</p>
                </div>
              </div>
            </div>

            <div className="contact-social-row">
              {['LinkedIn', 'Twitter', 'Instagram', 'YouTube'].map(s => (
                <a href="#" key={s} className="social-link">{s}</a>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="contact-form-wrapper">
            {submitted ? (
              <div className="form-success">
                <span className="success-icon">🎉</span>
                <h4>Message Sent Successfully!</h4>
                <p>Thank you for reaching out to I Groups. Our team will review your message and get back to you within 24 business hours.</p>
              </div>
            ) : (
              <>
                <h3>Send Us a Message</h3>
                <p>Fill in your details and we'll connect you with the right team.</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>First Name *</label>
                      <input name="firstName" type="text" placeholder="Arun" value={form.firstName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label>Last Name *</label>
                      <input name="lastName" type="text" placeholder="Kumar" value={form.lastName} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input name="email" type="email" placeholder="arun@company.com" value={form.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Company / Organization</label>
                    <input name="company" type="text" placeholder="Your Company Name" value={form.company} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Service Interested In</label>
                    <select name="service" value={form.service} onChange={handleChange}>
                      <option value="">Select a service...</option>
                      <option>Web Development</option>
                      <option>Mobile App Development</option>
                      <option>UI/UX Design</option>
                      <option>AI & Machine Learning</option>
                      <option>Cloud Solutions</option>
                      <option>Data Analytics</option>
                      <option>DevOps & Infrastructure</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Your Message *</label>
                    <textarea name="message" placeholder="Tell us about your project, goals, timeline, or any specific requirements..." value={form.message} onChange={handleChange} required />
                  </div>
                  <button type="submit" className="form-submit">
                    Send Message →
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="contact-map">
        <div className="container">
          <div className="map-box">
            <div className="map-grid" />
            <div className="map-pin">📍</div>
            <div className="map-label">I Groups Headquarters</div>
            <div className="map-sublabel">123 Tech Park, Anna Nagar, Chennai – 600040</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
