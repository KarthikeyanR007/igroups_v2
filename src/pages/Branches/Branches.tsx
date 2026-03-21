import React from 'react';
import './Branches.css';

const branches = [
  {
    flag: '🏛️', city: 'Chennai', state: 'Tamil Nadu', hq: true,
    address: '123 Tech Park, Anna Nagar, Chennai – 600040',
    phone: '+91 98765 43210',
    email: 'chennai@nexacore.in',
    team: 80,
  },
  {
    flag: '🌆', city: 'Bangalore', state: 'Karnataka', hq: false,
    address: '45 Whitefield IT Corridor, Bangalore – 560066',
    phone: '+91 98765 43211',
    email: 'bangalore@nexacore.in',
    team: 45,
  },
  {
    flag: '🏙️', city: 'Hyderabad', state: 'Telangana', hq: false,
    address: '12 HITEC City, Madhapur, Hyderabad – 500081',
    phone: '+91 98765 43212',
    email: 'hyderabad@nexacore.in',
    team: 30,
  },
  {
    flag: '🌇', city: 'Mumbai', state: 'Maharashtra', hq: false,
    address: '88 BKC Business Hub, Bandra East, Mumbai – 400051',
    phone: '+91 98765 43213',
    email: 'mumbai@nexacore.in',
    team: 25,
  },
  {
    flag: '🏰', city: 'Delhi', state: 'Delhi NCR', hq: false,
    address: '7 Cyber City, Gurugram, Delhi NCR – 122002',
    phone: '+91 98765 43214',
    email: 'delhi@nexacore.in',
    team: 20,
  },
  {
    flag: '🌃', city: 'Pune', state: 'Maharashtra', hq: false,
    address: '33 Hinjewadi Phase 2, Pune – 411057',
    phone: '+91 98765 43215',
    email: 'pune@nexacore.in',
    team: 18,
  },
  {
    flag: '🏖️', city: 'Coimbatore', state: 'Tamil Nadu', hq: false,
    address: '56 TIDEL Park, Saravanampatti, Coimbatore – 641035',
    phone: '+91 98765 43216',
    email: 'coimbatore@nexacore.in',
    team: 12,
  },
  {
    flag: '⛵', city: 'Kochi', state: 'Kerala', hq: false,
    address: '22 Infopark, Kakkanad, Kochi – 682030',
    phone: '+91 98765 43217',
    email: 'kochi@nexacore.in',
    team: 10,
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
        <div className="section-tag">Branches123</div>
        <h1 className="section-title">We're <span>Everywhere</span></h1>
        <p>8 cities across India and a growing global footprint — always close to where you need us most.</p>
      </div>

      <section className="branches-map-section">
        <div className="container">
          <div className="india-banner">
            <div>
              <h3>🇮🇳 Pan-India Presence</h3>
              <p>From the tech corridors of Chennai to the startup hubs of Bangalore — I Groups is across India.</p>
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

      <section className="branches-global">
        <div className="container">
          <div className="section-tag">Global Reach</div>
          <h2 className="section-title">Beyond <span>Borders</span></h2>
          <div className="global-grid">
            {globalPresence.map((g, i) => (
              <div className="global-card" key={i}>
                <div className="global-flag">{g.flag}</div>
                <h4>{g.country}</h4>
                <p>{g.detail}</p>
                {g.soon && <div className="coming-soon-badge">🚧 Coming Soon</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Branches;
