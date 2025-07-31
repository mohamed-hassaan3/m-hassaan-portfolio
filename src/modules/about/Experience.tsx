import { Title } from "@/components/ui";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { experiences } from "@/data/data";
import { ExperiencesProps } from "@/types/data";
import { Accordion } from "@radix-ui/react-accordion";
import { Sparkle } from "lucide-react";
import Image from "next/image";
import React from "react";

const Experience = () => {
  return (
    <article className="my-16 m-auto lg:grid grid-cols-5 gap-12">
      <section className="*:float-left flex flex-col justify-start items-start space-y-4 col-span-2">
        <Title
          text="WORK HISTORY"
          icon={<Sparkle color={"var(--highlight)"} size={30} />}
        />
        <h1 className="lg:text-4xl">Experience</h1>
        <p className="dark:text-neutral-400 text-sm">
          I have worked with some of the most innovative industry leaders to
          help build their top-notch products.
        </p>
      </section>
      <section className="col-span-3">
        <Accordion
          type="single"
          collapsible
          className="w-full space-y-8"
          defaultValue="item-1"
        >
          {experiences &&
            experiences.map((item: ExperiencesProps) => (
              <AccordionItem
                key={item.slug}
                value={`item-${item.item}`}
                className="w-full"
              >
                <AccordionTrigger >
                  <div className="!cursor-pointer font-bold tracking-wider hover:opacity-75 flex justify-between w-full">

                  <aside className="flex items-center gap-2">
                    <Image
                      className="object-cover rounded-full shadow"
                      src={item.logo}
                      width={50}
                      height={50}
                      alt={item.slug}
                      />
                    <div className="">
                      <p className="font-semibold">{item.profession}</p>
                      <small className="font-thin">{item.name}</small>
                    </div>
                  </aside>
                  <aside>
                    {item.dates}
                  </aside>
                      </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc space-y-4">
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
      </section>
    </article>
  );
};

export default Experience;
