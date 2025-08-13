import LayoutProject from "@/components/ui/LayoutProject";
import { projects } from "@/data/data";
import { Layout, SubFooter } from "@/modules";
import HeroProject from "@/modules/project/HeroProject";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const slug = await params.slug;

  const project = projects.find((item) => item.slug === slug);

  return {
    title: project?.name,
    description: project?.description,
    images: [project?.src],
  };
}


const Project = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  return (
    <Layout>
      {project ? (
        <LayoutProject project={project}>
          <HeroProject project={project} />
        </LayoutProject>
      ) : (
        <p>Project not found</p>
      )}
      <SubFooter />
    </Layout>
  );
};

export default Project;
