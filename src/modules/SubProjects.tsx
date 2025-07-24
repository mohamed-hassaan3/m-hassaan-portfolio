import { RegularCardMap } from "@/components/ui/card/RegularCardMap";
import Title from "@/components/ui/Title";
import { Sparkle } from "lucide-react";
import React from "react";
import { projects } from "@/data/data";
import AnimationButton from "@/components/ui/AnimationButton";

const SubProjects = () => {
  // control How many cards you could be render
  const count = 4;
  return (
    <article className="sm:w-[80%] m-auto flex flex-col">
      <section className="*:float-left">
        <Title
          text="PROJECTS"
          icon={<Sparkle color={"var(--highlight)"} size={30} />}
        />
      </section>
      <section className="my-2 ">
        <h2 className="sm:text-xl sm:mb-2 mb-1 text-sm font-semibold">
          Selected Projects
        </h2>
        <p className="sm:text-md text-md font-semibold text-neutral-400 font-mono">
          Here&apos;s a curated selection showcasing my expertise and the
          achieved results.
        </p>
      </section>
      <section className="my-6">
        <RegularCardMap cards={projects} countOfCard={count} />
      </section>
      <aside>
        <AnimationButton href="/projects">
          More Projects
        </AnimationButton>
      </aside>
    </article>
  );
};

export default SubProjects;
