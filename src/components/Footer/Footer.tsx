import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="navbar-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {/* <div className="logo-icon" style={{ width: 42, height: 42, background: 'linear-gradient(135deg,#00d4ff,#7c3aed)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Syne', fontWeight: 800, fontSize: '1.1rem', color: 'white' }}>N</div> */}
              <span style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-primary)' }}>I<span style={{ color: 'var(--accent)' }}>Groups</span></span>
            </Link>
            <p>Empowering enterprises with innovative technology solutions, expert talent, and transformative digital experiences.</p>
            <div className="footer-socials">
              <a href="#" className="social-btn">in</a>
              <a href="#" className="social-btn">tw</a>
              <a href="#" className="social-btn">fb</a>
              <a href="#" className="social-btn">ig</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/internship">Internship</Link></li>
              <li><Link to="/event">Events</Link></li>
              <li><Link to="/career">Careers</Link></li>
              <li><Link to="/branches">Branches</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <div className="footer-contact-item">
              <div className="contact-icon">📍</div>
              <span>TVS Shanmuga Nagar, Pudukkottai – 622001</span>
            </div>
            <div className="footer-contact-item">
              <div className="contact-icon">📞</div>
              <span>+91 98765 43210</span>
            </div>
            <div className="footer-contact-item">
              <div className="contact-icon">✉️</div>
              <span>hello@igroups.in</span>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>© 2026 <span>I Groups</span>. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
