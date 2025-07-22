import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Heart } from "lucide-react";

const libraryItems = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    type: "book",
    category: "Software Engineering",
    description: "A handbook of agile software craftsmanship that changed how I approach code quality and maintainability.",
    rating: 5,
    favorite: true,
    url: "#"
  },
  {
    id: 2,
    title: "The Psychology of Web Design",
    author: "Don Norman",
    type: "article",
    category: "UX Design",
    description: "Insightful piece on how users interact with digital interfaces and the psychology behind great UX decisions.",
    rating: 5,
    favorite: true,
    url: "#"
  },
  {
    id: 3,
    title: "System Design Interview",
    author: "Alex Xu",
    type: "book",
    category: "System Architecture",
    description: "Essential guide for understanding large-scale system design patterns and distributed architecture principles.",
    rating: 4,
    favorite: false,
    url: "#"
  },
  {
    id: 4,
    title: "The Art of Readable Code",
    author: "Dustin Boswell",
    type: "book",
    category: "Programming",
    description: "Practical techniques for writing code that's not just functional, but genuinely enjoyable to read and maintain.",
    rating: 5,
    favorite: true,
    url: "#"
  },
  {
    id: 5,
    title: "React Performance Optimization",
    author: "Kent C. Dodds",
    type: "article",
    category: "Frontend",
    description: "Comprehensive guide to optimizing React applications for better performance and user experience.",
    rating: 4,
    favorite: false,
    url: "#"
  },
  {
    id: 6,
    title: "Atomic Design",
    author: "Brad Frost",
    type: "methodology",
    category: "Design Systems",
    description: "Revolutionary approach to creating design systems that scale from small components to complete interfaces.",
    rating: 5,
    favorite: true,
    url: "#"
  }
];

const typeColors = {
  book: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  article: "bg-green-500/10 text-green-600 dark:text-green-400",
  methodology: "bg-purple-500/10 text-purple-600 dark:text-purple-400"
};

export const LibrarySection = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="library" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Knowledge <span className="gradient-text">Library</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A curated collection of books, articles, and resources that have shaped my perspective and skills
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {libraryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="card-artistic p-6 hover-lift group relative"
              whileHover={{ scale: 1.02 }}
            >
              {/* Favorite Badge */}
              {item.favorite && (
                <div className="absolute top-4 right-4">
                  <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                </div>
              )}

              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${typeColors[item.type]}`}>
                      {item.type}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-lg group-hover:gradient-text transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    by {item.author}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                {item.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {renderStars(item.rating)}
                </div>
                <motion.a
                  href={item.url}
                  className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                  whileHover={{ x: 2 }}
                >
                  <span>View</span>
                  <ExternalLink className="w-3 h-3" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto card-artistic p-8 section-glow">
            <blockquote className="text-xl md:text-2xl font-display font-medium text-muted-foreground mb-4 italic">
              "The more that you read, the more things you will know. The more that you learn, the more places you'll go."
            </blockquote>
            <cite className="text-primary font-medium">— Dr. Seuss</cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Star = ({ className }: { className: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);