import mongoose, { Document, Schema } from "mongoose";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

interface UserDocument {
  first_name: string;
  last_name: string;
  email: string;
  verifyEmail: boolean;
  phone_number: string;
  verifyPhone: boolean;
  work_exprience: string;
  password: string;
  avatar: string;
  files: Map<string, string>;
  city: string;
  country: string;
  refershToken: string;
}
const userSchema = new Schema<UserDocument>(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    verifyEmail: {
      type: Boolean,
      default: false,
    },
    phone_number: {
      type: String,
      required: true,
      unique: true,
    },
    verifyPhone: {
      type: Boolean,
      default: false,
    },
    work_exprience: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    files: {
      type: Map,
      of: String,
    },

    city: {
      type: String,
    },
    country: {
      type: String,
    },
    refershToken: {
      type: String,
    },
  },
  { timestamps: true }
);

// userSchema.pre("save", async function (next: (error?: Error) => void) {
//   if (!this.isModified("password")) return next();
//   this.password = await bcrypt.hash(this.password, 10);
// });

// userSchema.methods.comparePassword = async function (password: string) {
//   return await bcrypt.compare(password, this.password);
// };
// userSchema.methods.generatAccessToken = function () {
//   return jwt.sign(
//     {
//       id: this._id,
//       email: this.email,
//       name: this.name,
//       phone: this.phone,
//     },
//     process.env.ACCESS_TOKEN_SECRET!,
//     {
//       expiresIn: process.env.ACCESS_TOKEN_TIME,
//     }
//   );
// };
// userSchema.methods.generatRefershToken = function () {
//   return jwt.sign(
//     {
//       id: this._id,
//     },
//     process.env.REFRESH_TOKEN_SECRET!,
//     {
//       expiresIn: process.env.REFRESH_TOKEN_TIME,
//     }
//   );
// };
export const User =
  mongoose.models.users || mongoose.model("users", userSchema);
