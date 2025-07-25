import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Brain, 
  Palette, 
  GitBranch, 
  Cloud, 
  Smartphone,
  Globe,
  Cpu,
  Target,
  Zap,
  Layers
} from "lucide-react";

const skills = [
  { name: "Frontend Development", icon: Code2, color: "text-blue-500" },
  { name: "Machine Learning", icon: Brain, color: "text-purple-500" },
  { name: "Database Design", icon: Database, color: "text-green-500" },
  { name: "UI/UX Design", icon: Palette, color: "text-pink-500" },
  { name: "Version Control", icon: GitBranch, color: "text-orange-500" },
  { name: "Cloud Computing", icon: Cloud, color: "text-cyan-500" },
  { name: "Mobile Development", icon: Smartphone, color: "text-indigo-500" },
  { name: "Web Technologies", icon: Globe, color: "text-emerald-500" },
  { name: "System Architecture", icon: Cpu, color: "text-red-500" },
  { name: "Project Management", icon: Target, color: "text-amber-500" },
  { name: "Performance Optimization", icon: Zap, color: "text-yellow-500" },
  { name: "DevOps & CI/CD", icon: Layers, color: "text-slate-500" },
];

export const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    },
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building innovative and scalable solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  className="card-artistic p-6 text-center hover-lift"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center ${skill.color}`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <IconComponent className="w-6 h-6" />
                  </motion.div>
                  <h3 className="font-medium text-sm leading-tight group-hover:gradient-text transition-all duration-300">
                    {skill.name}
                  </h3>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};