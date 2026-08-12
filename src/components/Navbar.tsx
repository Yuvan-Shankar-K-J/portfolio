import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Send, Terminal, FolderKanban, Award, GraduationCap, Briefcase, User, Home, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/about', label: 'About', icon: User },
  { to: '/experience', label: 'Experience', icon: Briefcase },
  { to: '/education', label: 'Education', icon: GraduationCap },
  { to: '/certificates', label: 'Awards', icon: Award },
  { to: '/skills', label: 'Skills', icon: Terminal },
  { to: '/projects', label: 'Projects', icon: FolderKanban },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="app-container pt-4">
        <div className="glass-panel px-4 py-3 flex items-center justify-between">
          
          {/* Brand Mark */}
          <NavLink 
            to="/" 
            className="flex items-center gap-3 group text-decoration-none"
            onClick={() => setMobileOpen(false)}
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-400 via-indigo-500 to-purple-500 p-[1px] shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-bold text-sky-400 text-sm tracking-wider">
                YS
              </div>
            </div>
            
            <div className="hidden sm:block">
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 dark:text-slate-100 text-base tracking-tight group-hover:text-sky-500 transition-colors">
                  Yuvan Shankar
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  AI Developer
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-mono">Full-Stack & Applied AI</p>
            </div>
          </NavLink>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-xl border border-slate-300/60 dark:border-slate-700/40 bg-slate-100/60 dark:bg-slate-950/40 backdrop-blur-md">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.to;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={`relative flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 text-decoration-none ${
                    isActive
                      ? 'text-sky-600 dark:text-sky-400 bg-sky-500/15 border border-sky-500/30 shadow-sm font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-sky-500' : 'text-slate-500 dark:text-slate-400'}`} />
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            
            {/* Dark / Light Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              className="btn-icon rounded-xl"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              aria-label="Toggle Dark Light Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            <NavLink
              to="/contact"
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-sky-400 to-blue-600 text-slate-950 hover:from-sky-300 hover:to-blue-500 transition-all duration-300 shadow-md shadow-sky-500/20 text-decoration-none"
            >
              <Send className="w-3.5 h-3.5" />
              Contact
            </NavLink>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden btn-icon rounded-xl"
              aria-label="Toggle Navigation Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileOpen && (
          <div className="md:hidden mt-2 p-3 glass-panel rounded-2xl shadow-2xl flex flex-col gap-1.5 animate-fadeIn">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.to;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold text-decoration-none ${
                    isActive
                      ? 'bg-sky-500/15 text-sky-600 dark:text-sky-400 border border-sky-500/30'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-4 h-4 text-sky-500" />
                  {item.label}
                </NavLink>
              );
            })}
            <NavLink
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold bg-sky-400 text-slate-950 text-decoration-none"
            >
              <Send className="w-4 h-4" />
              Start Conversation
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}
