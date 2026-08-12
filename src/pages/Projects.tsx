import { useState } from 'react';
import { ExternalLink, FolderKanban } from 'lucide-react';
import { Project } from '../types';

function GithubIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const projects: Project[] = [
  {
    id: 'timepulse',
    title: 'Timepulse (Workforce Management CRM)',
    category: 'Production',
    stack: ['Next.js 16', 'NestJS', 'PostgreSQL', 'Prisma', 'AWS'],
    metric: 'Production System',
    description: 'A workforce management CRM with scalable REST APIs, reporting, client operations, document workflows, and cloud architecture ownership.',
    link: 'https://github.com/Yuvan-Shankar-K-J'
  },
  {
    id: 'youkt',
    title: 'Youkt (AI Recruitment Platform)',
    category: 'Production',
    stack: ['LangChain', 'Candidate Workflows', 'Job Matching', 'NestJS'],
    metric: 'In Development',
    description: 'An AI-powered recruitment platform with intelligent candidate management, workflow automation, and job-matching capabilities.',
    link: 'https://github.com/Yuvan-Shankar-K-J'
  },
  {
    id: 'robotic-nav',
    title: 'Autonomous Robotic Navigation System (Pseudo-eye)',
    category: 'AI/ML',
    stack: ['Python', 'C++', 'Computer Vision', 'VLMs', 'SLMs', 'OpenCV'],
    metric: '90%+ path navigation',
    description: 'An AI-powered robotic navigation system for real-time obstacle detection, path planning, and contextual decision-making using vision-language models.',
    link: 'https://github.com/Yuvan-Shankar-K-J/Pseudo-eye'
  },
  {
    id: 'inventory-assistant',
    title: 'AI Inventory Assistant (Serverpod)',
    category: 'AI/ML',
    stack: ['Dart', 'Serverpod', 'Flutter', 'PostgreSQL', 'Machine Learning'],
    metric: '93.5% accuracy',
    description: 'An AI-powered inventory management platform for demand forecasting, stock optimization, trend analysis, and smarter future demand prediction.',
    link: 'https://github.com/Yuvan-Shankar-K-J/Real-time-sales-and-inventory-assitant-using-serverpod'
  },
  {
    id: 'law-snap',
    title: 'Law Snap',
    category: 'Hackathon',
    stack: ['Python', 'Streamlit', 'NLP', 'Bhashini API'],
    metric: 'Regional Winner',
    description: 'An AI-powered legal awareness platform helping citizens understand laws, rights, and government regulations through multilingual legal information.',
    link: 'https://github.com/Yuvan-Shankar-K-J/LawSnap'
  },
  {
    id: 'handsign-recog',
    title: 'Hand Sign Recognition System',
    category: 'AI/ML',
    stack: ['Python', 'OpenCV', 'Deep Learning', 'Computer Vision'],
    metric: 'Real-Time Vision',
    description: 'Computer vision pipeline detecting and classifying hand gesture signs into text annotations for accessibility and gesture control.',
    link: 'https://github.com/Yuvan-Shankar-K-J/Handsign_recoginition'
  },
  {
    id: 'animal-intrusion',
    title: 'Animal Intrusion Detection System',
    category: 'AI/ML',
    stack: ['Python', 'Jupyter Notebook', 'Object Detection', 'YOLO'],
    metric: 'Farm Security',
    description: 'AI object detection model identifying wildlife and farm animal intrusion in real-time camera feeds to alert property owners.',
    link: 'https://github.com/Yuvan-Shankar-K-J/Animal-Intrusion-Detection-System'
  },
  {
    id: 'sense-ai-hackathon',
    title: 'SENSE AI Hackathon Platform',
    category: 'Hackathon',
    stack: ['JavaScript', 'React', 'Node.js', 'REST APIs'],
    metric: 'Hackathon Project',
    description: 'Interactive web platform designed for AI hackathon challenges with project submission tracking and automated evaluation pipelines.',
    link: 'https://github.com/Yuvan-Shankar-K-J/SENSE_AI_Hackathon'
  },
  {
    id: 'mern-social',
    title: 'MERN Social Media Application',
    category: 'Full-Stack',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT Auth'],
    metric: 'Full-Stack Web App',
    description: 'Full-stack social media application featuring user authentication, post feeds, media uploads, likes, comments, and database relations.',
    link: 'https://github.com/Yuvan-Shankar-K-J/MERN_socialmedia_app'
  },
  {
    id: 'angular-dotnet',
    title: 'Angular & .NET Enterprise Application',
    category: 'Full-Stack',
    stack: ['C#', '.NET Core', 'Angular', 'SQL Server', 'REST APIs'],
    metric: 'Enterprise Stack',
    description: 'Full-stack enterprise application built with Angular frontend, C# .NET Core backend APIs, and SQL database models.',
    link: 'https://github.com/Yuvan-Shankar-K-J/Angular-dotnet'
  },
  {
    id: 'todo-spring',
    title: 'Spring Boot Todo Service',
    category: 'Full-Stack',
    stack: ['Java', 'Spring Boot', 'REST APIs', 'SQL'],
    metric: 'Backend Service',
    description: 'Modular task management microservice backend built using Java Spring Boot with RESTful endpoints and persistence.',
    link: 'https://github.com/Yuvan-Shankar-K-J/Todo-spring'
  },
  {
    id: 'real-flutter',
    title: 'Flutter Cross-Platform Mobile Application',
    category: 'Full-Stack',
    stack: ['Dart', 'Flutter', 'Mobile Development', 'UI Design'],
    metric: 'Mobile Application',
    description: 'Cross-platform mobile application built with Flutter featuring responsive UI components, navigation, and API integrations.',
    link: 'https://github.com/Yuvan-Shankar-K-J/Real-flutter'
  },
  {
    id: 'android-native',
    title: 'Android Native Application',
    category: 'Full-Stack',
    stack: ['Kotlin', 'Android SDK', 'Mobile UI', 'Gradle'],
    metric: 'Native Mobile',
    description: 'Native Android application developed with Kotlin, implementing Android lifecycle handlers and mobile UI components.',
    link: 'https://github.com/Yuvan-Shankar-K-J/Android'
  },
  {
    id: 'learning-flask',
    title: 'Flask Web API Backend',
    category: 'Full-Stack',
    stack: ['Python', 'Flask', 'REST APIs', 'Backend'],
    metric: 'Python Backend',
    description: 'Lightweight Python web API service built with Flask for handling request routing, session data, and backend logic.',
    link: 'https://github.com/Yuvan-Shankar-K-J/Learning-flask'
  }
];

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'AI/ML', 'Full-Stack', 'Hackathon', 'Production'];

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter(p => p.category === selectedFilter);

  return (
    <section className="page-wrapper space-y-10">
      
      {/* Header */}
      <div className="space-y-4">
        <div className="eyebrow-badge">
          <FolderKanban className="w-3.5 h-3.5" />
          GitHub Repositories ({projects.length})
        </div>
        <h1 className="page-title">
          AI products, platforms, and <span className="gradient-text">intelligent systems</span>.
        </h1>
        <p className="page-subtitle">
          Explore all public repositories from Yuvan Shankar's GitHub profile, spanning AI models, computer vision, full-stack web applications, and mobile apps.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-700/30 pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedFilter(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all border ${
              selectedFilter === cat
                ? 'bg-sky-500/20 text-sky-400 border-sky-500/40 font-bold'
                : 'btn-secondary text-slate-600 dark:text-slate-300'
            }`}
          >
            {cat} {cat !== 'All' && `(${projects.filter(p => p.category === cat).length})`}
          </button>
        ))}
      </div>

      {/* Uniform Cards Grid */}
      <div className="grid-responsive-2">
        {filteredProjects.map((project, idx) => (
          <div key={project.id} className="card-uniform space-y-5">
            <div className="space-y-3">
              
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-extrabold text-slate-400 opacity-60">
                  {String(idx + 1).padStart(2, '0')}
                </span>

                <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-sky-500/10 text-sky-400 border border-sky-500/30">
                  {project.metric}
                </span>
              </div>

              <h2 className="text-xl font-bold">
                {project.title}
              </h2>

              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.stack.map((item) => (
                  <span key={item} className="tag-pill">
                    {item}
                  </span>
                ))}
              </div>

            </div>

            <div className="pt-4 border-t border-slate-700/30 flex items-center justify-between mt-auto">
              <span className="text-xs font-mono text-slate-500 font-bold uppercase tracking-wider">
                {project.category}
              </span>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-2 px-4 text-xs font-mono font-bold flex items-center gap-2 text-decoration-none"
              >
                <GithubIcon className="w-3.5 h-3.5" /> Repository <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
