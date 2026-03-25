import React from 'react';
import './Branches.css';

const branches = [
    {
    flag: '🌁', city: 'I Groups', state: 'Pudukkottai', hq: true,
    address: 'No.2741, Thirukkattalai,Ashok Nagar Bus stop, Sornaboomi Nagar, Pudukkottai – 622303',
    phone: '+91 99523 63079',
    email: 'igroups2025@gmail.com',
    team: 80,
  },
  {
    flag: '🏛️', city: 'Impetus', state: 'Pudukkottai', hq: false,
    address: 'TVS Shanmuga Nagar, Pudukkottai – 622303',
    phone: '+91 99523 63079',
    email: 'igroups2025@gmail.com',
    team: 80,
  },
  {
    flag: '🌆', city: 'Infinity', state: 'Pudukkottai', hq: false,
    address: 'Ashok Nagar, Pudukkottai – 622001',
    phone: '+91 99523 63079',
    email: 'igroups2025@gmail.com',
    team: 45,
  },
  {
    flag: '🏙️', city: 'Intelygenz', state: 'Pudukkottai', hq: false,
    address: 'Ashok Nagar, Pudukkottai – 622001',
    phone: '+91 99523 63079',
    email: 'igroups2025@gmail.com',
    team: 30,
  },
  {
    flag: '🌇', city: 'Inspire', state: 'Pudukkottai', hq: false,
    address: 'Melur, Tamil nadu – 622001',
    phone: '+91 99523 63079',
    email: 'igroups2025@gmail.com',
    team: 25,
  },
  {
    flag: '🏰', city: 'Insight', state: 'Pudukkottai', hq: false,
    address: 'Machuvadi, Pudukkottai – 622001',
    phone: '+91 99523 63079',
    email: 'igroups2025@gmail.com',
    team: 20,
  },
  {
    flag: '🌃', city: 'Innowave', state: 'Pattukottai', hq: false,
    address: 'Pattukottai Main– 622001',
    phone: '+91 99523 63079',
    email: 'igroups2025@gmail.com',
    team: 18,
  },
  {
    flag: '🏢', city: 'Infogain', state: 'Karaikudi', hq: false,
    address: 'Karaikudi 630001',
    phone: '+91 99523 63079',
    email: 'igroups2025@gmail.com',
    team: 18,
  },
];

const globalPresence = [
  { flag: '🇸🇬', country: 'Singapore', detail: 'APAC Sales Office · 2019', soon: false },
  { flag: '🇦🇪', country: 'Dubai, UAE', detail: 'Middle East Partnerships Hub · 2021', soon: false },
  { flag: '🇬🇧', country: 'London, UK', detail: 'Europe Operations · 2023', soon: false },
  { flag: '🇺🇸', country: 'San Francisco, USA', detail: 'North America Expansion', soon: true },
  { flag: '🇦🇺', country: 'Sydney, Australia', detail: 'APAC Growth Office', soon: true },
  { flag: '🇨🇦', country: 'Toronto, Canada', detail: 'North America Hub', soon: true },
];

const Branches: React.FC = () => {
  return (
    <div className="branches-page">
      <div className="page-hero">
        <div className="section-tag">Branches</div>
        <h1 className="section-title">We're <span>Everywhere</span></h1>
        <p>8 cities across India and a growing global footprint — always close to where you need us most.</p>
      </div>

      <section className="branches-map-section">
        <div className="container">
          <div className="india-banner">
            <div>
              <h3>🇮🇳 Pan-India Presence</h3>
              <p>We are proudly growing across multiple locations:</p>
            </div>
            <div className="india-stats">
              {[['8', 'Cities'], ['214+', 'Team'], ['500+', 'Clients']].map(([n, l]) => (
                <div className="i-stat" key={l}>
                  <div className="num">{n}</div>
                  <div className="lbl">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="branches-grid">
            {branches.map((b, i) => (
              <div className={`branch-card ${b.hq ? 'hq' : ''}`} key={i}>
                <span className="branch-flag">{b.flag}</span>
                <h3>{b.city}</h3>
                <div className="branch-state">{b.state}</div>
                <div className="branch-info">
                  <div className="branch-info-item">
                    <span className="icon">📍</span>
                    <span>{b.address}</span>
                  </div>
                  <div className="branch-info-item">
                    <span className="icon">📞</span>
                    <span>{b.phone}</span>
                  </div>
                  <div className="branch-info-item">
                    <span className="icon">✉️</span>
                    <span>{b.email}</span>
                  </div>
                </div>
                <div className="branch-divider" />
                <div className="branch-team">
                  <div className="team-dots">
                    {[...Array(Math.min(3, Math.floor(b.team / 10)))].map((_, j) => (
                      <div className="dot" key={j}>👤</div>
                    ))}
                  </div>
                  <span>{b.team}+ Team Members</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Branches;
