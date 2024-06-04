import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(res: NextRequest) {
  const { email } = await res.json();

  if (!email) {
    return new NextResponse("Place Enter All fileds", { status: 400 });
  }
  const findUser = await prisma.user.findUnique({
    where: {
      email: String(email),
    },
  });
  if (!findUser) {
    return new NextResponse("User not found", { status: 400 });
  }
  // send email
  // send otp to phone number
  return new NextResponse("Email sent", { status: 200 });
}
