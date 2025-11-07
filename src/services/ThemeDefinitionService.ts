import type { ThemeColor } from '../types/theme';

/**
 * Theme definition interface for UI display
 */
export interface ThemeDefinition {
  id: ThemeColor;
  name: string;
  description: string;
  icon: string;
  preview: {
    primary: string;
    secondary: string;
    gradientClasses: string;
  };
  category: 'warm' | 'cool' | 'neutral';
}

/**
 * Service for managing theme definitions and metadata
 * Follows SRP: Only handles theme UI definitions
 */
export class ThemeDefinitionService {
  private static instance: ThemeDefinitionService;

  private readonly themes: ThemeDefinition[] = [
    {
      id: 'shell-pink',
      name: 'Shell Pink',
      description: 'Soft and elegant pink tones with warm rose accents',
      icon: 'circle',
      preview: {
        primary: '#ec4899',
        secondary: '#db2777',
        gradientClasses: 'from-pink-400 to-rose-500'
      },
      category: 'warm'
    },
    {
      id: 'chameleon-blue',
      name: 'Chameleon Blue',
      description: 'Dynamic blue and cyan hues with ocean vibes',
      icon: 'circle',
      preview: {
        primary: '#3b82f6',
        secondary: '#14b8a6',
        gradientClasses: 'from-blue-500 to-cyan-500'
      },
      category: 'cool'
    },
    {
      id: 'sunburst-red',
      name: 'Sunburst Red',
      description: 'Energetic red and orange tones with fiery warmth',
      icon: 'fire',
      preview: {
        primary: '#ef4444',
        secondary: '#f97316',
        gradientClasses: 'from-red-500 to-orange-500'
      },
      category: 'warm'
    },
    // Future themes can be easily added here:
    // {
    //   id: 'forest-green',
    //   name: 'Forest Green',
    //   description: 'Natural green tones with earth undertones',
    //   icon: 'leaf',
    //   preview: {
    //     primary: '#059669',
    //     secondary: '#047857',
    //     gradientClasses: 'from-emerald-500 to-green-600'
    //   },
    //   category: 'cool'
    // },
    // {
    //   id: 'sunset-orange',
    //   name: 'Sunset Orange',
    //   description: 'Warm orange and amber sunset colors',
    //   icon: 'sun',
    //   preview: {
    //     primary: '#ea580c',
    //     secondary: '#dc2626',
    //     gradientClasses: 'from-orange-500 to-red-500'
    //   },
    //   category: 'warm'
    // },
    // {
    //   id: 'midnight-purple',
    //   name: 'Midnight Purple',
    //   description: 'Deep purple with mystical violet accents',
    //   icon: 'moon',
    //   preview: {
    //     primary: '#7c3aed',
    //     secondary: '#6d28d9',
    //     gradientClasses: 'from-violet-500 to-purple-600'
    //   },
    //   category: 'cool'
    // }
  ];

  public static getInstance(): ThemeDefinitionService {
    if (!ThemeDefinitionService.instance) {
      ThemeDefinitionService.instance = new ThemeDefinitionService();
    }
    return ThemeDefinitionService.instance;
  }

  public getAllThemes(): ThemeDefinition[] {
    return [...this.themes];
  }

  public getTheme(id: ThemeColor): ThemeDefinition | undefined {
    return this.themes.find(theme => theme.id === id);
  }

  public getThemesByCategory(category: ThemeDefinition['category']): ThemeDefinition[] {
    return this.themes.filter(theme => theme.category === category);
  }

  public getAvailableThemeIds(): ThemeColor[] {
    return this.themes.map(theme => theme.id);
  }
}