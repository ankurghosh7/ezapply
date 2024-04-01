import Image from "next/image";
import React from "react";
import { IconType } from "react-icons";
import { IoIosArrowForward } from "react-icons/io";

interface Category {
  name: string;
  icon: string | IconType;
}
function CategorySection() {
  const categories: Category[] = [
    {
      name: "Design & Development",
      icon: "https://res.cloudinary.com/dx9lhxxaa/image/upload/v1711966500/web-programming_iffg2a.png",
    },
    {
      name: "Marketing",
      icon: "https://res.cloudinary.com/dx9lhxxaa/image/upload/v1711966499/bullhorn_wzflbe.png",
    },
    {
      name: "Finance",
      icon: "https://res.cloudinary.com/dx9lhxxaa/image/upload/v1711966766/stats_a8hqcf.png",
    },
    {
      name: "Management",
      icon: "https://res.cloudinary.com/dx9lhxxaa/image/upload/v1711966500/influencer_zgfoie.png",
    },
    {
      name: "Sales",
      icon: "https://res.cloudinary.com/dx9lhxxaa/image/upload/v1711966499/growth_ghrl7q.png",
    },
    {
      name: "Customer Service",
      icon: "https://res.cloudinary.com/dx9lhxxaa/image/upload/v1711966500/management-service_kguxzq.png",
    },
    {
      name: "IT & Networking",
      icon: "https://res.cloudinary.com/dx9lhxxaa/image/upload/v1711966500/technical-support_smr0k7.png",
    },
    {
      name: "Legal",
      icon: "https://res.cloudinary.com/dx9lhxxaa/image/upload/v1711966499/balance_qj92vg.png",
    },
    {
      name: "Engineering & Architecture",
      icon: "https://res.cloudinary.com/dx9lhxxaa/image/upload/v1711966500/prototype_n798w4.png",
    },
    {
      name: "Data Science & Analytics",
      icon: "https://res.cloudinary.com/dx9lhxxaa/image/upload/v1711966499/data_kbthvc.png",
    },
    {
      name: "Internship",
      icon: "https://res.cloudinary.com/dx9lhxxaa/image/upload/v1711966499/certficate_bz4kqf.png",
    },
    {
      name: "Remote",
      icon: "https://res.cloudinary.com/dx9lhxxaa/image/upload/v1711966499/home_jz260o.png",
    },
  ];
  return (
    <div className="my-5 space-y-20">
      <div className="xl:px-[25%] text-center space-y-2">
        <h2 className="text-3xl font-bold text-center">Explore by Category</h2>
        <p className="text-gray-600 text-base dark:text-gray-400">
          Browse jobs by category to view our most popular job titles and
          industries. Find the right position and build your career.
        </p>
      </div>

      <div className="flex flex-row flex-wrap items-center mt-5 px-10 justify-center gap-5">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group flex flex-row items-center justify-center text-center bg-white dark:bg-black/20 dark:backdrop-blur-md	 px-5 py-2 rounded-full shadow-md  hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer hover:shadow-2xl relative border border-transparent dark:border-zinc-800"
          >
            {typeof category.icon === "string" ? (
              <Image
                src={category.icon}
                alt={category.name}
                width={50}
                height={50}
                className="w-8 h-8 dark:invert"
              />
            ) : (
              <category.icon size={50} className="w-8 h-8" />
            )}
            <p className="text-base ml-4">{category.name}</p>
            <IoIosArrowForward className="text-gray-400 group-hover:text-gray-600  dark:group-hover:text-white" />
            <span className="group-hover:opacity-100 block transition duration-500 opacity-0 absolute h-[2px] w-[calc(100%-40px)] -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-orange-400 to-transparent  mx-auto"></span>
            <span className="group-hover:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-[2px] w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategorySection;
