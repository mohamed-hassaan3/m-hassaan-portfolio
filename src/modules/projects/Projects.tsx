"use client";
import { Title } from "@/components/ui";
import { Sparkle } from "lucide-react";
import React, { useState } from "react";
import ProjectsFilter from "./ProjectsFilter";
import { projects } from "@/data/data";
import { RegularCardMap } from "@/components/ui/card/RegularCardMap";
import { Project } from "@/types/data";

const Projects = () => {
  const [filteredList, setFilteredList] = useState<Project[]>([]);
  const [filterValue, setFilterValue] = useState("")
  const handleFilter = (value: string) => {
    setFilterValue(value)
    const filter = projects.filter((project) =>
      project.category.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredList(filter);
    console.log(filter);
  };

  const uniqueCategory = [...new Set(projects.map((item) => item.category))];

  return (
    <article className="sm:my-32 my-16 m-auto sm:w-[80%]">
      <section className="*:float-left flex flex-col justify-start items-start sm:space-y-4 col-span-2 mb-4">
        <Title
          text="MY WORK"
          icon={<Sparkle color={"var(--highlight)"} size={30} />}
        />
        <h1 className="md:text-4xl text-xl lg:w-[60%] lg:font-semibold lg:leading-12  sm:tracking-wider">
          Creating next level digital products
        </h1>
      </section>
      <section className="sm:my-12  my-6">
        <ProjectsFilter handleFilter={handleFilter} category={uniqueCategory} />
      </section>
      <aside className="float-left md:mb-12 mb-6">
        <Title text={filterValue && filterValue} />
        
      </aside>
      <section className="xl:mt-24 sm:mt-16 mt-8">
        <RegularCardMap
          cards={!filteredList.length ? projects : filteredList}
        />
      </section>
    </article>
  );
};

export default Projects;
