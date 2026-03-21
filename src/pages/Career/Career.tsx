import React, { useState } from 'react';
import './Career.css';

const jobs = [
  { title: 'Senior React Developer', dept: 'Engineering', type: 'Full-time', loc: 'Chennai / Remote' },
  { title: 'Node.js Backend Engineer', dept: 'Engineering', type: 'Full-time', loc: 'Bangalore' },
  { title: 'UI/UX Designer', dept: 'Design', type: 'Full-time', loc: 'Chennai' },
  { title: 'DevOps Engineer', dept: 'Infrastructure', type: 'Full-time', loc: 'Remote' },
  { title: 'AI/ML Engineer', dept: 'Engineering', type: 'Full-time', loc: 'Hyderabad' },
  { title: 'Product Manager', dept: 'Product', type: 'Full-time', loc: 'Chennai' },
  { title: 'Business Development Executive', dept: 'Sales', type: 'Full-time', loc: 'Mumbai' },
  { title: 'Technical Content Writer', dept: 'Marketing', type: 'Part-time', loc: 'Remote' },
  { title: 'QA Automation Engineer', dept: 'Engineering', type: 'Full-time', loc: 'Chennai / Remote' },
];

const filters = ['All', 'Engineering', 'Design', 'Product', 'Sales', 'Marketing', 'Infrastructure'];

const perks = [
  { icon: '🏥', label: 'Health Insurance' },
  { icon: '🏠', label: 'Remote Friendly' },
  { icon: '📚', label: 'Learning Budget' },
  { icon: '⏰', label: 'Flexible Hours' },
  { icon: '✈️', label: 'Annual Retreat' },
  { icon: '💻', label: 'Device Allowance' },
  { icon: '🎂', label: 'Birthday Leave' },
  { icon: '🚀', label: 'Fast Growth' },
];

const roles = [
  'Senior React Developer',
  'Node.js Backend Engineer',
  'UI/UX Designer',
  'DevOps Engineer',
  'AI/ML Engineer',
  'Product Manager',
  'Business Development Executive',
  'Technical Content Writer',
  'QA Automation Engineer',
  'Other',
];

const ageOptions = Array.from({ length: 33 }, (_, i) => 18 + i);

interface AppForm {
  name: string;
  phone: string;
  email: string;
  age: string;
  role: string;
  resume: File | null;
}

const Career: React.FC = () => {
  const [active, setActive] = useState('All');
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<AppForm>({
    name: '', phone: '', email: '', age: '', role: '', resume: null,
  });

  const filtered = active === 'All' ? jobs : jobs.filter(j => j.dept === active);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setForm(prev => ({ ...prev, resume: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="career-page">
      <div className="page-hero">
        <div className="section-tag">Careers</div>
        <h1 className="section-title">Grow with <span>I Groups</span></h1>
        <p>Join a team of passionate innovators building the future of enterprise technology across India.</p>
      </div>

      {/* Culture */}
      <section className="career-culture">
        <div className="container">

          {/* Left — perks */}
          <div className="culture-text">
            <div className="section-tag">Life at I Groups</div>
            <h2 className="section-title">More Than a <span>Job</span></h2>
            <p>At I Groups, we believe great work happens when people feel empowered, supported, and inspired. We've built a culture that blends high performance with genuine care for every team member.</p>
            <p>From flexible work arrangements and continuous learning to fast career growth and a deeply collaborative environment — we invest in you as much as you invest in us.</p>
            <div className="culture-perks">
              {perks.map((p, i) => (
                <div className="perk" key={i}>
                  <span className="perk-icon">{p.icon}</span>
                  <span>{p.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Application Form */}
          <div className="apply-form-card">
            {submitted ? (
              <div className="aform-success">
                <span className="s-icon">🎉</span>
                <h4>Application Submitted!</h4>
                <p>
                  Thanks for applying to <strong>I Groups</strong>. Our HR team will review your
                  application and reach out within 3–5 business days.
                </p>
              </div>
            ) : (
              <>
                <div className="apply-form-title">Quick Apply</div>
                <div className="apply-form-subtitle">Fill in the details below — takes less than 2 minutes.</div>

                <form onSubmit={handleSubmit} noValidate>

                  {/* Name + Phone */}
                  <div className="aform-row">
                    <div className="aform-group">
                      <label>Full Name *</label>
                      <input
                        name="name"
                        type="text"
                        placeholder="Arun Kumar"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="aform-group">
                      <label>Phone Number *</label>
                      <input
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="aform-group">
                    <label>Email Address *</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="arun@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Age + Role */}
                  <div className="aform-row">
                    <div className="aform-group">
                      <label>Age *</label>
                      <div className="select-wrap">
                        <select name="age" value={form.age} onChange={handleChange} required>
                          <option value="">Select age</option>
                          {ageOptions.map(a => (
                            <option key={a} value={a}>{a}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="aform-group">
                      <label>Applying For *</label>
                      <div className="select-wrap">
                        <select name="role" value={form.role} onChange={handleChange} required>
                          <option value="">Select role</option>
                          {roles.map(r => (
                            <option key={r} value={r}>{r}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Resume Upload */}
                  <div className="aform-group">
                    <label>Resume / CV *</label>
                    <div className={`resume-upload-box ${form.resume ? 'has-file' : ''}`}>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFile}
                      />
                      {form.resume ? (
                        <>
                          <span className="upload-icon">✅</span>
                          <div className="upload-text">File Selected</div>
                          <div className="upload-filename">{form.resume.name}</div>
                        </>
                      ) : (
                        <>
                          <span className="upload-icon">📎</span>
                          <div className="upload-text">Click to upload your resume</div>
                          <div className="upload-hint">PDF, DOC, DOCX — Max 5 MB</div>
                        </>
                      )}
                    </div>
                  </div>

                  <button type="submit" className="aform-submit">
                    Submit Application →
                  </button>

                </form>
              </>
            )}
          </div>

        </div>
      </section>

      {/* Jobs */}
      {/* <section className="career-jobs">
        <div className="container">
          <div className="section-tag">Open Positions</div>
          <h2 className="section-title">Find Your <span>Role</span></h2>

          <div className="jobs-filter">
            {filters.map(f => (
              <button
                key={f}
                className={`filter-btn ${active === f ? 'active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="jobs-list">
            {filtered.map((job, i) => (
              <div className="job-card" key={i}>
                <div className="job-info">
                  <h3>{job.title}</h3>
                  <div className="job-tags">
                    <span className="job-tag dept">{job.dept}</span>
                    <span className="job-tag type">{job.type}</span>
                    <span className="job-tag loc">📍 {job.loc}</span>
                  </div>
                </div>
                <button className="job-apply">Apply Now →</button>
              </div>
            ))}
          </div>
        </div>
      </section> */}

    </div>
  );
};

export default Career;
