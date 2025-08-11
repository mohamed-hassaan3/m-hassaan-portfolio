"use client";
import React from "react";
import { Project } from "@/types/data";
import Link from "next/link";
import { projects } from "@/data/data";
import { ArrowLeft, ArrowRight } from "lucide-react";

const LayoutProject = ({
  children,
  project,
}: {
  children: React.ReactNode;
  project: Project;
}) => {
  const projectIndex = projects.findIndex(
    (p: Project) => p.slug === project.slug
  );

  const nextProjectName = projects[projectIndex + 1];
  const prevProjectName = projects[projectIndex - 1];

  return (
    <article className="sm:my-32 my-16 m-auto sm:w-[80%] md:space-y-16 space-y-4">
      <nav className="flex items-center gap-4 text-neutral-400 text-[10px] sm:text-xs hover:opacity-70 transition-all duration-300">
        <ArrowLeft size={20} />
        <Link href={"/projects"}>Back to Projects</Link>
      </nav>
      {children}
      <nav className="my-12">
        {prevProjectName && (
          <Link
            className="border py-2 px-3 z-50 float-left rounded-2xl text-[10px] sm:*:text-xs  min-w-42 dark:hover:bg-neutral-700 hover:bg-neutral-200 transition-all duration-400 flex items-center justify-around gap-4 shadow-md shadow-neutral-900"
            href={`/project/${prevProjectName?.slug}`}
          >
            <ArrowLeft size={12} />
            <div className="space-y-2">
              <p className="text-neutral-400">Prev</p>
              <p>{prevProjectName?.name && prevProjectName?.name}</p>
            </div>
          </Link>
        )}
        {nextProjectName && (
          <Link
            className="border py-2 px-3 z-50 float-right rounded-2xl text-[10px] sm:*:text-xs min-w-42 dark:hover:bg-neutral-700 hover:bg-neutral-200 transition-all duration-400 flex items-center justify-around gap-4 shadow-md shadow-neutral-900"
            href={`/project/${nextProjectName?.slug}`}
          >
            <div className="space-y-2">
              <p className="text-neutral-400">Next</p>
              <p>{nextProjectName?.name && nextProjectName?.name}</p>
            </div>
            <ArrowRight size={12} />
          </Link>
        )}
      </nav>
    </article>
  );
};

export default LayoutProject;
