import { motion } from "framer-motion";
import { Button } from "../../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export const HeroSocialIcons = () => {
  const socialLinks = [
    {
      icon: ["fab", "github"],
      href: "https://github.com/waynefaustorilla",
      label: "GitHub",
      ariaLabel: "Visit Wayne's GitHub profile"
    },
    {
      icon: ["fab", "linkedin"],
      href: "https://www.linkedin.com/in/orliewaynefaustorilla/",
      label: "LinkedIn",
      ariaLabel: "Visit Wayne's LinkedIn profile"
    },
    {
      icon: "camera",
      href: "https://www.pexels.com/@wayne23/",
      label: "Pexels",
      ariaLabel: "Visit Wayne's Pexels photography portfolio"
    },
    {
      icon: ["fab", "google"],
      href: "mailto:orliewayne.faustorilla@gmail.com",
      label: "Gmail",
      ariaLabel: "Send an email to Wayne's Gmail"
    },
    {
      icon: ["fab", "microsoft"],
      href: "mailto:orliewayne.faustorilla@outlook.ph",
      label: "Outlook",
      ariaLabel: "Send an email to Wayne's Outlook"
    }
  ];

  const socialVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  return (
    <motion.div
      variants={socialVariants}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex space-x-6 sm:space-x-8"
    >
      {socialLinks.map((social, index) => (
        <motion.div
          key={social.label}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.1 * index,
            type: "spring",
            stiffness: 400,
            damping: 10
          }}
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="w-14 h-14 text-white hover:bg-white/20 hover:text-white shadow-lg backdrop-blur-sm"
            asChild
          >
            <a
              href={social.href}
              target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
              rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              aria-label={social.ariaLabel}
            >
              <FontAwesomeIcon icon={social.icon} className="w-7 h-7" />
            </a>
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
};