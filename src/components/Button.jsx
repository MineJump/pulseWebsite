import { forwardRef } from "react";
import { motion } from "framer-motion";
import { cardHover } from "../lib/motion.js";

const BASE_CLS =
  "relative inline-flex items-center justify-center px-6 py-3.5 text-sm uppercase tracking-[0.12em] focus-halo overflow-hidden select-none";

const VARIANT_CLS = {
  primary: "",
  secondary: "material-regular",
  ghost: "",
};

function variantStyle(variant) {
  if (variant === "primary") {
    return {
      backgroundColor: "var(--btn-primary-bg)",
      color: "var(--btn-primary-fg)",
      borderRadius: "999px",
    };
  }
  if (variant === "secondary") {
    return { color: "var(--ink)", borderRadius: "999px" };
  }
  return {
    color: "var(--ink)",
    background: "transparent",
    borderRadius: "999px",
  };
}

const BASE_STYLE = { fontFamily: "'IBM Plex Mono', monospace", fontWeight: 500 };

function PrimaryGloss() {
  return (
    <span
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
      style={{
        borderRadius: "inherit",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 60%)",
        opacity: 0.6,
      }}
    />
  );
}

function GhostHoverBg() {
  return (
    <motion.span
      aria-hidden="true"
      variants={{ rest: { opacity: 0, scale: 0.9 }, hover: { opacity: 1, scale: 1 } }}
      transition={{ duration: 0.2 }}
      className="absolute inset-0 pointer-events-none material-thin"
      style={{ borderRadius: "inherit" }}
    />
  );
}

const Button = forwardRef(function Button(props, ref) {
  const {
    variant = "primary",
    iconRight,
    className = "",
    children,
    href,
    ...rest
  } = props;

  const cls = `${BASE_CLS} ${VARIANT_CLS[variant]} ${className}`.trim();
  const style = { ...BASE_STYLE, ...variantStyle(variant) };

  const inner = (
    <>
      {variant === "primary" && <PrimaryGloss />}
      {variant === "ghost" && <GhostHoverBg />}
      <span className="relative z-[1] inline-flex items-center">
        {children}
        {iconRight && <span className="ml-2">{iconRight}</span>}
      </span>
    </>
  );

  if (href !== undefined) {
    return (
      <motion.a
        {...rest}
        ref={ref}
        href={href}
        className={cls}
        style={style}
        variants={cardHover}
        initial="rest"
        animate="rest"
        whileHover="hover"
        whileTap="press"
      >
        {inner}
      </motion.a>
    );
  }
  return (
    <motion.button
      {...rest}
      ref={ref}
      className={cls}
      style={style}
      variants={cardHover}
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileTap="press"
    >
      {inner}
    </motion.button>
  );
});

export default Button;
