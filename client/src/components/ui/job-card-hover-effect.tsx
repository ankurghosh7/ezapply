"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    location: string;
    company_name: string;
    company_logo: string;
    createdAt: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 ",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-orange-100 dark:bg-orange-200/30 block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CompanyDetailsPostTime
              comapanyLogo={item.company_logo}
              companyName={item.company_name}
              postTime={item.createdAt}
            />
            <CardTitleDescription
              jobDescription={item.description}
              jobLocation={item.location}
              jobTitle={item.title}
            />
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group relative p-5 bg-white hover:bg-primary dark:bg-zinc-900 border border-zinc-500 min-w-40 min-h-60 rounded-xl space-y-4 transition-all duration-300 ease-in-out hover:shadow-lg z-20",
        className
      )}
    >
      {children}
    </div>
  );
};

const CardTitleDescription = ({
  jobTitle,
  jobLocation,
  jobDescription,
}: {
  jobTitle: string;
  jobLocation: string;
  jobDescription: string;
}) => {
  return (
    <>
      <div>
        <h4 className="text-lg font-semibold group-hover:text-white transition-colors duration-300 ease-in-out">
          {jobTitle}
        </h4>
        <p className="text-sm font-normal text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 ease-in-out">
          {jobLocation}
        </p>
      </div>

      <p className="text-sm line-clamp-2 group-hover:text-zinc-100 transition-colors duration-300 ease-in-out">
        {jobDescription}
      </p>
    </>
  );
};

const CompanyDetailsPostTime = ({
  comapanyLogo,
  companyName,
  postTime,
}: {
  comapanyLogo: string;
  companyName: string;
  postTime: string;
}) => {
  return (
    <div className="flex flex-nowrap flex-row space-x-4 items-center justify-start">
      <Image
        src={comapanyLogo}
        alt="company logo"
        width={100}
        height={100}
        className="rounded-full w-14 h-14"
      />
      <div>
        <h3 className="text-lg font-semibold group-hover:text-white transition-colors duration-300 ease-in-out">
          {companyName}
        </h3>
        <p className="text-sm font-normal text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 ease-in-out">
          {postTime}
        </p>
      </div>
    </div>
  );
};
