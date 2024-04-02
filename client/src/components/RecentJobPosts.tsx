import Image from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Button } from "./ui/button";
import { HoverEffect } from "./ui/job-card-hover-effect";

interface IRecentJobPosts {
  jobTitle: string;
  company: string;
  location: string;
  salary: string;
  tags: string[];
  image: string;
  jobType: string;
  jobDescription: string;
  datePosted: string;
  deadline: string;
  applyLink: string;
  companyLogo: string;
}
function RecentJobPosts() {
  const recentJobPosts = [
    {
      title: "Sr. Software Engineer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus",
      location: "Mountain View, CA",
      link: "",
      company_name: "Google",
      company_logo:
        "https://images.unsplash.com/photo-1536485255710-1bedfeea2d52?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      createdAt: "2 days ago",
    },
    {
      title: "Sr. Software Engineer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus",
      location: "Mountain View, CA",
      link: "",
      company_name: "Google",
      company_logo:
        "https://images.unsplash.com/photo-1536485255710-1bedfeea2d52?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      createdAt: "2 days ago",
    },
    {
      title: "Sr. Software Engineer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus",
      location: "Mountain View, CA",
      link: "",
      company_name: "Google",
      company_logo:
        "https://images.unsplash.com/photo-1536485255710-1bedfeea2d52?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      createdAt: "2 days ago",
    },
    {
      title: "Sr. Software Engineer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus",
      location: "Mountain View, CA",
      link: "",
      company_name: "Google",
      company_logo:
        "https://images.unsplash.com/photo-1536485255710-1bedfeea2d52?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      createdAt: "2 days ago",
    },
    {
      title: "Sr. Software Engineer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus",
      location: "Mountain View, CA",
      link: "",
      company_name: "Google",
      company_logo:
        "https://images.unsplash.com/photo-1536485255710-1bedfeea2d52?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      createdAt: "2 days ago",
    },
    {
      title: "Sr. Software Engineer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus",
      location: "Mountain View, CA",
      link: "",
      company_name: "Google",
      company_logo:
        "https://images.unsplash.com/photo-1536485255710-1bedfeea2d52?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      createdAt: "2 days ago",
    },
  ];
  return (
    <div className="space-y-10 xl:mt-20 bg-gradient-to-r from-[#eee9f0] dark:from-[#1e1e1e] to-[#e8ecf9] dark:to-[#121213]">
      <div className="w-1/2 mx-auto text-center space-y-2">
        <h2 className="text-3xl font-bold ">
          <span>Recent</span> <span className="text-primary">Job Posts</span>
        </h2>
        <p className="dark:text-zinc-400 text-gray-600 text-base">
          Descover the latest job posts from top companies.
        </p>
      </div>
      {/* <div className="grid lg:grid-cols-3 gap-10">
        <div className="group relative p-5 bg-white hover:bg-primary dark:bg-zinc-900 border border-zinc-500 min-w-40 min-h-60 rounded-xl space-y-4 transition-all duration-300 ease-in-out hover:shadow-lg">
          <div className="flex flex-nowrap flex-row space-x-4 items-center justify-start">
            <Image
              src={
                "https://images.unsplash.com/photo-1536485255710-1bedfeea2d52?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="company logo"
              width={100}
              height={100}
              className="rounded-full w-14 h-14"
            />
            <div>
              <h3 className="text-lg font-semibold group-hover:text-white transition-colors duration-300 ease-in-out">
                Google
              </h3>
              <p className="text-sm font-normal text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 ease-in-out">
                2 days ago
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold group-hover:text-white transition-colors duration-300 ease-in-out">
              Sr. Software Engineer
            </h4>
            <p className="text-sm font-normal text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 ease-in-out">
              Mountain View, CA
            </p>
          </div>

          <p className="text-sm line-clamp-2 group-hover:text-zinc-100 transition-colors duration-300 ease-in-out">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            suscipit pariatur commodi beatae magnam harum saepe laboriosam.
          </p>
          <Button className="group/btn group-hover:bg-white group-hover:text-black transition-colors duration-300 ease-in-out">
            <span>Apply Now</span>
            <IoIosArrowForward className="group-hover/btn:translate-x-1 -translate-x-2 invisible group-hover/btn:visible transition-all duration-300 ease-in-out" />
          </Button>
        </div>
        <div className="group relative p-5 bg-white hover:bg-primary dark:bg-zinc-900 border border-zinc-500 min-w-40 min-h-60 rounded-xl space-y-4 transition-all duration-300 ease-in-out">
          <div className="flex flex-nowrap flex-row space-x-4 items-center justify-start">
            <Image
              src={
                "https://images.unsplash.com/photo-1536485255710-1bedfeea2d52?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="company logo"
              width={100}
              height={100}
              className="rounded-full w-14 h-14"
            />
            <div>
              <h3 className="text-lg font-semibold group-hover:text-white transition-colors duration-300 ease-in-out">
                Google
              </h3>
              <p className="text-sm font-normal text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 ease-in-out">
                2 days ago
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold group-hover:text-white transition-colors duration-300 ease-in-out">
              Sr. Software Engineer
            </h4>
            <p className="text-sm font-normal text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 ease-in-out">
              Mountain View, CA
            </p>
          </div>

          <p className="text-sm line-clamp-2 group-hover:text-zinc-100 transition-colors duration-300 ease-in-out">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            suscipit pariatur commodi beatae magnam harum saepe laboriosam.
          </p>
          <Button className="group/btn group-hover:bg-white group-hover:text-black transition-colors duration-300 ease-in-out">
            <span>Apply Now</span>
            <IoIosArrowForward className="group-hover/btn:translate-x-1 -translate-x-2 invisible group-hover/btn:visible transition-all duration-300 ease-in-out" />
          </Button>
        </div>
        <div className="group relative p-5 bg-white hover:bg-primary dark:bg-zinc-900 border border-zinc-500 min-w-40 min-h-60 rounded-xl space-y-4 transition-all duration-300 ease-in-out">
          <div className="flex flex-nowrap flex-row space-x-4 items-center justify-start">
            <Image
              src={
                "https://images.unsplash.com/photo-1536485255710-1bedfeea2d52?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="company logo"
              width={100}
              height={100}
              className="rounded-full w-14 h-14"
            />
            <div>
              <h3 className="text-lg font-semibold group-hover:text-white transition-colors duration-300 ease-in-out">
                Google
              </h3>
              <p className="text-sm font-normal text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 ease-in-out">
                2 days ago
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold group-hover:text-white transition-colors duration-300 ease-in-out">
              Sr. Software Engineer
            </h4>
            <p className="text-sm font-normal text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 ease-in-out">
              Mountain View, CA
            </p>
          </div>

          <p className="text-sm line-clamp-2 group-hover:text-zinc-100 transition-colors duration-300 ease-in-out">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            suscipit pariatur commodi beatae magnam harum saepe laboriosam.
          </p>
          <Button className="group/btn group-hover:bg-white group-hover:text-black transition-colors duration-300 ease-in-out">
            <span>Apply Now</span>
            <IoIosArrowForward className="group-hover/btn:translate-x-1 -translate-x-2 invisible group-hover/btn:visible transition-all duration-300 ease-in-out" />
          </Button>
        </div>
        <div className="group relative p-5 bg-white hover:bg-primary dark:bg-zinc-900 border border-zinc-500 min-w-40 min-h-60 rounded-xl space-y-4 transition-all duration-300 ease-in-out">
          <div className="flex flex-nowrap flex-row space-x-4 items-center justify-start">
            <Image
              src={
                "https://images.unsplash.com/photo-1536485255710-1bedfeea2d52?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="company logo"
              width={100}
              height={100}
              className="rounded-full w-14 h-14"
            />
            <div>
              <h3 className="text-lg font-semibold group-hover:text-white transition-colors duration-300 ease-in-out">
                Google
              </h3>
              <p className="text-sm font-normal text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 ease-in-out">
                2 days ago
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold group-hover:text-white transition-colors duration-300 ease-in-out">
              Sr. Software Engineer
            </h4>
            <p className="text-sm font-normal text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 ease-in-out">
              Mountain View, CA
            </p>
          </div>

          <p className="text-sm line-clamp-2 group-hover:text-zinc-100 transition-colors duration-300 ease-in-out">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            suscipit pariatur commodi beatae magnam harum saepe laboriosam.
          </p>
          <Button className="group/btn group-hover:bg-white group-hover:text-black transition-colors duration-300 ease-in-out">
            <span>Apply Now</span>
            <IoIosArrowForward className="group-hover/btn:translate-x-1 -translate-x-2 invisible group-hover/btn:visible transition-all duration-300 ease-in-out" />
          </Button>
        </div>
        <div className="group relative p-5 bg-white hover:bg-primary dark:bg-zinc-900 border border-zinc-500 min-w-40 min-h-60 rounded-xl space-y-4 transition-all duration-300 ease-in-out">
          <div className="flex flex-nowrap flex-row space-x-4 items-center justify-start">
            <Image
              src={
                "https://images.unsplash.com/photo-1536485255710-1bedfeea2d52?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="company logo"
              width={100}
              height={100}
              className="rounded-full w-14 h-14"
            />
            <div>
              <h3 className="text-lg font-semibold group-hover:text-white transition-colors duration-300 ease-in-out">
                Google
              </h3>
              <p className="text-sm font-normal text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 ease-in-out">
                2 days ago
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold group-hover:text-white transition-colors duration-300 ease-in-out">
              Sr. Software Engineer
            </h4>
            <p className="text-sm font-normal text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 ease-in-out">
              Mountain View, CA
            </p>
          </div>

          <p className="text-sm line-clamp-2 group-hover:text-zinc-100 transition-colors duration-300 ease-in-out">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            suscipit pariatur commodi beatae magnam harum saepe laboriosam.
          </p>
          <Button className="group/btn group-hover:bg-white group-hover:text-black transition-colors duration-300 ease-in-out">
            <span>Apply Now</span>
            <IoIosArrowForward className="group-hover/btn:translate-x-1 -translate-x-2 invisible group-hover/btn:visible transition-all duration-300 ease-in-out" />
          </Button>
        </div>
        <div className="group relative p-5 bg-white hover:bg-primary dark:bg-zinc-900 border border-zinc-500 min-w-40 min-h-60 rounded-xl space-y-4 transition-all duration-300 ease-in-out">
          <div className="flex flex-nowrap flex-row space-x-4 items-center justify-start">
            <Image
              src={
                "https://images.unsplash.com/photo-1536485255710-1bedfeea2d52?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="company logo"
              width={100}
              height={100}
              className="rounded-full w-14 h-14"
            />
            <div>
              <h3 className="text-lg font-semibold group-hover:text-white transition-colors duration-300 ease-in-out">
                Google
              </h3>
              <p className="text-sm font-normal text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 ease-in-out">
                2 days ago
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold group-hover:text-white transition-colors duration-300 ease-in-out">
              Sr. Software Engineer
            </h4>
            <p className="text-sm font-normal text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 ease-in-out">
              Mountain View, CA
            </p>
          </div>

          <p className="text-sm line-clamp-2 group-hover:text-zinc-100 transition-colors duration-300 ease-in-out">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            suscipit pariatur commodi beatae magnam harum saepe laboriosam.
          </p>
          <Button className="group/btn group-hover:bg-white group-hover:text-black transition-colors duration-300 ease-in-out">
            <span>Apply Now</span>
            <IoIosArrowForward className="group-hover/btn:translate-x-1 -translate-x-2 invisible group-hover/btn:visible transition-all duration-300 ease-in-out" />
          </Button>
        </div>
      </div> */}
      {/* <HoverEffect items={recentJobPosts} /> */}
      <HoverEffect items={recentJobPosts} />
    </div>
  );
}

export default RecentJobPosts;
