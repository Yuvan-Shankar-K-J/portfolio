import React from 'react';
import '../App.css';

export default function Skills() {
  return (
    <section className="skills-section">
      <h2><strong>Skills</strong></h2>

      <div className="skills-grid">
        {/* Technical Skills */}
        <div className="skill-card">
          <h3>Technical Skills</h3>
          <div className="skill-pills-row">
            <span className="skill-pill skill-python">Python</span>
            <span className="skill-pill skill-java">Java</span>
            <span className="skill-pill skill-dart">Dart</span>
            <span className="skill-pill skill-ruby">Ruby</span>
            <span className="skill-pill skill-r">R</span>
            <span className="skill-pill skill-html">HTML</span>
            <span className="skill-pill skill-css">CSS</span>
            <span className="skill-pill skill-js">JavaScript</span>
            <span className="skill-pill skill-react">React</span>
            <span className="skill-pill skill-node">Node.js</span>
            <span className="skill-pill skill-express">Express</span>
            <span className="skill-pill skill-mongo">MongoDB</span>
            <span className="skill-pill skill-mysql">MySQL</span>
            <span className="skill-pill skill-dsa">DSA</span>
            <span className="skill-pill skill-db">Database Management</span>
            <span className="skill-pill skill-sql">SQL</span>
            <span className="skill-pill skill-design">System Design</span>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="skill-card">
          <h3>Soft Skills</h3>
          <div className="skill-pills-row">
            <span className="skill-pill skill-fast">Fast Learner</span>
            <span className="skill-pill skill-adapt">Adaptable</span>
            <span className="skill-pill skill-comm">Effective Communication</span>
            <span className="skill-pill skill-team">Teamwork</span>
            <span className="skill-pill skill-critical">Critical Thinking</span>
            <span className="skill-pill skill-curious">Curiosity</span>
            <span className="skill-pill skill-growth">Growth Mindset</span>
          </div>
        </div>
      </div>
    </section>
  );
}