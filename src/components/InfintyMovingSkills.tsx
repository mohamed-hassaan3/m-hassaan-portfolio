import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { Skill } from "@/types/data";

const InfintyMovingSkills = ({ items }: { items: Skill[] }) => {
  return (
    <div className="rounded-md flex flex-col antialiased justify-center relative overflow-hidden">
      <InfiniteMovingCards items={items} direction="right" speed="slow" />
    </div>
  );
};

export default InfintyMovingSkills;
