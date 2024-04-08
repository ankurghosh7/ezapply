"use client";
import React, { useEffect, useState } from "react";
import BoxRadioBtn from "../ui/boxRadioBtn";
import { RadioGroup } from "../ui/radio-group";
import {
  useForm,
  SubmitHandler,
  Controller,
  FormProvider,
} from "react-hook-form";
import { jobSeekerSignupFormSchema } from "@/schemas/zodFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormInput from "../global/FormInput";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";
import { User } from "@/models/user.model";

function SignupFrom() {
  type jobSeekerSignupForm = z.infer<typeof jobSeekerSignupFormSchema>;
  const [showPassword, setShowPassword] = useState(false);
  const [workExperience, setWorkExperience] = useState<string>("" as string);
  const methods = useForm<jobSeekerSignupForm>({
    resolver: zodResolver(jobSeekerSignupFormSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = methods;

  const onSubmit: SubmitHandler<jobSeekerSignupForm> = (data, event) => {
    event?.preventDefault();
    const file = data.resume[0];
  };
  const getExprienceValue = (value: string) => {
    console.log(value);
    setWorkExperience(value);
  };
  useEffect(() => {
    document.title = "Signup";
  }, []);
  return (
    <FormProvider {...methods}>
      <form className="w-full space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-2 space-y-2 md:space-y-0">
          <div className="space-y-2">
            <FormInput
              placeholder="Enter your name"
              error={errors.firstName?.message}
              label="First Name"
              showInfo={true}
              infoString="This is the name that will be displayed on your public profile. Most people use their real name."
              name="firstName"
              id="first_name"
              type="text"
            />
          </div>
          <div className="space-y-2">
            <FormInput
              name="lastName"
              type="text"
              placeholder="Enter your last name"
              id="last_name"
              error={errors.lastName?.message}
              label="Last Name"
              showInfo={false}
            />
          </div>
        </div>
        <div className=" space-y-5">
          <div className="space-y-1">
            <FormInput
              name="email"
              type="email"
              placeholder="Enter your email address"
              id="email"
              error={errors.email?.message}
              label="Email"
              showInfo={true}
              infoString="This is the email address we will use to communicate with you and send you notifications."
            />
          </div>
          <div className="space-y-1">
            <FormInput
              name="phone"
              type="number"
              placeholder="Enter your phone number"
              id="phone_number"
              error={errors.phone?.message}
              label="Phone"
              showInfo={true}
              infoString="Place enter valid phone number for verification and contact purposes."
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <div
              className={`flex w-full  border-input dark:ring-offset-background bg-transparent px-3 py-2 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-within::outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 rounded-lg ring-offset-[#e9ebf6] text-base h-11 border focus-within:border-transparent ${
                errors.password?.message ? "border-red-500" : "border-gray-300"
              }`}
            >
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-0 flex-1 py-2 border-0 outline-none bg-transparent"
                autoComplete="new-password"
                placeholder="Enter your password"
                {...register("password")}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-sm font-medium select-none border-none outline-none focus:outline-none"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password?.message && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium">Work Information</p>
          <div>
            <Controller
              name="workExperience"
              render={({ field }) => (
                <RadioGroup
                  className="flex"
                  onValueChange={(e) => {
                    getExprienceValue(e);
                    field.onChange(e);
                  }}
                  defaultValue={field.value}
                >
                  <BoxRadioBtn
                    value="exprienced"
                    id="r1"
                    className="aria-checked:border-primary rounded-xl border-gray-300"
                    des="I am looking for a job"
                    title="Exprienced"
                    iconimage="https://cdn-icons-png.flaticon.com/512/2924/2924814.png"
                  />
                  <BoxRadioBtn
                    value="frasher"
                    id="r2"
                    className="aria-checked:border-primary rounded-xl border-gray-300"
                    des="I am looking for a job"
                    title="Frasser"
                    iconimage="https://cdn-icons-png.flaticon.com/512/2924/2924814.png"
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
        {workExperience === "exprienced" && (
          <div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <label htmlFor="picture" className="text-base font-medium">
                Upload Resume
              </label>
              <Input id="picture" type="file" className="rounded-full" />
            </div>
          </div>
        )}
        {workExperience === "frasher" && (
          <>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <label
                htmlFor="picture"
                className="text-sm font-medium space-x-2"
              >
                <span> Upload Resume</span>
                <span className="text-gray-500 dark:text-zinc-400">
                  (optional)
                </span>
              </label>
              <Input id="picture" type="file" className="rounded-full" />
            </div>
            <div className="space-y-2">
              <FormInput
                id="current_city"
                type="text"
                name="current-city"
                label="Current city"
                placeholder="Enter your current city"
                error={errors.currentCity?.message}
                showInfo={true}
                infoString="Your current city will help us to show you the most relevant job"
              />
            </div>
          </>
        )}
        <Button type="submit" className="text-white rounded-lg w-full">
          SignIn
        </Button>
      </form>
    </FormProvider>
  );
}

export default SignupFrom;
