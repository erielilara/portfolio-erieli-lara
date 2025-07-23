import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../../assets/images/icons/logo.svg";

interface NavigationProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navigation = ({
  darkMode,
  setDarkMode,
  mobileMenuOpen,
  setMobileMenuOpen,
  activeSection,
  scrollToSection,
}: NavigationProps) => {
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-6">
      <nav className="bg-white/10 dark:bg-slate-900/20 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-slate-700/30 shadow-lg">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full">
            <img
              src={logo}
              alt="Erielí Lara Logo"
              className="w-full h-full object-contain bg-transparent"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium transition-all duration-300 hover:text-emerald-600 dark:hover:text-emerald-400 ${
                  activeSection === item.toLowerCase()
                    ? 'text-emerald-600 dark:text-emerald-400 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-emerald-500 after:rounded-full relative'
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {item}
              </button>
            ))}
            <Button
              onClick={() => setDarkMode(!darkMode)}
              variant="ghost"
              size="sm"
              className="p-2 hover:bg-white/20 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-300"
            >
              <div className="relative w-4 h-4">
                <Sun
                  className={`absolute inset-0 transition-all duration-300 ${
                    darkMode ? "rotate-90 scale-0" : "rotate-0 scale-100"
                  }`}
                />
                <Moon
                  className={`absolute inset-0 transition-all duration-300 ${
                    darkMode ? "rotate-0 scale-100" : "-rotate-90 scale-0"
                  }`}
                />
              </div>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              onClick={() => setDarkMode(!darkMode)}
              variant="ghost"
              size="sm"
              className="p-2 hover:bg-white/20 dark:hover:bg-slate-800/50 rounded-xl"
            >
              <div className="relative w-4 h-4">
                <Sun
                  className={`absolute inset-0 transition-all duration-300 ${
                    darkMode ? "rotate-90 scale-0" : "rotate-0 scale-100"
                  }`}
                />
                <Moon
                  className={`absolute inset-0 transition-all duration-300 ${
                    darkMode ? "rotate-0 scale-100" : "-rotate-90 scale-0"
                  }`}
                />
              </div>
            </Button>
            <Button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              variant="ghost"
              size="sm"
              className="p-2 hover:bg-white/20 dark:hover:bg-slate-800/50 rounded-xl"
            >
              <div className="relative w-4 h-4">
                <Menu
                  className={`absolute inset-0 transition-all duration-300 ${
                    mobileMenuOpen ? "rotate-90 scale-0" : "rotate-0 scale-100"
                  }`}
                />
                <X
                  className={`absolute inset-0 transition-all duration-300 ${
                    mobileMenuOpen ? "rotate-0 scale-100" : "-rotate-90 scale-0"
                  }`}
                />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/20 dark:border-slate-700/30 px-6 py-4 backdrop-blur-xl"
            >
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    {item}
                  </button>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navigation;
