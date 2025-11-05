import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { projects } from "../../data/portfolio";
import type { Project } from "../../types";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300">
            Some of my recent work and achievements
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project: Project, index: number) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="p-4 sm:p-6 h-full flex flex-col hover:shadow-xl transition-all duration-300">
                <motion.div
                  className="aspect-video bg-linear-to-br from-pink-100 to-rose-100 dark:from-pink-900/20 dark:to-rose-900/20 rounded-lg mb-3 sm:mb-4 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-4xl sm:text-6xl text-pink-500"
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {project.icon || "💻"}
                  </motion.div>
                </motion.div>

                <motion.h3
                  className="text-lg sm:text-xl font-bold mb-2"
                  whileHover={{ color: "#3b82f6" }}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-3 sm:mb-4 grow"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {project.description}
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-2 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {project.tags.map((tech: string, techIndex: number) => (
                    <motion.div
                      key={tech}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        delay: 0.5 + index * 0.1 + techIndex * 0.05,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ scale: 1.1 }}
                      viewport={{ once: true }}
                    >
                      <Badge variant="secondary">{tech}</Badge>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  className="flex gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="sm" variant="outline" className="flex-1">
                      <FontAwesomeIcon icon={["fab", "github"]} className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="sm" className="flex-1">
                      <FontAwesomeIcon icon="external-link-alt" className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </motion.div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};