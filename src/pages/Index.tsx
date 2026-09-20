import { useEffect } from "react";
import { Dock } from "@/components/site/Dock";
import { Hero } from "@/components/site/Hero";
import { Experience } from "@/components/site/Experience";
import { Work } from "@/components/site/Work";
import { Skills } from "@/components/site/Skills";
import { Achievements } from "@/components/site/Achievements";
import { Shelf } from "@/components/site/Shelf";
import { Contact } from "@/components/site/Contact";
import { Seam } from "@/components/site/Wave";

const CREAM = "var(--color-cream)";
const NIGHT = "var(--color-night)";
const GRASS = "var(--color-grass)";

/**
 * Band order and the scalloped seams between them. Each Seam is painted in
 * the colour of the band above and filled with the colour of the band below.
 */
const Index = () => {
  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <div style={{ background: CREAM }}>
      <Dock />
      <main>
        {/* cream — name, about, photo */}
        <Hero />
        {/* cream — what I work on */}
        <Experience />

        <Seam from={CREAM} to={NIGHT} />
        {/* night — horizontal reel, tint shifts per project */}
        <Work />

        <Seam from={NIGHT} to={CREAM} />
        {/* cream — toolbox */}
        <Skills />

        <Seam from={CREAM} to={GRASS} />
        {/* grass — podium stack */}
        <Achievements />

        <Seam from={GRASS} to={CREAM} />
        {/* cream — reading list */}
        <Shelf />

        <Seam from={CREAM} to={NIGHT} />
        {/* night — contact, then the sun footer */}
        <Contact />
      </main>
    </div>
  );
};

export default Index;
