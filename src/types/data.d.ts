import { StaticImageData } from "next/image";

export interface Skill {
  id: string;
  name: string;
  icon: LucideIcon; 
  color: string; 
}

export interface ProjectLink {
  demo?: string;
  github: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  src: StaticImageData;
  links: ProjectLink;
  tech: string[]; 
}