import React from "react";

function ForgotPassword() {
  return (
    <div className="w-screen h-screen md:h-screen md:overflow-hidden flex justify-center ">
      <div className="mt-40">
        <div className="space-y-5 ">
          <div>
            <h1 className="text-3xl font-semibold text-center">
              Forgot Password
            </h1>
            <p className="text-base font-medium text-center">
              Enter your email to reset your password.
            </p>
          </div>
          <form className="space-y-4">
            <div className="border-2 flex rounded-lg px-2 focus-within:outline items-center">
              <input
                type="email"
                id="email"
                className="border-none outline-none bg-transparent text-base w-full py-2"
                placeholder="Enter your email "
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
