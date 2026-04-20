import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable scroll-reveal section. Wraps children with intersection-based animation.
 * Add variants or custom props for new animation types.
 */
const defaultVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const AnimatedSection = ({
  children,
  className = '',
  as: Component = motion.div,
  custom = 0,
  variants = defaultVariants,
  viewport = { once: true, amount: 0.15 },
  ...props
}) => {
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
      custom={custom}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

export default AnimatedSection;
