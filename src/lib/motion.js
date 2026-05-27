export const dur = {
  instant: 0.12,
  fast: 0.2,
  base: 0.32,
  slow: 0.52,
  page: 0.64,
};

export const ease = {
  out: [0.22, 0.61, 0.36, 1],
  expo: [0.16, 1, 0.3, 1],
  inOut: [0.65, 0, 0.35, 1],
};

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: dur.slow, ease: ease.expo },
  },
};

export const fadeUpScale = {
  hidden: { opacity: 0, y: 12, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: dur.slow, ease: ease.expo },
  },
};

export const stagger = (staggerChildren = 0.07, delayChildren = 0.05) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

export const pageTransition = {
  initial: { opacity: 0, filter: "blur(8px)", y: 6 },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: dur.page, ease: ease.expo },
  },
  exit: {
    opacity: 0,
    filter: "blur(8px)",
    y: -4,
    transition: { duration: dur.base, ease: ease.out },
  },
};

export const cardHover = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: dur.fast, ease: ease.inOut } },
  press: { scale: 0.97, transition: { duration: dur.instant, ease: ease.inOut } },
};

export const iconLift = {
  rest: { y: 0 },
  hover: { y: -3, transition: { duration: dur.base, ease: ease.out } },
};

export const springPop = { type: "spring", stiffness: 380, damping: 32, mass: 0.9 };
