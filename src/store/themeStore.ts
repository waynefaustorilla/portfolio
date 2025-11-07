import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { IThemeState, IThemeActions } from '../interfaces/ITheme';
import type { ThemeColor, ThemeConfig } from '../types/theme';
import { ThemeConfigService } from '../services/ThemeConfigService';
import { ThemeCSSService } from '../services/ThemeCSSService';

/**
 * Theme store that follows SOLID principles
 * - SRP: Only handles state management
 * - OCP: Open for extension via services
 * - LSP: Implements interfaces correctly
 * - ISP: Uses specific interfaces
 * - DIP: Depends on abstractions (services)
 */

interface ThemeStore extends IThemeState, IThemeActions {
  getThemeClass: (property: string) => string;
}

const themeConfigService = ThemeConfigService.getInstance();
const themeCSSService = ThemeCSSService.getInstance();

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      currentTheme: 'shell-pink',
      config: themeConfigService.getConfig('shell-pink'),

      setTheme: (theme: ThemeColor) => {
        const config = themeConfigService.getConfig(theme);

        set({
          currentTheme: theme,
          config,
        });

        // Delegate CSS updates to dedicated service
        themeCSSService.updateThemeProperties(theme, config);
      },

      getThemeClass: (property: string) => {
        const { config } = get();

        // Map common properties to theme-specific classes
        const classMap: Record<string, string> = {
          // Backgrounds
          'bg-primary': `bg-[${config.primary[500]}]`,
          'bg-primary-light': `bg-[${config.primary[100]}]`,
          'bg-primary-dark': `bg-[${config.primary[700]}]`,

          // Text colors
          'text-primary': `text-[${config.primary[500]}]`,
          'text-primary-light': `text-[${config.primary[400]}]`,
          'text-primary-dark': `text-[${config.primary[700]}]`,

          // Gradients
          'gradient-primary': config.gradients.primary,
          'gradient-secondary': config.gradients.secondary,
          'gradient-subtle': config.gradients.subtle,
          'gradient-background': config.gradients.background,

          // Borders
          'border-primary': `border-[${config.primary[300]}]`,
          'border-primary-dark': `border-[${config.primary[600]}]`,
        };

        return classMap[property] || '';
      },
    }),
    {
      name: 'portfolio-theme',
      partialize: (state) => ({ currentTheme: state.currentTheme }),
    }
  )
);

// Initialize theme on app start
export const initializeTheme = () => {
  const { currentTheme, setTheme } = useThemeStore.getState();
  setTheme(currentTheme);
};

// Export types for external use
export type { ThemeColor, ThemeConfig } from '../types/theme';