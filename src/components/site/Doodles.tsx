/* Hand-drawn marks scattered through the page — the "crayon" layer. */

/** Wavy underline, used beneath headings and numbers. */
export const Squiggle = ({
  color = "var(--color-sky)",
  className = "",
}: {
  color?: string;
  className?: string;
}) => (
  <svg
    viewBox="0 0 240 26"
    fill="none"
    aria-hidden="true"
    preserveAspectRatio="none"
    className={className}
  >
    <path
      d="M6 16 C 26 4, 44 22, 64 13 C 84 4, 100 22, 120 13 C 140 4, 156 22, 176 13 C 196 4, 214 20, 234 11"
      stroke={color}
      strokeWidth="7"
      strokeLinecap="round"
    />
  </svg>
);

/** Lasso circled around a number or word. */
export const CrayonRing = ({
  color = "var(--color-grass)",
  className = "",
}: {
  color?: string;
  className?: string;
}) => (
  <svg
    viewBox="0 0 220 150"
    preserveAspectRatio="none"
    aria-hidden="true"
    className={`pointer-events-none absolute -left-[16%] -top-[13%] h-[128%] w-[132%] ${className}`}
  >
    <path
      d="M 30 96 C 12 62, 44 22, 106 16 C 168 10, 208 40, 206 74 C 204 110, 156 136, 100 134 C 52 132, 22 114, 26 88 C 29 70, 44 58, 62 54"
      fill="none"
      stroke={color}
      strokeWidth="7"
      strokeLinecap="round"
    />
  </svg>
);

/** Five-point outline star. */
export const Star = ({
  color = "var(--color-coral)",
  className = "",
}: {
  color?: string;
  className?: string;
}) => (
  <svg viewBox="0 0 60 60" aria-hidden="true" className={className}>
    <path
      d="M30 5 L38 23 L57 25 L42 36 L48 55 L30 43 L12 54 L18 35 L3 24 L22 23 Z"
      fill="none"
      stroke={color}
      strokeWidth="4"
      strokeLinejoin="round"
    />
  </svg>
);

/** Curled scribble. */
export const Curl = ({
  color = "var(--color-sky)",
  className = "",
}: {
  color?: string;
  className?: string;
}) => (
  <svg viewBox="0 0 100 84" fill="none" aria-hidden="true" className={className}>
    <path
      d="M52 12 C 84 14 92 54 62 62 C 38 68 24 46 44 36 C 57 30 66 42 55 48"
      stroke={color}
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** Four-armed sparkle. */
export const Sparkle = ({
  color = "var(--color-grass)",
  className = "",
}: {
  color?: string;
  className?: string;
}) => (
  <svg viewBox="0 0 100 100" fill="none" aria-hidden="true" className={className}>
    {["M50 8 V28", "M50 72 V92", "M12 50 H32", "M68 50 H88"].map((d) => (
      <path
        key={d}
        d={d}
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ))}
  </svg>
);

/** Long looping flourish. */
export const Loop = ({
  color = "var(--color-coral)",
  className = "",
}: {
  color?: string;
  className?: string;
}) => (
  <svg viewBox="0 0 120 70" fill="none" aria-hidden="true" className={className}>
    <path
      d="M8 52 C 26 12 56 10 56 36 C 56 60 28 62 32 42 C 36 22 66 18 112 32"
      stroke={color}
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** Organic grass-coloured blob, sits behind photos. */
export const Blob = ({
  color = "var(--color-grass)",
  className = "",
}: {
  color?: string;
  className?: string;
}) => (
  <svg viewBox="0 0 200 200" aria-hidden="true" className={className}>
    <path
      fill={color}
      d="M48 96 C 44 48 92 20 132 36 C 174 53 184 104 160 144 C 135 184 72 184 52 148 C 40 127 50 118 48 96 Z"
    />
  </svg>
);

/** Sun-yellow ribbon with text running along its curve. */
export const Ribbon = ({ text }: { text: string }) => {
  const repeated = `${text} · `.repeat(4);
  return (
    <svg
      viewBox="0 0 1440 330"
      className="block w-[130%] -translate-x-[12%]"
      fill="none"
      aria-hidden="true"
    >
      <path
        id="fact-ribbon"
        d="M -80 240 C 260 90 640 310 940 185 S 1360 80 1520 165"
        stroke="var(--color-sun)"
        strokeWidth="92"
        strokeLinecap="round"
      />
      <text
        style={{
          fontSize: "29px",
          fontWeight: 500,
          letterSpacing: "0.1em",
          fill: "var(--color-coral)",
        }}
      >
        <textPath href="#fact-ribbon" startOffset="-14%">
          {repeated}
          <animate
            attributeName="startOffset"
            from="-14%"
            to="11%"
            dur="26s"
            repeatCount="indefinite"
          />
        </textPath>
      </text>
    </svg>
  );
};
