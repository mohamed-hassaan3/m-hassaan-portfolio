import { Title, GridItem } from "@/components/ui";
import {
  BrainCircuit,
  CodeXml,
  PencilLine,
  PencilRuler,
  ShieldCheck,
  Sparkle,
} from "lucide-react";
import React from "react";

const DesignProcess = () => {
  return (
    <article>
      <section className="*:float-left flex flex-col justify-start items-start space-y-4 col-span-2 mb-4">
        <Title
          text="STEPS I FLOW"
          icon={<Sparkle color={"var(--highlight)"} size={30} />}
        />
        <h1 className="lg:text-4xl">My Design Process</h1>
        <p className="dark:text-neutral-400 sm:text-sm text-xs max-w-[75%]  md:max-w-[50%] xl:max-w-full">
          Attend meetings to clarify project goals, target audience, and functional requirements.
        </p>
      </section>
      <section  className="md:mt-12 mt-4">
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={
              <BrainCircuit color="#b5ff6d" className="h-6 w-6 text-black dark:text-neutral-400" />
            }
            title="Strategize"
            description="To create something awesome, one must first talk about the details. Planning is essential."
          />

          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={
              <PencilLine color="#b5ff6d" className="h-6 w-6 text-black dark:text-neutral-400" />
            }
            title="Wireframe"
            description="After hashing out the details of the website, it's easy to throw the ideas onto pen & paper."
          />

          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={
              <PencilRuler color="#b5ff6d" className="h-6 w-6 text-black dark:text-neutral-400" />
            }
            title="Design"
            description="The most fun part of all - adding pizzaz to the wirefreames and bring it to life."
          />

          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={
              <CodeXml color="#b5ff6d" className="h-6 w-6 text-black dark:text-neutral-400" />
            }
            title="Development"
            description="The design may be final but it needs to be functional and practical. Development is key."
          />

          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={
              <ShieldCheck color="#b5ff6d" className="h-6 w-6 text-black dark:text-neutral-400" />
            }
            title="Quality Assurance"
            description="Website load times, SEO, file optimization, etc., weigh in to the quality of the site."
          />
        </ul>
      </section>
    </article>
  );
};

export default DesignProcess;
