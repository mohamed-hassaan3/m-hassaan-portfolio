"use client";

import { AnimationButton, HeroHighlight, Highlight } from "@/components/ui";
import { ShinyText } from "@/components/ui/animation";
import { motion } from "motion/react";
import React from "react";

const SubFooter = () => {
  return (
    <article>
      <section className="sm:w-[80%] m-auto">
        <HeroHighlight>
          <aside className="realtive text-center my-12 sm:tracking-widest bg-neutral-950 w-fit m-auto p-2 rounded-4xl">
            <ShinyText text="Available for Work" />
          </aside>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
          >
            <Highlight className="text-black dark:text-white px-2">
              Let&apos;s create your next big idea.
            </Highlight>
          </motion.h1>
          <aside>
            <AnimationButton href="/contact">Contact me</AnimationButton>
          </aside>
        </HeroHighlight>
      </section>
    </article>
  );
};

export default SubFooter;
