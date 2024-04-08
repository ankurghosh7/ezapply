import mongoose from "mongoose";

const forgetPasswordSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
    expires: {
        type: Date,
        required: true
    }
});

export const ForgetPassword = mongoose.model(
    "ForgetPassword",
    forgetPasswordSchema
);
