import { library } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Squiggle } from "./Doodles";

/** Compact cream band for the reading list, between the podium and contact. */
export const Shelf = () => (
  <section aria-label="Reading" className="band scroll-mt-16">
    <div className="wrap">
      <Reveal>
        <p className="t-micro flex items-center gap-2.5 text-stone">
          <span className="h-2 w-2 rounded-full bg-sky" aria-hidden />
          The shelf
        </p>
        <span className="relative mt-4 inline-block">
          <h2 className="t-heading-lg">What shaped the thinking.</h2>
          <Squiggle
            color="var(--color-grass)"
            className="mt-2 h-[14px] w-[min(200px,40vw)]"
          />
        </span>
      </Reveal>

      <ul className="mt-12 grid gap-4 md:grid-cols-3">
        {library.map((item, i) => (
          <Reveal as="li" kind="lift" key={item.id} delay={i * 0.07}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="pillow group flex h-full flex-col gap-3 p-7 transition-transform hover:-translate-y-1"
            >
              <span
                className="t-micro w-fit rounded-full px-3 py-1.5"
                style={{ background: "var(--color-sandstone)" }}
              >
                {item.category}
              </span>
              <h3 className="t-heading-sm transition-colors group-hover:text-coral">
                {item.title}
              </h3>
              <p className="t-micro text-fog">{item.author}</p>
              <p className="t-sm mt-auto pt-3 text-stone">{item.description}</p>
            </a>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);
