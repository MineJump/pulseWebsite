import { BlurOrb, type OrbSpec } from "./BlurOrb";

type Intensity = "hero" | "section" | "subtle";

const PRESETS: Record<Intensity, OrbSpec[]> = {
  hero: [
    { color: "orange", size: 520, top: "-8%", left: "-6%", variant: "a", delay: 0 },
    { color: "blue", size: 620, top: "18%", right: "-10%", variant: "b", delay: 2 },
    { color: "orange", size: 380, bottom: "-8%", left: "30%", variant: "c", delay: 4, opacity: 0.6 },
    { color: "blue", size: 300, top: "55%", left: "8%", variant: "c", delay: 1, opacity: 0.45 },
  ],
  section: [
    { color: "blue", size: 460, top: "-10%", right: "-8%", variant: "a", delay: 0 },
    { color: "orange", size: 380, bottom: "-12%", left: "-6%", variant: "b", delay: 3 },
  ],
  subtle: [
    { color: "blue", size: 320, top: "10%", right: "-8%", variant: "b", delay: 0, opacity: 0.35 },
    { color: "orange", size: 280, bottom: "-6%", left: "-4%", variant: "c", delay: 4, opacity: 0.35 },
  ],
};

export function BlurOrbsField({ intensity = "section" }: { intensity?: Intensity }) {
  const orbs = PRESETS[intensity];
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {orbs.map((orb, i) => (
        <BlurOrb key={i} {...orb} />
      ))}
    </div>
  );
}
