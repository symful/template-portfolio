export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    website: string;
    linkedin: string;
    github: string;
  };
  avatar: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description?: string;
}

export interface Language {
  language: string;
  level: string;
  certification: string;
  score: number;
  maxScore: number;
  percentage: number;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Skills {
  languages: Skill[];
  frameworks: Skill[];
  concepts: Skill[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  current?: boolean;
  responsibilities: string[];
  techStack: string[];
}

export interface Achievement {
  year: number;
  title: string;
  organization: string;
  description: string;
  type: "award" | "competition";
  icon: string;
  rank: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  category: string;
  image: string;
  nda: boolean;
}

export interface Organization {
  title: string;
  organization: string;
  period: string;
  location: string;
  current?: boolean;
  responsibilities: string[];
  logo: string;
}

export interface Assignment {
  id: number;
  title: string;
  type: "website" | "pdf" | "image" | "video";
  description: string;
  objectives: string[];
  results: string[];
  technologies?: string[];
  liveUrl?: string;
  githubUrl?: string;
  file?: string;
  thumbnail: string;
  theme?: string;
  duration?: string;
}

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    text: {
      primary: string;
      secondary: string;
      muted: string;
    };
    border: string;
  };
  fonts: {
    sans: string;
    mono: string;
    display: string;
  };
  animations: {
    enableParticles: boolean;
    enable3D: boolean;
    particleCount: number;
    enableScrollAnimations: boolean;
    enableMicroInteractions: boolean;
    reducedMotion: boolean;
  };
  layout: {
    maxWidth: string;
    containerPadding: string;
    sectionSpacing: string;
  };
  effects: {
    glassmorphism: {
      enabled: boolean;
      blur: string;
      opacity: number;
    };
    glow: {
      enabled: boolean;
      color: string;
      intensity: string;
    };
  };
}
