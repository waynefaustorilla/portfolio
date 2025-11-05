import { motion } from "framer-motion";
import { personalInfo } from "../../../data/portfolio";

export const HeroDescription = () => {
  const descriptionVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      x: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.p
      variants={descriptionVariants}
      className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-8 sm:mb-10 drop-shadow-lg font-light leading-relaxed"
    >
      <span className="bg-linear-to-r from-pink-200 to-rose-200 bg-clip-text text-transparent font-medium">
        {personalInfo.title}
      </span>

      <br />

      <span className="text-white/90 text-base sm:text-lg md:text-xl">
        {personalInfo.description}
      </span>
    </motion.p>
  );
};