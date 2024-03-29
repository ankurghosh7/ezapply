"use client";
import React, { useEffect } from "react";
import BoxRadioBtn from "../ui/boxRadioBtn";
import { RadioGroup } from "../ui/radio-group";
import { IoIosInformationCircle } from "react-icons/io";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { jobSeekerSignupFormSchema } from "@/schemas/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormInput from "../global/FormInput";

function SignupFrom() {
  type jobSeekerSignupForm = z.infer<typeof jobSeekerSignupFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<jobSeekerSignupForm>({
    resolver: zodResolver(jobSeekerSignupFormSchema),
  });

  const onSubmit: SubmitHandler<jobSeekerSignupForm> = (data, event) => {
    event?.preventDefault();
    console.log(data);
  };

  useEffect(() => {
    document.title = "Signup";
  }, []);
  return (
    <form className="w-full " onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-2 space-y-2">
        <div className="flex flex-col space-y-1">
          {/* <label htmlFor="firstName" className="flex items-center space-x-2">
            <span>First Name </span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <IoIosInformationCircle className="text-gray-500" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm">
                    This is the name that will be displayed on your public
                    profile. Most people use their real name.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </label>
          <input
            type="text"
            id="firstName"
            className={`p-2 rounded-lg w-full border-2 border-gray-300 ${
              errors.firstName?.message
                ? "border-red-500 outline-red-500 text-red-500"
                : ""
            }`}
            placeholder="Enter your name"
            autoComplete="name"
            {...register("firstName")}
          />
          {errors.firstName?.message && (
            <p className="text-red-500">{errors.firstName?.message}</p>
          )} */}

          <FormInput
            name="firstName"
            type="text"
            placeholder="Enter your name"
            autoComplete="name"
            error={errors.firstName?.message}
            label="First Name"
            showInfo={true}
            infoString="This is the name that will be displayed on your public profile. Most people use their real name."
            register={register("firstName")}
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            className="p-2 rounded-lg w-full border-2 border-gray-300"
            placeholder="Enter your last name"
            autoComplete="name"
            {...register("lastName")}
          />
          {errors.lastName?.message && (
            <p className="text-red-500">{errors.lastName?.message}</p>
          )}
        </div>
      </div>
      <div className=" space-y-4 pt-5">
        <div className="space-y-1">
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 rounded-lg border"
            autoComplete="email"
            placeholder="Enter your email address"
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="text-red-500">{errors.email?.message}</p>
          )}
        </div>
        <div className="space-y-1">
          <label htmlFor="phone" className="block">
            Phone
          </label>
          <input
            type="number"
            id="phone"
            className="w-full p-2 rounded-lg border"
            autoComplete="mobile tel"
            placeholder="Enter your phone number"
            {...register("phone")}
          />
          {errors.phone?.message && (
            <p className="text-red-500">{errors.phone?.message}</p>
          )}
        </div>
        <div className="space-y-1">
          <label htmlFor="password" className="block">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 rounded-lg border"
            autoComplete="new-password"
            placeholder="Enter your password"
            {...register("password")}
          />
          {errors.password?.message && (
            <p className="text-red-500">{errors.password?.message}</p>
          )}
        </div>
      </div>
      <div>
        <h1>Work Information</h1>
        <div>
          <Controller
            name="workExperience"
            render={({ field }) => (
              <RadioGroup
                className="flex"
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <BoxRadioBtn
                  value="default"
                  id="r1"
                  className="aria-checked:border-orange-500"
                  des="I am looking for a job"
                  title="Frasser"
                  iconImage="https://cdn-icons-png.flaticon.com/512/2924/2924814.png"
                />
                <BoxRadioBtn
                  value="vdvs"
                  id="r1"
                  className="aria-checked:border-orange-500"
                  des="I am looking for a job"
                  title="Frasser"
                  iconImage="https://cdn-icons-png.flaticon.com/512/2924/2924814.png"
                />
              </RadioGroup>
            )}
            control={control}
          />
          {errors.workExperience?.message && (
            <p className="text-red-500">{errors.workExperience?.message}</p>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-lg w-full"
      >
        SignIn
      </button>
    </form>
  );
}

export default SignupFrom;
