import { motion } from "framer-motion";
import { useTheme } from "../../../hooks/useTheme";
import { personalInfo } from "../../../data/portfolio";

export const HeroTitle = () => {
  const { getPrimaryColor, getSecondaryColor } = useTheme();

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  return <motion.h1 variants={titleVariants} transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }} className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 bg-linear-to-r from-white via-[${getPrimaryColor(100)}] to-[${getSecondaryColor(100)}] bg-clip-text text-transparent drop-shadow-lg`}>{personalInfo.name}</motion.h1>;
};