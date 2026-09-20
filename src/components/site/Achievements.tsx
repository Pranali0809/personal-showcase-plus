import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { achievements, certification } from "@/data/portfolio";
import { CrayonRing, Squiggle } from "./Doodles";

/** Rank shown inside the lasso, plus the stamp beside the title. */
const meta: Record<string, { rank: string; stamp: string }> = {
  publication: { rank: "IEEE", stamp: "Published" },
  competition: { rank: "2nd", stamp: "Runner-up" },
};

const cards = [
  ...achievements.map((a) => ({
    id: String(a.id),
    rank: meta[a.kind].rank,
    stamp: meta[a.kind].stamp,
    date: a.date,
    title: a.title,
    org: a.organization,
    body: a.description,
    href: undefined as string | undefined,
  })),
  {
    id: "cert",
    rank: "GCP",
    stamp: "Certified",
    date: "Credly",
    title: certification.title,
    org: "Google Cloud",
    body: "Associate Cloud Engineer — verified badge on Credly.",
    href: certification.url as string | undefined,
  },
];

/** One podium card; it rises into the stack as the strip scrolls. */
const Podium = ({
  card,
  index,
  progress,
}: {
  card: (typeof cards)[number];
  index: number;
  progress: MotionValue<number>;
}) => {
  const slot = 1 / cards.length;
  const start = index * slot;

  const y = useTransform(
    progress,
    [Math.max(start - slot * 0.85, 0), start, 1],
    ["110%", "0%", `${-6 * (cards.length - 1 - index)}%`]
  );
  const scale = useTransform(
    progress,
    [start, Math.min(start + slot, 1), 1],
    [1, 0.97, 0.94]
  );

  const inner = (
    <article className="pillow flex min-h-[clamp(310px,41vh,400px)] flex-col justify-between gap-8 p-7">
      <div className="flex items-start justify-between gap-4">
        <span className="relative inline-block">
          <span className="t-heading-sm tnum">{card.rank}</span>
          <CrayonRing color="var(--color-coral)" />
        </span>
        <span
          className="t-micro tnum rounded-full px-3 py-1.5"
          style={{ background: "var(--color-sandstone)" }}
        >
          {card.date}
        </span>
      </div>
      <div>
        <h3 className="t-heading-sm">{card.title}</h3>
        <p className="t-sm mt-1 text-stone">{card.org}</p>
        <p className="t-sm mt-3 text-stone">{card.body}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span
            className="t-micro rounded-full border-2 px-3 py-1.5"
            style={{
              borderColor: "var(--color-coral)",
              color: "var(--color-coral)",
            }}
          >
            {card.stamp}
          </span>
        </div>
      </div>
    </article>
  );

  return (
    <motion.li
      style={{ y, scale, zIndex: index }}
      className="absolute inset-x-0 bottom-0"
    >
      {card.href ? (
        <a href={card.href} target="_blank" rel="noopener noreferrer" className="block">
          {inner}
        </a>
      ) : (
        inner
      )}
    </motion.li>
  );
};

export const Achievements = () => {
  const root = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: root,
    offset: ["start start", "end end"],
  });

  return (
    <section
        id="achievements"
        ref={root}
        aria-label="Achievements"
        className="relative scroll-mt-16 bg-grass"
        style={{ height: "300lvh" }}
      >
        <div className="sticky top-0 flex h-[100lvh] flex-col justify-center overflow-hidden">
          <div className="wrap w-full">
            <p className="t-micro flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-white" aria-hidden />
              Achievements
            </p>
            <span className="relative mt-4 inline-block">
              <h2 className="t-heading-lg max-w-[16ch]">
                A paper, a podium, a badge.
              </h2>
              <Squiggle
                color="var(--color-white)"
                className="mt-2 h-[14px] w-[min(200px,40vw)]"
              />
            </span>
          </div>

          <div className="mt-[clamp(24px,4vh,48px)]">
            <ol
              className="relative mx-auto h-[clamp(330px,44vh,430px)] w-[min(88vw,600px)]"
              role="list"
            >
              {cards.map((card, i) => (
                <Podium
                  key={card.id}
                  card={card}
                  index={i}
                  progress={scrollYProgress}
                />
              ))}
            </ol>

            {/* Ground rail the podium cards rest on */}
            <div
              aria-hidden
              className="mx-auto mt-5 h-[3px] w-[min(88vw,600px)] rounded-full bg-white/70"
            />
          </div>
        </div>
    </section>
  );
};
