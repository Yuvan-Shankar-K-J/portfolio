import { useState } from 'react';
import { Terminal, Search } from 'lucide-react';
import { SkillGroup } from '../types';

const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    description: 'Core programming languages used across production apps and AI models.',
    skills: [
      { name: 'Python', tag: 'AI/ML' },
      { name: 'TypeScript', tag: 'Full-Stack' },
      { name: 'JavaScript', tag: 'Web' },
      { name: 'SQL', tag: 'Data' },
      { name: 'Java', tag: 'Core' },
      { name: 'Dart', tag: 'Mobile' }
    ]
  },
  {
    category: 'Frontend & Backend Frameworks',
    description: 'Modern web frameworks for building high-scale full-stack systems.',
    skills: [
      { name: 'Next.js 16', tag: 'App Router' },
      { name: 'NestJS', tag: 'Node Backend' },
      { name: 'React 19', tag: 'UI Library' },
      { name: 'REST APIs', tag: 'API Design' },
      { name: 'Flutter', tag: 'Cross-Platform' },
      { name: 'Node.js', tag: 'Runtime' },
      { name: 'Serverpod', tag: 'Backend' }
    ]
  },
  {
    category: 'AI, Agents & ML',
    description: 'LLM orchestrations, RAG pipelines, agents, computer vision, and ML.',
    skills: [
      { name: 'LangChain', tag: 'Agentic AI' },
      { name: 'RAG Architecture', tag: 'Vector Search' },
      { name: 'VLMs & SLMs', tag: 'Multi-Modal' },
      { name: 'AI Agents & MCPs', tag: 'Automation' },
      { name: 'TensorFlow', tag: 'Deep Learning' },
      { name: 'OpenCV', tag: 'Vision' },
      { name: 'NLP & Bhashini API', tag: 'Language' }
    ]
  },
  {
    category: 'Databases & DevOps Cloud',
    description: 'Scalable data stores, ORMs, cloud deployment, and containerization.',
    skills: [
      { name: 'PostgreSQL', tag: 'Relational' },
      { name: 'Prisma ORM', tag: 'Database Layer' },
      { name: 'Supabase Vector', tag: 'Embeddings' },
      { name: 'MongoDB', tag: 'NoSQL' },
      { name: 'AWS Cloud', tag: 'Infrastructure' },
      { name: 'Docker', tag: 'Containers' },
      { name: 'Git & GitHub', tag: 'Version Control' }
    ]
  },
  {
    category: 'Analytics & Reporting',
    description: 'Business intelligence dashboards and forecasting tools.',
    skills: [
      { name: 'Power BI', tag: 'Dashboards' },
      { name: 'Tableau', tag: 'Analytics' },
      { name: 'Demand Forecasting', tag: 'Predictive' },
      { name: 'Workflow Automation', tag: 'CRMs' }
    ]
  },
  {
    category: 'Engineering Practices',
    description: 'Production standards and software development discipline.',
    skills: [
      { name: 'Architecture Ownership' },
      { name: 'API Schema Design' },
      { name: 'Production Delivery' },
      { name: 'Team Collaboration' }
    ]
  }
];

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGroups = skillGroups.map(group => ({
    ...group,
    skills: group.skills.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()) || (s.tag && s.tag.toLowerCase().includes(searchTerm.toLowerCase())))
  })).filter(group => group.skills.length > 0);

  return (
    <section className="page-wrapper space-y-10">
      
      {/* Header */}
      <div className="space-y-4">
        <div className="eyebrow-badge">
          <Terminal className="w-3.5 h-3.5" />
          Technical Matrix
        </div>
        <h1 className="page-title">
          A modern AI product stack from <span className="gradient-text">model logic to deployment</span>.
        </h1>
        <p className="page-subtitle">
          My technical toolkit combines application development with applied artificial intelligence, cloud databases, and workflow automation.
        </p>
      </div>

      {/* Interactive Search Bar */}
      <div className="card-uniform p-3 flex items-center gap-3 max-w-lg">
        <Search className="w-4 h-4 text-sky-400 shrink-0 ml-2" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Filter skills (e.g. Next.js, Python, LangChain)..."
          className="w-full bg-transparent border-none text-slate-800 dark:text-slate-100 placeholder-slate-400 text-sm focus:outline-none font-mono"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="text-xs font-mono btn-secondary px-2 py-1"
          >
            Clear
          </button>
        )}
      </div>

      {/* Skill Matrix Grid */}
      <div className="grid-responsive-2">
        {filteredGroups.map((group) => (
          <div key={group.category} className="card-uniform space-y-4">
            <div className="border-b border-slate-700/30 pb-3">
              <h2 className="text-lg font-bold">{group.category}</h2>
              {group.description && <p className="text-xs text-slate-500 dark:text-slate-400 pt-0.5">{group.description}</p>}
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-700/30 bg-slate-100/50 dark:bg-slate-950/80 text-xs font-semibold font-mono"
                >
                  <span>{skill.name}</span>
                  {skill.tag && (
                    <span className="text-[10px] font-mono text-slate-500 px-1.5 py-0.5 rounded border border-slate-700/30">
                      {skill.tag}
                    </span>
                  )}
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
