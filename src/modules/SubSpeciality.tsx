import Title from "@/components/ui/Title";
import { Sparkle } from "lucide-react";
import React from "react";

const SubSpeciality = () => {
  return (
    <article className="sm:w-[80%] m-auto flex flex-col overflow-hidden">
      <section className="*:float-left">
        <Title
          text="Specialty"
          icon={<Sparkle color={"var(--highlight)"} size={30} />}
        />
      </section>
      <section className="my-2">
        <h2 className="sm:text-3xl tracking-wider sm:py-4 sm:mb-2 mb-1 text-sm font-semibold">
          Areas of Expertise
        </h2>
      </section>
      <section className="my-2"></section>
    </article>
  );
};

export default SubSpeciality;
