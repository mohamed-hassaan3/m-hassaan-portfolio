import LayoutProject from "@/components/ui/LayoutProject";
import { projects } from "@/data/data";
import { Layout } from "@/modules";
import HeroProject from "@/modules/project/HeroProject";
import React from "react";

const Project = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const project = projects.find((item) => item.slug === slug);
  console.log("project", project);

  return (
    <Layout>
      {project ? (
        <LayoutProject project={project}>
          <HeroProject project={project} />
        </LayoutProject>
      ) : (
        <p>Project not found</p>
      )}
    </Layout>
  );
};

export default Project;
