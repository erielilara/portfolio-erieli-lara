import React, { useState } from "react";
import { Mail, Github, Linkedin, MessageCircleMore } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Opción 1: Usar Formspree (más fácil de configurar)
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("¡Mensaje enviado exitosamente!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Error al enviar el mensaje");
      }
    } catch (error) {
      const subject = `Portfolio Contact from ${formData.name}`;
      const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
      window.open(
        `mailto:erieli.larad@gmail.com?subject=${subject}&body=${body}`
      );
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "erieli.larad@gmail.com",
      color: "emerald",
      href: "mailto:erieli.larad@gmail.com",
    },
    {
      icon: MessageCircleMore,
      label: "WhatsApp",
      value: "+57 317 239 5603",
      color: "teal",
      href: "https://wa.me/573172395603?text=Hola%20Erieli,%20vi%20tu%20portfolio%20y%20me%20gustaría%20conectar%20contigo",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/erielilara",
      color: "cyan",
      href: "https://github.com/erielilara",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/erielilara",
      color: "purple",
      href: "https://linkedin.com/in/erielilara",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 px-4 bg-gray-50/50 dark:bg-slate-800/50 backdrop-blur-sm reveal-section"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto items-center">
          {/* Left: Title & Subtitle */}
          <div className="text-left mb-12 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl">
              Open to opportunities in marketing technology, e-commerce
              development, and growth marketing
            </p>
          </div>
          {/* Right: Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : "_self"}
                rel={
                  contact.href.startsWith("http") ? "noopener noreferrer" : ""
                }
                className="flex items-center space-x-4 group cursor-pointer hover:scale-105 transition-transform duration-300 block"
              >
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${
                    contact.color === "emerald"
                      ? "from-emerald-500 to-emerald-600"
                      : contact.color === "teal"
                      ? "from-teal-500 to-teal-600"
                      : contact.color === "cyan"
                      ? "from-cyan-500 to-cyan-600"
                      : "from-purple-500 to-purple-600"
                  } group-hover:scale-110 transition-transform duration-300`}
                >
                  <contact.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-900 dark:text-white">
                    {contact.label}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                    {contact.value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
