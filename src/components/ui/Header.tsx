"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/../public/assets/avatar.svg";
import { ModeToggle } from "../theme/ModeToggle";
import { usePathname } from "next/navigation";
const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 shadow-xl transition-all duration-700 ease-in-out z-50 flex items-center justify-between dark:text-neutral-400 px-6 py-1 sm:w-[80%] m-auto ${
        isScrolled
          ? "lg:!w-[50%] top-3 rounded-full dark:bg-neutral-950 bg-neutral-200 border"
          : ""
      }`}
    >
      <aside>
        <Link href={"/"}>
          <Image src={logo} width={30} height={30} alt="logo" className="sm:w-8 w-5 " />
        </Link>
      </aside>
      <nav>
        <ul className=" flex items-center md:gap-6 gap-1 *:hover:dark:text-neutral-200 sm:*:px-3 *:px-1 text-[10px] md:text-base font-extrabold tracking-wider">
          {navItems.map((item) => (
            <li key={item.name} className={`relative ${pathname === item.path && "dark:text-neutral-200"}`}>
              <Link href={item.path}>{item.name}</Link>
              {pathname === item.path && (
                <span className="absolute hidden sm:block sm:-left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#b5ff6d] rounded-full"></span>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <aside>
        <ModeToggle />
      </aside>
    </header>
  );
};

export default Header;
