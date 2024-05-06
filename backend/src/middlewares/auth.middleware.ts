import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import type { forgotpasswordTokrnPayload } from "../utils/ForgotPasswordTokenGenerator.js";
export const varifyJWT = AsyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const token =
                req.cookies?.accessToken ||
                // @ts-expect-error
                req.header("Authorization").replace("Bearer ", "");
            if (!token) {
                return next(new ApiError(401, "Unauthorized Access"));
            }

            const decoded = jwt.verify(
                token,
                "vo2Fuf05wU29zayglasS6Cx5uvWu5PtW"
            );
            console.log("decoded", decoded);
            // @ts-expect-error
            const user = await User.findById(decoded?.id).select(
                "-password -refershToken"
            );
            if (!user) {
                return next(new ApiError(401, "Invalid Access Token"));
            }
            // @ts-expect-error
            req.user = user;
            next();
        } catch (error: any) {
            return next(
                new ApiError(401, "Unauthorized Access" + error?.message)
            );
        }
    }
);

export const verifyResetTokon = AsyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("req.params", req.query);

            const { token } = req.query;
            console.log("token", token);

            if (!token) {
                return next(new ApiError(401, "Unauthorized Access"));
            }
            const decoded: forgotpasswordTokrnPayload | jwt.JwtPayload =
                // @ts-expect-error
                jwt.verify(token, process.env.FORGOT_PASSWORD_SECRET);
            console.log("decoded", decoded);
            const user = await User.findOne({
                $or: [
                    { email: decoded?.email },
                    { phone: decoded?.phone },
                    { _id: decoded?.id }
                ]
            });
            if (!user) {
                return next(new ApiError(401, "Invalid Access Token"));
            }
            // @ts-expect-error
            req.user = user;
            next();
        } catch (error: any) {
            return next(
                new ApiError(401, "Unauthorized Access" + error?.message)
            );
        }
    }
);

export const varifyAdmin = AsyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        // @ts-expect-error
        if (req.user?.role !== "admin") {
            return next(new ApiError(401, "Unauthorized Access"));
        }
        next();
    }
);
