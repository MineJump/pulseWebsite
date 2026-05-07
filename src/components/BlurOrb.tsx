type Color = "blue" | "orange";
type AnimVariant = "a" | "b" | "c";

export type OrbSpec = {
  color: Color;
  size: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  variant: AnimVariant;
  delay?: number;
  opacity?: number;
};

export function BlurOrb({
  color,
  size,
  top,
  left,
  right,
  bottom,
  variant,
  delay = 0,
  opacity,
}: OrbSpec) {
  return (
    <span
      aria-hidden="true"
      className={`blur-orb blur-orb-${color} orb-anim-${variant}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top,
        left,
        right,
        bottom,
        animationDelay: `${delay}s`,
        opacity,
      }}
    />
  );
}
