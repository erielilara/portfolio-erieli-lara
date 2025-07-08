import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Zap, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsGridRef = useRef<HTMLDivElement>(null);
  const statsRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const skillsData = {
    "Frontend Tech": {
      badge: "bg-emerald-500",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Redux",
        "Zustand",
      ],
    },
    "Shopify & E-commerce": {
      badge: "bg-teal-500",
      skills: [
        "Shopify Development",
        "Liquid Templates",
        "CRO",
        "Performance Optimization",
        "Theme Customization",
        "App Integration",
      ],
    },
    "Marketing Tech & AI": {
      badge: "bg-cyan-500",
      skills: [
        "OpenAI API",
        "Meta Ads API",
        "Campaign Management",
        "AI Content Generation",
        "Analytics",
        "Workflow Automation",
      ],
    },
    "Tools & Design": {
      badge: "bg-purple-500",
      skills: [
        "Figma",
        "Git",
        "HTML/SCSS",
        "Material-UI",
        "Tailwind CSS",
        "Shadcn",
      ],
    },
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered entrance animations for feature cards
      gsap.fromTo(
        ".feature-card",
        {
          opacity: 0,
          y: 60,
          scale: 0.9,
          rotateY: -10,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateY: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".feature-cards-grid",
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Stats grid animation
      gsap.fromTo(
        ".stat-card",
        {
          opacity: 0,
          y: 40,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".stats-grid",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Skills grid enhanced animations
      gsap.fromTo(
        ".skill-category-card",
        { opacity: 0, y: 60, scale: 0.8, rotateY: -15 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateY: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Individual skill chips animation
      gsap.fromTo(
        ".skill-chip",
        { opacity: 0, scale: 0.5, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Parallax effect for section background
      gsap.to(".parallax-bg", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* About Section */}
      <section
        id="about"
        className="about-section py-20 px-4 relative overflow-hidden reveal-section"
        style={{ backgroundColor: "#F8F9FA" }}
      >
        {/* Parallax background elements */}
        <div className="parallax-bg absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{
                fontFamily:
                  "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
              }}
            >
              <span className="text-gray-900">Marketing Tech</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Specialist
              </span>
            </h2>
            <p
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
              style={{
                fontFamily:
                  "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
              }}
            >
              Frontend Developer with 4+ years building marketing technology
              platforms and e-commerce solutions. Specialized in AI-powered
              marketing automation tools and Shopify development with proven
              experience in campaign optimization and conversion-focused
              development.
            </p>
          </div>

          <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="stat-card text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                4+
              </div>
              <div
                className="text-sm font-medium text-gray-600"
                style={{
                  fontFamily:
                    "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
                }}
              >
                Years Experience
              </div>
            </div>

            <div className="stat-card text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                React
              </div>
              <div
                className="text-sm font-medium text-gray-600"
                style={{
                  fontFamily:
                    "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
                }}
              >
                Expertise
              </div>
            </div>

            <div className="stat-card text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                AI
              </div>
              <div
                className="text-sm font-medium text-gray-600"
                style={{
                  fontFamily:
                    "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
                }}
              >
                Integration
              </div>
            </div>

            <div className="stat-card text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                Shopify
              </div>
              <div
                className="text-sm font-medium text-gray-600"
                style={{
                  fontFamily:
                    "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
                }}
              >
                Developer
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="feature-cards-grid grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="feature-card group bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-3 border border-gray-200/50 overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-r from-emerald-500 to-emerald-600 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Code2 className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="text-xl font-bold mb-4 text-gray-900"
                  style={{
                    fontFamily:
                      "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
                  }}
                >
                  Frontend Proficiency
                </h3>
                <p
                  className="text-gray-600 leading-relaxed"
                  style={{
                    fontFamily:
                      "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
                  }}
                >
                  Building responsive, performant web applications with React,
                  TypeScript, and modern development practices
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card group bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-3 border border-gray-200/50 overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-r from-teal-500 to-cyan-600 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="text-xl font-bold mb-4 text-gray-900"
                  style={{
                    fontFamily:
                      "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
                  }}
                >
                  Marketing Technology
                </h3>
                <p
                  className="text-gray-600 leading-relaxed"
                  style={{
                    fontFamily:
                      "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
                  }}
                >
                  Developing AI-powered marketing automation tools and campaign
                  optimization solutions
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card group bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-3 border border-gray-200/50 overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-r from-purple-500 to-purple-600 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="text-xl font-bold mb-4 text-gray-900"
                  style={{
                    fontFamily:
                      "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
                  }}
                >
                  E-commerce Solutions
                </h3>
                <p
                  className="text-gray-600 leading-relaxed"
                  style={{
                    fontFamily:
                      "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
                  }}
                >
                  Creating conversion-optimized Shopify stores and custom
                  e-commerce platforms
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Modern Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 bg-white dark:bg-slate-800/50 backdrop-blur-sm reveal-section"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
              style={{
                fontFamily:
                  "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
              }}
            >
              Technologies & Expertise
            </h2>
          </div>

          <div
            ref={skillsGridRef}
            className="skills-grid grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {Object.entries(skillsData).map(([category, data]) => (
              <Card
                key={category}
                className="skill-category-card group bg-white dark:bg-slate-800/70 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200/50 overflow-hidden"
              >
                <CardContent className="p-8">
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <Badge
                      className={`${data.badge} text-white font-semibold px-4 py-2 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}
                      style={{
                        fontFamily:
                          "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
                      }}
                    >
                      {category}
                    </Badge>
                    <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {data.skills.map((skill, index) => (
                      <div
                        key={skill}
                        className="skill-chip bg-gray-50 hover:bg-white dark:bg-slate-800/70 p-3 rounded-xl text-sm font-medium text-center border border-gray-200 hover:shadow-md hover:scale-105 hover:border-gray-300 transition-all duration-300 cursor-pointer"
                        style={{
                          animationDelay: `${index * 0.1}s`,
                          fontFamily:
                            "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
                        }}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
