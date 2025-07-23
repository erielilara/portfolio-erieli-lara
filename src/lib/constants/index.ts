// Application constants and configuration

// Animation configurations
export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.2
  },
  ease: {
    smooth: "power2.out",
    bounce: "bounce.out",
    elastic: "elastic.out"
  },
  stagger: 0.1
} as const;

// Scroll configurations
export const SCROLL_CONFIG = {
  offset: 80,
  behavior: 'smooth' as const,
  threshold: 0.5
};

// Breakpoints for responsive design
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const;

// Theme configuration
export const THEME_CONFIG = {
  defaultTheme: 'dark' as const,
  storageKey: 'portfolio-theme',
  transition: 'all 0.3s ease'
};

// Form configuration
export const FORM_CONFIG = {
  contactForm: {
    action: "https://formspree.io/f/xpwavqjp",
    method: "POST"
  },
  validation: {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^[\+]?[1-9][\d]{0,15}$/
  }
};

// SEO and Meta configuration
export const SEO_CONFIG = {
  title: "Erielí Carolina Lara - Frontend Developer & Marketing Tech Specialist",
  description: "Especialista en tecnología de marketing con 4+ años desarrollando soluciones que impulsan el crecimiento empresarial a través de la automatización inteligente.",
  keywords: [
    "Frontend Developer",
    "React Developer", 
    "Marketing Technology",
    "Shopify Developer",
    "TypeScript",
    "Next.js",
    "AI Integration",
    "E-commerce"
  ],
  author: "Erielí Carolina Lara",
  url: "https://erielilara.dev",
  image: "/og-image.png"
};

// External URLs
export const EXTERNAL_URLS = {
  cv: "/Erieli_Carolina_Lara_Frontend.pdf",
  github: "https://github.com/erielilara",
  linkedin: "https://linkedin.com/in/erielilara",
  email: "mailto:erieli.larad@gmail.com",
  whatsapp: "https://wa.me/573172395603"
} as const;

// Asset paths
export const ASSETS = {
  logo: "/src/assets/images/icons/logo.svg",
  cv: "/Erieli_Carolina_Lara_Frontend.pdf",
  projects: {
    adsassistant: "/src/assets/images/projects/adsassistant.png",
    julioFuenmayor: "/src/assets/images/projects/julio-fuenmayor.png",
    agencyCrm: "/src/assets/images/projects/agency-crm.png"
  }
} as const;

// Development flags
export const DEV_FLAGS = {
  showDebugInfo: process.env.NODE_ENV === 'development',
  enableAnimations: true,
  enableAnalytics: process.env.NODE_ENV === 'production'
} as const;