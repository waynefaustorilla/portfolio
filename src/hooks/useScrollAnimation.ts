import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Custom hook for scroll-based animations that handles both enter and exit states
 * Components animate in when entering viewport and animate out when leaving
 */
export const useScrollAnimation = (options?: {
  threshold?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: options?.threshold || 0.1,
  });

  // Animation variants for different directions and effects
  const variants = {
    // Fade animations
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: isInView ? 1 : 0 },
      transition: { duration: 0.6 }
    },

    // Slide animations
    slideUp: {
      initial: { opacity: 0, y: 50 },
      animate: {
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 50
      },
      transition: { duration: 0.6 }
    },

    slideDown: {
      initial: { opacity: 0, y: -50 },
      animate: {
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : -50
      },
      transition: { duration: 0.6 }
    },

    slideLeft: {
      initial: { opacity: 0, x: 50 },
      animate: {
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : 50
      },
      transition: { duration: 0.6 }
    },

    slideRight: {
      initial: { opacity: 0, x: -50 },
      animate: {
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : -50
      },
      transition: { duration: 0.6 }
    },

    // Scale animations
    scaleIn: {
      initial: { opacity: 0, scale: 0.8 },
      animate: {
        opacity: isInView ? 1 : 0,
        scale: isInView ? 1 : 0.8
      },
      transition: { duration: 0.6 }
    }
  };

  return {
    ref,
    isInView,
    variants,
    // Helper function to get animation props
    getAnimationProps: (variant: keyof typeof variants) => {
      return variants[variant];
    }
  };
};

/**
 * Hook for creating staggered animations for lists/grids
 */
export const useStaggerAnimation = (options?: {
  threshold?: number;
  staggerDelay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: options?.threshold || 0.1,
  });

  const staggerDelay = options?.staggerDelay || 0.1;

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: isInView ? staggerDelay : 0,
        delayChildren: isInView ? 0.1 : 0,
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: isInView ? 1 : 0,
      y: isInView ? 0 : 30,
      transition: { duration: 0.5 }
    }
  };

  return {
    ref,
    isInView,
    containerVariants,
    itemVariants
  };
};