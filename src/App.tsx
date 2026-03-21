import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Internship from './pages/Internship/Internship';
import Event from './pages/Event/Event';
import Career from './pages/Career/Career';
import Branches from './pages/Branches/Branches';
import Contact from './pages/Contact/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/event" element={<Event />} />
          <Route path="/career" element={<Career />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
