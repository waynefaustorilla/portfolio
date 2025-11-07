import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useScrollAnimation, useStaggerAnimation } from "../../hooks/useScrollAnimation";
import { projects } from "../../data/portfolio";
import type { Project } from "../../types";

export const ProjectsSection = () => {
  const titleAnimation = useScrollAnimation({ threshold: 0.3 });
  const projectsAnimation = useStaggerAnimation({ threshold: 0.2, staggerDelay: 0.1 });

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleAnimation.ref}
          {...titleAnimation.getAnimationProps('slideDown')}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300">
            Some of my recent work and achievements
          </p>
        </motion.div>

        <motion.div
          ref={projectsAnimation.ref}
          variants={projectsAnimation.containerVariants}
          initial="initial"
          animate="animate"
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {projects.map((project: Project, index: number) => (
            <motion.div key={project.title} variants={projectsAnimation.itemVariants} whileHover={{ y: -10 }} className="h-full">
              <Card className="p-3 sm:p-4 h-full flex flex-col hover:shadow-xl transition-all duration-300">
                <motion.div className="aspect-video theme-gradient-subtle rounded-lg mb-2 sm:mb-3 flex items-center justify-center overflow-hidden" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  {
                    project.image && !project.image.includes('/api/placeholder') ?
                      <motion.img src={project.image} alt={project.title} className="w-full h-full object-contain" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} whileHover={{ scale: 1.1 }} />
                      :
                      <motion.div className="text-3xl sm:text-4xl text-pink-500" animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>{project.icon || "💻"}</motion.div>
                  }
                </motion.div>

                <motion.h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2" whileHover={{ color: "#3b82f6" }}>{project.title}</motion.h3>

                <motion.p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-2 sm:mb-3 grow line-clamp-3" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 + index * 0.1 }}>{project.description}</motion.p>

                <motion.div className="flex flex-wrap gap-1 mb-3" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 + index * 0.1 }}>
                  {
                    project.tags.slice(0, 4).map((tech: string, techIndex: number) => (
                      <motion.div key={tech} initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.5 + index * 0.1 + techIndex * 0.05, type: "spring", stiffness: 200 }} whileHover={{ scale: 1.1 }}>
                        <Badge variant="secondary" className="text-xs px-2 py-0.5">{tech}</Badge>
                      </motion.div>
                    ))
                  }

                  {project.tags.length > 4 && <Badge variant="outline" className="text-xs px-2 py-0.5">+{project.tags.length - 4}</Badge>}
                </motion.div>

                <motion.div
                  className="flex gap-1.5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="sm" variant="outline" className="flex-1 text-xs px-2 py-1 h-7">
                      <FontAwesomeIcon icon={["fab", "github"]} className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="sm" className="flex-1 text-xs px-2 py-1 h-7">
                      <FontAwesomeIcon icon="external-link-alt" className="w-3 h-3 mr-1" />
                      Demo
                    </Button>
                  </motion.div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};