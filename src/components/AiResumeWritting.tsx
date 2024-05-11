import React from "react";
import { Button } from "./ui/button";

function AiResumeWritting() {
  return (
    <div className="xl:mt-20 flex flex-col lg:flex-row  ">
      <div>
        <div>
          <h3>
            <span className="text-3xl font-bold">AI Resume Writing</span>
          </h3>
          <p className="text-base dark:text-zinc-400 text-gray-600">
            Get a professionally written resume that will help you get noticed
            by recruiters.
          </p>
        </div>
        <Button>
          Create Resume <i className="fas fa-arrow-right"></i>
        </Button>
      </div>
      <div></div>
    </div>
  );
}

export default AiResumeWritting;
