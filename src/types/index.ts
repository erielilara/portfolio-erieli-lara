// Common types and interfaces for the portfolio

export interface NavigationProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  liveUrl?: string;
  githubUrl?: string;
  status: 'live' | 'coming-soon' | 'in-development';
  category: 'web-app' | 'e-commerce' | 'marketing' | 'portfolio';
  metrics?: ProjectMetric[];
}

export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tool' | 'framework';
}

export interface ProjectMetric {
  label: string;
  value: string;
  description?: string;
}

export interface Skill {
  name: string;
  category: SkillCategory;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
}

export type SkillCategory = 
  | 'frontend' 
  | 'shopify' 
  | 'marketing-tech' 
  | 'tools-design';

export interface SkillGroup {
  title: string;
  category: SkillCategory;
  skills: Skill[];
  description: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  location?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export interface HeroContent {
  name: string;
  roles: string[];
  summary: string;
  cta: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
}

export interface Stats {
  experience: string;
  specialization: string;
  integration: string;
  platform: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  highlights: string[];
}

// Animation and UI types
export interface AnimationConfig {
  duration: number;
  delay?: number;
  ease?: string;
}

export interface ScrollConfig {
  offset: number;
  behavior: 'smooth' | 'auto';
}

// Theme types
export type Theme = 'light' | 'dark';

export interface ThemeConfig {
  theme: Theme;
  toggleTheme: () => void;
}