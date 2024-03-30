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
import { jobSeekerSignupFormSchema } from "@/schemas/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormInput from "../global/FormInput";

function SignupFrom() {
  type jobSeekerSignupForm = z.infer<typeof jobSeekerSignupFormSchema>;
  const [showPassword, setShowPassword] = useState(false);
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
    console.log(data);
  };

  useEffect(() => {
    document.title = "Signup";
  }, []);
  return (
    <FormProvider {...methods}>
      <form className="w-full space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-2 space-y-2 md:space-y-0">
          <div className="">
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
          <div className="">
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
            <label htmlFor="password" className="block">
              Password
            </label>
            <div className="flex focus-within:outline px-2 focus-within:border-transparent bg-transparent border-2 rounded-xl w-full focus:outline-none focus:ring-1 ring-orange-500 focus:ring-offset-2 ring-offset-slate-50  dark:ring-offset-background focus:border-transparent tramsition-all duration-200 ease-in-out ">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-0 flex-1 py-2 border-0 outline-none bg-transparent"
                autoComplete="new-password"
                placeholder="Enter your password"
                {...register("password", { minLength: 6 })}
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
                    className="aria-checked:border-orange-500 rounded-xl border-gray-300"
                    des="I am looking for a job"
                    title="Frasser"
                    iconimage="https://cdn-icons-png.flaticon.com/512/2924/2924814.png"
                  />
                  <BoxRadioBtn
                    value="vdvs"
                    id="r2"
                    className="aria-checked:border-orange-500 rounded-xl border-gray-300"
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
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg w-full"
        >
          SignIn
        </button>
      </form>
    </FormProvider>
  );
}

export default SignupFrom;
