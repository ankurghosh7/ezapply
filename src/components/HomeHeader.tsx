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
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useTheme } from "@/providers/ThemeProvider";
import { LuSun } from "react-icons/lu";
import { RiMoonClearFill } from "react-icons/ri";
import { Button } from "./ui/button";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

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
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={""}>
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="space-x-4 flex justify-end">
        <div>
          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={() => {
              toggleTheme(theme);
              console.log("theme", theme);
            }}
            className="text-2xl hover:bg-black/5 hover:dark:bg-accent/20 "
          >
            {theme === "light" ? <LuSun /> : <RiMoonClearFill />}
          </Button>
          <span className="inline-block w-[2px] h-1/2 bg-gray-400"></span>
        </div>
        <div className="flex flex-row space-x-5">
          <Link href="/j/auth/login">
            <Button
              className="font-bold py-2 px-4  bg-transparent border-primary hover:border-transparent hover:bg-primary transition-colors duration-300	rounded-full hover:text-white"
              variant={"outline"}
            >
              Signin
            </Button>
          </Link>
          <Link href="/j/auth/register">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="bg-primary hover:bg-primary-600 dark:hover:bg-primary-600 dark:bg-primary text-white "
            >
              Singup
            </HoverBorderGradient>
          </Link>

          <HoverCard openDelay={100}>
            <HoverCardTrigger>
              <button className="w-full h-full font-medium">Employer</button>
            </HoverCardTrigger>
            <HoverCardContent className="w-48 flex flex-col p-5 dark:bg-zinc-900 ">
              <Link
                href="/c/auth/signin"
                className="hover:bg-accent dark:hover:bg-accent/20 py-2 px-4 w-full rounded-lg text-center"
              >
                Signin
              </Link>

              <Link
                href="/c/buy-job-post"
                className="hover:bg-accent dark:hover:bg-accent/20 py-2 px-4 w-full rounded-lg text-center"
              >
                Buy Job post
              </Link>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </nav>
  );
}

export default HomeHeader;
