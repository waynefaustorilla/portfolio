import type { ThemeColor, ThemeConfig } from '../types/theme';

/**
 * Service responsible for theme configuration
 * Follows SRP: Only handles theme configuration data
 */
export class ThemeConfigService {
  private static instance: ThemeConfigService;
  private readonly themeConfigs: Record<ThemeColor, ThemeConfig>;

  private constructor() {
    this.themeConfigs = {
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
        gradientStyles: {
          primary: 'linear-gradient(to right, #f472b6, #ec4899)',
          secondary: 'linear-gradient(to right, #ec4899, #db2777)',
          subtle: 'linear-gradient(to right, #fdf2f8, #fce7f3)',
          background: 'linear-gradient(to right, #fce7f3, #fdf2f8)',
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
        gradientStyles: {
          primary: 'linear-gradient(to right, #3b82f6, #14b8a6)',
          secondary: 'linear-gradient(to right, #2563eb, #0d9488)',
          subtle: 'linear-gradient(to right, #eff6ff, #f0fdfa)',
          background: 'linear-gradient(to right, #dbeafe, #ccfbf1)',
        },
      },
      'sunburst-red': {
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        secondary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        gradients: {
          primary: 'from-red-500 to-orange-500',
          secondary: 'from-red-600 to-orange-600',
          subtle: 'from-red-50 to-orange-50',
          background: 'from-red-100 to-orange-100',
        },
        gradientStyles: {
          primary: 'linear-gradient(to right, #ef4444, #f97316)',
          secondary: 'linear-gradient(to right, #dc2626, #ea580c)',
          subtle: 'linear-gradient(to right, #fef2f2, #fff7ed)',
          background: 'linear-gradient(to right, #fee2e2, #ffedd5)',
        },
      },
    };
  }

  public static getInstance(): ThemeConfigService {
    if (!ThemeConfigService.instance) {
      ThemeConfigService.instance = new ThemeConfigService();
    }
    return ThemeConfigService.instance;
  }

  public getConfig(theme: ThemeColor): ThemeConfig {
    return this.themeConfigs[theme];
  }

  public getAllConfigs(): Record<ThemeColor, ThemeConfig> {
    return { ...this.themeConfigs };
  }

  public getAvailableThemes(): ThemeColor[] {
    return Object.keys(this.themeConfigs) as ThemeColor[];
  }
}