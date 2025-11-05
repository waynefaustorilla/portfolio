import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import { scrollToSection } from "../../utils";
import { personalInfo } from "../../data/portfolio";

export const HeroSection = () => {
  const socialIcons = [Github, Linkedin, Mail];

  return (
    <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center min-h-[50vh] sm:min-h-[60vh]">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <motion.h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-linear-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>{personalInfo.name}</motion.h1>
            <motion.p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 max-w-2xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>{personalInfo.title} {personalInfo.description}</motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button onClick={() => scrollToSection('projects')} size="lg" className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto">View My Work</Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto">
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Download CV
                </Button>
              </motion.div>
            </motion.div>
            <motion.div className="flex justify-center sm:justify-start space-x-4 sm:space-x-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}>
              {
                socialIcons.map((Icon, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <Button variant="ghost" size="icon" className="w-12 h-12">
                      <Icon className="w-6 h-6" />
                    </Button>
                  </motion.div>
                ))
              }
            </motion.div>
          </motion.div>

          <motion.div className="flex justify-center lg:justify-end order-1 lg:order-2" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}>
            <div className="relative">
              <motion.div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden shadow-2xl" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <Avatar className="w-full h-full">
                  <AvatarImage src="/api/placeholder/400/400" alt={personalInfo.name} className="object-cover" />
                  <AvatarFallback className="text-4xl sm:text-6xl lg:text-8xl text-white">OF</AvatarFallback>
                </Avatar>
              </motion.div>

              <motion.div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-blue-500/20 rounded-full blur-xl" animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
              <motion.div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-32 sm:h-32 bg-purple-500/20 rounded-full blur-xl" animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
            </div>
          </motion.div>
        </div>

        <motion.div className="text-center mt-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}>
          <motion.div className="animate-bounce" whileHover={{ scale: 1.2 }}>
            <ChevronDown className="w-8 h-8 mx-auto text-slate-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};