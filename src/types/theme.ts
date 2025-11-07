export type ThemeColor = 'shell-pink' | 'chameleon-blue' | 'sunburst-red';

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
  // Gradient styles for inline use
  gradientStyles: {
    primary: string;
    secondary: string;
    subtle: string;
    background: string;
  };
}