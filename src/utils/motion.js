const transition = {
  type: "tween",
  ease: [0.22, 1, 0.36, 1],
  duration: 0.55,
};

export const textVariant = (delay = 0) => ({
  hidden: { y: 12, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { ...transition, delay },
  },
});

export const fadeIn = (direction = "", _type, delay = 0, duration = 0.55) => ({
  hidden: {
    x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
    y: direction === "up" ? 16 : direction === "down" ? -16 : 12,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { ...transition, delay, duration },
  },
});

export const slideIn = (direction = "up", _type, delay = 0, duration = 0.55) => ({
  hidden: {
    x: direction === "left" ? -24 : direction === "right" ? 24 : 0,
    y: direction === "up" ? 24 : direction === "down" ? -24 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { ...transition, delay, duration },
  },
});

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});
