"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { Button } from "./button";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    location?: string;
    company_name: string;
    company_logo: string;
    createdAt: string;
    job_type: string;
    work_mode: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 lg:px-20  ",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
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
            <CardDetails
              companyLogo={item.company_logo}
              companyName={item.company_name}
              createdAt={item.createdAt}
              description={item.description}
              jobType={item.job_type}
              link={item.link}
              workMode={item.work_mode}
              title={item.title}
              location={item.location}
            />
          </Card>
        </div>
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
        "group relative bg-white p-2 dark:bg-zinc-700 border border-zinc-500  min-h-60 rounded-xl transition-all duration-300 ease-in-out hover:shadow-lg z-20",
        className
      )}
    >
      {children}
    </div>
  );
};

// const CardTitleDescription = ({
//   jobType,
//   workMode,
//   jobDescription,
// }: {
//   jobType: string;
//   workMode: string;
//   jobDescription: string;
// }) => {
//   return (
//     <>
//       <div>
//         {/* <p className="text-sm font-normal text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 ease-in-out">
//           {jobLocation}
//         </p> */}
//         <span className="text-sm bg">{jobType}</span>
//         <span>{workMode}</span>
//       </div>

//       <p className="text-sm line-clamp-2 group-hover:text-zinc-100 transition-colors duration-300 ease-in-out">
//         {jobDescription}
//       </p>
//     </>
//   );
// };

// const CompanyDetailsPostTime = ({
//   jobTitle,
//   comapanyLogo,
//   companyName,
//   postTime,
// }: {
//   jobTitle: string;
//   comapanyLogo: string;
//   companyName: string;
//   postTime: string;
// }) => {
//   return (
//     <div className="flex flex-nowrap flex-row space-x-4 items-center justify-start">
//       <Image
//         src={comapanyLogo}
//         alt="company logo"
//         width={100}
//         height={100}
//         className="rounded-full w-14 h-14"
//       />
//       <div>
//         <h3 className="text-sm font-semibold group-hover:text-white transition-colors duration-300 ease-in-out">
//           {companyName}
//         </h3>
//         <h4 className="text-lg font-semibold group-hover:text-white transition-colors duration-300 ease-in-out">
//           {jobTitle}
//         </h4>
//       </div>
//       <p className="text-sm font-normal text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 ease-in-out">
//         {postTime}
//       </p>
//     </div>
//   );
// };

const CardDetails = ({
  companyLogo,
  companyName,
  createdAt,
  description,
  jobType,
  link,
  location,
  title,
  workMode,
  className,
}: {
  title: string;
  description: string;
  link: string;
  location?: string;
  companyName: string;
  companyLogo: string;
  createdAt: string;
  jobType: string;
  workMode: string;
  className?: string;
}) => {
  return (
    <>
      <div className="bg-green-200/20 p-4 rounded-t-lg ">
        <div className="flex justify-between items-center">
          <span className="text-sm">{createdAt}</span>
          <CiBookmark className="text-primary text-3xl" />
        </div>
        <div className="h-32 w-full flex items-center flex-col justify-start space-y-2 ">
          <span className="text-2xl w-full text-start font-medium">
            {title}
          </span>
          <p>{description}</p>
        </div>
      </div>
      <div className="flex flex-row   w-full justify-between items-center mb-2 mt-4 px-4">
        <div className="flex space-x-4 items-center">
          <Image
            src={companyLogo}
            alt="company logo"
            width={100}
            height={100}
            className="w-12 h-12"
          />
          <h3 className="text-base font-semibold  transition-colors duration-300 ease-in-out">
            {companyName}
          </h3>
        </div>
        <Link href={link}>
          <Button>
            Apply <i className="fas fa-arrow-right"></i>
          </Button>
        </Link>
      </div>
    </>
  );
};
