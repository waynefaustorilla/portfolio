import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { personalInfo } from "../../data/portfolio";

export const ContactSection = () => {
  const titleAnimation = useScrollAnimation({ threshold: 0.3 });
  const contactInfoAnimation = useScrollAnimation({ threshold: 0.2 });
  const contactFormAnimation = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-0 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleAnimation.ref}
          {...titleAnimation.getAnimationProps('slideDown')}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300">
            Let's discuss your next project or collaboration
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            ref={contactInfoAnimation.ref}
            {...contactInfoAnimation.getAnimationProps('slideRight')}
            className="space-y-8"
          >
            <div>
              <motion.h3
                className="text-2xl font-bold mb-6"
                whileHover={{ color: "#3b82f6" }}
              >
                Let's Connect
              </motion.h3>
              <motion.p
                className="text-slate-600 dark:text-slate-300 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}

              >
                I'm always interested in hearing about new projects and opportunities.
                Whether you're a company looking to hire, or just want to say hello,
                I'd love to hear from you.
              </motion.p>
            </div>

            <div className="space-y-6">
              <motion.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}

                whileHover={{ x: 10, transition: { duration: 0.3 } }}
              >
                <motion.div
                  className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg"
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <FontAwesomeIcon icon="envelope" className="w-6 h-6 text-pink-500" />
                </motion.div>
                <div>
                  <p className="font-semibold text-left">Email</p>
                  <p className="text-slate-600 dark:text-slate-300">{personalInfo.email}</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}

                whileHover={{ x: 10, transition: { duration: 0.3 } }}
              >
                <motion.div
                  className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg"
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <FontAwesomeIcon icon="phone" className="w-6 h-6 text-green-600" />
                </motion.div>
                <div>
                  <p className="font-semibold text-left">Phone</p>
                  <p className="text-slate-600 dark:text-slate-300">{personalInfo.phone}</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}

                whileHover={{ x: 10, transition: { duration: 0.3 } }}
              >
                <motion.div
                  className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg"
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <FontAwesomeIcon icon="map-pin" className="w-6 h-6 text-rose-500" />
                </motion.div>
                <div>
                  <p className="font-semibold text-left">Location</p>
                  <p className="text-slate-600 dark:text-slate-300">{personalInfo.location}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            ref={contactFormAnimation.ref}
            {...contactFormAnimation.getAnimationProps('slideLeft')}
          >
            <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
              <motion.form
                className="space-y-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}

              >
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}

                  >
                    <Input
                      placeholder="First Name"
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}

                  >
                    <Input
                      placeholder="Last Name"
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}

                >
                  <Input
                    type="email"
                    placeholder="Email"
                    className="transition-all duration-300 focus:scale-105"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}

                >
                  <Input
                    placeholder="Subject"
                    className="transition-all duration-300 focus:scale-105"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}

                >
                  <Textarea
                    placeholder="Your message..."
                    rows={6}
                    className="transition-all duration-300 focus:scale-105"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}

                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      type="submit"
                      className="w-full group"
                      size="lg"
                    >
                      <motion.div
                        className="flex items-center justify-center"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        Send Message
                        <FontAwesomeIcon icon="paper-plane" className="w-4 h-4 ml-2 group-hover:rotate-45 transition-transform duration-300" />
                      </motion.div>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};