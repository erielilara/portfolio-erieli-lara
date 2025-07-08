import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";
import logo from "@/assets/img/el-logo.svg"; // Adjust the path as necessary

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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
      const sections = ["home", "about", "skills", "projects", "contact"];
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
      gsap.utils.toArray(".reveal-section").forEach((section: any) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
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
      gsap.utils.toArray(".parallax-element").forEach((element: any) => {
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
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
              src={logo}
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
