import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Introduction from './pages/Introduction';
import About from './pages/About';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Certificates from './pages/Certificates';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Introduction</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/certificates">Certificates</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact" className="contact-btn">Contact</Link></li>
        </ul>
      </nav>
      <div className="portfolio-container">
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
