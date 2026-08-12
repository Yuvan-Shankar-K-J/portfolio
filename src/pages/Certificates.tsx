import { useState } from 'react';
import { Award, ExternalLink, Eye, Trophy } from 'lucide-react';
import { Certificate } from '../types';
import CertificateModal from '../components/CertificateModal';

import vitCertificate from '../assets/certficate/VIT.pdf';
import fossCertificate from '../assets/certficate/foss club.pdf';
import droneCertificate from '../assets/certficate/drone workshop.pdf';
import ibmSqlCertificate from '../assets/certficate/DB_1.pdf';
import ibmMysqlCertificate from '../assets/certficate/DB_2.pdf';
import googleDeveloperCertificate from '../assets/certficate/google-developer.pdf';
import hackOHolicsCertificate from '../assets/certficate/hack-o-holics.pdf';
import usimInternshipCertificate from '../assets/certficate/usim-internship.pdf';
import optisolInternshipCertificate from '../assets/certficate/optisol-internship.pdf';
import magnusVistaCertificate from '../assets/certficate/magnusvista-internship.pdf';
import perkinsFullStackCertificate from '../assets/certficate/perkins-full-stack.jpg';
import riseCertificate from '../assets/certficate/rise-2024.pdf';

const certificateData: Certificate[] = [
  {
    id: 'bhasha-bandhu',
    title: 'Regional Winner - Bhasha Bandhu Hackathon',
    issuer: 'Government of India',
    year: '2024',
    category: 'Awards & Hackathons',
    summary: 'Won regionally for building a language-accessibility solution focused on public-service impact and multilingual user access.',
    file: null,
    badgeColor: 'text-amber-500 bg-amber-500/10 border-amber-500/30'
  },
  {
    id: 'optisol-cert',
    title: 'OptiSol Internship Completion',
    issuer: 'OptiSol Business Solutions',
    year: '2026',
    category: 'Internships',
    summary: 'Completed industry internship with exemplary performance feedback, strong learning attitude, and exposure to modern tech stacks.',
    file: optisolInternshipCertificate,
    badgeColor: 'text-sky-400 bg-sky-500/10 border-sky-500/30'
  },
  {
    id: 'magnusvista-cert',
    title: 'AI Internship Completion',
    issuer: 'MagnusVista Labs',
    year: '2025',
    category: 'Internships',
    summary: 'Completed an AI internship focused on image classification, text identification, problem solving, coding, and teamwork.',
    file: magnusVistaCertificate,
    badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30'
  },
  {
    id: 'perkins-cert',
    title: 'Full Stack Development Training',
    issuer: 'Perkins Campus',
    year: '2025',
    category: 'Certifications & Courses',
    summary: 'Completed full-stack development training strengthening practical web application skills.',
    file: perkinsFullStackCertificate,
    badgeColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30'
  },
  {
    id: 'usim-cert',
    title: 'USIM Internship Appreciation',
    issuer: 'Universiti Sains Islam Malaysia',
    year: '2024',
    category: 'Internships',
    summary: 'Received appreciation for professional conduct, communication, and contribution during Malaysia internship.',
    file: usimInternshipCertificate,
    badgeColor: 'text-rose-400 bg-rose-500/10 border-rose-500/30'
  },
  {
    id: 'ibm-sql',
    title: 'SQL and Relational Databases 101',
    issuer: 'IBM Developer Skills Network',
    year: '2024',
    category: 'Certifications & Courses',
    summary: 'Completed IBM Cognitive Class training in SQL fundamentals and relational database concepts.',
    file: ibmSqlCertificate,
    badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30'
  },
  {
    id: 'ibm-mysql',
    title: 'Getting Started with MySQL Command Line',
    issuer: 'IBM Developer Skills Network',
    year: '2024',
    category: 'Certifications & Courses',
    summary: 'Completed IBM Cognitive Class training on MySQL command-line workflows and database fundamentals.',
    file: ibmMysqlCertificate,
    badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30'
  },
  {
    id: 'googlethon',
    title: 'Googlethon Participation',
    issuer: 'Google Developer Student Club, CIT',
    year: '2024',
    category: 'Awards & Hackathons',
    summary: 'Participated in Googlethon, conducted by the Google Developer Student Club at Coimbatore Institute of Technology.',
    file: googleDeveloperCertificate,
    badgeColor: 'text-amber-500 bg-amber-500/10 border-amber-500/30'
  },
  {
    id: 'hack-o-holics',
    title: 'Hack O Holics 5.0',
    issuer: 'St. Josephs Institute of Technology',
    year: '2024',
    category: 'Awards & Hackathons',
    summary: 'Participated in a 24-hour hackathon organized by Computer Science, IT, AI, and Data Science departments.',
    file: hackOHolicsCertificate,
    badgeColor: 'text-amber-500 bg-amber-500/10 border-amber-500/30'
  },
  {
    id: 'rise-2024',
    title: 'RISE 2024 Conclave',
    issuer: 'Coimbatore Institute of Technology',
    year: '2024',
    category: 'Certifications & Courses',
    summary: 'Completed participation in the RISE 2024 Industry Academia Conclave 2.0.',
    file: riseCertificate,
    badgeColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30'
  },
  {
    id: 'vit-iot',
    title: 'IoT Using Adafruit',
    issuer: 'Vellore Institute of Technology',
    year: '2023',
    category: 'Certifications & Courses',
    summary: 'Built circuits, connected sensors to cloud dashboards, and learned embedded API protocols.',
    file: vitCertificate,
    badgeColor: 'text-sky-400 bg-sky-500/10 border-sky-500/30'
  },
  {
    id: 'foss-c',
    title: 'Data Structures Using C',
    issuer: 'Coimbatore Institute of Technology',
    year: '2024',
    category: 'Certifications & Courses',
    summary: 'Implemented linked lists, trees, stacks, and queues while strengthening low-level memory logic.',
    file: fossCertificate,
    badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30'
  },
  {
    id: 'drone-design',
    title: 'Drone Design',
    issuer: 'NITTTR, Chennai',
    year: '2025',
    category: 'Certifications & Courses',
    summary: 'Studied drone mechanics, ESCs, propellers, and flight controllers through practical prototype work.',
    file: droneCertificate,
    badgeColor: 'text-sky-400 bg-sky-500/10 border-sky-500/30'
  }
];

export default function Certificates() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalCert, setActiveModalCert] = useState<Certificate | null>(null);

  const categories = ['All', 'Awards & Hackathons', 'Internships', 'Certifications & Courses'];

  const filteredCerts = selectedCategory === 'All'
    ? certificateData
    : certificateData.filter(c => c.category === selectedCategory);

  return (
    <section className="page-wrapper space-y-10">
      
      {/* Header */}
      <div className="space-y-4">
        <div className="eyebrow-badge">
          <Award className="w-3.5 h-3.5" />
          Achievements & Credentials
        </div>
        <h1 className="page-title">
          Recognition across AI, language access, <span className="gradient-text">and engineering</span>.
        </h1>
        <p className="page-subtitle">
          Explore official internship completion certificates, hackathon honors, IBM software credentials, and technical workshops.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-700/30 pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all border ${
              selectedCategory === cat
                ? 'bg-sky-500/20 text-sky-400 border-sky-500/40 font-bold'
                : 'btn-secondary text-slate-600 dark:text-slate-300'
            }`}
          >
            {cat} {cat !== 'All' && `(${certificateData.filter(c => c.category === cat).length})`}
          </button>
        ))}
      </div>

      {/* Uniform Cards Grid */}
      <div className="grid-responsive-3">
        {filteredCerts.map((cert) => (
          <div key={cert.id} className="card-uniform space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold font-mono border ${cert.badgeColor}`}>
                  {cert.category}
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-bold">{cert.year}</span>
              </div>

              <h3 className="text-base font-bold leading-snug">{cert.title}</h3>
              <p className="text-sky-400 text-xs font-semibold">{cert.issuer}</p>

              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                {cert.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-700/30 flex items-center justify-between gap-2 mt-auto">
              {cert.file ? (
                <button
                  onClick={() => setActiveModalCert(cert)}
                  className="btn-secondary py-1.5 px-3 text-xs flex items-center gap-1.5 text-sky-400 border-sky-500/30 hover:bg-sky-500/10"
                >
                  <Eye className="w-3.5 h-3.5" /> Preview Document
                </button>
              ) : (
                <span className="text-[11px] text-amber-500 font-mono flex items-center gap-1">
                  <Trophy className="w-3 h-3" /> Award Honor
                </span>
              )}

              {cert.file && (
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-sky-400 text-xs font-mono flex items-center gap-1 text-decoration-none"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Direct
                </a>
              )}
            </div>

          </div>
        ))}
      </div>

      <CertificateModal
        certificate={activeModalCert}
        onClose={() => setActiveModalCert(null)}
      />

    </section>
  );
}
