import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();
interface UserDocument extends Document {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    verifyEmail: boolean;
    exprience: string;
    role: string;
    avatar: string;
    files: Map<string, string>;
    verifyPhone: boolean;
    password: string;
    country: string;
    city: string;
    refershToken: string;
    comparePassword(password: string): Promise<boolean>;
    generatRefershToken: (keepLogin: boolean) => string;
    generatAccessToken: () => string;
}
const userSchema = new Schema<UserDocument>(
    {
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        phone: {
            type: String,
            required: true,
            unique: true
        },
        exprience: {
            type: String,
            required: true
        },
        role: {
            type: String,
            default: "jobseeker"
        },
        password: {
            type: String,
            required: true
        },
        avatar: {
            type: String
        },
        files: {
            type: Map,
            of: String
        },
        city: {
            type: String
        },
        country: {
            type: String,
            required: true
        },
        verifyEmail: {
            type: Boolean,
            default: false
        },
        verifyPhone: {
            type: Boolean,
            default: false
        },
        refershToken: {
            type: String
        }
    },
    { timestamps: true }
);

userSchema.pre("save", async function (next: (error?: Error) => void) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (password: string) {
    return await bcrypt.compare(password, this.password);
};
userSchema.methods.generatAccessToken = function () {
    return jwt.sign(
        {
            id: this._id,
            email: this.email,
            name: this.name,
            phone: this.phone
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_TIME
        }
    );
};
userSchema.methods.generatRefershToken = function (keepLogin: boolean = false) {
    return jwt.sign(
        {
            id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: keepLogin
                ? process.env.LONG_LIVED_REFRESH_TOKEN_TIME
                : process.env.REFRESH_TOKEN_TIME
        }
    );
};
export const User = mongoose.model("User", userSchema);
