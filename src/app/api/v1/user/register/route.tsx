// export const dynamic = "force-dynamic"; // defaults to auto
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { S3 } from "@/utils/r2Config";
import prisma from "@/lib/prisma";
import { generatAccessAndRefershToken } from "@/utils/createToken";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { hashPasswordFn } from "@/utils/hashPassword";

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const {
    email,
    password,
    firstName,
    lastName,
    phone,
    country,
    exprience,
    city,
  } = Object.fromEntries(data);
  if (
    [email, password, firstName, lastName, phone, exprience, country].some(
      (v) => !v
    )
  ) {
    return new Response("Place Enter All fileds", { status: 400 });
  }
  const file = data.get("resume") as File | null;
  let key: string | null = null;

  if (file !== null) {
    key = `${Date.now()}_${email}_${file.name}`;
    const reader = await file.arrayBuffer();
    const command = new PutObjectCommand({
      Body: Buffer.from(reader),
      Bucket: "ezapply",
      Key: key,
      Metadata: {
        email: String(email),
        firstName: String(firstName),
        lastName: String(lastName),
      },
      ContentType: "application/pdf",
    });
    const res = await S3.send(command);
  }

  const hashPassword = hashPasswordFn(String(password));

  const newUserCreate = await prisma.user.create({
    data: {
      email: String(email),
      password: hashPassword,
      firstName: String(firstName),
      lastName: String(lastName),
      phoneNumber: String(phone),
      country: String(country),
      workExprience: String(exprience),
      city: String(city),
    },
  });
  if (!newUserCreate) {
    return new Response("User not created", { status: 400 });
  }
  if (key !== null) {
    await prisma.file.create({
      data: {
        key: key,
        user: {
          connect: {
            id: newUserCreate.id,
          },
        },
      },
    });
  }

  const { accessToken, refershToken } =
    generatAccessAndRefershToken(newUserCreate);

  const findUserAndRemovePassword = await prisma.user.findUnique({
    where: {
      id: newUserCreate.id,
    },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      phoneNumber: true,
      country: true,
      workExprience: true,
      city: true,
      avatar: true,
      verifyEmail: true,
      verifyPhone: true,
      role: true,
      files: true,
      job_applications: true,
    },
  });
  cookies().set("accessToken", accessToken, {
    maxAge: 60 * 60 * 24,
    domain: process.env.DOMAIN,
    httpOnly: true,
    secure: true,
    path: "/",
    expires: new Date(Date.now() + 60 * 60 * 24),
    name: "accessToken",
    sameSite: "strict",
    priority: "high",
    partitioned: true,
    value: accessToken,
  });
  cookies().set("refershToken", refershToken, {
    maxAge: 60 * 60 * 24 * 7,
    domain: process.env.DOMAIN,
    httpOnly: true,
    secure: true,
    path: "/",
    expires: new Date(Date.now() + 60 * 60 * 24 * 7),
    name: "refershToken",
    sameSite: "strict",
    priority: "high",
    partitioned: true,
    value: refershToken,
  });
  return new NextResponse(
    JSON.stringify({
      user: findUserAndRemovePassword,
      accessToken,
      refershToken,
      massage: "User Created Successfully",
      success: true,
    }),
    {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
