import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Code, Sparkles } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-2xl"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3] 
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="absolute bottom-32 right-32 w-40 h-40 rounded-full bg-gradient-to-r from-accent/10 to-primary/10 blur-2xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4] 
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Floating Code Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0] 
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          <Code className="w-8 h-8 text-primary/30" />
        </motion.div>
        
        <motion.div
          className="absolute top-3/4 right-1/4"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -5, 0] 
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <Sparkles className="w-6 h-6 text-accent/30" />
        </motion.div>
      </div>

      <motion.div
        className="text-center z-10 max-w-2xl px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="text-8xl lg:text-9xl font-display font-bold gradient-text mb-6"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          404
        </motion.div>
        
        <motion.h1
          className="text-2xl lg:text-3xl font-display font-semibold text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Lost in the code... but not for long.
        </motion.h1>
        
        <motion.p
          className="text-lg text-muted-foreground mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          This page doesn't exist — but great ideas do. Let's get you back to exploring amazing projects and innovations.
        </motion.p>
        
        <motion.a
          href="/"
          className="inline-flex items-center gap-3 button-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Home className="w-5 h-5" />
          Return to Home
        </motion.a>
      </motion.div>
    </div>
  );
};

export default NotFound;
