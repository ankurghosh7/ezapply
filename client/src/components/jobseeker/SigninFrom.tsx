"use client";
import React from "react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";
import { Input } from "../ui/input";

function SigninFrom() {
  const [seePassword, setSeePassword] = React.useState(false);
  return (
    <form className="space-y-4">
      <div className="focus-within:outline items-center flex h-11 w-full rounded-lg border-2 border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ">
        <input
          type="email"
          id="email"
          className="border-none outline-none bg-transparent text-base w-full py-2"
          placeholder="Enter your email "
        />
        <Checkbox className="rounded-full select-none cursor-text" disabled />
      </div>
      <div className="focus-within:outline items-center flex h-11 w-full rounded-lg border-2 border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ">
        <input
          type={seePassword ? "text" : "password"}
          id="password"
          className="border-none outline-none bg-transparent text-base w-full py-2"
          placeholder="Enter your password"
        />
        <button
          type="button"
          onClick={() => setSeePassword(!seePassword)}
          className="text-sm font-medium"
        >
          {seePassword ? "Hide" : "Show"}
        </button>
      </div>
      <div className="flex justify-between  items-center">
        <div className="text-base flex items-center space-x-2">
          <Checkbox id="keep_login" className="rounded-full" />
          <label className="font-medium" htmlFor="keep_login">
            Keep me login
          </label>
        </div>
        <div className="text-base">
          <Link
            href="/jobseeker/auth/forgot-password"
            className="text-blue-500"
          >
            Forgot password?
          </Link>
        </div>
      </div>
      <div>
        <Button variant={"default"} type="submit">
          Login
        </Button>
      </div>
    </form>
  );
}

export default SigninFrom;
