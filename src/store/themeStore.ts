import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ThemeColor = 'shell-pink' | 'chameleon-blue';

export interface ThemeConfig {
  // Primary colors
  primary: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  // Secondary colors (complement)
  secondary: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  // Gradient classes
  gradients: {
    primary: string;
    secondary: string;
    subtle: string;
    background: string;
  };
}

export const themeConfigs: Record<ThemeColor, ThemeConfig> = {
  'shell-pink': {
    primary: {
      50: '#fdf2f8',
      100: '#fce7f3',
      200: '#fbcfe8',
      300: '#f9a8d4',
      400: '#f472b6',
      500: '#ec4899',
      600: '#db2777',
      700: '#be185d',
      800: '#9d174d',
      900: '#831843',
    },
    secondary: {
      50: '#fef7ed',
      100: '#fedcc7',
      200: '#feb882',
      300: '#fd9339',
      400: '#fb7185',
      500: '#f97316',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
    },
    gradients: {
      primary: 'from-pink-400 to-rose-500',
      secondary: 'from-pink-500 to-rose-600',
      subtle: 'from-pink-50 to-rose-50',
      background: 'from-pink-100 to-rose-100',
    },
  },
  'chameleon-blue': {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    secondary: {
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#2dd4bf',
      500: '#14b8a6',
      600: '#0d9488',
      700: '#0f766e',
      800: '#115e59',
      900: '#134e4a',
    },
    gradients: {
      primary: 'from-blue-500 to-cyan-500',
      secondary: 'from-blue-600 to-cyan-600',
      subtle: 'from-blue-50 to-cyan-50',
      background: 'from-blue-100 to-cyan-100',
    },
  },
};

interface ThemeStore {
  currentTheme: ThemeColor;
  config: ThemeConfig;
  setTheme: (theme: ThemeColor) => void;
  getThemeClass: (property: string) => string;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      currentTheme: 'shell-pink',
      config: themeConfigs['shell-pink'],

      setTheme: (theme: ThemeColor) => {
        set({
          currentTheme: theme,
          config: themeConfigs[theme],
        });

        // Update CSS custom properties for dynamic theming
        const root = document.documentElement;
        const config = themeConfigs[theme];

        // Set primary colors
        Object.entries(config.primary).forEach(([shade, color]) => {
          root.style.setProperty(`--color-primary-${shade}`, color);
        });

        // Set secondary colors
        Object.entries(config.secondary).forEach(([shade, color]) => {
          root.style.setProperty(`--color-secondary-${shade}`, color);
        });
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