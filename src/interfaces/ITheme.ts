import type { ThemeColor, ThemeConfig } from '../types/theme';

/**
 * Interface for theme state management
 * Follows ISP: Specific interface for theme state operations
 */
export interface IThemeState {
  currentTheme: ThemeColor;
  config: ThemeConfig;
}

/**
 * Interface for theme operations
 * Follows ISP: Specific interface for theme actions
 */
export interface IThemeActions {
  setTheme(theme: ThemeColor): void;
  getThemeClass(property: string): string;
}

/**
 * Interface for theme configuration access
 * Follows ISP: Specific interface for configuration access
 */
export interface IThemeConfig {
  getConfig(theme: ThemeColor): ThemeConfig;
  getAllConfigs(): Record<ThemeColor, ThemeConfig>;
  getAvailableThemes(): ThemeColor[];
}

/**
 * Interface for CSS property management
 * Follows ISP: Specific interface for CSS operations
 */
export interface IThemeCSS {
  updateThemeProperties(theme: ThemeColor, config: ThemeConfig): void;
}