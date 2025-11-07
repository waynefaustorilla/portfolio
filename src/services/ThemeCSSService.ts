import type { ThemeColor, ThemeConfig } from '../types/theme';

/**
 * Service responsible for managing CSS custom properties
 * Follows SRP: Only handles CSS property updates
 */
export class ThemeCSSService {
  private static instance: ThemeCSSService;

  public static getInstance(): ThemeCSSService {
    if (!ThemeCSSService.instance) {
      ThemeCSSService.instance = new ThemeCSSService();
    }
    return ThemeCSSService.instance;
  }

  /**
   * Updates CSS custom properties for theme colors
   */
  public updateThemeProperties(theme: ThemeColor, config: ThemeConfig): void {
    const root = document.documentElement;

    // Set primary colors
    this.setColorProperties(root, 'primary', config.primary);

    // Set secondary colors
    this.setColorProperties(root, 'secondary', config.secondary);

    // Set gradient properties
    this.setGradientProperties(root, config);

    // Set theme-specific properties
    this.setThemeSpecificProperties(root, theme);
  }

  private setColorProperties(
    root: HTMLElement,
    type: 'primary' | 'secondary',
    colors: ThemeConfig['primary']
  ): void {
    Object.entries(colors).forEach(([shade, color]) => {
      root.style.setProperty(`--color-${type}-${shade}`, color);
    });
  }

  private setGradientProperties(root: HTMLElement, config: ThemeConfig): void {
    root.style.setProperty('--gradient-primary', config.gradientStyles.primary);
    root.style.setProperty('--gradient-secondary', config.gradientStyles.secondary);
    root.style.setProperty('--gradient-subtle', config.gradientStyles.subtle);
    root.style.setProperty('--gradient-background', config.gradientStyles.background);
  }

  private setThemeSpecificProperties(root: HTMLElement, theme: ThemeColor): void {
    const themeProperties = this.getThemeProperties(theme);

    Object.entries(themeProperties).forEach(([property, value]) => {
      root.style.setProperty(`--${property}`, value);
    });
  }

  private getThemeProperties(theme: ThemeColor): Record<string, string> {
    const properties = {
      'shell-pink': {
        'theme-primary-from': '#f472b6',
        'theme-primary-to': '#ec4899',
        'theme-secondary-from': '#ec4899',
        'theme-secondary-to': '#db2777',
        'theme-subtle-from': '#fdf2f8',
        'theme-subtle-to': '#fce7f3',
        'theme-primary-color': '#ec4899',
        'theme-secondary-color': '#db2777',
      },
      'chameleon-blue': {
        'theme-primary-from': '#3b82f6',
        'theme-primary-to': '#14b8a6',
        'theme-secondary-from': '#2563eb',
        'theme-secondary-to': '#0d9488',
        'theme-subtle-from': '#eff6ff',
        'theme-subtle-to': '#f0fdfa',
        'theme-primary-color': '#3b82f6',
        'theme-secondary-color': '#14b8a6',
      },
      'sunburst-red': {
        'theme-primary-from': '#ef4444',
        'theme-primary-to': '#f97316',
        'theme-secondary-from': '#dc2626',
        'theme-secondary-to': '#ea580c',
        'theme-subtle-from': '#fef2f2',
        'theme-subtle-to': '#fff7ed',
        'theme-primary-color': '#ef4444',
        'theme-secondary-color': '#f97316',
      }
    };

    return properties[theme];
  }
}