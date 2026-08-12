import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';
import { ContactForm } from '../types';

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
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

const contactMethods = [
  {
    label: 'Email',
    value: 'shankaryuvan90@gmail.com',
    href: 'mailto:shankaryuvan90@gmail.com',
    icon: Mail,
    color: 'text-sky-400 bg-sky-500/10 border-sky-500/30'
  },
  {
    label: 'Phone',
    value: '+91 8807337421',
    href: 'tel:8807337421',
    icon: Phone,
    color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30'
  },
  {
    label: 'Location',
    value: 'Coimbatore / Chennai, India',
    href: undefined,
    icon: MapPin,
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/30'
  },
  {
    label: 'LinkedIn',
    value: 'yuvan-shankar-56785a32b',
    href: 'https://linkedin.com/in/yuvan-shankar-56785a32b',
    icon: LinkedinIcon,
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/30'
  },
  {
    label: 'GitHub',
    value: 'Yuvan-Shankar-K-J',
    href: 'https://github.com/Yuvan-Shankar-K-J',
    icon: GithubIcon,
    color: 'text-slate-500 bg-slate-500/10 border-slate-500/30'
  }
];

const topicChips = [
  'AI Project Consultation',
  'Full-Stack Web App',
  'Hiring & Recruitment',
  'General Inquiry'
];

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    topic: topicChips[0],
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${form.topic}] Portfolio Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Hello Yuvan,\n\n${form.message}\n\nSender Name: ${form.name}\nSender Email: ${form.email}`
    );
    window.location.href = `mailto:shankaryuvan90@gmail.com?subject=${subject}&body=${body}`;
    setIsSent(true);
  };

  return (
    <section className="page-wrapper space-y-10">
      
      {/* Header */}
      <div className="space-y-4">
        <div className="eyebrow-badge">
          <Mail className="w-3.5 h-3.5" />
          Get In Touch
        </div>
        <h1 className="page-title">
          Have an idea, opportunity, or <span className="gradient-text">build in mind</span>?
        </h1>
        <p className="page-subtitle">
          Feel free to reach out via direct message or email. I am always open to discussing new AI products, full-stack builds, and technology roles.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-4">
          <div className="card-uniform space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-400" /> Direct Channels
            </h3>

            <div className="space-y-3">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <div
                    key={method.label}
                    className="p-3.5 rounded-xl border border-slate-700/30 bg-slate-100/50 dark:bg-slate-950/80 flex items-center gap-3.5"
                  >
                    <div className={`w-9 h-9 rounded-lg border flex items-center justify-center shrink-0 ${method.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-mono text-slate-500 font-bold uppercase tracking-wider">{method.label}</p>
                      {method.href ? (
                        <a
                          href={method.href}
                          target={method.href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="text-sm font-semibold hover:text-sky-400 transition-colors truncate block text-decoration-none"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold truncate">{method.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7">
          <div className="card-uniform space-y-5">
            <div className="space-y-1">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-sky-400" /> Send a Message
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Fills your email client with structured message formatting automatically.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider block">
                  Select Inquiry Topic:
                </label>
                <div className="flex flex-wrap gap-2">
                  {topicChips.map((chip) => (
                    <button
                      type="button"
                      key={chip}
                      onClick={() => setForm({ ...form, topic: chip })}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold font-mono transition-all border ${
                        form.topic === chip
                          ? 'bg-sky-500/20 text-sky-400 border-sky-500/40 font-bold'
                          : 'btn-secondary text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-semibold block">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-700/30 bg-slate-100/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-semibold block">Your Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="sarah@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-700/30 bg-slate-100/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-semibold block">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project, team requirements, or application goal..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-700/30 bg-slate-100/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:border-sky-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-3 text-sm font-bold flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" /> Open Mail Client & Send
              </button>

              {isSent && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs flex items-center gap-2 font-mono">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  Mail composer opened! Please hit send in your email client.
                </div>
              )}

            </form>
          </div>
        </div>

      </div>

    </section>
  );
}
