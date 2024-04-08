import React from "react";
import { FcGoogle } from "react-icons/fc";

function GoogleLoginBtn() {
  return (
    <div className="w-full flex ">
      <button className="w-full bg-transparent border border-gray-300 rounded-lg py-2 px-4 flex items-center justify-center space-x-2 hover:bg-sky-400 hover:text-white ">
        <FcGoogle className="w-8 h-8" />
        <span>Continue with Google</span>
      </button>
    </div>
  );
}

export default GoogleLoginBtn;
