import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import {
  Trophy,
  Coffee,
  Code,
  Lightbulb,
  Target,
  Heart,
  ArrowRight
} from "lucide-react";
import {
  coreValues,
  statistics,
  quickFacts,
  statusIndicators
} from "../../data/portfolio";
import type { CoreValue, Statistic, QuickFact, StatusIndicator } from "../../types";

export const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300">
            Get to know me better
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column - Journey & Core Values */}
          <div className="lg:col-span-2 space-y-8">
            {/* Journey Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 hover:shadow-lg transition-shadow">
                <motion.h3
                  className="text-2xl font-bold mb-6 flex items-center"
                  whileHover={{ color: "#3b82f6" }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="mr-3"
                  >
                    <Code className="w-6 h-6" />
                  </motion.div>
                  My Journey
                </motion.h3>
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    I'm a passionate full-stack developer with over 5 years of experience
                    creating digital solutions that make a difference. My journey started
                    with frontend development using React and Vue.js, then expanded into
                    backend systems with Node.js, PHP, and Python, eventually mastering
                    cloud infrastructure and DevOps practices.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Today, I architect end-to-end solutions spanning modern web frameworks,
                    microservices architectures, database optimization, and cloud deployment
                    on Azure and AWS. My expertise bridges the gap between elegant user
                    interfaces and robust, scalable backend systems that power them.
                  </p>
                </motion.div>
              </Card>
            </motion.div>

            {/* Core Values */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 hover:shadow-lg transition-shadow">
                <motion.h3
                  className="text-2xl font-bold mb-6 flex items-center"
                  whileHover={{ color: "#3b82f6" }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="mr-3"
                  >
                    <Heart className="w-6 h-6" />
                  </motion.div>
                  Core Values
                </motion.h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {coreValues.map((value: CoreValue, index: number) => (
                    <motion.div
                      key={value.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg"
                    >
                      <motion.div
                        className="flex items-center mb-3"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="mr-3 text-xl"
                        >
                          {value.icon}
                        </motion.div>
                        <h4 className="font-semibold">{value.name}</h4>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* What I Do Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 hover:shadow-lg transition-shadow">
                <motion.h3
                  className="text-2xl font-bold mb-6 flex items-center"
                  whileHover={{ color: "#3b82f6" }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="mr-3"
                  >
                    <Lightbulb className="w-6 h-6" />
                  </motion.div>
                  What I Do
                </motion.h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800"
                  >
                    <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">
                      Frontend Development
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      Creating responsive, interactive user interfaces with React,
                      TypeScript, and modern CSS frameworks.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800"
                  >
                    <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">
                      Backend Development
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      Building scalable APIs and server-side applications with
                      Node.js, Express, and various databases.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800"
                  >
                    <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-300">
                      UI/UX Design
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      Designing intuitive user experiences with a focus on
                      accessibility and usability.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800"
                  >
                    <h4 className="font-semibold mb-2 text-orange-700 dark:text-orange-300">
                      DevOps & Deployment
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      Setting up CI/CD pipelines and deploying applications
                      to cloud platforms.
                    </p>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Right Column - Statistics & Quick Facts */}
          <div className="space-y-8">
            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <motion.h3
                  className="text-xl font-bold mb-6 flex items-center"
                  whileHover={{ color: "#3b82f6" }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="mr-3"
                  >
                    <Trophy className="w-5 h-5" />
                  </motion.div>
                  By the Numbers
                </motion.h3>
                <div className="space-y-4">
                  {statistics.map((stat: Statistic, index: number) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, x: 10 }}
                      className="flex items-center p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="mr-3"
                      >
                        <Trophy className="w-4 h-4 text-blue-500" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="font-bold text-lg">{stat.value}</div>
                        <div className="text-sm text-slate-600 dark:text-slate-300">
                          {stat.label}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Quick Facts */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <motion.h3
                  className="text-xl font-bold mb-6 flex items-center"
                  whileHover={{ color: "#3b82f6" }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="mr-3"
                  >
                    <Coffee className="w-5 h-5" />
                  </motion.div>
                  Quick Facts
                </motion.h3>
                <div className="space-y-3">
                  {quickFacts.map((fact: QuickFact, index: number) => (
                    <motion.div
                      key={fact.text}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                      className="flex justify-between items-center p-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded"
                    >
                      <span className="text-slate-600 dark:text-slate-300 text-sm flex items-center">
                        <span className="mr-2">{fact.emoji}</span>
                        {fact.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Status Indicators */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <motion.h3
                  className="text-xl font-bold mb-6 flex items-center"
                  whileHover={{ color: "#3b82f6" }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="mr-3"
                  >
                    <Target className="w-5 h-5" />
                  </motion.div>
                  Current Status
                </motion.h3>
                <div className="space-y-3">
                  {statusIndicators.map((indicator: StatusIndicator, index: number) => (
                    <motion.div
                      key={indicator.text}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 0.5 + index * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg"
                    >
                      <span className="text-sm font-medium">{indicator.text}</span>
                      <motion.div
                        className={`w-3 h-3 rounded-full ${
                          indicator.color === 'green'
                            ? 'bg-green-500'
                            : indicator.color === 'blue'
                            ? 'bg-blue-500'
                            : indicator.color === 'purple'
                            ? 'bg-purple-500'
                            : 'bg-gray-500'
                        }`}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [1, 0.7, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="p-8 bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-none">
            <motion.h3
              className="text-2xl font-bold mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Let's Work Together
            </motion.h3>
            <motion.p
              className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              I'm always excited to take on new challenges and collaborate on
              innovative projects. Let's create something amazing together!
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <motion.div
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  Get In Touch
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.div>
              </Button>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};