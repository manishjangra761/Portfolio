export const fadeIn = (direction, delay) => {
  return {
    hidden: {
<<<<<<< HEAD
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
=======
      y: direction === 'up' ? 42 : direction === 'down' ? -42 : 0,
      opacity: 0,
      x: direction === 'left' ? 42 : direction === 'right' ? -42 : 0,
>>>>>>> master
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
<<<<<<< HEAD
        type: 'between',
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
=======
        type: 'tween',
        duration: 0.5,
        delay: delay,
        ease: [0.22, 0.68, 0, 1],
>>>>>>> master
      },
    },
  };
};
