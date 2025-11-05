import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { AnimatedProgress } from "../shared/AnimatedProgress";
import { skillsData } from "../../data/portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { SkillCategory } from "../../types";

const iconMap = {
  Code: "code",
  Database: "database",
  Globe: "globe",
  Smartphone: "mobile",
  Server: "server",
  Palette: "palette",
} as const;

const categoryColors = {
  "Frontend": "from-pink-400 to-rose-500",
  "Backend": "from-green-500 to-green-600",
  "Database": "from-pink-500 to-rose-600",
  "Cloud & DevOps": "from-orange-500 to-orange-600"
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 px-0 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300">Technologies and tools I work with</p>
        </motion.div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {skillsData.map((category: SkillCategory, categoryIndex: number) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow h-full">
                <motion.h3
                  className={`text-lg sm:text-xl font-bold mb-4 sm:mb-6 bg-linear-to-r ${categoryColors[category.category as keyof typeof categoryColors]} bg-clip-text text-transparent flex items-center`}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="mr-2 sm:mr-3"
                  >
                    {category.category === "Frontend" && <FontAwesomeIcon icon="code" className="w-5 h-5 sm:w-6 sm:h-6" />}
                    {category.category === "Backend" && <FontAwesomeIcon icon="server" className="w-5 h-5 sm:w-6 sm:h-6" />}
                    {category.category === "Database" && <FontAwesomeIcon icon="database" className="w-5 h-5 sm:w-6 sm:h-6" />}
                    {category.category === "Cloud & DevOps" && <FontAwesomeIcon icon="globe" className="w-5 h-5 sm:w-6 sm:h-6" />}
                  </motion.div>
                  {category.category}
                </motion.h3>

                <div className="space-y-2 sm:space-y-3">
                  {category.skills.map((skill, skillIndex) => {
                    const iconName = iconMap[skill.iconName as keyof typeof iconMap];

                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1
                        }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                        className="p-2 sm:p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg"
                      >
                        <motion.div
                          className="flex items-center mb-1 sm:mb-2"
                          whileHover={{ scale: 1.02 }}
                        >
                          <motion.div
                            className="mr-2 sm:mr-3"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <FontAwesomeIcon icon={iconName} className="w-3 h-3 sm:w-4 sm:h-4 text-slate-600 dark:text-slate-300" />
                          </motion.div>
                          <span className="font-medium flex-1 text-xs sm:text-sm">{skill.name}</span>
                          <motion.span
                            className="ml-auto text-slate-600 dark:text-slate-400 text-xs sm:text-sm"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 }}
                            viewport={{ once: true }}
                          >
                            {skill.level}%
                          </motion.span>
                        </motion.div>
                        <AnimatedProgress
                          value={skill.level}
                          delay={categoryIndex * 0.2 + skillIndex * 0.1 + 0.4}
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};