import React from 'react';
import './Internship.css';

const programs = [
  { icon: '🌐', title: 'Full Stack Development', duration: '3 Months', mode: 'Hybrid', stipend: '₹8,000/mo', desc: 'Master React, Node.js, and cloud deployment working on live enterprise projects alongside senior developers.', featured: true },
  { icon: '🎨', title: 'UI/UX Design', duration: '2 Months', mode: 'Remote', stipend: '₹6,000/mo', desc: 'Learn Figma, design systems, and user research while designing real product interfaces from scratch.' },
  { icon: '🤖', title: 'AI & Machine Learning', duration: '4 Months', mode: 'Hybrid', stipend: '₹10,000/mo', desc: 'Work with Python, TensorFlow, and real datasets to build production-ready intelligent systems.' },
  { icon: '☁️', title: 'Cloud & DevOps', duration: '3 Months', mode: 'Remote', stipend: '₹8,000/mo', desc: 'Get hands-on with AWS, Docker, Kubernetes, and CI/CD pipelines on real infrastructure projects.' },
  { icon: '📱', title: 'Mobile Development', duration: '3 Months', mode: 'Hybrid', stipend: '₹7,000/mo', desc: 'Build cross-platform mobile apps with React Native and Flutter, shipped to real app stores.' },
  { icon: '📊', title: 'Data Analytics', duration: '2 Months', mode: 'Remote', stipend: '₹6,000/mo', desc: 'Transform raw data into business insights using Python, SQL, and visualization tools like Tableau.' },
];

const benefits = [
  { icon: '💰', title: 'Internship', desc: 'All programs are structured as internships focused on hands-on learning and growth.' },
  { icon: '🎓', title: 'Mentorship', desc: '1000+ managers developed through structured training programs.' },
  { icon: '📜', title: 'Certificate', desc: 'Industry-recognized completion certificate from I Groups.' },
  { icon: '🚀', title: 'Career Growth.', desc: 'Systematic approach for consistent and scalable career growth.' },
];

const steps = [
  {
    num: '01',
    title: 'Trainee',
    desc: [
      'Punctuality, Regularity, Responsibility',
      'Stability in Business',
      'Master of 5 Steps, 4 Factors and 8 Steps',
      'Ringing the Bell Continuously for 3 Days'
    ]
  },
  {
    num: '02',
    title: 'Trainer',
    desc: [
      'Teach and Motivate Others',
      'Run Impact',
      'Replace Yourself',
      'Deep Knowledge in Field Administration',
      'Build Strong Relationship',
      'Must Develop Strong 3 Trainees',
      'Good Character',
      'Minimum Attendance in 180 Days'
    ]
  },
  {
    num: '03',
    title: 'Assistant Manager',
    desc: [
      'Deep Knowledge in Office Administration',
      'Accounting and Stock Control',
      'Interview',
      'Motivating Large Groups',
      'Banking'
    ]
  },
  {
    num: '04',
    title: 'Senior Manager',
    desc: [
      'Run Your Own Business',
      'Make Final Decision',
      'Develop Strong Managers',
      'Earn up to 6 Lakhs per Year'
    ]
  }
];

const Internship: React.FC = () => {
  return (
    <div className="internship-page">
      <div className="page-hero">
        <div className="section-tag">Internship</div>
        <h1 className="section-title">Launch Your <span>Career</span> Here</h1>
        <p>Hands-on experience, real projects, and world-class mentorship — everything you need to kickstart your career.</p>
      </div>

      {/* <section className="internship-programs">
        <div className="container">
          <div className="section-tag">Programs</div>
          <h2 className="section-title">Choose Your <span>Track</span></h2>
          <div className="programs-grid">
            {programs.map((p, i) => (
              <div className={`program-card ${p.featured ? 'featured' : ''}`} key={i}>
                {p.featured && <div className="program-badge">Most Popular</div>}
                <div className="program-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="program-meta">
                  <span className="meta-chip">⏱ {p.duration}</span>
                  <span className="meta-chip">📍 {p.mode}</span>
                  <span className="meta-chip">💸 {p.stipend}</span>
                </div>
                <button className="program-apply">Apply Now →</button>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="internship-benefits">
        <div className="container">
          <div className="section-tag">Perks</div>
          <h2 className="section-title">What Makes Us <span>Unique</span></h2>
          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <div className="benefit-item" key={i}>
                <span className="icon">{b.icon}</span>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="internship-process">
        <div className="container">
          <div className="section-tag">Training Path</div>
          <h2 className="section-title">Our <span>Training</span> Path</h2>

          <div className="process-steps">
            {steps.map((s, i) => (
              <div className="step" key={i}>
                <div className="step-num">{s.num}</div>
                <div className="step-content">
                  <h4>{s.title}</h4>
                  <ol>
                    {s.desc.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
          <p className="promotion-text">
            We regularly conduct promotion functions to recognize and elevate talent at every level.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Internship;
