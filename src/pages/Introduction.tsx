import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, CheckCircle2, Terminal as TerminalIcon, Cpu } from 'lucide-react';

const agentSimulations = [
  {
    id: 'timepulse',
    name: 'Timepulse CRM',
    badge: 'NestJS + Prisma',
    command: 'timepulse.process_timesheet_ocr("timesheet_jan_2026.pdf")',
    logs: [
      'Parsing employee shift logs and clock-in timestamps...',
      'Running NestJS & Prisma validation schema...',
      'Calculating total billable hours & overtime metrics...',
      'Generating client operations analytics report...',
      'Database record committed to PostgreSQL on AWS.'
    ],
    status: 'Executed in 380ms'
  },
  {
    id: 'youkt',
    name: 'Youkt AI Matcher',
    badge: 'LangChain + Vector DB',
    command: 'youkt_ai.match_candidate_profiles(role="Senior AI Engineer")',
    logs: [
      'Generating candidate resume embeddings via LangChain...',
      'Querying Supabase vector database for semantic similarity...',
      'Ranked top candidate profiles with 96.8% match score...',
      'Drafted automated interview schedules & candidate insights.',
      'Recruitment workflow pipeline completed.'
    ],
    status: 'Executed in 290ms'
  },
  {
    id: 'lawsnap',
    name: 'LawSnap Multilingual',
    badge: 'Bhashini API + Streamlit',
    command: 'law_snap.process_legal_query(query="Explain rights in Tamil")',
    logs: [
      'Initializing Bhashini Multilingual Translation API...',
      'Parsing legal document context & government acts...',
      'Translating complex legal terminology to simplified regional language...',
      'Generated simplified audio & text explanation for citizen access.',
      'Bhasha Bandhu Hackathon regional award-winning query served.'
    ],
    status: 'Executed in 450ms'
  },
  {
    id: 'pseudo-eye',
    name: 'Pseudo-Eye Navigation',
    badge: 'VLMs + SLMs + Vision',
    command: 'pseudo_eye.run_navigation(lidar_camera_feed)',
    logs: [
      'Processing stereo camera & LiDAR spatial point clouds...',
      'Running VLM / SLM obstacle classification model in real-time...',
      'Computing dynamic trajectory avoidance path...',
      'Achieved 90%+ path navigation efficiency.',
      'Target destination reached successfully.'
    ],
    status: 'Executed in 85ms'
  }
];

export default function Introduction() {
  const [activeSim, setActiveSim] = useState(agentSimulations[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState<string[]>(agentSimulations[0].logs);

  const handleRunSimulation = (sim: typeof agentSimulations[0]) => {
    setActiveSim(sim);
    setIsRunning(true);
    setConsoleOutput(['Initialising execution pipeline...']);
    
    sim.logs.forEach((log, index) => {
      setTimeout(() => {
        setConsoleOutput(prev => [...prev, log]);
        if (index === sim.logs.length - 1) {
          setIsRunning(false);
        }
      }, (index + 1) * 320);
    });
  };

  return (
    <section className="page-wrapper space-y-12">
      
      {/* Hero Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="eyebrow-badge">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
            Applied AI Product Engineer
          </div>

          <h1 className="page-title">
            Building AI products that move from <span className="gradient-text">prototype to production</span>.
          </h1>

          <p className="page-subtitle">
            I am <strong className="font-bold underline decoration-sky-400/50">Yuvan Shankar</strong>, an AI Developer building intelligent document processing workflows, recruitment automation systems, workforce CRMs, and applied machine learning solutions.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link to="/projects" className="btn-primary">
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Start Conversation
            </Link>
          </div>

          {/* Uniform Metrics Cards */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-700/30">
            <div className="card-uniform p-4 text-left">
              <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-wider">Role</span>
              <p className="text-xl font-bold mt-1">AI Dev</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Selsoft Inc</p>
            </div>

            <div className="card-uniform p-4 text-left">
              <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">Projects</span>
              <p className="text-xl font-bold mt-1">14 Repositories</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">AI, Web & Mobile</p>
            </div>

            <div className="card-uniform p-4 text-left">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">Outcomes</span>
              <p className="text-xl font-bold mt-1">90%+</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Task Accuracy</p>
            </div>
          </div>
        </div>

        {/* Right Column: AI Agent Workbench */}
        <div className="lg:col-span-5">
          <div className="card-uniform p-6 space-y-4">
            
            <div className="flex items-center justify-between border-b border-slate-700/30 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-xs text-slate-500 dark:text-slate-400">ai_agent_runner.py</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-500/10 text-sky-400 border border-sky-500/30">
                LIVE DEMO
              </span>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400">Select Workflow to Run:</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {agentSimulations.map((sim) => (
                  <button
                    key={sim.id}
                    onClick={() => handleRunSimulation(sim)}
                    className={`p-2.5 rounded-xl text-left text-xs font-mono transition-all border ${
                      activeSim.id === sim.id
                        ? 'bg-sky-500/20 border-sky-500/50 text-sky-400 font-bold'
                        : 'btn-secondary text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    <div className="truncate">{sim.name}</div>
                    <div className="text-[9px] opacity-70 truncate">{sim.badge}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900 dark:bg-slate-950 border border-slate-700/30 font-mono text-xs text-slate-100">
              <TerminalIcon className="w-4 h-4 text-sky-400 shrink-0" />
              <span className="text-[11px] truncate flex-1">{activeSim.command}</span>
              <button
                onClick={() => handleRunSimulation(activeSim)}
                disabled={isRunning}
                className="btn-primary py-1 px-3 text-xs font-mono"
              >
                <Play className={`w-3 h-3 ${isRunning ? 'animate-spin' : ''}`} />
                {isRunning ? 'Running' : 'Run'}
              </button>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 text-slate-200 border border-slate-800 font-mono text-xs space-y-2 min-h-[180px] max-h-[210px] overflow-y-auto">
              {consoleOutput.map((line, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-400 shrink-0">›</span>
                  <span className={idx === consoleOutput.length - 1 ? 'text-sky-300 font-semibold' : 'text-slate-300'}>
                    {line}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-1">
              <span className="flex items-center gap-1 text-emerald-500">
                <CheckCircle2 className="w-3.5 h-3.5" /> Pipeline Ready
              </span>
              <span>{activeSim.status}</span>
            </div>

          </div>
        </div>

      </div>

      {/* Uniform Tech Stack Banner */}
      <div className="card-uniform p-6 space-y-3">
        <div className="flex items-center justify-between border-b border-slate-700/30 pb-3">
          <h3 className="text-xs font-bold font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-2">
            <Cpu className="w-4 h-4 text-sky-400" /> Core Tech Stack
          </h3>
          <span className="text-xs font-mono text-slate-500">TypeScript • Python • AWS</span>
        </div>
        <div className="flex flex-wrap gap-2 pt-1">
          {['Python', 'TypeScript', 'Next.js 16', 'NestJS', 'PostgreSQL', 'Prisma', 'LangChain', 'VLMs / SLMs', 'TensorFlow', 'Docker', 'AWS', 'Flutter'].map((tool) => (
            <span key={tool} className="tag-pill">
              {tool}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
