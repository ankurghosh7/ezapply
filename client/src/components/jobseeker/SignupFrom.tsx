import React from "react";
import BoxRadioBtn from "../ui/boxRadioBtn";
import { RadioGroup } from "../ui/radio-group";

function SignupFrom() {
  return (
    <form className="w-full  space-y-2 ">
      <div className=" space-y-2">
        <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-2">
          <div className="flex flex-col space-y-1">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              className="p-2 rounded-lg w-full border"
              placeholder="Enter your name"
              autoComplete="name"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              className="p-2 rounded-lg w-full border"
              placeholder="Enter your last name"
              autoComplete="name"
            />
          </div>
        </div>
      </div>
      <div className=" space-y-4">
        <div className="space-y-2">
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
            />
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
            />
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
            />
          </div>
        </div>
      </div>
      <div>
        <h1>Work Information</h1>
        <div>
          <RadioGroup className="flex">
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
        </div>
      </div>
    </form>
  );
}

export default SignupFrom;
