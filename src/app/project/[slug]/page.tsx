import LayoutProject from "@/components/ui/LayoutProject";
import { projects } from "@/data/data";
import { SubFooter } from "@/modules/home";
import Layout from "@/modules/Layout";
import { FeaturesProject, HeroProject, TechProject } from "@/modules/project";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "No project found for this slug.",
      openGraph: {
        title: "Project Not Found",
        description: "No project found for this slug.",
        images: ["https://m-hassaan-portfolio.vercel.app/opengraph-image.png"],
        url: `https://m-hassaan-portfolio.vercel.app/project/${slug}`,
      },
    };
  }

  const baseUrl = `https://m-hassaan-portfolio.vercel.app`;
  return {
    metadataBase: new URL(`${baseUrl}`),
    title: `${project.name} Project`,
    description: project.description,
    openGraph: {
      title: `${project.name} Project`,
      description: project.description,
      url: `${baseUrl}/project/${project.slug}`,
      images: [`${baseUrl}/${project.src.src}`],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} Project`,
      description: project.description,
      images: [`${baseUrl}/${project.src.src}`],
    },
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
          <FeaturesProject project={project} />
          <TechProject project={project} />
        </LayoutProject>
      ) : (
        <p>Project not found</p>
      )}
      <SubFooter />
    </Layout>
  );
};

export default Project;
