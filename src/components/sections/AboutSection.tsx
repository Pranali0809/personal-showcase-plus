import { motion } from "framer-motion";
import pranaliPhoto from "@/assets/pranali-photo.png";

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
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side - Text Content */}
          <motion.div variants={itemVariants} className="space-y-6 order-2 lg:order-1">
            {/* Quirky Intro Text */}
            <motion.div variants={itemVariants} className="space-y-2">
              <span className="text-lg font-inter text-muted-foreground">Hi, I'm</span>
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
                Pranali
                <br />
                <span className="gradient-text">Shinde</span>
              </h1>
            </motion.div>

            {/* Role Badge - Quirky Style */}
            <motion.div 
              variants={itemVariants}
              className="inline-block"
            >
              <div className="relative">
                <div className="bg-card border-2 border-primary/30 rounded-lg px-4 py-2 shadow-md">
                  <span className="font-mono text-sm text-muted-foreground tracking-wide">{'<'}</span>
                  <span className="font-semibold text-primary mx-1">Machine Learning Engineer</span>
                  <span className="font-mono text-sm text-muted-foreground tracking-wide">{'/>'}</span>
                </div>
                {/* Decorative dots */}
                <motion.div 
                  className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-accent"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed max-w-xl font-inter"
              variants={itemVariants}
            >
              I enjoy building thoughtful software, exploring ML and AI systems, and understanding how 
              infrastructure shapes intelligent products. Curious by nature, I like turning ideas into 
              systems that scale — and learning something new along the way.
            </motion.p>
          </motion.div>

          {/* Right Side - Photo with Blobs */}
          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-center order-1 lg:order-2"
          >
            {/* Animated Blob Background - Large */}
            <motion.div
              className="absolute w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-300/40 to-purple-400/40 blur-xl"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Animated Blob Background - Medium */}
            <motion.div
              className="absolute w-60 h-60 lg:w-80 lg:h-80 rounded-full bg-gradient-to-tr from-accent/50 to-primary/30 blur-lg"
              animate={{
                scale: [1.1, 1, 1.1],
                rotate: [90, 0, 90],
                x: [10, -10, 10],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

          

            {/* Photo Container */}
            <motion.div
              className="relative z-10 w-80 h-80 lg:w-104 lg:h-104 rounded-full overflow-hidden border-4 border-primary shadow-xl bg-white/80"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <img
                src={pranaliPhoto}
                alt="Pranali Shinde"
                className="w-full h-full object-cover object-[center_bottom]"
              />
            </motion.div>

          
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
