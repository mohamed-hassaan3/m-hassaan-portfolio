import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/../public/assets/avatar.svg";
import { ModeToggle } from "../theme/ModeToggle";

const Header = () => {
  return (
    <header className="flex items-center justify-between dark:text-neutral-400">
      <aside>
        <Link href={"/"}>
          <Image src={logo} width={30} height={30} alt="logo" />
        </Link>
      </aside>
      <nav className="flex items-center md:gap-6 gap-1 *:hover:dark:text-neutral-200 sm:*:px-3 *:px-1 text-xs lg:text-lg">
        <Link href={"/"}>Home</Link>
        <Link href={"/projects"}>Projects</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </nav>
      <aside>
        <ModeToggle />
      </aside>
    </header>
  );
};

export default Header;
