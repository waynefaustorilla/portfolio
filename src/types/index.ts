import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  level: number;
  iconName: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
  icon?: string;
}

export interface SocialLink {
  icon: ReactNode;
  href: string;
  label: string;
}

export interface Specialization {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
}

export interface CoreValue {
  name: string;
  icon: string;
}

export interface Hobby {
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface Statistic {
  value: string;
  label: string;
  color: string;
}

export interface QuickFact {
  emoji: string;
  text: string;
  color: string;
}

export interface StatusIndicator {
  color: string;
  text: string;
}