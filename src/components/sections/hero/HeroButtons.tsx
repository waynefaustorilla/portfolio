import { motion } from "framer-motion";
import { Button } from "../../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { scrollToSection } from "../../../utils";
import { useTheme } from "../../../hooks/useTheme";

export const HeroButtons = () => {
  const { getGradient } = useTheme();

  const buttonsVariants = {
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

  return (
    <motion.div
      variants={buttonsVariants}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Button
          onClick={() => scrollToSection('projects')}
          size="lg"
          className={`text-base sm:text-lg px-8 sm:px-10 w-full sm:w-auto bg-linear-to-r ${getGradient('primary')} text-white hover:shadow-2xl shadow-xl border-0 font-semibold transition-all duration-300`}
        >
          View My Work
        </Button>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Button
          variant="outline"
          size="lg"
          className="text-base sm:text-lg px-8 sm:px-10 w-full sm:w-auto bg-black/40 border-2 border-white/50 text-white hover:bg-black/60 hover:border-white shadow-xl backdrop-blur-sm font-semibold"
        >
          <FontAwesomeIcon icon="download" className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Download CV
        </Button>
      </motion.div>
    </motion.div>
  );
};