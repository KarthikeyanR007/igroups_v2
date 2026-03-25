import React from 'react';
import { Link } from 'react-router-dom';
import SharmilaImg from '../../assets/team/Sharmila.jpeg'
import RishenathImg from '../../assets/team/Rishenath.jpeg'
import MuthumaniImg from '../../assets/team/Muthumani.jpeg'
import manikandanImg from '../../assets/team/mani_founder.jpeg'
import LalPrasanthImg from '../../assets/team/LalPrasanth.jpeg'
import kousalyaImg from '../../assets/team/Kousalya_manager.jpeg'
import JananiImg from '../../assets/team/Janani.jpeg'

import './About.css';

const team = [
  {
    name: 'Miss. Kousalya B.E',
    role: 'CEO & Founder',
    image: kousalyaImg,
    desc: 'A passionate leader dedicated to building opportunities and shaping future entrepreneurs.'
  },
  {
    name: 'Mr. Manikandan B.A',
    role: 'General Manager',
    image: manikandanImg,
    desc: 'An experienced mentor focused on guiding individuals toward professional excellence.'
  },
  {
    name: 'Mr. Lal Prasanth B.Com',
    role: 'Inspire Senior Manager',
    image: LalPrasanthImg,
    desc: 'Drives inspiration across teams by fostering a culture of motivation, growth, and limitless potential.'
  },
  {
    name: 'Miss. Janani Bsc',
    role: 'Insight Senior Manager',
    image: JananiImg,
    desc: 'Transforms data into powerful insights, enabling smarter decisions and stronger business outcomes.'
  },
  {
    name: 'Miss. Sharmila BE',
    role: 'Infogain Senior Manager',
    image: SharmilaImg,
    desc: 'Bridges knowledge and strategy to unlock new growth opportunities within the Infogain division.'
  },
  {
    name: 'Mr. Rishenath BE',
    role: 'Infogain Senior Manager',
    image: RishenathImg,
    desc: 'Champions team development and operational efficiency with a results-driven leadership approach.'
  },
  {
    name: 'Mr. Muthumani Msc',
    role: 'Intelygenz Senior Manager',
    image: MuthumaniImg,
    desc: 'Leads the Intelygenz division with sharp analytical thinking and a passion for intelligent solutions.'
  },
];

const values = [
  { num: '01', title: 'Innovation', desc: 'We embrace bold ideas, challenge conventions, and continuously push the boundaries of what technology can achieve.' },
  { num: '02', title: 'Integrity', desc: 'Honest, transparent partnerships built on trust. We do what we promise, every single time.' },
  { num: '03', title: 'Excellence', desc: 'From code to client communication, we hold ourselves to the highest standards across every touchpoint.' },
  { num: '04', title: 'Collaboration', desc: 'Great things are built together. We work as a unified team — internally and with our clients.' },
  { num: '05', title: 'Impact', desc: 'Every solution we build is designed to create measurable, meaningful impact for businesses and communities.' },
  { num: '06', title: 'Growth', desc: 'We invest in our people, our processes, and our clients — growing together in an ever-evolving landscape.' },
];

const About: React.FC = () => {

    function getInitials(name: string) {
      return name.replace(/\s*\(.*?\)\s*/g, '').trim()
        .split(' ').slice(0, 2).map(w => w[0].toUpperCase()).join('');
    }

  return (
    <div className="about-page">
      <div className="page-hero">
        <div className="section-tag">About Us</div>
        <h1 className="section-title">We Are <span>I Groups</span></h1>
        <p>A passionate team of technologists, designers, and strategists united by one mission.</p>
      </div>

      {/* Intro */}
      <section className="about-intro">
        <div className="container">
          <div className="about-intro-text">
            <div className="section-tag">Our Story</div>
            <h2>Building Tomorrow's <span style={{ background: 'linear-gradient(135deg,var(--accent),var(--accent2))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Big Future</span></h2>
            <p>Welcome to I Groups Business Training Centre, a fast-growing training network established in 2021, headquartered in Pudukkottai and expanding across Tamil Nadu.</p>
            <p>We specialize in developing individuals into confident professionals, skilled managers, and successful entrepreneurs through structured training and real-world exposure.</p>
            <div className="about-checks">
              {[ 'Award-Winning Innovation', 'Pan-India Presence', '24/7 Dedicated Support'].map(c => (
                <div className="check-item" key={c}>
                  <div className="check-icon">✓</div>
                  <span>{c}</span>
                </div>
              ))}
            </div>
            <Link to="/contact" className="btn-primary"><span>Work With Us</span></Link>
          </div>

          <div className="about-visual">
            <div className="about-card">
              <div style={{ textAlign: 'center', marginBottom: 24, fontFamily: 'Syne', fontSize: '1rem', color: 'var(--text-secondary)' }}>Company at a Glance</div>
              <div className="about-card-grid">
                {[['500+', 'Projects Delivered'], ['200+', 'Team Members'], ['8', 'City Branches'], ['12+', 'Years Experience'], ['98%', 'Client Retention'], ['30+', 'Awards Won']].map(([n, l]) => (
                  <div className="mini-stat" key={l}>
                    <div className="num">{n}</div>
                    <div className="label">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-mv">
        <div className="container">
          <div className="mv-card mission">
            <div className="mv-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>To empower individuals with knowledge, skills, and confidence to succeed in business and leadership roles.</p>
          </div>
          <div className="mv-card vision">
            <div className="mv-icon">🔭</div>
            <h3>Our Vision</h3>
            <p>To become one of the leading business training networks across Tamil Nadu, creating thousands of successful managers and entrepreneurs.</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-team">
        <div className="container">
          <div className="team-header">
            <div className="section-tag">Leadership</div>
            <h2 className="section-title">Meet the <span>Visionaries</span></h2>
          </div>
          <div className="team-grid">
              {team.map((m, i) => (
                <div className="team-card" key={i}>
                  <div className="team-avatar-wrap">
                    {m.image
                      ? <img src={m.image} alt={m.name} />
                      : <span className="avatar-initials">{getInitials(m.name)}</span>
                    }
                  </div>
                  <h4>{m.name}</h4>
                  <div className="team-role">{m.role}</div>
                  <div className="team-divider"></div>
                  <p>{m.desc}</p>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Values */}
      {/* <section className="about-values">
        <div className="container">
          <div className="section-tag">Core Values</div>
          <h2 className="section-title">Principles that <span>Define Us</span></h2>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className="value-card" key={i}>
                <div className="value-num">{v.num}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* ── What We Do ── */}
        <section className="about-section">
          <div className="container">

            <div className="about-grid">

              {/* What We Do */}
              <div className="about-card">
                <div className="about-card-icon">💼</div>
                <h3 className="about-card-title">What We Do</h3>
                <p className="about-card-sub">At I Groups, we provide:</p>
                <ul className="about-list">
                  <li>Structured business training programs</li>
                  <li>Internship opportunities for real experience</li>
                  <li>Certification for skill recognition</li>
                  <li>Leadership development programs</li>
                  <li>Career growth through promotions</li>
                </ul>
              </div>

              {/* Our Achievements */}
              <div className="about-card about-card-accent">
                <div className="about-card-icon">🏆</div>
                <h3 className="about-card-title">Our Achievements</h3>
                <div className="about-stats">
                  <div className="about-stat"><span className="about-stat-num">2021</span><span className="about-stat-label">Established</span></div>
                  <div className="about-stat"><span className="about-stat-num">7+</span><span className="about-stat-label">Branches</span></div>
                  <div className="about-stat"><span className="about-stat-num">1000+</span><span className="about-stat-label">Managers</span></div>
                </div>
                <ul className="about-list">
                  <li>Strong presence across Tamil Nadu</li>
                  <li>Continuous career support system</li>
                </ul>
              </div>

              {/* Why Choose Us */}
              <div className="about-card">
                <div className="about-card-icon">💡</div>
                <h3 className="about-card-title">Why Choose Us</h3>
                <ul className="about-list">
                  <li>Practical and easy-to-understand training</li>
                  <li>Clear career growth path</li>
                  <li>Supportive mentorship</li>
                  <li>Regular recognition & promotions</li>
                  <li>Strong network and opportunities</li>
                </ul>
              </div>

            </div>
          </div>
        </section>
    </div>
  );
};

export default About;
