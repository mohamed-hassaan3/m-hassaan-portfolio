"use client";
import { useState } from "react";
import { Card } from "./FocusCard";
import { Project } from "@/types/data";

export function RegularCardMap({ cards }: { cards: Project[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto h-full w-full">
      {cards.map((card, index) => (
        <Card
          key={card.id}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
