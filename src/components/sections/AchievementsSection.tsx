import { motion } from "framer-motion";
import { Award, Trophy, Star, Target } from "lucide-react";
import { useState } from "react";

const achievements = [
  // {
  //   id: 1,
  //   title: "Best Developer Award 2023",
  //   organization: "TechFlow Solutions",
  //   date: "December 2023",
  //   description: "Recognized for outstanding technical leadership and innovative solutions that increased team productivity by 40%",
  //   icon: Award,
  //   type: "award"
  // },
  // {
  //   id: 2,
  //   title: "Open Source Contributor",
  //   organization: "React Community",
  //   date: "2022 - Present",
  //   description: "Active contributor to React ecosystem with 500+ GitHub stars and multiple featured repositories",
  //   icon: Star,
  //   type: "contribution"
  // },
  // {
  //   id: 3,
  //   title: "Project Excellence Recognition",
  //   organization: "Digital Innovations Inc",
  //   date: "June 2022",
  //   description: "Led successful delivery of enterprise platform serving 50,000+ users with 99.9% uptime",
  //   icon: Trophy,
  //   type: "achievement"
  // },
  {
    id: 4,
    title: "IEEE Publication",
    date: "2023",
    description: "The Quest for Fairness: A Comparative Study of Accuracy in AI Hiring Systems",
    icon: Target,
    type: "certification"
  },
  {
    id: 5,
    title: "Hackathon Winner",
    organization: "Hackniche",
    date: "2023",
    description: "Secured the 1st Runner up prize in Hackniche hackathon with over 80+ Teams as participants",
    icon: Trophy,
    type: "competition"
  }
];

const iconColors = {
  award: "text-yellow-500",
  contribution: "text-blue-500",
  achievement: "text-purple-500",
  certification: "text-green-500",
  competition: "text-red-500"
};

export const AchievementsSection = () => {
  const [showAllAchievements, setShowAllAchievements] = useState(false);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  // Show all achievements or limit display
  const displayedAchievements = showAllAchievements ? achievements : achievements;

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Milestones and recognitions that showcase growth, impact, and commitment to excellence
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {displayedAchievements.map((achievement) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                className="card-artistic p-6 hover-lift group max-w-md"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors ${iconColors[achievement.type]}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-lg mb-1 group-hover:gradient-text transition-all duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-sm font-medium text-primary mb-1">
                      {achievement.organization}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {achievement.date}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};