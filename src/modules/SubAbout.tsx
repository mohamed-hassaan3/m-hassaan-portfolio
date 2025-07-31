import {Title} from "@/components/ui";
import React from "react";
import { Sparkle } from "lucide-react";
import ScrollReveal from "@/components/ui/animation/ScrollReveal";

const SubAbout = () => {
  return (
    <article className="m-auto text-center sm:w-[80%]">
      <section>
        <Title
          text="ABOUT ME"
          icon={<Sparkle color={"var(--highlight)"} size={30} />}
        />
      </section>
      <section>
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={0}
          blurStrength={10}
          textClassName="font-thin *:!text-base md:text-3xl lg:!leading-12"
          wordAnimationEnd="sm:top center lg:bottom"
        >
          I’m a Frontend Engineer with over 3 years of experience in React,
          Next.js, JavaScript, TypeScript, and Redux Toolkit. Skilled in
          responsive UI, API integration, and performance optimization.
          Experienced in Agile teams and Figma collaboration. Passionate about
          clean, accessible design and building fast, scalable web apps with
          modern technologies, decreasing server load by 25%. Skilled in Docker
          CI/CD workflows, Prisma, and performance optimization, ensuring robust
          application design!
        </ScrollReveal>
      </section>
    </article>
  );
};

export default SubAbout;
