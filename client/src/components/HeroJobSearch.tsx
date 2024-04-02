"use client";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { RiSoundModuleLine } from "react-icons/ri";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
function HemoJobSearch() {
  const jobCategories = [
    "Software Developer",
    "Accountant",
    "Nurse",
    "Teacher",
    "Sales Representative",
    "Customer Service Representative",
    "Marketing Manager",
    "Graphic Designer",
    "Electrician",
    "Project Manager",
    "Lawyer",
    "Chef",
    "Financial Analyst",
    "Human Resources Manager",
    "Doctor",
    "Mechanical Engineer",
    "Administrative Assistant",
    "Data Analyst",
    "Construction Worker",
    "Social Worker",
    "Retail Store Manager",
    "Pharmacist",
    "IT Support Specialist",
    "Real Estate Agent",
    "Web Developer",
    "Biomedical Engineer",
    "Police Officer",
    "Event Planner",
    "Aerospace Engineer",
    "Occupational Therapist",
    "Veterinarian",
    "Journalist",
    "Financial Advisor",
    "Dental Hygienist",
    "Software Engineer",
    "Artist",
    "Librarian",
    "Physical Therapist",
    "Registered Nurse",
    "Business Analyst",
    "Environmental Scientist",
    "Public Relations Specialist",
    "Executive Assistant",
    "Architect",
    "Forensic Scientist",
    "Radiologist",
    "Interior Designer",
    "Personal Trainer",
    "Social Media Manager",
    "Speech-Language Pathologist",
    "Civil Engineer",
    "Chemist",
    "Pharmacist Technician",
    "Occupational Health and Safety Specialist",
    "Insurance Agent",
    "Interpreter/Translator",
    "Film Director",
    "Musician",
    "Zoologist",
    "Fashion Designer",
  ];
  return (
    <div className="w-full h-[calc(100vh-80px)] relative  overflow-visible overflow-x-clip overflow-ellipsis">
      <div className="text-center space-y-20 py-24 z-10">
        <div className="space-y-4">
          <h1 className="xl:text-5xl text-center font-bold space-x-2">
            <span>
              Search, Apply & <br /> Get Your
            </span>
            <span className="text-primary">Dream Job</span>
          </h1>
          <p className="dark:text-zinc-400 text-gray-600 text-base">
            Start your career with us. We have 3000+ job offers for you!
          </p>
        </div>
        <div className="flex flex-row space-x-2 z-10 items-center justify-center">
          <div className="w-fit h-fit bg-white rounded-full flex items-center p-4 select-none relative z-10 shadow-md">
            <div className="flex space-x-2 items-center">
              <FiSearch className="text-gray-500 text-2xl" />
              <input
                type="text"
                placeholder="Job title or keyword"
                className="w-52 px-2 border-0 border-r-2 focus:outline-none border-gray-300 rounded-l-xl"
              />
            </div>
            <div>
              <select
                name="experience"
                id="experience"
                className="px-2 border-0 focus:outline-none border-r-2 border-gray-300"
              >
                <option value="frasher">Frasher</option>
                <option value="1"></option>
                <option value="engineering">Engineering</option>
                <option value="health">Health</option>
                <option value="finance">Finance</option>
                <option value="education">Education</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className="flex items-center px-2">
              <GrLocation className="text-gray-500 text-2xl font-medium" />
              <input
                type="text"
                placeholder="Location"
                className="w-36 px-2 border-0 focus:outline-none"
              />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <RiSoundModuleLine className="text-xl cursor-pointer border-none focus:outline-none dark:text-black" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Button className="bg-blue-500 text-white px-8 rounded-full shadow-md cursor-pointer z-10">
            Search
          </Button>
        </div>
      </div>
      <div className="overflow-x-hidden bg-transparent z-10 my-10 absolute bottom-0 space-y-5">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [10, "-100%"], // Keyframes for the animation
          }}
          transition={{
            repeat: Infinity, // Repeat the animation infinitely
            duration: 100, // Animation duration
            ease: "linear", // Linear easing for continuous motion
          }}
        >
          {jobCategories.map((category, index) => (
            <div
              className="flex-none py-2 px-4 rounded-full bg-white dark:bg-gray-900 mx-4 shadow-md border border-gray-300 dark:border-gray-600 cursor-pointer hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
              key={index}
            >
              {category}
            </div>
          ))}
        </motion.div>
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["-100%", 0, 1], // Keyframes for the animation
          }}
          transition={{
            repeat: Infinity, // Repeat the animation infinitely
            duration: 100, // Animation duration
            ease: "linear", // Linear easing for continuous motion
          }}
        >
          {jobCategories.map((category, index) => (
            <div
              className="flex-none py-2 px-4 rounded-full bg-white dark:bg-gray-900 mx-4 shadow-md border border-gray-300 dark:border-gray-600 cursor-pointer hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
              key={index}
            >
              {category}
            </div>
          ))}
        </motion.div>
      </div>
      <div className="absolute w-full h-full top-0 ">
        <div className="absolute mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 overflow-visible">
          <motion.div
            className="w-[90vh] h-[90vh] rounded-full border-2 border-gray-300 dark:border-gray-600 relative flex justify-center items-center"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-10 h-10 rounded-full bg-white absolute top-0 left-1/2 -translate-y-5"></div>
            <div className="w-10 h-10 rounded-full bg-white absolute bottom-0 left-1/2 translate-y-5"></div>
            <div className="w-20 h-20 rounded-full bg-white absolute top-1/2 left-0 -translate-x-10"></div>
            <div className="w-16 h-16 rounded-full bg-white absolute top-1/2 right-0 translate-x-7"></div>
          </motion.div>
        </div>
        <div className="absolute mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 overflow-visible">
          <motion.div
            className="w-[140vh] h-[140vh] rounded-full border-2 border-gray-300 dark:border-gray-600 relative flex justify-center items-center "
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 17,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-10 h-10 rounded-full bg-white absolute top-0 left-1/2 -translate-y-5"></div>
            <div className="w-10 h-10 rounded-full bg-white absolute bottom-0 left-1/2 translate-y-5"></div>
            <div className="w-20 h-20 rounded-full bg-white absolute top-1/2 left-0 -translate-x-10"></div>
            <div className="w-16 h-16 rounded-full bg-white absolute top-1/2 right-0 translate-x-7"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HemoJobSearch;
