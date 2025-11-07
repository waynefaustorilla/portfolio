import { useThemeStore } from '../store/themeStore';
import type { ThemeColor } from '../types/theme';

/**
 * Theme hook that follows ISP
 * Provides specific interfaces for different theme operations
 */
export const useTheme = () => {
  const { currentTheme, config, getThemeClass } = useThemeStore();

  return {
    theme: currentTheme,
    config,

    // Helper functions for common theme usage
    getGradient: (type: 'primary' | 'secondary' | 'subtle' | 'background') => {
      return config.gradients[type];
    },

    getGradientStyle: (type: 'primary' | 'secondary' | 'subtle' | 'background') => {
      return {
        backgroundImage: config.gradientStyles[type],
      };
    },

    getPrimaryColor: (shade: keyof typeof config.primary = 500) => {
      return config.primary[shade];
    },

    getSecondaryColor: (shade: keyof typeof config.secondary = 500) => {
      return config.secondary[shade];
    },

    getThemeClass,

    // Preset class combinations
    classes: {
      // Buttons
      primaryButton: `bg-gradient-to-r ${config.gradients.primary} text-white hover:opacity-90`,
      outlineButton: `border-2 border-theme-primary text-theme-primary hover:bg-theme-subtle`,

      // Text
      primaryText: `text-theme-primary`,
      secondaryText: `text-theme-secondary`,
      gradientText: `gradient-text-primary`,

      // Backgrounds
      subtleBackground: `theme-gradient-subtle`,
      cardBackground: `theme-gradient-background`,

      // Icons
      primaryIcon: `text-theme-primary`,
      secondaryIcon: `text-theme-secondary`,

      // Borders
      primaryBorder: `border-theme-primary`,
      secondaryBorder: `border-theme-primary`,
    },
  };
};

/**
 * Specialized hook for theme switching operations
 * Follows ISP: Specific interface for theme switching
 */
export const useThemeSwitcher = () => {
  const { currentTheme, setTheme } = useThemeStore();

  return {
    currentTheme,
    setTheme,
    isTheme: (theme: ThemeColor) => currentTheme === theme,
  };
};

/**
 * Specialized hook for theme configuration access
 * Follows ISP: Specific interface for configuration access
 */
export const useThemeConfig = () => {
  const { config } = useThemeStore();

  return {
    config,
    getPrimaryColor: (shade: keyof typeof config.primary = 500) => config.primary[shade],
    getSecondaryColor: (shade: keyof typeof config.secondary = 500) => config.secondary[shade],
    getGradient: (type: keyof typeof config.gradients) => config.gradients[type],
  };
};