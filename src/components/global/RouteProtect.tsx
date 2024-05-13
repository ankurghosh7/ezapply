import { cookies } from "next/headers";
import React from "react";
import Jwt from "jsonwebtoken";
const RouteProtect = ({ children }: { children: React.ReactNode }) => {
  const accessToken = cookies().get("accessToken");
  const refreshToken = cookies().get("refreshToken");
  if (accessToken == undefined && refreshToken == undefined && fegg) {
    return <div>Unauthorized</div>;
  }
  return <div>{children}</div>;
};

export default RouteProtect;
