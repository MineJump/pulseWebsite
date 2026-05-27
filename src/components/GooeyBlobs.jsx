import { usePrefersReducedMotion } from "../lib/hooks.js";

// Gooey blobs as a single self-contained SVG. Defs + circles + filter live
// in the same SVG element. Filter is applied via the SVG `filter` attribute
// (not CSS `filter: url(#id)`) to avoid Safari's document.baseURI fragment
// lookup which dropped the filter in SPA context. Animation uses SMIL
// <animateTransform> rather than CSS transforms on SVG — CSS transforms on
// SVG elements with transform-box are flaky in Safari, SMIL is bulletproof.
const BLOBS = [
  {
    cx: 38,
    cy: 50,
    r: 22,
    fill: "#0D2342",
    values: "0 0; 8 2; -2 -1; 0 0",
    dur: "7s",
  },
  {
    cx: 62,
    cy: 42,
    r: 20,
    fill: "#FF9242",
    values: "0 0; -8 -2; 2 3; 0 0",
    dur: "6s",
  },
  {
    cx: 50,
    cy: 66,
    r: 16,
    fill: "#0D2342",
    values: "0 0; 2 -6; -3 4; 0 0",
    dur: "8s",
  },
];

export default function GooeyBlobs({ size = 360, className = "" }) {
  const reduced = usePrefersReducedMotion();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <defs>
        <filter
          id="gooey-merge-filter"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" />
          <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" />
        </filter>
      </defs>
      <g filter="url(#gooey-merge-filter)">
        {BLOBS.map((b, i) => (
          <circle key={i} cx={b.cx} cy={b.cy} r={b.r} fill={b.fill}>
            {!reduced && (
              <animateTransform
                attributeName="transform"
                type="translate"
                values={b.values}
                dur={b.dur}
                repeatCount="indefinite"
                calcMode="spline"
                keyTimes="0; 0.33; 0.66; 1"
                keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              />
            )}
          </circle>
        ))}
      </g>
    </svg>
  );
}
