"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { useTheme } from "@/providers/ThemeProvider";
import { LuSun } from "react-icons/lu";
import { RiMoonClearFill } from "react-icons/ri";
import { Button } from "./ui/button";

interface NavItemProps {
  name: string;
  href: string;
  active: boolean;
}
function HomeHeader() {
  const { theme, toggleTheme } = useTheme();
  const navItems: NavItemProps[] = [
    { name: "Jobs", href: "/jobs", active: false },
    { name: "Companies", href: "/companies", active: false },
    { name: "Services", href: "/services", active: false },
    { name: "About Us", href: "/about", active: false },
  ];
  return (
    <nav className="grid md:grid-cols-3 items-center py-5">
      <div className="w-28">
        <Link href={"/"}>
          <Image
            src="https://res.cloudinary.com/dx9lhxxaa/image/upload/v1711114355/ezapply_vno4ml.svg"
            alt="Logo"
            width={100}
            height={100}
            className="invert dark:invert-0 w-full h-full"
          />
        </Link>
      </div>
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                Jobs
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="space-x-4 flex justify-end">
        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={() => {
            toggleTheme(theme);
            console.log("theme", theme);
          }}
          className="text-2xl"
        >
          {theme === "light" ? <LuSun /> : <RiMoonClearFill />}
        </Button>
        <Link href="/jobseeker/auth/signin">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Signin
          </button>
        </Link>
        <Link href="/jobseeker/auth/signup">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Singup
          </button>
        </Link>
        <HoverCard openDelay={100}>
          <HoverCardTrigger>
            <button className="w-full h-full">Dropdown</button>
          </HoverCardTrigger>
          <HoverCardContent className="w-48">
            <ul className="space-y-4">
              <li>
                <Link href="/employer/auth/signin">Signin</Link>
              </li>
              <li>
                <Link href="/employer/buy-job-post">Buy Job post</Link>
              </li>
            </ul>
          </HoverCardContent>
        </HoverCard>
      </div>
    </nav>
  );
}

export default HomeHeader;
