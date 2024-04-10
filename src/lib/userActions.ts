"use server"
import prisma from "./prisma";
import { User } from "@prisma/client";
export async function createUser(data: User) {
  try {
    const user = await prisma.user.create({ data: data });
    console.log("User created successfully", user);
    return user;
  } catch (error) {
    console.error(error);
    return error;
  }
}
