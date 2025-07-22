import { motion } from "framer-motion";
import { Code, Palette, Heart } from "lucide-react";

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
                Creative{" "}
                <span className="gradient-text">Developer</span>
              </motion.h1>
              <motion.h2
                className="text-xl text-muted-foreground font-medium"
                variants={itemVariants}
              >
                Merging Technical Excellence with Artistic Vision
              </motion.h2>
            </div>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              variants={itemVariants}
            >
              I'm a passionate developer who believes that great software is both functional and beautiful. 
              With a background spanning full-stack development and UI/UX design, I create digital experiences 
              that not only solve problems but inspire and delight users.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                className="button-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
              </motion.button>
              <motion.button
                className="button-accent"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Download Resume
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Interactive Visual */}
          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-80 h-80">
              {/* Floating Cards */}
              <motion.div
                className="absolute top-0 left-0 card-artistic p-6 w-32 h-32 flex flex-col items-center justify-center"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [-2, 2, -2] 
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                <Code className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-medium text-center">Technical</span>
              </motion.div>

              <motion.div
                className="absolute top-8 right-0 card-artistic p-6 w-32 h-32 flex flex-col items-center justify-center"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [2, -2, 2] 
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5 
                }}
              >
                <Palette className="w-8 h-8 text-accent mb-2" />
                <span className="text-sm font-medium text-center">Creative</span>
              </motion.div>

              <motion.div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 card-artistic p-6 w-32 h-32 flex flex-col items-center justify-center"
                animate={{ 
                  y: [0, -8, 0],
                  scale: [1, 1.05, 1] 
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1 
                }}
              >
                <Heart className="w-8 h-8 text-red-500 mb-2" />
                <span className="text-sm font-medium text-center">Passionate</span>
              </motion.div>

              {/* Central Glow */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3] 
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};