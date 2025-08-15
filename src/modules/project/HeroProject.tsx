import { HoverBorderGradient, SplitText } from "@/components/ui/animation";
import { Project } from "@/types/data";
import Image from "next/image";
import React from "react";

const HeroProject = ({ project }: { project: Project }) => {
  const {
    name,
    src,
    category,
    client,
    roles,
    description,
    links,
    tech,
  } = project;
  return (
      <aside className="w-full sm:space-y-12 space-y-4">
        <div className="space-y-4">
          <div className="md:flex items-start justify-between">
            <SplitText
              text={name}
              className="md:text-2xl mb-2 md:mb-0 text-lg font-semibold text-center md:my-auto flex content-center tracking-wider"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
            <HoverBorderGradient>
              <a href={links.demo} target="_blank">
                Check it out
              </a>
            </HoverBorderGradient>
          </div>
          <div className="lg:flex lg:gap-12 *:py-3 *:text-neutral-400">
            <p className="flex-1 leading-6">{description}</p>
            <div className="space-y-4 *:text-sm">
              <p className="space-x-3 font-semibold tracking-wider">
                Roles: <span className="!font-normal">{roles}</span>
              </p>
              <p className="space-x-3 font-semibold tracking-wider !block ">
                client: <span className="!font-normal">{client}</span>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                className="dark:bg-neutral-900 px-4 py-2 rounded-full text-[10px] sm:text-xs text-neutral-400"
                key={t}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <p className="border-0 shadow-sm shadow-neutral-900 dark:bg-neutral-800 px-6 py-2 mt-6 w-fit rounded-xs">
          {category}
        </p>
        <Image
          className="w-full  object-cover rounded-2xl shadow-md"
          src={src}
          width={1000}
          height={300}
          alt={name}
        />
      </aside>
  );
};

export default HeroProject;
