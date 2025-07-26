import { motion } from "framer-motion";
import { 
  Server,
  Database, 
  BrainCircuit,
  FileCode,
  Cloud, 
  Cpu,
  Code2,
  Settings,
  Workflow,
  Layers
} from "lucide-react";

// Custom SVG icons for specific technologies
const ReactIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 10.11c1.03 0 1.87-.84 1.87-1.87S13.03 6.37 12 6.37s-1.87.84-1.87 1.87.84 1.87 1.87 1.87zm4.51 5.79c-.45-.48-.78-1.08-.78-1.84 0-.76.33-1.36.78-1.84l-.52-.52c-.68.68-1.1 1.62-1.1 2.36s.42 1.68 1.1 2.36l.52-.52zm-9.02 0l.52.52c.68-.68 1.1-1.62 1.1-2.36s-.42-1.68-1.1-2.36l-.52.52c.45.48.78 1.08.78 1.84 0 .76-.33 1.36-.78 1.84z"/>
  </svg>
);

const PythonIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 10c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
  </svg>
);

const skills = [
  { name: "React", icon: ReactIcon, color: "text-blue-400" },
  { name: "Google Cloud Platform", icon: Cloud, color: "text-blue-500" },
  { name: "JavaScript", icon: FileCode, color: "text-yellow-500" },
  { name: "Python", icon: PythonIcon, color: "text-green-500" },
  { name: "Apache Airflow", icon: Workflow, color: "text-red-500" },
  { name: "BigQuery", icon: Database, color: "text-orange-500" },
  { name: "SQL", icon: Server, color: "text-purple-500" },
  { name: ".NET", icon: Code2, color: "text-indigo-500" },
  { name: "MongoDB", icon: Database, color: "text-green-600" },
  { name: "PostgreSQL", icon: Cpu, color: "text-blue-600" },
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
          className="flex flex-wrap justify-center gap-8"
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="group relative"
              >
                <motion.div
                  className={`w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center cursor-pointer ${skill.color} hover:bg-card/80 transition-colors`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <IconComponent />
                </motion.div>
                
                {/* Skill Name - appears on hover */}
                <motion.div
                  className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                >
                  <span className="text-xs font-medium whitespace-nowrap px-3 py-1.5 bg-card border border-border rounded-lg shadow-lg">
                    {skill.name}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};