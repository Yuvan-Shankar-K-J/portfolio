import { GraduationCap, BookOpen } from 'lucide-react';
import { EducationItem } from '../types';

const educationList: EducationItem[] = [
  {
    id: 'cit',
    period: '2022 - 2026',
    title: 'B.Tech in Artificial Intelligence and Data Science',
    place: 'Coimbatore Institute of Technology',
    detail: 'Focused on AI algorithms, data science, machine learning, computer vision, and software engineering while building production full-stack systems.',
    highlights: [
      'Core coursework: Machine Learning, Deep Learning, Data Structures & Algorithms, Database Systems, Computer Networks.',
      'Active participant in AI Hackathons, Regional Winner in Bhasha Bandhu Hackathon 2024.'
    ]
  },
  {
    id: 'cbse',
    period: '2018 - 2022',
    title: 'High School, CBSE',
    place: 'Adharsh Vidhyalaya, Erode',
    detail: 'Built strong foundations in mathematics, physics, computer science fundamentals, and algorithmic logic.',
    highlights: [
      'Specialized in Mathematics and Computer Science (Python programming & SQL basics).'
    ]
  },
  {
    id: 'primary',
    period: '2010 - 2018',
    title: 'Primary and Middle School',
    place: 'Stanes Anglo Indian Higher Secondary School, Coonoor',
    detail: 'Where curiosity began: early computer labs, first code explorations, and asking how technology works.',
    highlights: [
      'Active participant in school science fairs and computer science clubs.'
    ]
  }
];

export default function Education() {
  return (
    <section className="page-wrapper space-y-10">
      
      {/* Header */}
      <div className="space-y-4">
        <div className="eyebrow-badge">
          <GraduationCap className="w-3.5 h-3.5" />
          Academic Foundations
        </div>
        <h1 className="page-title">
          AI and data science foundation with <span className="gradient-text">production experience</span>.
        </h1>
        <p className="page-subtitle">
          My academic path spans specialized Artificial Intelligence training at Coimbatore Institute of Technology and foundational schooling in mathematics and computer science.
        </p>
      </div>

      {/* Uniform Cards Grid */}
      <div className="grid-responsive-3">
        {educationList.map((item) => (
          <div key={item.id} className="card-uniform space-y-4">
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold border border-slate-700/30">
                  {item.period}
                </span>
              </div>

              <h2 className="text-base font-bold leading-snug">{item.title}</h2>
              <p className="text-sky-400 font-semibold text-xs">{item.place}</p>
              
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                {item.detail}
              </p>
            </div>

            {item.highlights && (
              <div className="pt-3 border-t border-slate-700/30 space-y-2 mt-auto">
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold flex items-center gap-1 text-slate-500">
                  <BookOpen className="w-3 h-3 text-purple-400" /> Highlights
                </span>
                <ul className="space-y-1">
                  {item.highlights.map((h, idx) => (
                    <li key={idx} className="text-[11px] leading-normal text-slate-600 dark:text-slate-400">
                      • {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        ))}
      </div>

    </section>
  );
}
