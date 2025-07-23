import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { ASSETS, ANIMATION_CONFIG, SCROLL_CONFIG } from "@/lib/constants";
import { navigationItems } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    // Dark mode setup with smooth transitions
    document.documentElement.style.setProperty(
      "--color-transition",
      "all 0.3s ease"
    );
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    // Scroll progress and active section tracking
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      setShowScrollTop(scrolled > windowHeight);

      // Update active section
      const sections = navigationItems.map(item => item.id);
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return (
            rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2
          );
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Advanced GSAP Animations
    const ctx = gsap.context(() => {
      // Section reveal animations
      gsap.utils.toArray(".reveal-section").forEach((section: Element) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: ANIMATION_CONFIG.duration.slow,
            ease: ANIMATION_CONFIG.ease.smooth,
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Parallax effects
      gsap.utils.toArray(".parallax-element").forEach((element: Element) => {
        gsap.to(element, {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: SCROLL_CONFIG.behavior });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: SCROLL_CONFIG.behavior });
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        darkMode ? "dark bg-slate-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <Navigation
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <Hero scrollToSection={scrollToSection} />
      <Skills />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-gray-200/50 dark:border-slate-700/50 bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm">
        <div className="container mx-auto text-center">
          <div className="w-12 h-12 flex items-center justify-center bg-white  rounded-full mx-auto mb-4">
            <img
              src={ASSETS.logo}
              alt="Erielí Lara Logo"
              className="w-full h-full object-contain bg-transparent"
            />
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © 2025 Erielí Carolina Lara. All rights reserved.
          </p>
        </div>
      </footer>

      <ScrollToTop showScrollTop={showScrollTop} scrollToTop={scrollToTop} />
    </div>
  );
};

export default Index;
