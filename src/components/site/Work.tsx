import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { projects, type Project } from "@/data/portfolio";

const LETTERS = ["W", "O", "R", "K"];

/**
 * Each project owns a bright mark colour (the giant letters and its status
 * label) and a near-black tint the stage fades to while that card is centred.
 */
const theme: Record<string, { mark: string; stage: string }> = {
  vermilion: { mark: "#ff5400", stage: "#2a1409" },
  rani: { mark: "#ff007f", stage: "#2a0a1c" },
  bottle: { mark: "#8ed462", stage: "#16240f" },
  turmeric: { mark: "#f5e211", stage: "#262209" },
  saffron: { mark: "#ff705d", stage: "#2a140f" },
};

const themeFor = (accent: string) =>
  theme[accent] ?? { mark: "#ff007f", stage: "#1e201b" };

const Bullets = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h4 className="t-micro mb-3 text-stone">{title}</h4>
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="t-sm text-stone">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export const Work = () => {
  const root = useRef<HTMLElement>(null);
  const reel = useRef<HTMLDivElement>(null);
  const [travel, setTravel] = useState(0);
  const [active, setActive] = useState<Project | null>(null);

  // Measure the reel so the horizontal run ends exactly on the last project,
  // rather than at an arbitrary percentage.
  useEffect(() => {
    const measure = () => {
      if (!reel.current) return;
      const overflow = reel.current.scrollWidth - window.innerWidth;
      setTravel(Math.max(overflow + window.innerWidth * 0.08, 0));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: root,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -travel]);

  // One stop per project, so colour changes land as each card reaches centre.
  const stops = projects.map((_, i) =>
    projects.length === 1 ? 0 : i / (projects.length - 1)
  );
  const stage = useTransform(
    scrollYProgress,
    stops,
    projects.map((p) => themeFor(p.accent).stage)
  );
  const mark = useTransform(
    scrollYProgress,
    stops,
    projects.map((p) => themeFor(p.accent).mark)
  );

  // Letter rows drift at their own rates so the backdrop parallaxes.
  const rowX = [
    useTransform(scrollYProgress, [0, 1], ["0%", "-34%"]),
    useTransform(scrollYProgress, [0, 1], ["-12%", "-2%"]),
    useTransform(scrollYProgress, [0, 1], ["-4%", "-27%"]),
    useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]),
  ];

  return (
    <>
      <motion.section
        id="work"
        ref={root}
        aria-label="Work"
        className="relative"
        // 55lvh of scroll per project, so the run is sized to the real count.
        style={{ height: `${projects.length * 55 + 45}lvh`, background: stage }}
      >
        <div className="sticky top-0 isolate h-[100lvh] overflow-hidden">
          {/* Giant repeating letters, tinted to the active project */}
          <div
            aria-hidden
            className="absolute inset-0 z-0 flex flex-col justify-around py-2"
          >
            {LETTERS.map((letter, i) => (
              <div key={letter} className="flex items-center">
                <motion.span
                  style={{ x: rowX[i], color: mark }}
                  className="whitespace-nowrap text-[19lvh] font-medium leading-none tracking-[-0.04em]"
                >
                  {letter.repeat(48)}
                </motion.span>
              </div>
            ))}
          </div>

          {/* Floating chip, as on the reference */}
          <p className="t-micro absolute left-1/2 top-[max(88px,calc(env(safe-area-inset-top)+88px))] z-20 flex -translate-x-1/2 items-center gap-2.5 whitespace-nowrap rounded-full bg-white px-4 py-2 text-ink">
            <span className="h-2 w-2 rounded-full bg-grass" aria-hidden />
            The work · {projects.length} projects
          </p>

          {/* Horizontal reel */}
          <motion.div
            ref={reel}
            style={{ x }}
            className="absolute top-1/2 z-10 flex w-max -translate-y-1/2 items-center gap-[5vw] pl-[4vw] pr-[4vw]"
          >
            {projects.map((project) => (
              <button
                key={project.id}
                type="button"
                onClick={() => setActive(project)}
                aria-label={`${project.title} — ${project.status}`}
                className="group flex aspect-[16/10] h-[min(30lvh,55vw)] shrink-0 flex-col rounded-[24px] bg-white p-2 text-left transition-transform duration-500 ease-out hover:-translate-y-1.5 md:h-[42lvh]"
              >
                <span
                  className="relative block w-full grow overflow-hidden rounded-[16px]"
                  style={{ background: "var(--color-sandstone)" }}
                >
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                </span>
                <span className="flex shrink-0 items-center gap-2 px-1.5 pb-0.5 pt-2.5">
                  <span className="t-micro min-w-0 truncate text-ink">
                    {project.title}
                  </span>
                  <span
                    className="t-micro ml-auto shrink-0 whitespace-nowrap"
                    style={{ color: themeFor(project.accent).mark }}
                  >
                    {project.status}
                  </span>
                </span>
              </button>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-h-[88vh] max-w-2xl overflow-y-auto border-0 bg-white p-0 sm:rounded-[32px]">
          {active && (
            <>
              <div
                className="aspect-video w-full overflow-hidden"
                style={{ background: "var(--color-sandstone)" }}
              >
                <img
                  src={active.image}
                  alt={`${active.title} screenshot`}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="space-y-8 p-7 sm:p-10">
                <DialogHeader className="space-y-3 text-left">
                  <p
                    className="t-micro"
                    style={{ color: themeFor(active.accent).mark }}
                  >
                    {active.status}
                  </p>
                  <DialogTitle className="t-heading-sm">
                    {active.title}
                  </DialogTitle>
                  <DialogDescription className="t-sm text-stone">
                    {active.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="flex flex-wrap gap-2">
                  {active.tech.map((tech) => (
                    <span
                      key={tech}
                      className="t-micro rounded-full px-3 py-1.5 text-stone"
                      style={{ background: "var(--color-cream)" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                  <Bullets title="What it does" items={active.details.whatItDoes} />
                  <Bullets
                    title="What I worked on"
                    items={active.details.whatIWorkedOn}
                  />
                </div>

                {(active.liveUrl !== "#" || active.githubUrl !== "#") && (
                  <div className="flex flex-wrap gap-3">
                    {active.liveUrl !== "#" && (
                      <a
                        href={active.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pill pill-ink"
                      >
                        <Play className="h-4 w-4" /> Watch demo
                      </a>
                    )}
                    {active.githubUrl !== "#" && (
                      <a
                        href={active.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pill pill-outline"
                      >
                        <Github className="h-4 w-4" /> Source
                      </a>
                    )}
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
