import { Document } from "mongoose";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
export type forgotpasswordTokrnPayload = {
    email: string;
    id: string;
    phone: string;
};
config();
export function generatForgotPasswordToken({
    user,
    expires
}: {
    user: Document<any, any, any>;
    expires: string;
}) {
    if (!user) {
        throw new Error("User not found");
    }

    const payload: forgotpasswordTokrnPayload = {
        // @ts-expect-error
        email: user.email,
        id: user._id,
        // @ts-expect-error
        phone: user.phone
    };
    return jwt.sign(payload, process.env.FORGOT_PASSWORD_SECRET as string, {
        expiresIn: expires
    });
}
