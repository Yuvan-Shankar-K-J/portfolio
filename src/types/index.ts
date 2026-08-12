export interface Project {
  id: string;
  title: string;
  category: 'AI/ML' | 'Full-Stack' | 'Hackathon' | 'Production';
  stack: string[];
  metric: string;
  description: string;
  longDescription?: string;
  link: string;
  github?: string;
  featured?: boolean;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: 'Awards & Hackathons' | 'Internships' | 'Certifications & Courses';
  summary: string;
  file: string | null;
  fileType?: 'pdf' | 'image';
  badgeColor?: string;
}

export interface ExperienceRole {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  tags: string[];
  summary: string;
  highlights: string[];
  isCurrent?: boolean;
}

export interface EducationItem {
  id: string;
  period: string;
  title: string;
  place: string;
  detail: string;
  highlights?: string[];
}

export interface SkillGroup {
  category: string;
  description?: string;
  skills: { name: string; level?: 'Expert' | 'Advanced' | 'Proficient'; tag?: string }[];
}

export interface ContactForm {
  name: string;
  email: string;
  topic?: string;
  message: string;
}
