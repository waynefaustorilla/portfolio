import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { scrollToSection } from "../../utils";
import { navigationItems } from "../../data/portfolio";
import { ThemeSwitcher } from "../ui/ThemeSwitcher";
import { useTheme } from "../../hooks/useTheme";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside or on a link
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMenuOpen && !target?.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';

      return () => {
        document.removeEventListener('click', handleClickOutside);
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isMenuOpen]);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <motion.div
            className="shrink-0 text-lg sm:text-xl md:text-2xl font-bold bg-linear-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => handleNavClick('hero')}
          >
            Portfolio
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                onClick={() => handleNavClick(item.id)}
                className="text-sm lg:text-base text-slate-600 dark:text-slate-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors capitalize font-medium whitespace-nowrap px-2 py-1"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
            
            {/* Theme Switcher */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * navigationItems.length, duration: 0.5 }}
            >
              <ThemeSwitcher />
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden shrink-0 p-1.5 sm:p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative z-60"
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? (
              <FontAwesomeIcon icon="times" className="w-6 h-6 text-slate-600 dark:text-slate-300" />
            ) : (
              <FontAwesomeIcon icon="bars" className="w-6 h-6 text-slate-600 dark:text-slate-300" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation - Full width overlay */}
      <motion.div
        className="md:hidden absolute top-full left-0 right-0 bg-white/98 dark:bg-slate-900/98 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 shadow-lg"
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          y: isMenuOpen ? 0 : -10,
          display: isMenuOpen ? 'block' : 'none'
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{ display: isMenuOpen ? 'block' : 'none' }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="py-3 space-y-1">
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left py-3 px-4 text-base text-slate-600 dark:text-slate-300 hover:text-pink-500 dark:hover:text-pink-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-all capitalize font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMenuOpen ? 1 : 0,
                  x: isMenuOpen ? 0 : -20
                }}
                transition={{
                  duration: 0.2,
                  delay: isMenuOpen ? index * 0.05 : 0
                }}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};