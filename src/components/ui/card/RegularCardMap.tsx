"use client";
import { useState } from "react";
import { FocusCard } from "./FocusCard";
import { Project } from "@/types/data";

export function RegularCardMap({
  cards,
  countOfCard,
}: {
  cards: Project[];
  countOfCard: number;
}) {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto h-full w-full sm:[&>*:nth-child(even)]:mt-12">
      {cards
        .map((card, index) => (
          <FocusCard
            key={card.slug}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))
        .slice(0, countOfCard)}
    </div>
  );
}
