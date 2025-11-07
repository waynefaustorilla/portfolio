import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeSwitcher } from "../features/ThemeSwitcher";
import { useMobileMenu } from "../../hooks/useMobileMenu";
import { NavigationService } from "../../services/NavigationService";
import { NavigationComponentFactory } from "../factories/NavigationComponentFactory";
import { PortfolioDAO } from "../../services/PortfolioDAO";

/**
 * Refactored Navigation component following SOLID principles
 * - SRP: Only responsible for navigation UI
 * - OCP: Uses factory for component creation
 * - LSP: Correctly implements navigation interface
 * - ISP: Uses specific hooks and services
 * - DIP: Depends on abstractions (services, DAOs)
 */
export const NavigationRefactored = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useMobileMenu();
  const [navigationItems, setNavigationItems] = useState<any[]>([]);

  const navigationService = NavigationService.getInstance();
  const portfolioDAO = PortfolioDAO.getInstance();

  // Load navigation items
  useEffect(() => {
    const loadNavigationItems = async () => {
      try {
        const items = await portfolioDAO.getNavigationItems();
        setNavigationItems(items);
      } catch (error) {
        console.error('Failed to load navigation items:', error);
        setNavigationItems([]);
      }
    };

    loadNavigationItems();
  }, [portfolioDAO]);

  const handleNavClick = (sectionId: string) => {
    navigationService.navigateToSection(sectionId, closeMenu);
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
          {NavigationComponentFactory.createLogo(
            () => handleNavClick('hero'),
            'Portfolio'
          )}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            {navigationItems.map((item, index) =>
              NavigationComponentFactory.createDesktopNavItem({
                item,
                index,
                onClick: handleNavClick,
              })
            )}

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
          {NavigationComponentFactory.createMobileMenuButton(isMenuOpen, toggleMenu)}
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700"
            >
              <div className="py-2">
                {navigationItems.map((item, index) =>
                  NavigationComponentFactory.createMobileNavItem({
                    item,
                    index,
                    onClick: handleNavClick,
                  })
                )}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: 0.1 * navigationItems.length }}
                  className="px-4 py-3 border-t border-slate-200 dark:border-slate-700"
                >
                  <ThemeSwitcher />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};