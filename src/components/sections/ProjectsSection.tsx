import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

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
    details: {
      whatItDoes: [
        "Provides real-time cloud cost monitoring and optimization recommendations",
        "Integrates with AWS services for automated resource management",
        "Offers interactive dashboards for cost visualization and forecasting"
      ],
      whatIWorkedOn: [
        "Built the frontend dashboard using React with real-time data visualization",
        "Implemented AWS Bedrock integration for AI-powered cost insights",
        "Designed and developed the PostgreSQL database schema for cost tracking"
      ],
      challenges: [
        "Optimized query performance for handling large volumes of cloud cost data",
        "Implemented efficient caching strategies for real-time updates"
      ]
    }
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
    details: {
      whatItDoes: [
        "AI-powered healthcare assistant for preliminary symptom analysis",
        "Provides personalized health recommendations based on user input",
        "Integrates with medical databases for accurate information retrieval"
      ],
      whatIWorkedOn: [
        "Developed the conversational AI interface using Next.js",
        "Implemented GraphQL APIs for efficient data fetching",
        "Built the media management system with Cloudinary integration"
      ],
      challenges: [
        "Ensured HIPAA-compliant data handling practices",
        "Fine-tuned the AI model for medical accuracy"
      ]
    }
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
    details: {
      whatItDoes: [
        "Intelligent document processing with AI-powered extraction",
        "Automated data visualization from unstructured documents",
        "Real-time collaboration features for team document review"
      ],
      whatIWorkedOn: [
        "Built custom D3.js chart components for data visualization",
        "Implemented WebSocket connections for real-time updates",
        "Developed the Python backend for document processing"
      ],
      challenges: [
        "Handled complex document formats and edge cases",
        "Optimized WebSocket performance for large document sets"
      ]
    }
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
    details: {
      whatItDoes: [
        "Tracks workouts, nutrition, and fitness progress over time",
        "Provides AI-powered personalized workout recommendations",
        "Includes social features for community engagement and challenges"
      ],
      whatIWorkedOn: [
        "Developed the cross-platform mobile UI with React Native",
        "Integrated TensorFlow for workout form analysis",
        "Built the real-time sync system with Firebase"
      ],
      challenges: [
        "Optimized TensorFlow models for mobile performance",
        "Implemented offline-first architecture for gym environments"
      ]
    }
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
    details: {
      whatItDoes: [
        "Automates ML model training and deployment pipelines",
        "Provides predictive analytics for business decision-making",
        "Offers customizable dashboards for model performance monitoring"
      ],
      whatIWorkedOn: [
        "Built the automated ML pipeline with Python and TensorFlow",
        "Containerized the platform using Docker for scalability",
        "Deployed and managed infrastructure on AWS"
      ],
      challenges: [
        "Designed efficient data pipelines for large-scale datasets",
        "Implemented model versioning and A/B testing capabilities"
      ]
    }
  },
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  
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
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`group card-artistic overflow-hidden hover-lift cursor-pointer ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden bg-muted aspect-video">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  <motion.a
                    href={project.liveUrl}
                    onClick={(e) => e.stopPropagation()}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-primary-foreground transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    onClick={(e) => e.stopPropagation()}
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
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-display font-bold gradient-text">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6 mt-4">
                {/* Project Image Placeholder */}
                <div className="w-full aspect-video bg-muted rounded-lg flex items-center justify-center border border-border">
                  <span className="text-muted-foreground">Project Screenshot</span>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* What it does */}
                <div>
                  <h4 className="font-semibold text-lg mb-3">What it does</h4>
                  <ul className="space-y-2">
                    {selectedProject.details.whatItDoes.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What I worked on */}
                <div>
                  <h4 className="font-semibold text-lg mb-3">What I worked on</h4>
                  <ul className="space-y-2">
                    {selectedProject.details.whatIWorkedOn.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenges & Outcomes */}
                <div>
                  <h4 className="font-semibold text-lg mb-3">Challenges & Outcomes</h4>
                  <ul className="space-y-2">
                    {selectedProject.details.challenges.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-glow mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-primary flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-accent flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
