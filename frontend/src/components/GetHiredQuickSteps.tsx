import React from "react";
import { IconType } from "react-icons";
import { FaUser } from "react-icons/fa";
import { RiSearchFill } from "react-icons/ri";
import { BriefcaseBusiness, LucideIcon } from "lucide-react";
interface IStep {
  icon: string | IconType | LucideIcon;
  title: string;
  description: string;
  className?: string;
}
function GetHiredQuickSteps() {
  const steps = [
    {
      icon: FaUser,
      title: "Create Profile",
      description:
        "Create a profile with your professional information and career interests.",
      className: "text-orange-500 bg-orange-100",
    },
    {
      icon: RiSearchFill,
      title: "Search & Apply for Jobs",
      description:
        "Apply for jobs that match your career interests and qualifications.",

      className: "text-sky-500 bg-sky-100",
    },
    {
      icon: "",
      title: "Get Interview Call",
      description:
        "Get interviewed by companies that are interested in your profile.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Get Job",
      description:
        "Get hired by companies that are looking for professionals like you.",

      className: "text-green-600 bg-green-100",
    },
  ];
  return (
    <div className="xl:mt-20">
      <div className="xl:w-1/2 mx-auto my-10 text-center space-y-2 ">
        <h2 className="text-3xl font-bold ">
          <span>Get Hired in</span>{" "}
          <span className="text-primary">4 Quick Steps</span>
        </h2>
        <p className="dark:text-zinc-400 text-gray-600 text-base">
          The Quickest & most effective way to get hired of any farms working in
          your career interest ereas in the world.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {steps.map((step: IStep, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 text-center bg-white p-5 rounded-lg shadow-md dark:bg-zinc-800 dark:text-zinc-400"
          >
            <div className="w-fulll h-fit">
              {typeof step.icon === "string" ? (
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-12 h-12 invert"
                />
              ) : (
                <step.icon
                  className={` w-14 h-14 p-3 rounded-full ${step.className}`}
                />
              )}
            </div>
            <h3 className="text-lg font-bold text-primary">{step.title}</h3>
            <p className="text-gray-600 dark:text-zinc-400">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetHiredQuickSteps;
