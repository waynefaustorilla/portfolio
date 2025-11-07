import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useThemeSwitcher } from "../../hooks/useTheme";
import type { ThemeColor } from "../../types/theme";
import { ThemeDefinitionService, type ThemeDefinition } from "../../services/ThemeDefinitionService";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

/**
 * Scalable dropdown theme switcher following SOLID principles
 * - SRP: Only responsible for theme switching UI
 * - ISP: Uses specific theme switching hook
 * - OCP: Open for extension by adding new themes to service
 */
export const ThemeSwitcher = () => {
  const { currentTheme, setTheme } = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const themeDefinitionService = ThemeDefinitionService.getInstance();
  const allThemes = themeDefinitionService.getAllThemes();
  const currentThemeData = themeDefinitionService.getTheme(currentTheme);

  const handleThemeChange = (themeId: ThemeColor) => {
    setTheme(themeId);
    setIsOpen(false);
  };

  const ThemePreviewDot = ({ theme }: { theme: ThemeDefinition }) => (
    <div
      className={`w-3 h-3 rounded-full bg-gradient-to-r ${theme.preview.gradientClasses} border border-white/20 shadow-sm`}
      title={theme.description}
    />
  );

  const ThemeMenuItem = ({ theme }: { theme: ThemeDefinition }) => {
    const isActive = currentTheme === theme.id;

    return (
      <DropdownMenuItem
        onClick={() => handleThemeChange(theme.id)}
        className={`
          flex items-center gap-3 px-3 py-2 cursor-pointer rounded-lg transition-all duration-200
          ${isActive
            ? 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100'
            : 'hover:bg-slate-50 dark:hover:bg-slate-800'
          }
        `}
      >
        <div className="flex items-center gap-2">
          <ThemePreviewDot theme={theme} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="font-medium text-sm">{theme.name}</div>
        </div>

        {isActive && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="ml-2"
          >
            <FontAwesomeIcon
              icon="check"
              className="w-3 h-3 text-theme-primary"
            />
          </motion.div>
        )}
      </DropdownMenuItem>
    );
  };

  return (
    <div className="relative">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant="outline"
              size="sm"
              className="relative gap-2 px-3 py-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200 shadow-sm"
            >
              {/* Current theme indicator */}
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon="palette"
                  className="w-3 h-3 text-slate-600 dark:text-slate-400"
                />
                {currentThemeData && (
                  <>
                    <ThemePreviewDot theme={currentThemeData} />
                    <span className="text-xs font-medium hidden sm:inline text-slate-700 dark:text-slate-300">
                      {currentThemeData.name}
                    </span>
                  </>
                )}
              </div>

              {/* Dropdown chevron */}
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <FontAwesomeIcon
                  icon="chevron-down"
                  className="w-3 h-3 text-slate-500 dark:text-slate-400"
                />
              </motion.div>
            </Button>
          </motion.div>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          className="w-64 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-lg rounded-lg"
          sideOffset={8}
        >
          <DropdownMenuLabel className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400">
            <FontAwesomeIcon icon="palette" className="w-4 h-4" />
            Choose Theme
          </DropdownMenuLabel>

          <DropdownMenuSeparator className="bg-slate-200 dark:bg-slate-700" />

          <div className="py-1">
            <AnimatePresence>
              {allThemes.map((theme, index) => (
                <motion.div
                  key={theme.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <ThemeMenuItem theme={theme} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <DropdownMenuSeparator className="bg-slate-200 dark:bg-slate-700" />

          <div className="px-3 py-2">
            <div className="text-xs text-slate-500 dark:text-slate-400 text-center">
              {allThemes.length} themes available
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};