import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const [currentTitle, setCurrentTitle] = useState(0);

  const titles = [
    "Frontend Developer",
    "Marketing Tech Specialist",
    "Shopify Developer",
  ];

  const techStack = [
    "React",
    "JavaScript",
    "TypeScript",
    "Shopify",
    "OpenAI API",
    "Meta Ads API",
    "Tailwind CSS",
    "HTML/CSS",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Typing animation for hero title
      if (titleRef.current) {
        const text = "Erielí Carolina Lara";
        const chars = text.split("");
        titleRef.current.innerHTML = chars
          .map((char, i) =>
            char === " "
              ? " "
              : `<span class="char opacity-0 inline-block transform translate-y-4" style="animation-delay: ${
                  i * 0.03
                }s">${char}</span>`
          )
          .join("");

        gsap.to(".char", {
          opacity: 1,
          y: 0,
          duration: 0.04,
          stagger: 0.03,
          ease: "back.out(1.7)",
          onComplete: () => {
            // Add cursor effect
            const cursor = document.createElement("span");
            cursor.className = "animate-pulse text-emerald-500 ml-1";
            cursor.textContent = "|";
            titleRef.current?.appendChild(cursor);
            setTimeout(() => cursor.remove(), 2000);
          },
        });
      }

      // Enhanced subtitle animations with underline effects
      gsap.fromTo(
        ".subtitle-line",
        { opacity: 0, y: 20, rotateX: -90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.6,
          stagger: 0.2,
          delay: 1,
          ease: "power2.out",
        }
      );

      // Animated tech badges with bounce
      gsap.fromTo(
        ".tech-badge",
        { opacity: 0, scale: 0, rotation: -180 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          stagger: 0.1,
          delay: 2,
          ease: "elastic.out(1, 0.5)",
        }
      );

      // Floating particles animation
      gsap.to(".particle", {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        rotation: "random(-180, 180)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)]"></div>

        {/* Floating Particles */}
        <div ref={particlesRef} className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`particle absolute w-2 h-2 rounded-full ${
                i % 4 === 0
                  ? "bg-emerald-400/30"
                  : i % 4 === 1
                  ? "bg-teal-400/30"
                  : i % 4 === 2
                  ? "bg-cyan-400/30"
                  : "bg-purple-400/30"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Floating Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-xl animate-pulse"></div>
          <div
            className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-br from-teal-400/10 to-emerald-400/10 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-black mb-6 text-gray-900 dark:text-white leading-tight">
          <div className="overflow-hidden">
            <span
              className="inline-block animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Erielí Carolina
            </span>
          </div>
          <div className="overflow-hidden">
            <span
              className="inline-block animate-fade-in-up text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400"
              style={{ animationDelay: "0.4s" }}
            >
              Lara
            </span>
          </div>
        </h1>
        <div className="h-12 my-12 flex items-center justify-center">
          <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium overflow-hidden">
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateY(-${currentTitle * 3}rem)` }}
            >
              {titles.map((title, index) => (
                <div
                  key={index}
                  className="h-12 flex items-center justify-center"
                >
                  {title}
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6">
          Building AI-powered marketing solutions and e-commerce experiences
          with 4+ years specializing in marketing technology and Shopify
          development
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <Button
            onClick={() => scrollToSection("projects")}
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-2.5 text-base font-medium rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            View My Work
          </Button>
          <a href="/Erieli_Carolina_Lara_Frontend.pdf" download>
            <Button
              variant="outline"
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 px-6 py-2.5 text-base font-medium rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </a>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="outline"
            className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20 px-6 py-2.5 text-base font-medium rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            Let's Connect
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {techStack.map((tech, index) => (
            <Badge
              key={tech}
              variant="secondary"
              className={`tech-badge px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 hover:scale-110 cursor-pointer ${
                index % 4 === 0
                  ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-emerald-900/50"
                  : index % 4 === 1
                  ? "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 hover:bg-teal-200 dark:hover:bg-teal-900/50"
                  : index % 4 === 2
                  ? "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-200 dark:hover:bg-cyan-900/50"
                  : "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50"
              }`}
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
