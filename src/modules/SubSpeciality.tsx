"use client"
import Title from "@/components/ui/Title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { Sparkle } from "lucide-react";
import React from "react";
import { SpecialityProps } from "@/types/data";
import Image from "next/image";
import { skills, speciality } from "@/data/data";
import InfintyMovingSkills from "@/components/InfintyMovingSkills";

const SubSpeciality = () => {
  return (
    <article className="sm:w-[80%] m-auto flex flex-col overflow-hidden">
      <section className="*:float-left">
        <Title
          text="SPECIALITY"
          icon={<Sparkle color={"var(--highlight)"} size={30} />}
        />
      </section>
      <section className="my-2">
        <h2 className="sm:text-3xl tracking-wider sm:py-4 sm:mb-2 mb-1 text-sm font-semibold">
          Areas of Expertise
        </h2>
      </section>
      <section className="my-2">
        <Accordion
          type="single"
          collapsible
          className="w-full space-y-8"
          defaultValue="item-1"
        >
          {speciality &&
            speciality.map((item: SpecialityProps) => (
              <AccordionItem
                key={item.slug}
                value={`item-${item.item}`}
                className=" w-full "
              >
                <AccordionTrigger className="!cursor-pointer font-bold tracking-wider hover:opacity-75 flex items-center gap-2 md:gap-4 mb-2">
                  <span>{<item.icon size={25} />}</span>
                  {item.title}
                </AccordionTrigger>
                <div className="flex flex-col md:flex-row gap-2 md:gap-6">
                  <AccordionContent>{item.desc}</AccordionContent>
                  <AccordionContent className=" h-full !w-full">
                    <Image
                      className="w-full object-cover aspect-video rounded-4xl shadow border-neutral-200 border-4"
                      src={item.img}
                      width={600}
                      height={300}
                      alt={item.slug}
                    />
                  </AccordionContent>
                </div>
              </AccordionItem>
            ))}
        </Accordion>
      </section>
      <aside>
       <InfintyMovingSkills items={skills} />
      </aside>
    </article>
  );
};

export default SubSpeciality;
