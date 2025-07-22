import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { LibrarySection } from "@/components/sections/LibrarySection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');

  // Set theme on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Handle smooth scrolling to sections
  const handleSectionChange = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setActiveSection(sectionId);
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'experience', 'achievements', 'library', 'contact'];
      const scrollY = window.scrollY + 100; // Offset for navigation height

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange} 
      />

      {/* Main Content */}
      <main className="pt-16">
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <AchievementsSection />
        <LibrarySection />
        <ContactSection />
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-card border-t border-border py-8"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Personal Portfolio. Crafted with{" "}
            <span className="text-red-500">♥</span> using React & Framer Motion
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
