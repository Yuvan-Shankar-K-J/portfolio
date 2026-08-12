import { User, Cpu, Sparkles, Code, Layers, Zap } from 'lucide-react';

const focusAreas = [
  {
    title: 'AI Product Engineering',
    desc: 'Building scalable application architectures around AI models, vector stores, and agentic tools.',
    icon: Cpu,
  },
  {
    title: 'Document Processing Workflows',
    desc: 'Automating OCR, document classification, data extraction, and validation pipelines.',
    icon: Layers,
  },
  {
    title: 'Recruitment & CRM Automation',
    desc: 'Developing intelligent candidate matching systems, automated applicant tracking, and CRM features.',
    icon: Zap,
  },
  {
    title: 'Production Full-Stack Delivery',
    desc: 'Delivering end-to-end full-stack solutions with Next.js, NestJS, PostgreSQL, Prisma, and AWS.',
    icon: Code,
  },
];

export default function About() {
  return (
    <section className="page-wrapper space-y-10">
      
      {/* Section Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="eyebrow-badge">
          <User className="w-3.5 h-3.5" />
          About Me
        </div>
        <h1 className="page-title">
          Curious by default, <span className="gradient-text">practical by choice</span>.
        </h1>
        <p className="page-subtitle">
          I work as an AI Developer while completing my Artificial Intelligence and Data Science degree at Coimbatore Institute of Technology. My stack spans Python, TypeScript, Next.js, NestJS, PostgreSQL, Prisma, LangChain, AWS, and modern production delivery.
        </p>
      </div>

      {/* Focus Area Grid */}
      <div className="grid-responsive-2">
        {focusAreas.map((area, idx) => {
          const Icon = area.icon;
          return (
            <div key={idx} className="card-uniform space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold">{area.title}</h3>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">{area.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Narrative Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="lg:col-span-2 card-uniform space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold text-xs font-mono">
              01
            </div>
            <h2 className="text-xl font-bold">
              Building the product layer around AI, not just model demos.
            </h2>
          </div>

          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            My recent work at <strong className="text-sky-400">Selsoft Inc</strong> focuses on AI-powered workflows for document processing, workforce management, recruitment automation, reporting, and client operations. I enjoy designing the architecture, building the APIs, shaping the interface, and shipping the system to production.
          </p>

          <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
            I pair machine learning fundamentals in Python with modern application stacks like TypeScript, Next.js 16, NestJS, PostgreSQL, Prisma, LangChain, Docker, and AWS so that AI capability always translates into real user utility.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-700/30">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-slate-500">Degree</span>
              <p className="text-xs font-bold">B.Tech AI & Data Science</p>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-slate-500">Location</span>
              <p className="text-xs font-bold">Coimbatore / Chennai</p>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-slate-500">Languages</span>
              <p className="text-xs font-bold">English, Tamil</p>
            </div>
          </div>
        </div>

        <div className="card-uniform space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sky-400 font-mono text-xs uppercase tracking-wider font-bold">
              <Sparkles className="w-4 h-4" /> Beyond Screens
            </div>
            <h3 className="text-lg font-bold">AI that understands context.</h3>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              Projects like autonomous robotic navigation, LawSnap, and demand forecasting trained me to think about decisions, not just static outputs: what the system perceives, what it predicts, and how humans act on it.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-700/30 space-y-1 font-mono text-xs">
            <div className="text-sky-400 font-bold">core_philosophy.ts</div>
            <p className="text-slate-500 dark:text-slate-400 italic">
              "Great AI products combine rapid inference with clean architecture and uniform UI."
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}
