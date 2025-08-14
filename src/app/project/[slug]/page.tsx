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
  const slug = params.slug;
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

  const ogImageUrl = `https://m-hassaan-portfolio.vercel.app/project/${project.slug}`;
  return {
    title: `${project.name} Project`,
    description: project.description,
    openGraph: {
      title: `${project.name} Project`,
      description: project.description,
      url: `https://m-hassaan-portfolio.vercel.app/project/${project.slug}`,
      images: [ogImageUrl],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} Project`,
      description: project.description,
      images: [ogImageUrl],
    },
  };
}

const Project = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
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
