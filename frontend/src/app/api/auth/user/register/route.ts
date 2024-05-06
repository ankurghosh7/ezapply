import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import fs from "fs";
export async function POST(request: NextRequest) {
  const data = await request.formData();
  const resume = data.get("resume[]");
  const jsonFormatedData = JSON.stringify(Object.fromEntries(data));
  const {
    email,
    password,
    firstName,
    lastName,
    phone,
    workExperience,
    currentCity,
  } = JSON.parse(jsonFormatedData);
  try {
    // check requered fields are provided
    if (
      [email, password, firstName, lastName, phone, workExperience].some(
        (field) => field === null || field?.trim() === ""
      )
    ) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }
    // check if the user already exists
    // const userExists = await prisma.user.findFirst({
    //   where: {
    //     email: email,
    //   },
    // });
    // if (userExists) {
    //   return NextResponse.json(
    //     { massage: "User already exists" },
    //     { status: 400 }
    //   );
    // }
    // if file is uploaded
    console.log(
      email,
      password,
      firstName,
      lastName,
      phone,
      workExperience,
      currentCity,
      resume
    );
    if (resume) {
      resume.
    }
    // create a new user
    //   const newUser = await prisma.user.create({
    //     data: {
    //       email: email,
    //       password: password,
    //       firstName: firstName,
    //       lastName: lastName,
    //       phone: phone,
    //       workExperience: workExperience,
    //       resume: resumeUrl,
    //       currentCity: currentCity,
    //     },
    //   });
  } catch (error) {
    //   return NextResponse.json(
    //     { message: "Something went wrong", error: error },
    //     { status: 500 }
    //   );
  }

  return NextResponse.json({ message: "User created successfully" });
}
