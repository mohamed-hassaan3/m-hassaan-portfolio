import { Title } from "@/components/ui";
import { Sparkle } from "lucide-react";
import React from "react";

const Eductian = () => {
  return (
    <article className="sm:my-16 m-auto lg:grid grid-cols-6 gap-12">
      <section className="*:float-left flex flex-col justify-start items-start sm:space-y-4  mb-4 col-span-2">
        <Title
          text="Education"
          icon={<Sparkle color={"var(--highlight)"} size={30} />}
        />
        <h1 className="lg:text-4xl !text-xl lg:font-semibold leading-12">
          DEGREE & LANGUAGES
        </h1>
      </section>
      <section className="sm:*:text-sm *:text-[10px] *:font-semibold *:tracking-wider *:border-b *:py-4 col-span-4">
        <aside className="flex justify-between">
          <p className="w-1/2 leading-9">
            Bachelor of quality control, Quality Engineer <br /> CAIRO / EGYPT
          </p>
          <p className="ml-auto text-neutral-300">2009 - 2013</p>
        </aside>
        <aside className="pb-4 space-y-6">
          <p className="flex ">
            Mother tongue <span className="ml-auto text-neutral-300">Arabic </span>
          </p>
          <p className="flex ">
            Fluent <span className="ml-auto text-neutral-300">English </span>
          </p>
        </aside>
      </section>
    </article>
  );
};

export default Eductian;
