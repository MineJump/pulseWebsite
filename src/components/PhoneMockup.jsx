import { useState } from "react";
import { motion } from "framer-motion";
import { dur, ease } from "../lib/motion.js";
import { usePrefersReducedMotion } from "../lib/hooks.js";

// Mapping aus den 8 verfügbaren Screenshots in public/.
// Falls die Zuordnung anders soll: einfach hier den Pfad ändern.
const SOURCES = {
  survey: "/app-screen-6.jpg",
  sensing: "/app-screen-4.jpg",
};

export default function PhoneMockup({ kind, alt }) {
  const reduced = usePrefersReducedMotion();
  const [hover, setHover] = useState(false);
  const src = SOURCES[kind];

  return (
    <motion.div
      className="relative inline-block"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      animate={
        reduced
          ? undefined
          : { y: hover ? -6 : 0, transition: { duration: dur.base, ease: ease.out } }
      }
      style={{
        padding: "8px",
        borderRadius: "40px",
        background: "linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)",
        boxShadow:
          "0 28px 60px -16px rgba(15, 13, 41, 0.32), 0 8px 18px -6px rgba(15, 13, 41, 0.16), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
        width: "min(78vw, 300px)",
      }}
      role="img"
      aria-label={alt}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        draggable={false}
        className="block w-full"
        style={{
          borderRadius: "32px",
          aspectRatio: "1284 / 2778",
          objectFit: "cover",
        }}
      />
    </motion.div>
  );
}
