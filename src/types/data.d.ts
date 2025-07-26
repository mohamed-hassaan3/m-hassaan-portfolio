import { StaticImageData } from "next/image";

export interface Skill {
  id: string;
  name: string;
  icon: LucideIcon; 
  color: string; 
}

export interface ProjectLink {
  demo?: string | url;
  github: string | url;
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  src: StaticImageData;
  links: ProjectLink;
  tech: string[]; 
  category: string
}

export interface SpecialityProps {
  slug: string
  title: string
  icon: LucideIcon
  desc: string
  img: StaticImageData
  item: number
}