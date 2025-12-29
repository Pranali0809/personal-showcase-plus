import { motion } from "framer-motion";
import { Calendar, MapPin, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Modal } from "@/components/ui/modal";

const experiences = [
  {
    id: 1,
    title: "Machine Learning Engineer",
    company: "General Mills",
    location: "Mumbai, IN",
    duration: "2024 - Present",
    type: "Full-time",
    description: "Leading development of scalable web applications and mentoring junior developers in modern development practices.",
    responsibilities: [
      "Designed, implemented, and maintained Apache Airflow DAGs for end-to-end orchestration of MLOps.",
      "Owned pipeline reliability and observability, handling retries, backfills, SLA monitoring, failure analysis, and production incident debugging.",
      "Built a containerized optimizer execution framework using Kubeflow, enabling scalablity",
      "Mentored interns and conducted code reviews"
    ],
    projects: [
      "Demand Forecasting - Worked on time series model to forecast demand volume",
      "Logistic Optimization - Worked on mathematical optimization models using Gurobi and ML-driven workflows to solve large-scale operational planning problems",
      "Infra AI - Led a POC for cloud infrastructure optimization on GCP, using agent-based analysis of resource metrics to generate cost, performance, and security recommendations."
    ],
    tools: ["GCP", "Python", "SQL", "Airflow", "Github Actions", "Agent Development Kit", "Langchain"]
  },

];

export const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState<typeof experiences[0] | null>(null);

  const openModal = (experience: typeof experiences[0]) => {
    setSelectedExperience(experience);
  };

  const closeModal = () => {
    setSelectedExperience(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A timeline of growth, learning, and impactful contributions across diverse projects and teams
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Node */}
              <motion.div
                className="absolute left-6 w-5 h-5 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-background shadow-lg"
                whileHover={{ scale: 1.2 }}
              />

              {/* Experience Card */}
              <div className="ml-20">
                <motion.div
                  className="card-artistic cursor-pointer"
                  onClick={() => openModal(experience)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                          {experience.title}
                        </h3>
                        <h4 className="text-lg font-medium gradient-text mb-2">
                          {experience.company}
                        </h4>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {experience.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {experience.location}
                          </div>
                          <span className="px-2 py-1 bg-secondary rounded-full text-xs">
                            {experience.type}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {experience.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium flex items-center gap-1"
                        >
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal for Experience Details */}
        <Modal isOpen={!!selectedExperience} onClose={closeModal}>
          {selectedExperience && (
            <div className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                  {selectedExperience.title}
                </h3>
                <h4 className="text-xl gradient-text font-semibold mb-3">
                  {selectedExperience.company}
                </h4>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {selectedExperience.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {selectedExperience.location}
                  </div>
                  <span className="px-2 py-1 bg-secondary rounded-full text-xs">
                    {selectedExperience.type}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedExperience.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="font-display font-semibold text-lg text-foreground mb-4">
                    Key Responsibilities
                  </h5>
                  <ul className="space-y-3">
                    {selectedExperience.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-display font-semibold text-lg text-foreground mb-4">
                    Notable Projects
                  </h5>
                  <ul className="space-y-3">
                    {selectedExperience.projects.map((project, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start gap-3">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h5 className="font-display font-semibold text-lg text-foreground mb-4">
                  Technologies & Tools
                </h5>
                <div className="flex flex-wrap gap-2">
                  {selectedExperience.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-foreground rounded-lg text-sm font-medium border border-primary/20 flex items-center gap-2"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};