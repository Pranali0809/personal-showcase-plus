const WAVE_PATH =
  "M0 90 L0 52 C 120 12 240 12 360 44 C 480 76 600 76 720 44 C 840 12 960 12 1080 44 C 1200 76 1320 76 1440 48 L1440 90 Z";

/**
 * The scalloped seam between two colour bands.
 *
 * The wrapper is painted in `from` (the section above) and the wave path in
 * `to` (the section below), so the next colour appears to pour down into
 * place. Rendering the path without the `from` wrapper leaves a hard straight
 * edge, which is what the seam exists to avoid.
 */
export const Seam = ({
  from,
  to,
  className = "",
}: {
  from: string;
  to: string;
  className?: string;
}) => (
  <div
    aria-hidden="true"
    className={`relative z-10 block leading-[0] ${className}`}
    style={{ background: from }}
  >
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      className="-mb-px block h-[clamp(40px,6vw,90px)] w-full"
    >
      <path d={WAVE_PATH} fill={to} />
    </svg>
  </div>
);
