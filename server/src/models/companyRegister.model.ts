import bcrypt from "bcrypt";
import e from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const companyRegisterSchema = new mongoose.Schema(
    {
        // user details
        userType: {
            type: String,
            enum: ["As a compnay owner", "As a Employee", "As a Agency"],
            required: true
        },
        name: {
            type: String,
            required: [true, "Name is required as per id card"]
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        emailVerified: {
            type: Boolean,
            default: false
        },
        phone: {
            type: String,
            required: [true, "place provied phone number with country code"],
            unique: true
        },
        phoneVerified: {
            type: Boolean,
            default: false
        },
        user_role: {
            type: String,
            required: true
        },

        // company details
        companyName: {
            type: String,
            required: true
        },
        companySize: {
            type: String,
            required: true
        },
        designation: {
            type: String,
            required: true
        },
        pincode: {
            type: String,
            required: [true, "business location pincode is required"]
        },
        password: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        refershToken: {
            type: String
        },

        // payment details
        plan: {
            type: String,
            required: true
        },
        paymentType: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);
export const CompanyRegister = mongoose.model(
    "CompanyRegister",
    companyRegisterSchema
);
let process: NodeJS.Process;
companyRegisterSchema.pre(
    "save",
    async function (next: (error?: Error) => void) {
        if (!this.isModified("password")) return next();
        this.password = await bcrypt.hash(this.password, 12);
    }
);

companyRegisterSchema.methods.comparePassword = async function (
    password: string
): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
};

companyRegisterSchema.methods.generatAccessToken = function (): string {
    return jwt.sign(
        {
            id: this._id,
            email: this.email,
            phone: this.phone
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_TIME
        }
    );
};
companyRegisterSchema.methods.generatRefershToken = function (): string {
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
