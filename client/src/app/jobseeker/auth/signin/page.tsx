import GoogleLoginBtn from "@/components/jobseeker/GoogleLoginBtn";
import SigninFrom from "@/components/jobseeker/SigninFrom";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function SignIn() {
  return (
    <div className="w-screen h-screen md:h-screen md:overflow-hidden px-5 md:px-20 ">
      <header className="py-5  flex justify-between items-center">
        <div className="w-28">
          <Link href={"/"}>
            <Image
              src="https://res.cloudinary.com/dx9lhxxaa/image/upload/v1711114355/ezapply_vno4ml.svg"
              alt="Logo"
              width={100}
              height={100}
              className="invert dark:invert-0 w-full h-full"
            />
          </Link>
        </div>
        <nav>
          <Link href={"/jobseeker/auth/signup"}>
            <Button variant={"ghost"}>Signup</Button>
          </Link>
        </nav>
      </header>
      <main className="h-full md:h-[calc(100vh-80px)]">
        <div className="w-full h-fit md:w-2/5 lg:w-1/3 bg-slate-300 rounded-xl shadow-lg mx-auto p-10">
          <div className="space-y-2 mb-10">
            <h1 className="text-3xl font-semibold text-center">Login</h1>
            <p className="text-base font-medium text-center">
              Hay, welcome back! Please login to your account to continue using
              our services.
            </p>
          </div>
          <div>
            <SigninFrom />
            <p className="relative w-full flex items-center justify-center text-lg  before:w-5 before:h-[1px] before:bg-black before:relative before:top-1/2 before:left-0 before:mx-5  after:w-5 after:relative after:h-[1px] after:bg-black after:top-1/2 after:right-0 after:mx-5">
              or
            </p>
            <div>
              <GoogleLoginBtn />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SignIn;
