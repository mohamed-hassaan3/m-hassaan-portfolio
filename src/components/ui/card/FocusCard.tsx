"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Project } from "@/types/data";
import StarBorder from "../animation/StrarBorder";
import { DynamicIcon } from "lucide-react/dynamic";
import Link from "next/link";

export const FocusCard = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: Project;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-4xl shadow-amber-500 shadow-sm relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full  transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <Image
        src={card.src}
        alt={card.name}
        width={0}
        height={0}
        className="object-cover absolute inset-0 md:aspect-video -translate-x-1/2 left-[50%] -translate-y-1/2 top-[50%] w-[75%] h-[75%] border-6 border-white rounded-4xl"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 justify-end flex flex-col py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <Link
          href={`/project/${card.slug}`}
          className="text-md md:text-xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 mb-2 hover:text-[var(--highlight)]"
        >
          {card.name}
        </Link>
        <ul className="flex items-center gap-2 sm:gap-4 ">
          <li>
            <StarBorder
              as="button"
              className="custom-class bg-neutral-900"
              color="cyan"
              speed="5s"
            >
              <a target="_blank" href={card.links.demo}>
                <DynamicIcon name="link" color="gray" size={24} />
              </a>
            </StarBorder>
          </li>
          <li>
            <StarBorder
              as="button"
              className="custom-class bg-neutral-900"
              color="cyan"
              speed="5s"
            >
              <a target="_blank" href={card.links.github}>
                <DynamicIcon name="github" color="gray" size={24} />
              </a>
            </StarBorder>
          </li>
        </ul>
      </div>
    </div>
  )
);

FocusCard.displayName = "Card";
