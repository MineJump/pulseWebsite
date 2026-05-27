import { useState } from "react";
import { motion } from "framer-motion";
import { iconLift } from "../lib/motion.js";

const VARIANT_CLS = {
  material: "material-regular",
  flat: "",
  elevated: "surface-elev-2",
};

function variantStyle(variant) {
  if (variant === "elevated") {
    return { background: "var(--bg)", borderRadius: "20px" };
  }
  if (variant === "flat") {
    return { borderRadius: "16px" };
  }
  return { borderRadius: "20px" };
}

export default function Card({
  variant = "material",
  interactive = false,
  className = "",
  backdrop,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const cls = ["relative", VARIANT_CLS[variant], hover ? "is-hover" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <motion.div
      {...rest}
      onMouseEnter={(e) => {
        setHover(true);
        rest.onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        setHover(false);
        rest.onMouseLeave?.(e);
      }}
      className={cls}
      style={{ ...variantStyle(variant), ...style }}
      variants={interactive ? iconLift : undefined}
      initial={interactive ? "rest" : undefined}
      animate={interactive ? (hover ? "hover" : "rest") : undefined}
    >
      {backdrop}
      {interactive && variant === "material" && (
        <span className="card-sheen" aria-hidden="true" />
      )}
      <div className="relative z-[1] h-full flex flex-col">{children}</div>
    </motion.div>
  );
}
