import { motion } from "framer-motion";
import { Calendar, MapPin, ChevronRight } from "lucide-react";
import { useState } from "react";

const experiences = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    company: "TechFlow Solutions",
    location: "San Francisco, CA",
    duration: "2022 - Present",
    type: "Full-time",
    description: "Leading development of scalable web applications and mentoring junior developers in modern development practices.",
    responsibilities: [
      "Architected and developed 5+ enterprise-level applications using React, Node.js, and PostgreSQL",
      "Led a team of 4 developers in agile development practices",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored junior developers and conducted code reviews"
    ],
    projects: [
      "Customer Portal Redesign - 40% increase in user engagement",
      "Microservices Migration - Improved system scalability by 300%",
      "Real-time Analytics Dashboard - Used by 10,000+ daily active users"
    ],
    tools: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "GraphQL"]
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    company: "Digital Innovations Inc",
    location: "Austin, TX",
    duration: "2020 - 2022",
    type: "Full-time",
    description: "Developed and maintained multiple client-facing applications with focus on performance optimization and user experience.",
    responsibilities: [
      "Built responsive web applications serving 50,000+ monthly users",
      "Optimized application performance resulting in 50% faster load times",
      "Collaborated with design team to implement pixel-perfect UIs",
      "Maintained legacy codebases while implementing modern solutions"
    ],
    projects: [
      "E-commerce Platform - $2M+ in annual transactions",
      "Content Management System - Used by 100+ content creators",
      "Mobile-first Web App - 95% mobile user satisfaction rate"
    ],
    tools: ["Vue.js", "Express.js", "MongoDB", "Firebase", "Sass", "Jest"]
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Creative Web Studio",
    location: "Remote",
    duration: "2019 - 2020",
    type: "Contract",
    description: "Specialized in creating visually stunning and highly interactive web experiences for creative agencies and startups.",
    responsibilities: [
      "Created custom animations and interactions using GSAP and CSS",
      "Collaborated with designers to bring creative concepts to life",
      "Ensured cross-browser compatibility and accessibility standards",
      "Delivered projects on time with 100% client satisfaction rate"
    ],
    projects: [
      "Award-winning Agency Portfolio - Featured in CSS Design Awards",
      "Interactive Product Showcase - 200% increase in conversion rate",
      "Artist Portfolio Platform - Used by 500+ creative professionals"
    ],
    tools: ["JavaScript", "GSAP", "Webpack", "Figma", "Adobe Creative Suite"]
  }
];

export const ExperienceSection = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A timeline of growth, learning, and impactful contributions across diverse projects and teams
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Node */}
              <motion.div
                className="absolute left-6 w-5 h-5 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-background shadow-lg"
                whileHover={{ scale: 1.2 }}
              />

              {/* Experience Card */}
              <div className="ml-20">
                <motion.div
                  className="card-artistic cursor-pointer"
                  onClick={() => toggleExpanded(experience.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                          {experience.title}
                        </h3>
                        <h4 className="text-lg font-medium gradient-text mb-2">
                          {experience.company}
                        </h4>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {experience.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {experience.location}
                          </div>
                          <span className="px-2 py-1 bg-secondary rounded-full text-xs">
                            {experience.type}
                          </span>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedId === experience.id ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight className="w-5 h-5 text-muted-foreground" />
                      </motion.div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {experience.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedId === experience.id ? "auto" : 0,
                      opacity: expandedId === experience.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-border">
                      <div className="grid md:grid-cols-2 gap-6 pt-6">
                        <div>
                          <h5 className="font-semibold text-foreground mb-3">Key Responsibilities</h5>
                          <ul className="space-y-2">
                            {experience.responsibilities.map((responsibility, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                {responsibility}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-foreground mb-3">Notable Projects</h5>
                          <ul className="space-y-2">
                            {experience.projects.map((project, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                                {project}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};