import { motion } from "framer-motion";
import { HeroTitle } from "./HeroTitle";
import { HeroDescription } from "./HeroDescription";
import { HeroButtons } from "./HeroButtons";
import { HeroSocialIcons } from "./HeroSocialIcons";

export const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.2,
        delayChildren: 0.1
      }}
      className="max-w-2xl"
    >
      {/* Glass Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.3
        }}
        className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl"
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
      >
        <motion.div
          className="text-left space-y-6 sm:space-y-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.4
              }
            }
          }}
        >
          <HeroTitle />
          <HeroDescription />
          <HeroButtons />
          <HeroSocialIcons />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};