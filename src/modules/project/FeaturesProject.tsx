import { SplitText } from "@/components/ui/animation";
import { Project } from "@/types/data";
import React from "react";

const FeaturesProject = ({ project }: { project: Project }) => {
  return (
    <>
      {project.features && (
        <aside className="md:*:py-4 *:py-2">
          <SplitText
            text="Project Overview"
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
          <hr />
          <p className="leading-7 text-neutral-400">{project.features}</p>
        </aside>
      )}
    </>
  );
};

export default FeaturesProject;
