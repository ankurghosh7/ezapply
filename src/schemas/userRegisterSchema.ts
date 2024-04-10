import { z } from "zod";
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_file_MIME_TYPES = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/msword",
];
const fileSchema = z.optional(
  z
    .any()
    .refine((files) => {
      return files?.[0]?.size <= MAX_FILE_SIZE;
    }, "Max size is 5MB.")
    .refine(
      (files) => ACCEPTED_file_MIME_TYPES.includes(files?.[0]?.type),
      "Invalid file type, Please upload a PDF or DOC file."
    )
);
export const userRegisterSchema = z.object({
  firstName: z.string().min(3, "First name requires "),
  lastName: z.string().min(3, "Last name requires "),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number requires "),
  password: z.string().min(6, "Password requires at least 6 characters"),
  workExperience: z.string().min(1, "Work experience requires "),
  resume: fileSchema,
  currentCity: z.string().optional(),
});
