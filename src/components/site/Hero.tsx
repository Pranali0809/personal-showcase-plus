import { profile, experiences } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Squiggle, Star, Curl, Sparkle, Loop, Blob } from "./Doodles";
import photo from "@/assets/pranali-photo.png";

const current = experiences[0];

export const Hero = () => (
  <section id="top" className="relative overflow-hidden pb-4 pt-32 sm:pt-40">
    {/* Scattered crayon marks */}
    <Curl className="pointer-events-none absolute right-[6%] top-28 hidden w-24 md:block" />
    <Sparkle className="pointer-events-none absolute left-[4%] top-56 hidden w-16 md:block" />
    <Loop className="pointer-events-none absolute bottom-10 right-[8%] hidden w-28 -rotate-6 md:block" />

    <div className="wrap">
      <Reveal className="text-center">
        <p className="t-micro mb-6 inline-flex items-center gap-2.5 text-stone">
          <span className="live-dot" />
          {profile.role} · {profile.location}
        </p>
        <h1 className="t-heading-xl uppercase">{profile.name}</h1>
        <Squiggle
          color="var(--color-sky)"
          className="mx-auto mt-4 h-[16px] w-[min(240px,48vw)]"
        />
      </Reveal>
    </div>

    {/* About, immediately under the name */}
    <div id="about" className="wrap mt-20 scroll-mt-24 sm:mt-28">
      <Reveal kind="lift" className="pillow-lg overflow-hidden">
        <div className="grid gap-0 lg:grid-cols-[1.15fr_1fr]">
          {/* Left — the words */}
          <div className="p-7 sm:p-12 lg:p-14">
            <p className="t-micro mb-6 text-stone">About</p>
            <h2 className="t-heading-md max-w-[20ch]">
              {profile.bio[0].split(". ")[0]}.
            </h2>
            <p className="t-body mt-6 max-w-xl text-stone">
              {profile.bio[1]}
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-6 border-t pt-8"
                style={{ borderColor: "var(--color-sandstone)" }}>
              <div>
                <dt className="t-micro text-stone">Role</dt>
                <dd className="t-sm mt-1.5">{current.title}</dd>
              </div>
              <div>
                <dt className="t-micro text-stone">Company</dt>
                <dd className="t-sm mt-1.5">
                  {current.company} · {current.duration}
                </dd>
              </div>
            </dl>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#work" className="pill pill-ink">See the work</a>
              <a href="#method" className="pill pill-outline">How I ship</a>
            </div>
          </div>

          {/* Right — the photo */}
          <div
            className="relative flex items-center justify-center overflow-hidden p-8 sm:p-12"
            style={{ background: "var(--color-cream)" }}
          >
            <Blob
              color="var(--color-grass)"
              className="absolute h-[86%] w-[86%] opacity-90"
            />
            <Star className="absolute right-8 top-8 h-10 w-10 rotate-[10deg]" />
            <img
              src={photo}
              alt={profile.name}
              className="relative z-10 w-[78%] max-w-[320px] rounded-[28px] object-cover"
            />
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
