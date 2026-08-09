/**
 * Shared TypeScript types for the portfolio.
 * All UI copy and structured content shapes live here so components stay typed.
 */

/** Supported UI languages */
export type Locale = "en" | "fa";

/** Single skill entry (name + proficiency 0–100) */
export interface Skill {
  name: string;
  level: number;
}

/** Service / “what I offer” card */
export interface Service {
  title: string;
  description: string;
  /** Key used to pick an icon in ServiceCard */
  icon: "code" | "palette" | "pen" | "search";
}

/** Featured project card */
export interface Project {
  title: string;
  description: string;
  image?: string;
  thumbnail?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

/** One job in the experience timeline */
export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
}

/** Quick link chip under Live Projects */
export interface LiveProject {
  name: string;
  url: string;
}

/**
 * Full translation tree for one locale.
 * Mirrors the structure of `lib/data.ts`.
 */
export interface Translations {
  languageButton: string;
  name: string;
  roles: [string, string];
  about: {
    title: string;
    description: string;
  };
  information: {
    title: string;
    items: { label: string; value: string }[];
  };
  education: {
    title: string;
    degree: string;
    university: string;
  };
  learning: {
    title: string;
    items: { label: string; level: number }[];
  };
  contact: {
    title: string;
    phone: string;
    telegram: string;
    email: string;
  };
  skills: {
    title: string;
    softTitle: string;
    technical: Skill[];
    soft: Skill[];
  };
  experience: {
    title: string;
    items: ExperienceItem[];
  };
  services: {
    title: string;
    items: Service[];
  };
  projects: {
    title: string;
    items: Project[];
  };
  liveProjects: {
    title: string;
    items: LiveProject[];
  };
  footer: string;
  welcome: string;
}
