import type {
  Project,
  CoreValue,
  Statistic,
  QuickFact,
  StatusIndicator,
  Hobby,
  SkillCategory
} from "../types";

/**
 * Interface for portfolio data access
 * Follows DIP: Depend on abstraction, not concrete implementation
 */
export interface IPortfolioDataAccess {
  getPersonalInfo(): Promise<any>;
  getProjects(): Promise<Project[]>;
  getCoreValues(): Promise<CoreValue[]>;
  getStatistics(): Promise<Statistic[]>;
  getQuickFacts(): Promise<QuickFact[]>;
  getStatusIndicators(): Promise<StatusIndicator[]>;
  getHobbies(): Promise<Hobby[]>;
  getSkillsData(): Promise<SkillCategory[]>;
  getNavigationItems(): Promise<any[]>;
}

/**
 * Portfolio data access object
 * Follows SRP: Only responsible for data access
 */
export class PortfolioDAO implements IPortfolioDataAccess {
  private static instance: PortfolioDAO;

  public static getInstance(): PortfolioDAO {
    if (!PortfolioDAO.instance) {
      PortfolioDAO.instance = new PortfolioDAO();
    }
    return PortfolioDAO.instance;
  }

  async getPersonalInfo() {
    const { personalInfo } = await import('../data/portfolio');
    return personalInfo;
  }

  async getProjects(): Promise<Project[]> {
    const { projects } = await import('../data/portfolio');
    return projects;
  }

  async getCoreValues(): Promise<CoreValue[]> {
    const { coreValues } = await import('../data/portfolio');
    return coreValues;
  }

  async getStatistics(): Promise<Statistic[]> {
    const { statistics } = await import('../data/portfolio');
    return statistics;
  }

  async getQuickFacts(): Promise<QuickFact[]> {
    const { quickFacts } = await import('../data/portfolio');
    return quickFacts;
  }

  async getStatusIndicators(): Promise<StatusIndicator[]> {
    const { statusIndicators } = await import('../data/portfolio');
    return statusIndicators;
  }

  async getHobbies(): Promise<Hobby[]> {
    const { hobbies } = await import('../data/portfolio');
    return hobbies;
  }

  async getSkillsData(): Promise<SkillCategory[]> {
    const { skillsData } = await import('../data/portfolio');
    return skillsData;
  }

  async getNavigationItems() {
    const { navigationItems } = await import('../data/portfolio');
    return navigationItems;
  }
}