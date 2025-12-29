import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "CloudOps",
    description: "A modern, responsive e-commerce platform built with React and Node.js, featuring real-time inventory management and seamless payment integration.",
    image: "/api/placeholder/400/300",
    tech: ["AWS", "Bedrock", "PostgreSQL", "Stripe"],
    liveUrl: "https://www.youtube.com/watch?v=Y7J7wXuzpDU",
    githubUrl: "https://github.com/parth1504/cost-eco-vision",
    featured: true,
  },
  {
    id: 2,
    title: "Vaidya.ai",
    description: "A headless CMS designed for creative professionals, with drag-and-drop portfolio building and advanced media management.",
    image: "/api/placeholder/400/300",
    tech: ["Next.js", "GraphQL", "Prisma", "Cloudinary"],
    liveUrl: "https://www.youtube.com/watch?v=w5L2xGES9GQ",
    githubUrl: "https://github.com/Pranali0809/wellspring-dialogue",
    featured: true,
  },
  {
    id: 3,
    title: "Smart Docs",
    description: "An interactive dashboard for data analysis with custom chart components and real-time data streaming capabilities.",
    image: "/api/placeholder/400/300",
    tech: ["Vue.js", "D3.js", "Python", "WebSocket"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Mobile Fitness App",
    description: "Cross-platform mobile app for fitness tracking with social features and personalized workout recommendations.",
    image: "/api/placeholder/400/300",
    tech: ["React Native", "Firebase", "TensorFlow", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "AI-Powered Analytics Platform",
    description: "Machine learning platform for predictive analytics with automated model training and deployment capabilities.",
    image: "/api/placeholder/400/300",
    tech: ["Python", "TensorFlow", "Docker", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  // {
  //   id: 6,
  //   title: "Real-time Chat Application",
  //   description: "Scalable chat application with real-time messaging, file sharing, and video calling features.",
  //   image: "/api/placeholder/400/300",
  //   tech: ["React", "Socket.io", "Node.js", "MongoDB"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   featured: false,
  // },
];

export const ProjectsSection = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Show only first 2 projects initially  
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 2);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, highlighting technical expertise and creative problem-solving
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {displayedProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`group card-artistic overflow-hidden hover-lift ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden bg-muted aspect-video">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  <motion.a
                    href={project.liveUrl}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-primary-foreground transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-primary-foreground transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
            <motion.button
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="button-primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Eye className="w-5 h-5 mr-2" />
            {showAllProjects ? 'Show Less' : 'Show All Projects'}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};