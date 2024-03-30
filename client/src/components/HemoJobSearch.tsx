"use client";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { motion } from "framer-motion";
function HemoJobSearch() {
  return (
    <div className="w-full h-[calc(100vh-80px)] flex items-center justify-center relative ">
      <div className="w-fit h-fit bg-white rounded-full flex items-center p-4 select-none relative z-10">
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
            className="w-44 px-2 border-0 focus:outline-none"
          />
        </div>

        <button className="bg-blue-500 text-white p-2 rounded-r-xl">
          Search
        </button>
      </div>
      <div className="absolute w-full h-full overflow-hidden ">
        <div className="absolute mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="w-[90vh] h-[90vh] rounded-full border-2 border-amber-500 relative flex justify-center items-center"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 10,
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
        <motion.div
          className="w-[120vh] h-[120vh] rounded-full border-2 border-amber-500 relative flex justify-center items-center"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 10,
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
  );
}

export default HemoJobSearch;
