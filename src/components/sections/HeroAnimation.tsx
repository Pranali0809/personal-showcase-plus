import { motion } from "framer-motion";

interface HeroAnimationProps {
  className?: string;
}

export const HeroAnimation = ({ className = "" }: HeroAnimationProps) => {
  return (
    <div className={`relative w-96 h-96 ${className}`}>
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
  );
};