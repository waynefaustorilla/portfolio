import { scrollToSection } from '../utils';

/**
 * Service for navigation functionality
 * Follows SRP: Only handles navigation operations
 */
export class NavigationService {
  private static instance: NavigationService;

  public static getInstance(): NavigationService {
    if (!NavigationService.instance) {
      NavigationService.instance = new NavigationService();
    }
    return NavigationService.instance;
  }

  /**
   * Navigate to a section and optionally close mobile menu
   */
  public navigateToSection(sectionId: string, onNavigate?: () => void): void {
    scrollToSection(sectionId);
    if (onNavigate) {
      onNavigate();
    }
  }

  /**
   * Get navigation items from data source
   */
  public getNavigationItems() {
    // This could be moved to a data service later
    return import('../data/portfolio').then(module => module.navigationItems);
  }
}