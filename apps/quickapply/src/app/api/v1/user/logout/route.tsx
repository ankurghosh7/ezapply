import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt, { JwtPayload } from "jsonwebtoken";
import prisma from "@/lib/prisma";

export interface CustomJwtPayload extends JwtPayload {
  id: string;
  email: string;
  phone: string;
}
export async function POST(req: NextRequest) {
  const accessToken = cookies().get("accessToken")?.value;
  const { userId } = await req.json();
  if (!accessToken) {
    return new Response("User not found Place Login", { status: 400 });
  }

  const decode = jwt.verify(
    String(accessToken),
    String(process.env.ACCESS_TOKEN_SECRET)
  ) as CustomJwtPayload | null;

  const { id, email, phone } = decode!;

  if (!email || !id || !phone) {
    return new Response("Invalid access token", { status: 400 });
  }
  if (userId !== id) {
    return new Response("Invalid user", { status: 400 });
  }
  const res = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  if (!res) {
    return new Response("User not found", { status: 400 });
  }
  const updateRes = await prisma.user.update({
    where: {
      id: res.id,
    },
    data: {
      refershToken: null,
    },
  });
  cookies().set("accessToken", "", {
    maxAge: 1,
    domain: process.env.DOMAIN,
    httpOnly: true,
    secure: true,
    path: "/",
    expires: new Date(Date.now() + 1),
    name: "accessToken",
    sameSite: "strict",
    priority: "high",
    partitioned: true,
    value: "",
  });
  cookies().set("refershToken", "", {
    maxAge: 5,
    domain: process.env.DOMAIN,
    httpOnly: true,
    secure: true,
    path: "/",
    expires: new Date(Date.now() + 5),
    name: "refershToken",
    sameSite: "strict",
    priority: "high",
    partitioned: true,
    value: "",
  });
  return new NextResponse(
    JSON.stringify({ message: "User Logout Successfully", status: 200 }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
