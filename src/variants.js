export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 42 : direction === 'down' ? -42 : 0,
      opacity: 0,
      x: direction === 'left' ? 42 : direction === 'right' ? -42 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.5,
        delay: delay,
        ease: [0.22, 0.68, 0, 1],
      },
    },
  };
};
