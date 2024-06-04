import prisma from "@/lib/prisma";
import { comparePasswordFn } from "@/lib/hashPassword";
import { generatAccessAndRefershToken } from "@/lib/createToken";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  const data = await req.json();
  const { email, password, keepLogin } = data;
  if ([email, password].some((v) => !v)) {
    return new Response("Place Enter All fileds", { status: 400 });
  }
  const user = await prisma.user.findUnique({
    where: {
      email: String(email),
    },
  });
  if (!user) {
    return new Response("User not found", { status: 400 });
  }
  const matchPassword = await comparePasswordFn(
    String(password),
    user.password
  );
  if (!matchPassword) {
    return new Response("Password not match", { status: 400 });
  }
  const { accessToken, refershToken } = generatAccessAndRefershToken(
    user,
    keepLogin
  );

  cookies().set("accessToken", accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    domain: process.env.DOMAIN,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
    expires: new Date(Date.now() + 60 * 60 * 24 * 7),
    name: "accessToken",
    partitioned: true,
    priority: "high",
    value: accessToken,
  });
  cookies().set("refershToken", refershToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    domain: process.env.DOMAIN,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
    expires: new Date(Date.now() + 60 * 60 * 24 * 7),
    name: "refershToken",
    partitioned: true,
    priority: "high",
    value: refershToken,
  });
  return new NextResponse(
    JSON.stringify({
      status: 200,
      user: user,
      accessToken,
      refershToken,
      massage: "Login Successfull",
    }),

    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
