import { useEffect } from 'react';
import { X, ExternalLink, FileText, Award } from 'lucide-react';
import { Certificate } from '../types';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export default function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (certificate) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  const isJpg = certificate.file?.endsWith('.jpg') || certificate.file?.endsWith('.png');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-fadeIn" onClick={onClose}>
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] glass-panel rounded-2xl flex flex-col overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700/30">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base line-clamp-1">{certificate.title}</h3>
              <p className="text-slate-400 text-xs">{certificate.issuer} • {certificate.year}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {certificate.file && (
              <a
                href={certificate.file}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5 text-decoration-none"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Open Full File
              </a>
            )}
            <button
              onClick={onClose}
              className="btn-icon p-2 rounded-lg"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Viewer Body */}
        <div className="flex-1 overflow-y-auto p-6 flex items-center justify-center min-h-[380px]">
          {certificate.file ? (
            isJpg ? (
              <img
                src={certificate.file}
                alt={certificate.title}
                className="max-w-full max-h-[65vh] object-contain rounded-lg border border-slate-700/40 shadow-lg"
              />
            ) : (
              <iframe
                src={certificate.file}
                title={certificate.title}
                className="w-full h-[60vh] rounded-lg border border-slate-700/40"
              />
            )
          ) : (
            <div className="text-center space-y-3 p-8">
              <FileText className="w-12 h-12 text-slate-500 mx-auto" />
              <p className="font-semibold text-sm">Certificate Record Verified</p>
              <p className="text-slate-400 text-xs max-w-sm">
                This honor/achievement standard is officially documented by {certificate.issuer}.
              </p>
            </div>
          )}
        </div>

        {/* Footer Summary */}
        <div className="px-6 py-3 border-t border-slate-700/30 text-xs text-slate-400 flex items-center justify-between">
          <span className="font-mono text-sky-400 font-semibold">{certificate.category}</span>
          <p className="line-clamp-1 max-w-lg">{certificate.summary}</p>
        </div>
      </div>
    </div>
  );
}
