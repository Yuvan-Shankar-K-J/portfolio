import { NavLink } from 'react-router-dom';
import { Mail, ArrowUp, Cpu } from 'lucide-react';

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-slate-300/60 dark:border-slate-800/80 pt-12 pb-8 relative z-10 bg-slate-100/60 dark:bg-slate-950/60 backdrop-blur-lg">
      <div className="app-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-300/60 dark:border-slate-800/60">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400 font-bold text-xs">
                YS
              </div>
              <span className="font-bold text-slate-900 dark:text-slate-100 text-lg">Yuvan Shankar</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md leading-relaxed">
              AI Developer building production-grade full-stack products, recruitment automation platforms, and intelligent document processing workflows.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/Yuvan-Shankar-K-J"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon rounded-lg p-2 text-slate-600 dark:text-slate-400 hover:text-sky-500 transition-colors text-decoration-none"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/yuvan-shankar-56785a32b"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon rounded-lg p-2 text-slate-600 dark:text-slate-400 hover:text-sky-500 transition-colors text-decoration-none"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:shankaryuvan90@gmail.com"
                className="btn-icon rounded-lg p-2 text-slate-600 dark:text-slate-400 hover:text-sky-500 transition-colors text-decoration-none"
                aria-label="Email Me"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-slate-700 dark:text-slate-400 text-xs font-bold uppercase tracking-wider font-mono">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><NavLink to="/" className="hover:text-sky-500 transition-colors text-decoration-none">Home</NavLink></li>
              <li><NavLink to="/about" className="hover:text-sky-500 transition-colors text-decoration-none">About</NavLink></li>
              <li><NavLink to="/experience" className="hover:text-sky-500 transition-colors text-decoration-none">Experience</NavLink></li>
              <li><NavLink to="/projects" className="hover:text-sky-500 transition-colors text-decoration-none">Projects</NavLink></li>
              <li><NavLink to="/certificates" className="hover:text-sky-500 transition-colors text-decoration-none">Certificates & Awards</NavLink></li>
            </ul>
          </div>

          {/* Stack Summary */}
          <div className="space-y-3">
            <h4 className="text-slate-700 dark:text-slate-400 text-xs font-bold uppercase tracking-wider font-mono">Core Stack</h4>
            <div className="flex flex-wrap gap-1.5">
              <span className="tag-pill">Next.js 16</span>
              <span className="tag-pill">NestJS</span>
              <span className="tag-pill">LangChain</span>
              <span className="tag-pill">PostgreSQL</span>
              <span className="tag-pill">Python</span>
              <span className="tag-pill">AWS</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Yuvan Shankar K J. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Built with <Cpu className="w-3.5 h-3.5 text-sky-400" /> & React 19
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-500 hover:text-sky-500 transition-colors"
            >
              Back to top <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
