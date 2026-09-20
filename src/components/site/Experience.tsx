import { experiences } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Squiggle, Sparkle, Curl } from "./Doodles";

const current = experiences[0];

/** Accent cycled across the project cards so the band carries colour. */
const accents = [
  "var(--color-coral)",
  "var(--color-grass)",
  "var(--color-sky)",
];

export const Experience = () => (
  <section
    id="experience"
    aria-label="What I work on"
    className="band relative scroll-mt-16 overflow-hidden"
  >
    <Curl className="pointer-events-none absolute right-[6%] top-16 hidden w-20 md:block" />
    <Sparkle className="pointer-events-none absolute -left-3 bottom-24 hidden w-16 md:block" />

    <div className="wrap">
      <Reveal>
        <p className="t-micro flex items-center gap-2.5 text-stone">
          <span className="live-dot" />
          What I work on
        </p>
        <span className="relative mt-4 inline-block">
          <h2 className="t-heading-lg max-w-[18ch]">
            Day job: production ML.
          </h2>
          <Squiggle
            color="var(--color-coral)"
            className="mt-2 h-[14px] w-[min(200px,40vw)]"
          />
        </span>
      </Reveal>

      {/* Role header */}
      <Reveal kind="lift" className="pillow mt-12 p-7 sm:p-10">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div>
            <h3 className="t-heading-sm">{current.title}</h3>
            <p className="t-sm mt-1.5 text-stone">
              {current.company} · {current.location}
            </p>
          </div>
          <span
            className="t-micro tnum rounded-full px-3 py-1.5"
            style={{ background: "var(--color-sandstone)" }}
          >
            {current.duration}
          </span>
        </div>

        <ul
          className="mt-8 grid gap-3 border-t pt-8 sm:grid-cols-2"
          style={{ borderColor: "var(--color-sandstone)" }}
        >
          {current.responsibilities.map((item) => (
            <li key={item} className="t-sm flex gap-3 text-stone">
              <span
                aria-hidden
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ background: "var(--color-grass)" }}
              />
              {item}
            </li>
          ))}
        </ul>
      </Reveal>

      {/* The three workstreams */}
      <ol className="mt-4 grid gap-4 lg:grid-cols-3">
        {current.projects.map((entry, i) => {
          const [name, detail] = entry.split(" — ");
          return (
            <Reveal as="li" kind="lift" key={entry} delay={i * 0.08}>
              <div className="pillow flex h-full flex-col gap-4 p-7 sm:p-8">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: accents[i % accents.length] }}
                  aria-hidden
                />
                <h3 className="t-heading-sm">{name}</h3>
                <p className="t-sm text-stone">{detail}</p>
              </div>
            </Reveal>
          );
        })}
      </ol>

      {/* Tools used on the job */}
      <Reveal className="mt-8 flex flex-wrap items-center gap-2">
        <span className="t-micro mr-2 text-stone">Day to day</span>
        {current.tools.map((tool, i) => (
          <span
            key={tool}
            data-scatter
            style={
              {
                "--tilt": `${(i % 2 === 0 ? -1 : 1) * (2 + (i % 4))}deg`,
                "--lift": `${(i * 3) % 9}px`,
                background: "var(--color-white)",
              } as React.CSSProperties
            }
            className="t-sm flex min-h-10 items-center gap-2 rounded-full px-4"
          >
            <span
              aria-hidden
              className="h-2 w-2 shrink-0 rounded-full"
              style={{ background: accents[i % accents.length] }}
            />
            {tool}
          </span>
        ))}
      </Reveal>
    </div>
  </section>
);
