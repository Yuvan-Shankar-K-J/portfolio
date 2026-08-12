import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';
import { ExperienceRole } from '../types';

const roles: ExperienceRole[] = [
  {
    id: 'selsoft',
    title: 'AI Developer',
    company: 'Selsoft Inc',
    period: 'March 2026 - Present',
    location: 'Chennai, India',
    isCurrent: true,
    tags: ['Next.js 16', 'NestJS', 'PostgreSQL', 'Prisma', 'LangChain', 'AWS'],
    summary: 'Designed and developed Timepulse (workforce management CRM) and Youkt (AI recruitment platform) from architecture through deployment.',
    highlights: [
      'Engineered AI-powered document processing workflows and intelligent candidate matching with LangChain.',
      'Built scalable REST APIs in NestJS & Prisma ORM connecting workforce tracking, reporting, and client operations.',
      'Owned full deployment pipeline on AWS cloud infrastructure.'
    ]
  },
  {
    id: 'optisol',
    title: 'Technology Intern',
    company: 'OptiSol Business Solutions',
    period: 'December 2025 - February 2026',
    location: 'Coimbatore, India',
    tags: ['Full-stack development', 'Modern Tech Stacks', 'Team Delivery'],
    summary: 'Completed industry internship with exemplary performance feedback across modern stack projects.',
    highlights: [
      'Engaged in active project sprints delivering frontend and backend feature modules.',
      'Strengthened hands-on delivery using clean coding practices and professional code reviews.'
    ]
  },
  {
    id: 'spangles',
    title: 'Full Stack Developer Intern',
    company: 'Spangles',
    period: 'June 2025 - August 2025',
    location: 'Chennai, India',
    tags: ['React', 'MERN Stack', 'REST APIs', 'Authentication'],
    summary: 'Converted Figma designs into responsive React interfaces and built a full-stack social platform.',
    highlights: [
      'Implemented JWT authentication, RESTful API endpoints, and scalable MongoDB models.',
      'Delivered pixel-perfect Figma responsive layouts to live production.'
    ]
  },
  {
    id: 'magnusvista',
    title: 'AI Intern',
    company: 'MagnusVista Labs',
    period: 'January 2025 - March 2025',
    location: 'Coimbatore, India',
    tags: ['Image Classification', 'OCR / Text ID', 'Python', 'OpenCV'],
    summary: 'Worked on image classification and text identification tasks in an AI research lab environment.',
    highlights: [
      'Built computer vision pipelines for text region detection and character recognition.',
      'Strengthened ML coding discipline and algorithmic problem solving.'
    ]
  },
  {
    id: 'usim',
    title: 'Full Stack Developer Intern',
    company: 'Universiti Sains Islam Malaysia (USIM)',
    period: 'July 2024',
    location: 'Nilai, Malaysia',
    tags: ['Flask', 'HTML/CSS/JS', 'Session Management', 'International Team'],
    summary: 'Contributed to a Hindi e-learning platform during an international technology internship.',
    highlights: [
      'Developed frontend interactive learning screens and backend Flask session handlers.',
      'Collaborated with faculty and international engineering stakeholders.'
    ]
  }
];

export default function Experience() {
  return (
    <section className="page-wrapper space-y-10">
      
      {/* Header */}
      <div className="space-y-4">
        <div className="eyebrow-badge">
          <Briefcase className="w-3.5 h-3.5" />
          Career Timeline
        </div>
        <h1 className="page-title">
          Building AI systems, APIs, and interfaces <span className="gradient-text">in real teams</span>.
        </h1>
        <p className="page-subtitle">
          From full-time AI product engineering at Selsoft Inc to international internships in Malaysia, here is my professional software engineering trajectory.
        </p>
      </div>

      {/* Timeline List */}
      <div className="space-y-6">
        {roles.map((role) => (
          <div
            key={role.id}
            className={`card-uniform space-y-4 ${role.isCurrent ? 'border-sky-500/40' : ''}`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-700/30 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold">{role.title}</h2>
                  {role.isCurrent && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-sky-500/20 text-sky-400 border border-sky-500/30">
                      PRESENT ROLE
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sky-400 font-semibold text-sm pt-0.5">
                  <Building2 className="w-4 h-4" />
                  {role.company}
                </div>
              </div>

              <div className="flex flex-col sm:items-end text-xs text-slate-500 dark:text-slate-400 font-mono space-y-1">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" /> {role.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" /> {role.location}
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed font-medium text-slate-700 dark:text-slate-300">
              {role.summary}
            </p>

            <ul className="space-y-2 pt-1">
              {role.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs leading-normal text-slate-600 dark:text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-700/30">
              {role.tags.map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
