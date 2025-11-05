import { useThemeStore } from '../store/themeStore';

export const useTheme = () => {
  const { currentTheme, config, getThemeClass } = useThemeStore();
  
  return {
    theme: currentTheme,
    config,
    
    // Helper functions for common theme usage
    getGradient: (type: 'primary' | 'secondary' | 'subtle' | 'background') => {
      return config.gradients[type];
    },
    
    getPrimaryColor: (shade: keyof typeof config.primary = '500') => {
      return config.primary[shade];
    },
    
    getSecondaryColor: (shade: keyof typeof config.secondary = '500') => {
      return config.secondary[shade];
    },
    
    getThemeClass,
    
    // Preset class combinations
    classes: {
      // Buttons
      primaryButton: `bg-linear-to-r ${config.gradients.primary} text-white hover:from-[${config.primary[500]}] hover:to-[${config.secondary[600]}]`,
      outlineButton: `border-2 border-[${config.primary[400]}] text-[${config.primary[600]}] hover:bg-[${config.primary[50]}]`,
      
      // Text
      primaryText: `text-[${config.primary[600]}]`,
      secondaryText: `text-[${config.secondary[600]}]`,
      lightText: `text-[${config.primary[400]}]`,
      gradientText: `bg-linear-to-r ${config.gradients.primary} bg-clip-text text-transparent`,
      
      // Backgrounds
      subtleBackground: `bg-linear-to-r ${config.gradients.subtle}`,
      cardBackground: `bg-linear-to-r ${config.gradients.background}`,
      
      // Icons
      primaryIcon: `text-[${config.primary[500]}]`,
      secondaryIcon: `text-[${config.secondary[500]}]`,
      
      // Borders
      primaryBorder: `border-[${config.primary[300]}]`,
      secondaryBorder: `border-[${config.secondary[300]}]`,
    },
  };
};