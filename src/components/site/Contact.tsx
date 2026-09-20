import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { profile, socials } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Seam } from "./Wave";
import { Squiggle } from "./Doodles";

const GitHubMark = () => (
  <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedInMark = () => (
  <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const XMark = () => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.153h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const ResumeMark = () => (
  <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6M9 15h6M9 11h3" />
  </svg>
);

const marks: Record<string, () => JSX.Element> = {
  GitHub: GitHubMark,
  LinkedIn: LinkedInMark,
  X: XMark,
};

/**
 * Closing night band — centred, matching the reference: live eyebrow,
 * oversized headline with a grass squiggle, a white email pill beside a
 * copy button, then circular profile buttons. Capped by the sun footer.
 */
export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked; the mailto link still works.
    }
  };

  const profiles = socials.filter((s) => s.label !== "Email");

  return (
    <>
      <section
        id="contact"
        aria-label="Contact"
        className="band scroll-mt-16"
        style={{ background: "var(--color-night)", color: "var(--color-cream)" }}
      >
        <div className="wrap flex flex-col items-center text-center">
          <Reveal>
            <p className="t-micro flex items-center gap-2.5" style={{ color: "var(--color-fog)" }}>
              <span className="live-dot" />
              Open to interesting problems · Mumbai, IN
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="t-display mt-8">Let&apos;s build.</h2>
          </Reveal>

          <Squiggle
            color="var(--color-grass)"
            className="mt-5 h-[18px] w-[min(260px,52vw)]"
          />

          <Reveal delay={0.1} className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="pill pillow rounded-full py-3.5"
            >
              {profile.email}
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: "var(--color-sky)" }}
                aria-hidden
              />
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label="Copy email address"
              className="flex h-12 w-12 items-center justify-center rounded-full transition-transform hover:scale-105"
              style={{
                background: "var(--color-night-soft)",
                color: "var(--color-cream)",
              }}
            >
              {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
            </button>
            <span aria-live="polite" className="t-micro" style={{ color: "var(--color-grass)" }}>
              {copied ? "Copied" : ""}
            </span>
          </Reveal>

          <Reveal delay={0.14}>
            <ul
              className="mt-12 flex flex-wrap items-center justify-center gap-3"
              role="list"
              aria-label="Profiles"
            >
              {profiles.map((social) => {
                const Mark = marks[social.label];
                return (
                  <li key={social.label}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="pillow flex h-12 w-12 items-center justify-center rounded-full transition-transform hover:scale-105"
                    >
                      {Mark ? <Mark /> : social.label}
                    </a>
                  </li>
                );
              })}
              <li>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Résumé"
                  className="pillow flex h-12 w-12 items-center justify-center rounded-full transition-transform hover:scale-105"
                >
                  <ResumeMark />
                </a>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <footer aria-label="Footer" style={{ background: "var(--color-night)" }}>
        <Seam from="var(--color-night)" to="var(--color-sun)" />
        <div
          className="pb-[max(28px,env(safe-area-inset-bottom))] pt-10"
          style={{ background: "var(--color-sun)", color: "var(--color-ink)" }}
        >
          <div className="wrap flex flex-wrap items-center justify-between gap-x-10 gap-y-6">
            <p className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-white">
                <span
                  className="h-4 w-4 rounded-full"
                  style={{ background: "var(--color-grass)" }}
                  aria-hidden
                />
              </span>
              <span className="t-label">{profile.name}</span>
            </p>

            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2" role="list">
              <li><a href="#work" className="u-link t-sm">Work</a></li>
              <li><a href="#experience" className="u-link t-sm">Experience</a></li>
              <li><a href="#about" className="u-link t-sm">About</a></li>
            </ul>

            <p className="t-micro tnum" style={{ color: "rgb(44 46 42 / 0.7)" }}>
              © {new Date().getFullYear()} {profile.name} · {profile.location}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
