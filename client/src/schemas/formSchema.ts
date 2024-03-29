import { z } from "zod";

export const jobSeekerSignupFormSchema = z.object({
  firstName: z.string().min(3, "First name requires at least 3 characters"),
  lastName: z.string().min(3, "Last name requires at least 3 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number requires at least 10 characters"),
  password: z.string().min(6, "Password requires at least 6 characters"),
  workExperience: z.string().min(1, "Work experience requires "),
});
export const jobSeekerLoginFormSchema = z.object({});
