import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { useScrollAnimation, useStaggerAnimation } from "../../hooks/useScrollAnimation";
import { hobbies } from "../../data/portfolio";

export const HobbiesSection = () => {
  const titleAnimation = useScrollAnimation({ threshold: 0.3 });
  const hobbiesAnimation = useStaggerAnimation({ threshold: 0.2, staggerDelay: 0.1 });

  return (
    <section id="hobbies" className="py-12 sm:py-16 lg:py-20 px-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleAnimation.ref}
          {...titleAnimation.getAnimationProps('slideDown')}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Beyond Code</h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300">
            What drives me outside of development
          </p>
        </motion.div>

        <motion.div
          ref={hobbiesAnimation.ref}
          variants={hobbiesAnimation.containerVariants}
          initial="initial"
          animate="animate"
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.name}
              variants={hobbiesAnimation.itemVariants}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="p-4 sm:p-6 h-full flex flex-col text-center hover:shadow-xl transition-all duration-300">
                <motion.div
                  className="mb-4 sm:mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-linear-to-br ${hobby.color} flex items-center justify-center text-2xl sm:text-3xl shadow-lg`}>
                    {hobby.icon}
                  </div>
                </motion.div>

                <motion.h3
                  className="text-lg sm:text-xl font-bold mb-3 sm:mb-4"
                  whileHover={{ color: "#3b82f6" }}
                >
                  {hobby.name}
                </motion.h3>

                <motion.p
                  className="text-sm sm:text-base text-slate-600 dark:text-slate-300 flex-grow"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {hobby.description}
                </motion.p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional decorative element */}
        <motion.div
          className="flex justify-center mt-8 sm:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="w-24 h-1 theme-gradient-primary rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};