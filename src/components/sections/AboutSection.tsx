import { motion } from "framer-motion";
import { Code2, Brain, Sparkles, Database, GitBranch, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroAnimation } from "./HeroAnimation";

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
          {/* Hero Content - Updated with Name and Resume Arrow */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-6">
              <motion.h1
                className="text-6xl lg:text-7xl font-display font-bold leading-tight"
                variants={itemVariants}
              >
                Pranali Shinde
              </motion.h1>
              <motion.div
                className="flex items-center justify-between"
                variants={itemVariants}
              >
                <div className="space-y-2">
                  <h2 className="text-xl lg:text-2xl gradient-text font-semibold">
                    Machine Learning Engineer
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Building Intelligent Systems with Creative Precision
                  </p>
                </div>
                
                {/* Resume Arrow - Better positioned */}
                <motion.div
                  className="group relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.button
                    onClick={() => {
                      // Resume download/link functionality
                      console.log('Resume download/view triggered');
                    }}
                    className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="transform group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </motion.button>
                  
                  {/* Hover tooltip */}
                  <motion.div
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-card/90 backdrop-blur text-card-foreground px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                  >
                    Resume
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-card/90"></div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              I'm a software and machine learning engineer who combines technical rigor with creative innovation. 
              Specializing in AI systems, full-stack development, and data-driven solutions, I craft intelligent 
              applications that are both powerful and elegantly designed.
            </motion.p>
          </motion.div>

          {/* Pluggable Hero Animation */}
          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-center"
          >
            <HeroAnimation />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};