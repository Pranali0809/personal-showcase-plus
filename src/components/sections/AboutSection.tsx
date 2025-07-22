import { motion } from "framer-motion";
import { Code2, Brain, Sparkles, Database, GitBranch, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Hero Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <motion.h1
                className="text-5xl lg:text-6xl font-display font-bold leading-tight"
                variants={itemVariants}
              >
                Software &{" "}
                <span className="gradient-text">ML Engineer</span>
              </motion.h1>
              <motion.h2
                className="text-xl text-muted-foreground font-medium"
                variants={itemVariants}
              >
                Building Intelligent Systems with Creative Precision
              </motion.h2>
            </div>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              variants={itemVariants}
            >
              I'm a software and machine learning engineer who combines technical rigor with creative innovation. 
              Specializing in AI systems, full-stack development, and data-driven solutions, I craft intelligent 
              applications that are both powerful and elegantly designed.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg">
                  View My Projects
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button variant="accent" size="lg">
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Central Visual - Creative Engineer */}
          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-96 h-96">
              {/* Central Figure - Abstract Representation */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, 0, -1, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                {/* Central Core - Brain/Code Fusion */}
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-primary-glow/20 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center"
                  >
                    <Brain className="w-8 h-8 text-white" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Tech Icons */}
              <motion.div
                className="absolute top-8 left-8 p-4 rounded-xl bg-card/80 backdrop-blur border border-card-border shadow-lg"
                animate={{ 
                  y: [0, -12, 0],
                  rotate: [-3, 3, -3] 
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0
                }}
              >
                <Code2 className="w-6 h-6 text-primary" />
              </motion.div>

              <motion.div
                className="absolute top-16 right-8 p-4 rounded-xl bg-card/80 backdrop-blur border border-card-border shadow-lg"
                animate={{ 
                  y: [0, 10, 0],
                  x: [-2, 2, -2]
                }}
                transition={{ 
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8
                }}
              >
                <Database className="w-6 h-6 text-accent" />
              </motion.div>

              <motion.div
                className="absolute bottom-16 left-12 p-4 rounded-xl bg-card/80 backdrop-blur border border-card-border shadow-lg"
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [2, -2, 2] 
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.2
                }}
              >
                <GitBranch className="w-6 h-6 text-primary-glow" />
              </motion.div>

              <motion.div
                className="absolute bottom-8 right-16 p-4 rounded-xl bg-card/80 backdrop-blur border border-card-border shadow-lg"
                animate={{ 
                  y: [0, 12, 0],
                  x: [0, -3, 0]
                }}
                transition={{ 
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4
                }}
              >
                <Palette className="w-6 h-6 text-accent-glow" />
              </motion.div>

              {/* Connecting Lines */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-72 h-72 rounded-full border border-primary/20 opacity-60"></div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-56 h-56 rounded-full border border-accent/20 opacity-40"></div>
              </motion.div>

              {/* Ambient Glow */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-2xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3] 
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />

              {/* Sparkle Effects */}
              <motion.div
                className="absolute top-20 left-20"
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0] 
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2
                }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.div>

              <motion.div
                className="absolute bottom-24 right-20"
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0] 
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2 + 1
                }}
              >
                <Sparkles className="w-4 h-4 text-accent" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};