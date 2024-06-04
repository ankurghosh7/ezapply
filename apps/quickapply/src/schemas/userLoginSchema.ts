import { z } from "zod";
export const userLoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password requires at least 6 characters"),
  keepLogin: z.boolean().default(false),
});
