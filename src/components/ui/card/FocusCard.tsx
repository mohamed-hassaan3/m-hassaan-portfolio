"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Project } from "@/types/data";

export const Card = React.memo(
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
        "rounded-2xl relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full  transition-all duration-300 ease-out border border-white",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <Image
        src={card.src}
        alt={card.name}
        width={0}
        height={0}
        className="object-cover absolute inset-0 w-[80%] h-[80%] md:aspect-video -translate-x-1/2 left-[50%] -translate-y-1/2 top-[50%] rounded-2xl"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.name}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";
