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
      name: "IT & Engineering",
      icon: "https://res.cloudinary.com/dx9lhxxaa/image/upload/v1711966500/technical-support_smr0k7.png",
    },
    {
      name: "Legal",
      icon: "https://res.cloudinary.com/dx9lhxxaa/image/upload/v1711966499/balance_qj92vg.png",
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
    <div className="xl:mt-20 space-y-10 bg-gradient-to-r from-[#eee9f0] dark:from-[#1e1e1e] to-[#e8ecf9] dark:to-[#121213] ">
      <div className="xl:px-[25%] text-center space-y-2">
        <h2 className="text-3xl font-bold ">
          <span>Explore by</span> <span className="text-primary">Category</span>
        </h2>
        <p className="dark:text-zinc-400 text-gray-600 text-base">
          Browse jobs by category to view our most popular job titles and
          industries. Find the right position and build your career.
        </p>
      </div>

      <div className="flex flex-row flex-wrap items-center mt-5 px-10 justify-center gap-5">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group flex flex-row items-center justify-center text-center bg-white dark:bg-black/20 dark:backdrop-blur-md	 px-5 py-4 rounded-xl shadow-md  hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer hover:shadow-2xl relative border-2 border-gray-300 dark:border-zinc-800"
          >
            <div className="bg-indigo-400/10 p-2 rounded-full">
              {typeof category.icon === "string" ? (
                <Image
                  src={category.icon}
                  alt={category.name}
                  width={50}
                  height={50}
                  className="w-5 h-5 dark:invert"
                />
              ) : (
                <category.icon size={50} className="w-8 h-8" />
              )}
            </div>
            <p className="text-base ml-4">{category.name}</p>
            <IoIosArrowForward className="text-gray-400 group-hover:text-gray-600  dark:group-hover:text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-2" />
            <span className="group-hover:opacity-100 block transition duration-500 opacity-0 absolute h-[2px] w-[calc(100%-10px)] -bottom-[2px] inset-x-0 bg-gradient-to-r from-transparent via-orange-400 to-transparent  mx-auto"></span>
            <span className="group-hover:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-[2px] w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategorySection;
