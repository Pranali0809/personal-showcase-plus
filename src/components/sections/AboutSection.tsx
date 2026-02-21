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
  </div>

  <p className="text-base lg:text-lg leading-relaxed text-muted-foreground max-w-xl">
    I’m a Machine Learning Engineer who enjoys solving messy, real-world
    problems and turning them into systems that actually run. I work at the
    intersection of software and machine learning, building optimization
    engines, forecasting pipelines, and exploring agent-driven AI systems that
    can think a flittle and act a little.
  </p>

  <p className="text-base lg:text-lg leading-relaxed text-muted-foreground max-w-xl">
    What pulls me in isn’t just the model, but the design behind it,  how
    everything connects, scales, and holds up over time. I’m especially curious
    about building intelligent systems that are practical, reliable, and
    thoughtfully engineered.
  </p>

  <p className="text-base lg:text-lg leading-relaxed text-muted-foreground max-w-xl">
    My goal? Make AI less magical and more engineered. If that sounds
    interesting, let’s connect.
  </p>
</motion.div>

          {/* RIGHT — IMAGE + BLOB */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex justify-center items-center"
          >
            {/* Blob */}
            <div className="blob absolute w-[420px] h-[420px]" />

            {/* Image */}
            <img
              src="/images/woman-sits-at-a-laptop-vector-removebg-preview.png"
              alt="Pranali illustration"
              className="relative w-[340px] z-20"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
