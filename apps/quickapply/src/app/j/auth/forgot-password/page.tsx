"use client";
import React from "react";
import { userLoginSchema } from "@/schemas/userLoginSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
function ForgotPassword() {
  type jobseekerForgotPasswordForm = z.infer<
    typeof userLoginSchema
  >;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<jobseekerForgotPasswordForm>({
    resolver: zodResolver(userLoginSchema),
  });
  const onSubmit: SubmitHandler<jobseekerForgotPasswordForm> = (
    data,
    event
  ) => {
    event?.preventDefault();
    console.log("clicked");
    console.log(data);
  };
  return (
    <div className="w-screen h-screen md:h-screen md:overflow-hidden flex justify-center ">
      <div className="mt-40">
        <div className="space-y-5 ">
          <div>
            <h1 className="text-3xl font-semibold text-center">
              Forgot Password
            </h1>
            <p className="text-base font-medium text-center text-gray-500 dark:text-zinc-400">
              Enter your email to reset your password.
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className=" items-center">
              <div className="flex w-full items-center border-input dark:ring-offset-background bg-transparent px-3 py-2 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-within::outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 rounded-lg ring-offset-[#e9ebf6] text-base h-11 border-2 focus-within:border-transparent ">
                <input
                  type="email"
                  id="email"
                  className="w-0 flex-1 py-2 border-0 outline-none bg-transparent focus:outline-none"
                  placeholder="Enter your email "
                  {...register("email")}
                />
                <Checkbox
                  className="rounded-full select-none cursor-text"
                  disabled
                />
              </div>
              {errors.email?.message && (
                <p className="text-red-500 text-sm">{errors.email?.message}</p>
              )}
            </div>

            <Button type="submit" className="w-full">
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
