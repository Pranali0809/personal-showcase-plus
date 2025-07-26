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
                    Software & ML Engineer
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

          {/* Moving Blobs with User Picture */}
          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-96 h-96">
              {/* Background Blob 1 */}
              <motion.div
                className="absolute top-8 left-8 w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-xl"
                animate={{ 
                  x: [0, 30, -20, 0],
                  y: [0, -20, 10, 0],
                  scale: [1, 1.1, 0.9, 1]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
              
              {/* Background Blob 2 */}
              <motion.div
                className="absolute bottom-8 right-8 w-48 h-48 rounded-full bg-gradient-to-br from-accent/20 to-primary/10 blur-lg"
                animate={{ 
                  x: [0, -25, 15, 0],
                  y: [0, 15, -25, 0],
                  scale: [1, 0.8, 1.2, 1]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              
              {/* Main Blob with User Picture */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-primary-glow/30 backdrop-blur-sm border border-primary/30">
                  {/* Placeholder for user picture - will be circular */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 border-4 border-white/20 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">PS</span>
                  </div>
                </div>
              </motion.div>

              {/* Smaller floating blobs */}
              <motion.div
                className="absolute top-12 right-12 w-16 h-16 rounded-full bg-gradient-to-r from-primary/40 to-accent/40 blur-sm"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.8, 0.4] 
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              
              <motion.div
                className="absolute bottom-12 left-12 w-12 h-12 rounded-full bg-gradient-to-r from-accent/40 to-primary/40 blur-sm"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.7, 0.3] 
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};