import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
//
import { config } from "dotenv";
config();
interface UserDocument extends Document {
    fullName: string;
    email: string;
    verifyEmail: boolean;
    phone: string;
    verifyPhone: boolean;
    exprience: string;
    type: string;
    password: string;
    avatar: string;
    files: Map<string, string>;
    address: Map<string, string>;
    refershToken: string;
    comparePassword(password: string): Promise<boolean>;
    generatRefershToken: () => string;
    generatAccessToken: () => string;
}
const userSchema = new Schema<UserDocument>(
    {
        fullName: {
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
        verifyEmail: {
            type: Boolean,
            default: false
        },
        phone: {
            type: String,
            required: true,
            unique: true
        },
        verifyPhone: {
            type: Boolean,
            default: false
        },
        exprience: {
            type: String,
            required: true
        },
        type: {
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

        address: {
            type: Map,
            of: String
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
userSchema.methods.generatRefershToken = function () {
    return jwt.sign(
        {
            id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_TIME
        }
    );
};
export const User = mongoose.model("User", userSchema);

// user job aplly schema
const UserJobApplySchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        jobId: {
            type: Schema.Types.ObjectId,
            ref: "Job",
            required: true
        },
        status: {
            type: String,
            default: "pending"
        }
    },
    { timestamps: true }
);
export const UserJobApply = mongoose.model("UserJobApply", UserJobApplySchema);
// user job save schema
const jobSaveSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        jobId: {
            type: Schema.Types.ObjectId,
            ref: "Job",
            required: true
        }
    },
    { timestamps: true }
);
export const JobSave = mongoose.model("JobSave", jobSaveSchema);
