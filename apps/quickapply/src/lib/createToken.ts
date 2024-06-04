import prisma from "@/lib/prisma";
import { User } from "@prisma/client";
import jwt from "jsonwebtoken";
export function generatAccessAndRefershToken(
  user: User,
  keppLogin: boolean = false
) {
  const accessToken = jwt.sign(
    {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      phone: user.phoneNumber,
    },
    process.env.ACCESS_TOKEN_SECRET as string,
    {
      expiresIn: keppLogin
        ? (process.env.KEEP_ME_LOGGED_IN_EXPIRE as string)
        : (process.env.ACCESS_TOKEN_EXPIRE as string),
    }
  );
  const refershToken = jwt.sign(
    {
      id: user.id,
    },
    process.env.REFRESH_TOKEN_SECRET as string,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRE as string,
    }
  );
  prisma.user
    .update({
      where: {
        id: user.id,
      },
      data: {
        refershToken: refershToken,
      },
    })
    .then((data) => {
      if (!data) {
        return new Response("User not updated", { status: 400 });
      }
      return data;
    })
    .catch((err) => {
      return new Response("User not updated", { status: 400 });
    });
  return {
    accessToken,
    refershToken,
  };
}
