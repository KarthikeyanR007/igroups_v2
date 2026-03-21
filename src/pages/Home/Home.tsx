import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const whyItems = [
  { icon: '🏆', title: 'Award Winning', desc: 'Recognized across 20+ national and international platforms for excellence in innovation and service delivery.' },
  { icon: '👥', title: 'Expert Team', desc: 'A diverse team of 200+ skilled professionals dedicated to building world-class digital solutions for enterprises.' },
  { icon: '🕐', title: '24/7 Support', desc: 'Round-the-clock dedicated support ensuring your systems run flawlessly with zero downtime commitments.' },
  { icon: '💡', title: 'Innovation First', desc: 'Cutting-edge R&D ensures clients always stay ahead with the latest technology trends and solutions.' },
  { icon: '🔒', title: 'Secure & Reliable', desc: 'Enterprise-grade security protocols and ISO-certified processes for maximum data protection and compliance.' },
  { icon: '📈', title: 'Proven Results', desc: 'Over 500 successful projects with measurable ROI improvements averaging 3x for our enterprise clients.' },
];

const services = [
  { icon: '🌐', title: 'Web Development', desc: 'Full-stack web applications with modern frameworks, scalable architecture, and stunning UX.' },
  { icon: '📱', title: 'Mobile App Development', desc: 'Cross-platform iOS & Android apps that deliver seamless user experiences.' },
  { icon: '🎨', title: 'UI/UX Design', desc: 'Research-driven, pixel-perfect designs that convert visitors into loyal customers.' },
  { icon: '☁️', title: 'Cloud Solutions', desc: 'Migration, infrastructure, and DevOps automation on AWS, Azure, and Google Cloud.' },
  { icon: '🤖', title: 'AI & Automation', desc: 'Intelligent process automation and machine learning solutions to scale operations.' },
  { icon: '📊', title: 'Data Analytics', desc: 'Business intelligence dashboards and data pipelines for informed decision-making.' },
];

const Home: React.FC = () => {
  return (
    <div className="home-page">

      {/* ── Hero ── */}
      <section className="home-hero">
        <div className="hero-bg">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-orb hero-orb-3" />
          <div className="hero-grid" />
        </div>

        <div className="container">
          <div className="hero-content">
            <div className="badge">
              <span className="badge-dot" />
              Welcome to I Groups
            </div>

            <h1 className="hero-title">
              Build Your Career. Become a Leader. {' '}
              <span className="gradient-text">Create Your Future.</span>
            </h1>

            <p className="hero-subtitle">
              Welcome to I Groups Business Training Centre, a fast-growing training network established in 2021, headquartered in Pudukkottai and expanding across Tamil Nadu.
            </p>

           <p className="hero-subtitle">
              We specialize in developing individuals into confident professionals, skilled managers, and successful entrepreneurs through structured training and real-world exposure.
            </p>

            <div className="hero-actions">
              <Link to="/contact" className="btn-primary">
                <span>Apply now</span>
              </Link>
              {/* <Link to="/about" className="btn-outline">
                Explore Our Work
              </Link> */}
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <h3>500+</h3>
                <p>Projects Done</p>
              </div>
              <div className="hero-stat">
                <h3>200+</h3>
                <p>Expert Team</p>
              </div>
              <div className="hero-stat">
                <h3>98%</h3>
                <p>Client Satisfaction</p>
              </div>
              <div className="hero-stat">
                <h3>12+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card-main">
              <div className="card-header">
                <div className="card-avatar">🚀</div>
                <div className="card-header-text">
                  <h4>Business Performance</h4>
                  <p>Q4 2024 — Live Dashboard</p>
                </div>
              </div>
              <div className="card-metrics">
                <div className="metric-box">
                  <div className="metric-label">Revenue Growth</div>
                  <div className="metric-value">+84%</div>
                  <div className="metric-bar">
                    <div className="metric-bar-fill" style={{ width: '84%' }} />
                  </div>
                </div>
                <div className="metric-box">
                  <div className="metric-label">Client Retention</div>
                  <div className="metric-value">97%</div>
                  <div className="metric-bar">
                    <div className="metric-bar-fill" style={{ width: '97%' }} />
                  </div>
                </div>
                <div className="metric-box">
                  <div className="metric-label">Projects Active</div>
                  <div className="metric-value">142</div>
                  <div className="metric-bar">
                    <div className="metric-bar-fill" style={{ width: '71%' }} />
                  </div>
                </div>
                <div className="metric-box">
                  <div className="metric-label">Team Size</div>
                  <div className="metric-value">214</div>
                  <div className="metric-bar">
                    <div className="metric-bar-fill" style={{ width: '60%' }} />
                  </div>
                </div>
              </div>
              <div className="card-tags">
                <span className="tag cyan">Web Dev</span>
                <span className="tag">AI Solutions</span>
                <span className="tag amber">Cloud Infra</span>
              </div>
            </div>

            <div className="floating-badge-1">
              <span className="fb-icon">🏅</span>
              <div className="fb-text">
                <strong>Top Rated 2024</strong>
                <span>Clutch Global Awards</span>
              </div>
            </div>

            <div className="floating-badge-2">
              <span className="fb-icon">⚡</span>
              <div className="fb-text">
                <strong>24/7 Active</strong>
                <span>Support Online</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="home-why">
        <div className="container">
          <div className="why-header">
            <div className="section-tag">Why Choose Us</div>
            <h2 className="section-title">Driving Innovation and Growth<br />for <span>Your Career</span></h2>
            <p>We combine deep expertise, proven methodologies, and relentless passion to deliver results that matter.</p>
          </div>

          <div className="why-grid">
            {whyItems.map((item, i) => (
              <div className="why-card animate-fade-up" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ──
      <section className="home-services">
        <div className="container">
          <div className="services-header">
            <div className="section-tag">Our Services</div>
            <h2 className="section-title">Everything Your Business <span>Needs</span></h2>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div className="service-item" key={i}>
                <div className="service-icon">{s.icon}</div>
                <div className="service-text">
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── CTA ── */}
      <section className="home-cta">
        <div className="cta-box">
          <div className="section-tag" style={{ justifyContent: 'center', marginBottom: 16 }}>Get Started Today</div>
          <h2>Ready to Transform <span style={{ background: 'linear-gradient(135deg,var(--accent),var(--accent2))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Your Career</span></h2>
          <p>Join 500+ companies that trust I Groups to power their digital future.</p>
          <div className="cta-actions">
            {/* <Link to="/contact" className="btn-primary"><span>Start a Project</span></Link> */}
            <Link to="/career" className="btn-outline">Join Our Team</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
