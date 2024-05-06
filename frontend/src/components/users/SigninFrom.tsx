"use client";
import React from "react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { userLoginSchema } from "@/schemas/userLoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

function SigninFrom() {
  type jobSeekerLoginForm = z.infer<typeof userLoginSchema>;
  const [seePassword, setSeePassword] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<jobSeekerLoginForm>({
    resolver: zodResolver(userLoginSchema),
  });
  const onSubmit: SubmitHandler<jobSeekerLoginForm> = (data, event) => {
    event?.preventDefault();
    console.log("clicked");
    console.log(data);
  };
  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="flex w-full items-center border-input dark:ring-offset-background bg-transparent px-3 py-2 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-within::outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 rounded-lg ring-offset-[#e9ebf6] text-base h-11 border-2 focus-within:border-transparent ">
          <input
            type="email"
            id="email"
            className="border-none outline-none bg-transparent text-base w-full py-2"
            placeholder="Enter your email "
            {...register("email")}
            autoComplete="email"
          />
          <Checkbox className="rounded-full select-none cursor-text" disabled />
        </div>
        {errors.email?.message && (
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        )}
      </div>
      <div>
        <div className="flex w-full items-center  border-input dark:ring-offset-background bg-transparent px-3 py-2 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-within::outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 rounded-lg ring-offset-[#e9ebf6] text-base h-11 border-2 focus-within:border-transparent ">
          <input
            type={seePassword ? "text" : "password"}
            id="password"
            className="border-none outline-none bg-transparent text-base w-full py-2"
            placeholder="Enter your password"
            {...register("password")}
            autoComplete="current-password"
          />
          <div
            onClick={() => setSeePassword(!seePassword)}
            className="text-sm font-medium cursor-pointer"
          >
            {seePassword ? "Hide" : "Show"}
          </div>
        </div>
        {errors.password?.message && (
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
        )}
      </div>
      <div className="flex justify-between  items-center">
        <div className="text-base flex items-center space-x-2 w-fit">
          <Checkbox
            id="keep_login"
            className="rounded-full"
            {...register("keepLogin")}
          />
          <label className="font-medium w-fit" htmlFor="keep_login">
            Keep me login
          </label>
        </div>
        <div className="text-base w-fit text-right">
          <Link
            href="/jobseeker/auth/forgot-password"
            className="text-neutral-500"
          >
            Forgot password?
          </Link>
        </div>
      </div>
      <Button type="submit" className="w-full text-base h-11">
        Login
      </Button>
    </form>
  );
}

export default SigninFrom;
