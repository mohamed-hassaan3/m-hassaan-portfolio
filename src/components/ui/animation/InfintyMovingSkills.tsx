import React from "react";
import { Skill } from "@/types/data";
import { InfiniteMovingCards } from "../infinite-moving-cards";

const InfintyMovingSkills = ({ items }: { items: Skill[] }) => {
  return (
    <div className="rounded-md flex flex-col antialiased justify-center relative overflow-hidden">
      <InfiniteMovingCards items={items} direction="right" speed="slow" />
    </div>
  );
};

export default InfintyMovingSkills;
