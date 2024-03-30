import { z } from "zod";

export const jobSeekerSignupFormSchema = z.object({
  firstName: z.string().min(3, "First name requires "),
  lastName: z.string().min(3, "Last name requires "),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number requires "),
  password: z.string().min(6, "Password requires at least 6 characters"),
  workExperience: z.string().min(1, "Work experience requires "),
});
export const jobSeekerLoginFormSchema = z.object({});
