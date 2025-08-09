"use client";

import { AnimationButton, HeroHighlight, Highlight } from "@/components/ui";
import { motion } from "motion/react";
import React from "react";

const SubFooter = () => {
  return (
    <article>
      <section className="sm:w-[80%] m-auto">
        <HeroHighlight>
          <aside className="realtive text-center my-12 sm:tracking-widest dark:bg-neutral-950 bg-neutral-300 w-fit m-auto p-2 rounded-4xl">
            <p className="dark:text-neutral-300">Available for Work</p>
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
            className="text-md px-4 md:text-3xl lg:text-4xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
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
