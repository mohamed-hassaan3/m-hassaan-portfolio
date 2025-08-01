import { Title } from "@/components/ui";
import { GridItem } from "@/components/ui";
import { designProcess } from "@/data/data";
import { Box, Lock, Search, Settings, Sparkle, Sparkles } from "lucide-react";
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
        <p className="dark:text-neutral-400 sm:text-sm text-xs max-w-[75%] md:max-w-full">
          I have worked with some of the most innovative industry leaders to
          help build their top-notch products.
        </p>
      </section>
      <section>
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          {designProcess.map((item) => (
            <GridItem
              key={item.id}
              area={`md:[grid-area:${item.md}] xl:[grid-area:${item.xl}]`}
              icon={<item.icon className="h-6 w-6 text-black dark:text-neutral-400" /> }
              title={`${item.id}. ${item.title}`}
              description={item.desc}
            />
          ))}

        </ul>
      </section>
    </article>
  );
};

export default DesignProcess;
