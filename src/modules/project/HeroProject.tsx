import { Project } from "@/types/data";
import Image from "next/image";
import React from "react";

const HeroProject = ({ project }: { project: Project }) => {
  console.log(project);
  const { name, src, /* category, features, description, links, tech */ } = project;
  return (
    <section>
      <aside className="w-full">
        <Image className="w-full h-auto object-contain" src={src} width={1000} height={300} alt={name} />
      </aside>
    </section>
  );
};

export default HeroProject;
