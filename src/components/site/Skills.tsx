import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills, disciplines, type Discipline } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Squiggle, Curl, Sparkle, Loop, Star, Ribbon } from "./Doodles";

/** One marquee row of logo pucks. Duplicated so the loop is seamless. */
const LogoLoop = ({ reverse = false }: { reverse?: boolean }) => {
  const row = [...skills, ...skills];
  return (
    <div className="overflow-hidden" aria-hidden>
      <div className={`logo-loop py-1 ${reverse ? "logo-loop-b" : "logo-loop-a"}`}>
        {row.map((skill, i) => (
          <span
            key={`${skill.name}-${i}`}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-ink [&_svg]:!h-6 [&_svg]:!w-6"
          >
            <skill.icon />
          </span>
        ))}
      </div>
    </div>
  );
};

/** Deterministic hand-placed angle per chip: ±2–6deg, 0–10px lift. */
const tiltFor = (i: number) => (i % 2 === 0 ? -1 : 1) * (2 + (i * 3) % 5);
const liftFor = (i: number) => (i * 7) % 11;

/** Each discipline carries a palette colour, shown as a dot on its chip. */
const dotFor: Record<string, string> = {
  "AI & agents": "var(--color-coral)",
  Languages: "var(--color-grass)",
  "Data & pipelines": "var(--color-sky)",
  Cloud: "var(--color-sun)",
  Frontend: "var(--color-coral)",
};

export const Skills = () => {
  const [filter, setFilter] = useState<Discipline | null>(null);
  const shown = filter ? skills.filter((s) => s.discipline === filter) : skills;

  return (
    <section
      id="skills"
      aria-label="Skills"
      className="band relative overflow-hidden scroll-mt-16"
    >
      {/* Crayon layer */}
      <Curl className="pointer-events-none absolute right-[5%] top-14 hidden w-24 md:block" />
      <Sparkle className="pointer-events-none absolute -left-4 bottom-40 hidden w-20 md:block" />
      <Loop className="pointer-events-none absolute bottom-8 right-[7%] hidden w-28 -rotate-6 md:block" />

      {/* Two counter-scrolling logo tickers */}
      <div className="space-y-3">
        <LogoLoop />
        <LogoLoop reverse />
      </div>

      <div className="wrap mt-16">
        <Reveal>
          <p className="t-micro flex items-center gap-2.5 text-stone">
            <span className="h-2 w-2 rounded-full bg-grass" aria-hidden />
            The stack
          </p>
          <span className="relative mt-4 inline-block">
            <h2 className="t-heading-lg">The toolbox.</h2>
            <Squiggle color="var(--color-sky)" className="mt-1 h-[16px] w-full" />
          </span>
          <p className="t-body mt-8 max-w-2xl text-stone">
            Python and SQL at the core, Airflow and BigQuery underneath, GCP and
            AWS around it. On the AI side I build with agent frameworks and
            orchestration — LangChain and ADK. Pick a discipline to filter the
            field.
          </p>
        </Reveal>

        <Reveal className="mt-10 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setFilter(null)}
            className={`pill !min-h-[38px] !px-4 !text-[0.875rem] ${
              filter === null ? "pill-ink" : "pill-outline"
            }`}
          >
            Show all
          </button>
          {disciplines.map((discipline) => (
            <button
              key={discipline}
              type="button"
              onClick={() => setFilter(discipline)}
              className={`pill !min-h-[38px] !px-4 !text-[0.875rem] ${
                filter === discipline ? "pill-ink" : "pill-outline"
              }`}
            >
              <span
                aria-hidden
                className="h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ background: dotFor[discipline] }}
              />
              {discipline}
            </button>
          ))}
        </Reveal>

        <Reveal kind="lift" className="pillow-lg mt-8 p-7 sm:p-12">
          <motion.ul
            layout
            className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2.5 md:gap-x-3 md:gap-y-5"
          >
            <AnimatePresence mode="popLayout">
              {shown.map((skill, i) => (
                <motion.li
                  key={skill.name}
                  layout
                  data-scatter
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.28, ease: [0, 0, 0.2, 1] }}
                  style={
                    {
                      "--tilt": `${tiltFor(i)}deg`,
                      "--lift": `${liftFor(i)}px`,
                      background: "var(--color-cream)",
                    } as React.CSSProperties
                  }
                  className="flex min-h-9 items-center gap-1.5 rounded-full px-3.5 text-[13px] font-medium md:min-h-12 md:gap-2 md:px-5 md:text-[17px] [&_svg]:!h-4 [&_svg]:!w-4 md:[&_svg]:!h-5 md:[&_svg]:!w-5"
                >
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 shrink-0 rounded-full md:h-2 md:w-2"
                    style={{ background: dotFor[skill.discipline] }}
                  />
                  <skill.icon />
                  <span>{skill.name}</span>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>

          <p className="mt-10 flex items-baseline gap-3">
            <span className="relative inline-block">
              <span className="t-heading-lg tnum">{shown.length}</span>
              <Star className="absolute -right-9 -top-3 h-9 w-9 rotate-[10deg]" />
            </span>
            <span className="t-micro text-stone">
              {filter ? `tools in ${filter}` : "tools"}
            </span>
          </p>
        </Reveal>
      </div>

      {/* Sun-yellow ribbon ticker */}
      <div className="pointer-events-none mt-10 select-none overflow-hidden">
        <Ribbon text="MACHINE LEARNING · OPTIMISATION · AGENTS · MLOPS · MUMBAI" />
      </div>
    </section>
  );
};
