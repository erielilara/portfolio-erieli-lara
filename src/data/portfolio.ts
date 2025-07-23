import type { 
  Project, 
  SkillGroup, 
  ContactInfo, 
  HeroContent, 
  Stats, 
  FeatureCard,
  SocialLink 
} from '@/types';

// Hero Section Data
export const heroContent: HeroContent = {
  name: "Erielí Carolina Lara",
  roles: [
    "Frontend Developer",
    "Marketing Tech Specialist", 
    "Shopify Developer"
  ],
  summary: "Especialista en tecnología de marketing con 4+ años desarrollando soluciones que impulsan el crecimiento empresarial a través de la automatización inteligente y experiencias web excepcionales.",
  cta: {
    primary: "View My Work",
    secondary: "Download CV", 
    tertiary: "Let's Connect"
  }
};

// Stats Data  
export const stats: Stats = {
  experience: "4+ Years Experience",
  specialization: "React & Next.js Expert",
  integration: "AI & API Integration",
  platform: "Shopify Development"
};

// Feature Cards Data
export const featureCards: FeatureCard[] = [
  {
    title: "Frontend Proficiency",
    description: "Desarrollo moderno con React, TypeScript y las mejores prácticas de la industria para crear interfaces escalables y performantes.",
    highlights: [
      "Arquitecturas component-based", 
      "State management avanzado", 
      "Performance optimization"
    ]
  },
  {
    title: "Marketing Technology",
    description: "Integración de IA y automatización para optimizar campañas publicitarias y workflows de marketing que generan resultados medibles.",
    highlights: [
      "OpenAI API integration", 
      "Campaign automation", 
      "Analytics & reporting"
    ]
  },
  {
    title: "E-commerce Solutions", 
    description: "Desarrollo especializado en Shopify con enfoque en conversión, performance y experiencias de compra excepcionales.",
    highlights: [
      "Shopify theme development", 
      "Conversion optimization", 
      "Custom app development"
    ]
  }
];

// Skills Data
export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Technologies",
    category: "frontend",
    description: "Tecnologías modernas para desarrollo web",
    skills: [
      { name: "React", category: "frontend", level: "expert" },
      { name: "Next.js", category: "frontend", level: "advanced" },
      { name: "TypeScript", category: "frontend", level: "advanced" },
      { name: "JavaScript", category: "frontend", level: "expert" },
      { name: "Redux", category: "frontend", level: "advanced" },
      { name: "Zustand", category: "frontend", level: "intermediate" }
    ]
  },
  {
    title: "Shopify & E-commerce",
    category: "shopify", 
    description: "Desarrollo especializado en plataformas e-commerce",
    skills: [
      { name: "Shopify Development", category: "shopify", level: "expert" },
      { name: "Liquid Templates", category: "shopify", level: "advanced" },
      { name: "Conversion Optimization", category: "shopify", level: "advanced" },
      { name: "Performance Optimization", category: "shopify", level: "advanced" },
      { name: "Theme Development", category: "shopify", level: "expert" },
      { name: "Custom Apps", category: "shopify", level: "intermediate" }
    ]
  },
  {
    title: "Marketing Tech & AI",
    category: "marketing-tech",
    description: "Integración de IA y tecnologías de marketing",
    skills: [
      { name: "OpenAI API", category: "marketing-tech", level: "advanced" },
      { name: "Meta Ads API", category: "marketing-tech", level: "advanced" },
      { name: "Campaign Management", category: "marketing-tech", level: "expert" },
      { name: "Analytics Integration", category: "marketing-tech", level: "advanced" },
      { name: "Marketing Automation", category: "marketing-tech", level: "advanced" },
      { name: "N8N Workflows", category: "marketing-tech", level: "intermediate" }
    ]
  },
  {
    title: "Tools & Design",
    category: "tools-design",
    description: "Herramientas de desarrollo y diseño",
    skills: [
      { name: "Figma", category: "tools-design", level: "advanced" },
      { name: "Git & GitHub", category: "tools-design", level: "expert" },
      { name: "HTML & SCSS", category: "tools-design", level: "expert" },
      { name: "Material-UI", category: "tools-design", level: "advanced" },
      { name: "Tailwind CSS", category: "tools-design", level: "expert" },
      { name: "Shadcn/ui", category: "tools-design", level: "advanced" }
    ]
  }
];

// Projects Data
export const projects: Project[] = [
  {
    id: "agency-crm",
    title: "Agency CRM System",
    description: "Sistema CRM personalizado con workflows de automatización N8N para optimizar la gestión de clientes y procesos internos de agencias de marketing.",
    image: "/src/assets/images/projects/agency-crm.png",
    technologies: [
      { name: "React", category: "frontend" },
      { name: "Zustand", category: "frontend" },
      { name: "N8N", category: "backend" },
      { name: "REST API", category: "backend" },
      { name: "Tailwind CSS", category: "frontend" }
    ],
    status: "coming-soon",
    category: "web-app",
    metrics: [
      { label: "Workflow Automation", value: "80% reduction", description: "in manual tasks" },
      { label: "Client Management", value: "3x faster", description: "response time" }
    ]
  },
  {
    id: "adsassistant-ai",
    title: "AdsAssistant.ai Platform", 
    description: "Plataforma de automatización de marketing impulsada por IA que gestiona más de $10M en campañas publicitarias, optimizando ROI y rendimiento.",
    image: "/src/assets/images/projects/adsassistant.png",
    technologies: [
      { name: "React", category: "frontend" },
      { name: "OpenAI API", category: "backend" },
      { name: "Meta Ads API", category: "backend" },
      { name: "TypeScript", category: "frontend" },
      { name: "SCSS", category: "frontend" }
    ],
    liveUrl: "https://adsassistant.ai",
    status: "live",
    category: "marketing",
    metrics: [
      { label: "Ad Spend Managed", value: "$10M+", description: "across all campaigns" },
      { label: "ROI Improvement", value: "35% average", description: "for clients" },
      { label: "Time Saved", value: "20 hours/week", description: "in campaign management" }
    ]
  },
  {
    id: "julio-fuenmayor-portfolio",
    title: "Professional Architecture Portfolio",
    description: "Portfolio internacional para firma de diseño de interiores con storytelling visual y experiencia inmersiva que destaca proyectos de alta gama.",
    image: "/src/assets/images/projects/julio-fuenmayor.png", 
    technologies: [
      { name: "WordPress", category: "framework" },
      { name: "Responsive Design", category: "frontend" },
      { name: "Visual Storytelling", category: "frontend" },
      { name: "Performance Optimization", category: "tool" }
    ],
    liveUrl: "https://juliofuenmayor.com/",
    status: "live",
    category: "portfolio", 
    metrics: [
      { label: "Page Load Speed", value: "90+ Score", description: "Google PageSpeed" },
      { label: "Mobile Performance", value: "100% responsive", description: "across devices" },
      { label: "Client Satisfaction", value: "5/5 rating", description: "project delivery" }
    ]
  }
];

// Contact Information
export const contactInfo: ContactInfo = {
  email: "erieli.larad@gmail.com",
  phone: "+57 317 239 5603", 
  github: "https://github.com/erielilara",
  linkedin: "https://linkedin.com/in/erielilara",
  location: "Colombia (Remote Available)"
};

// Social Links
export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/erielilara",
    icon: "Github",
    label: "View my repositories"
  },
  {
    platform: "LinkedIn", 
    url: "https://linkedin.com/in/erielilara",
    icon: "Linkedin",
    label: "Connect professionally"
  },
  {
    platform: "Email",
    url: "mailto:erieli.larad@gmail.com", 
    icon: "Mail",
    label: "Send me an email"
  },
  {
    platform: "WhatsApp",
    url: "https://wa.me/573172395603",
    icon: "MessageCircle", 
    label: "Message on WhatsApp"
  }
];

// Navigation Items
export const navigationItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

// Tech Stack for Hero Section
export const techStack = [
  "React", "TypeScript", "Next.js", "Shopify", 
  "Node.js", "Tailwind", "OpenAI", "Meta Ads"
];