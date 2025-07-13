"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <Button onClick={toggleTheme} variant="outline" size="icon" className=" rounded-full dark:hover:bg-neutral-400 border-0 dark:bg-transparent cursor-pointer">
        <Sun
          onClick={() => setTheme("light")}
          className="h-[1.2rem] w-[1.2rem] scale-100 size-2 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
        />
        <Moon
          onClick={() => setTheme("dark")}
          className="absolute h-[1.2rem] w-[1.2rem] size-2 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
        />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
