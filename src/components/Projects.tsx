import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import adsassistant from "../assets/img/adsassistantpage.png";
import juliofuenmayor from "../assets/img/juliofuenma.png";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projects = [
    {
      title: "Agency CRM System",
      description:
        "Custom CRM solution with N8N automation workflows for marketing agencies, streamlining client management and campaign tracking.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      tech: ["React", "Zustand", "N8N", "REST API", "Tailwind CSS"],
      status: "Cooming Soon",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "AdsAssistant.ai Platform",
      description:
        "AI-powered marketing automation platform managing $10M+ in advertising campaigns with intelligent optimization and real-time analytics.",
      image: adsassistant,
      tech: ["React", "OpenAI API", "Meta Ads API", "TypeScript", "SCSS"],
      status: "Live",
      gradient: "from-emerald-500 to-teal-500",
      link: "https://adsassistant.ai",
    },

    {
      title: "Professional Architecture Portfolio",
      description:
        "Professional portfolio website for an international interior design firm.",
      image: juliofuenmayor,
      tech: ["WordPress", "Responsive Design", "Visual Storytelling"],
      status: "Live",
      gradient: "from-purple-500 to-pink-500",
      link: "https://juliofuenmayor.com/",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Project cards with 3D hover effect
      gsap.utils.toArray(".project-card").forEach((card: any) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, rotateX: 15 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="py-16 px-4 reveal-section">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Selected Work
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="project-card group overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border-white/20 dark:border-slate-700/30"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 right-3">
                  <Badge
                    variant={
                      project.status === "Live" ? "default" : "secondary"
                    }
                    className="text-xs"
                  >
                    {project.status}
                  </Badge>
                </div>
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`}
                ></div>
              </div>
              <CardContent className="p-5">
                <h3 className="text-lg font-bold mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white transition-all duration-300 transform hover:scale-105">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
