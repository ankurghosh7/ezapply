"use client";
import React from "react";
import { Button } from "../ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";

const LogoutBtn = ({ id }: { id: string }) => {
  const router = useRouter();
  const handleLogout = () => {
    axios
      .post(
        "/api/v1/user/logout",
        {
          userId: id,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log("User Logout Successfully");
          router.push("/j/auth/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return <Button onClick={handleLogout}>Logout</Button>;
};

export default LogoutBtn;
