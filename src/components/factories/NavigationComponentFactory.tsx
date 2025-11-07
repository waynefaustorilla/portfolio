import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Props for navigation items
 */
interface NavigationItemProps {
  item: {
    id: string;
    label: string;
  };
  index: number;
  onClick: (id: string) => void;
  className?: string;
}

/**
 * Factory for creating navigation components
 * Follows OCP: Open for extension, closed for modification
 */
export class NavigationComponentFactory {
  /**
   * Creates a desktop navigation item
   */
  public static createDesktopNavItem({
    item,
    index,
    onClick,
    className = ""
  }: NavigationItemProps) {
    return (
      <motion.button
        key={item.id}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 * index, duration: 0.5 }}
        onClick={() => onClick(item.id)}
        className={`text-sm lg:text-base text-slate-600 dark:text-slate-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors capitalize font-medium whitespace-nowrap px-2 py-1 ${className}`}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        {item.label}
      </motion.button>
    );
  }

  /**
   * Creates a mobile navigation item
   */
  public static createMobileNavItem({
    item,
    index,
    onClick,
    className = ""
  }: NavigationItemProps) {
    return (
      <motion.button
        key={item.id}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ delay: 0.1 * index }}
        onClick={() => onClick(item.id)}
        className={`block w-full text-left px-4 py-3 text-lg font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors capitalize ${className}`}
        whileHover={{ x: 10 }}
        whileTap={{ scale: 0.98 }}
      >
        {item.label}
      </motion.button>
    );
  }

  /**
   * Creates a logo component
   */
  public static createLogo(onClick: () => void, children: ReactNode) {
    return (
      <motion.div
        className="shrink-0 text-lg sm:text-xl md:text-2xl font-bold gradient-text-primary cursor-pointer"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        onClick={onClick}
      >
        {children}
      </motion.div>
    );
  }

  /**
   * Creates a mobile menu button
   */
  public static createMobileMenuButton(
    isOpen: boolean,
    onToggle: () => void
  ) {
    return (
      <motion.button
        className="md:hidden shrink-0 p-1.5 sm:p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative z-60"
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="w-5 h-5 flex flex-col justify-center space-y-1">
          <motion.span
            className={`bg-slate-600 dark:bg-slate-300 h-0.5 w-full origin-center transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-1' : ''
            }`}
            animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className="bg-slate-600 dark:bg-slate-300 h-0.5 w-full transition-all duration-300"
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className={`bg-slate-600 dark:bg-slate-300 h-0.5 w-full origin-center transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-1' : ''
            }`}
            animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
          />
        </div>
      </motion.button>
    );
  }
}