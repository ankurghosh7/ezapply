import RegisterFrom from "@/components/users/Register";
import React from "react";
import { ToastContainer } from "react-toastify";

function SignUp() {
  return (
    <div className="h-fit w-full ">
      <div className="hidden md:block w-[30%] h-[100vh] fixed bg-slate-500 rounded-r-3xl overflow-hidden">
        mscm;m
      </div>
      <div className="md:pl-[30%] w-full h-fit relative md:mb-10">
        <div className="w-full h-full px-5  lg:px-40 xl:px-60 xl:py-20 z-10 space-y-10">
          <div className="z-10">
            <div className="py-10">
              <h1 className="text-2xl font-medium">Create a new account</h1>
              <p className="text-base">
                Search and apply for jobs with ease. Create a new account to get
                started.
              </p>
            </div>
            <RegisterFrom />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignUp;
