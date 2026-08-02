export type Locale = "en" | "fa";

export interface Skill {
  name: string;
  level: number;
}

export interface Service {
  title: string;
  description: string;
  icon: "code" | "palette" | "pen" | "search";
}

export interface Project {
  title: string;
  description: string;
  image: string;
  thumbnail: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

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
    technical: Skill[];
    soft: Skill[];
  };
  services: {
    title: string;
    items: Service[];
  };
  projects: {
    title: string;
    items: Project[];
  };
  footer: string;
  welcome: string;
}
