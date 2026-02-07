import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-24"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT — TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-3">
              <span className="text-sm uppercase tracking-widest text-muted-foreground">
                About
              </span>

              <h2 className="text-4xl lg:text-6xl font-display font-semibold leading-tight">
                Pranali{" "}
                <span className="gradient-text">Shinde</span>
              </h2>

              <p className="text-lg text-muted-foreground max-w-md">
                Software engineer focused on ML, AI systems, and building
                infrastructure that scales thoughtfully.
              </p>
            </div>

            <p className="text-base lg:text-lg leading-relaxed text-muted-foreground max-w-xl">
              I enjoy working at the intersection of software engineering and
              machine learning — from designing reliable backend systems to
              understanding how infrastructure shapes intelligent products.
              Curiosity drives most of my work, whether that’s exploring new
              tools, refining abstractions, or learning how systems behave at
              scale.
            </p>

            <p className="text-base lg:text-lg leading-relaxed text-muted-foreground max-w-xl">
              I value clarity over cleverness, maintainability over shortcuts,
              and building things that grow gracefully over time.
            </p>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="w-12 h-px bg-gradient-to-r from-primary to-accent" />
              <span>Thoughtful systems over flashy solutions</span>
            </div>
          </motion.div>

          {/* RIGHT — IMAGE + BLOB */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex justify-center"
          > */}
            {/* DotLottie Animation */}
            <DotLottieReact
              src="https://lottie.host/embed/50363872-b68f-49e1-97d9-bb939ac839de/QMP8OsW3xa.lottie"
              loop
              autoplay
              style={{ height: "420px", width: "420px" }}
            />
          {/* </motion.div> */}

        </div>
      </div>
    </section>
  );
};
