import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadImage } from "../utils/Cloudinary.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";
import { User } from "../models/user.model.js";
import { CookieOptions, resetPasswordTemplate } from "../constants.js";
import { generatAccessAndRefershToken } from "../utils/TokenGenerator.js";
import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
// import { sendMail } from "../utils/SendEmail.js";
// import handlebars from "handlebars";
import {
    forgotpasswordTokrnPayload,
    generatForgotPasswordToken
} from "../utils/ForgotPasswordTokenGenerator.js";
import { ForgetPassword } from "../models/forgetPassword.model.js";

// const template = handlebars.compile(resetPasswordTemplate);
interface MulterRequest extends Request {
    files: any;
    file: any;
}
interface reqType {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    workExperience: string;
    country: string;
    city: string;
}

const userRegister = AsyncHandler(async (req: Request, res: Response) => {
    const {
        firstName,
        lastName,
        email,
        phone,
        password,
        workExperience,
        country,
        city
    }: reqType = req.body;
    if (
        [
            firstName,
            lastName,
            email,
            phone,
            password,
            workExperience,
            country
        ].some((field) => field?.trim() === "")
    ) {
        return res
            .status(400)
            .json(new ApiError(400, "All fields are required"));
    }
    const existUser = await User.findOne({
        $or: [{ email }, { phone }]
    });
    if (existUser) {
        return res.status(400).json(new ApiError(400, "User Already Exist"));
    }

    const file = req.file;
    let fileUrl: string | undefined = undefined;
    if (file) {
        const fileLocalPath = file?.path;
        const uploadRes = await uploadImage(fileLocalPath);
        if (uploadRes) {
            fileUrl = uploadRes.url;
        }
    }

    const createUser = await User.create({
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        password,
        exprience: workExperience,
        country,
        city,
        role: "jobseeker",
        files: {
            resume: fileUrl
        }
    });
    if (!createUser) {
        throw new ApiError(
            500,
            "Something went wrong while registering the user"
        );
    }
    const { accessToken, refershToken } = await generatAccessAndRefershToken(
        createUser._id,
        User
    );
    // email verification
    // phone verification
    const newRegisterUser = await User.findById(createUser._id).select(
        "-password -refershToken"
    );
    if (!newRegisterUser) {
        throw new ApiError(500, "Something went wrong while Getting the user");
    }
    return res
        .status(201)
        .cookie("refreshToken", refershToken, CookieOptions)
        .cookie("accessToken", accessToken, CookieOptions)
        .json(
            new ApiResponse(
                201,
                { user: newRegisterUser, accessToken, refershToken },
                "User Registered Successfully"
            )
        );
});

const userLogin = AsyncHandler(async (req: Request, res: Response) => {
    const {
        email,
        password,
        keepLogin
    }: { email: string; password: string; keepLogin: boolean } = req.body;
    if (!email || !password) {
        return res
            .status(400)
            .json(new ApiError(400, "Email and Password are required"));
    }
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json(new ApiError(404, "User Not Found"));
    }
    // verify user email
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return res.status(401).json(new ApiError(401, "Invalid Password"));
    }

    const { accessToken, refershToken } = await generatAccessAndRefershToken(
        user._id,
        User,
        keepLogin
    );
    const lockedInUser = await User.findById(user._id).select(
        "-password -refershToken"
    );
    console.log(lockedInUser);
    return res
        .status(200)
        .cookie("refreshToken", refershToken, CookieOptions)
        .cookie("accessToken", accessToken, CookieOptions)
        .json(
            new ApiResponse(
                200,
                {
                    user: lockedInUser,
                    accessToken,
                    refershToken
                },
                "User Logged In Successfully"
            )
        );
});
const userLogout = AsyncHandler(async (req: Request, res: Response) => {
    // const user = req.body;
    await User.findByIdAndUpdate(
        //@ts-expect-error
        req.user?._id,
        {
            $unset: {
                refershToken: 1
            }
        },
        {
            new: true
        }
    );
    return res
        .status(200)
        .clearCookie("refreshToken", CookieOptions)
        .clearCookie("accessToken", CookieOptions)
        .json(new ApiResponse(200, null, "User Logged Out Successfully"));
});

// const refreshAccessToken = AsyncHandler(async (req: Request, res: Response) => {
//     const refershToken: string =
//         req.cookies?.refreshToken || req.body?.refreshToken;
//     if (!refershToken) {
//         return res.status(401).json(new ApiError(401, "Unauthorized request"));
//     }
//     try {
//         const decoded = jwt.verify(
//             refershToken,
//             process.env.REFRESH_TOKEN_SECRET
//         );
//         if (!decoded) {
//             return res
//                 .status(401)
//                 .json(new ApiError(401, "Unauthorized Access Token"));
//         }

//         const user = await User.findById(decoded?.id);
//         if (!user) {
//             return res.status(401).json(new ApiError(401, "User Not Found"));
//         }
//         if (user.refershToken !== refershToken) {
//             return res
//                 .status(401)
//                 .json(new ApiError(401, "Invalid Access Token"));
//         }
//         const { accessToken: newAccessToken, refershToken: newRefershToken } =
//             await generatAccessAndRefershToken(user._id, User);
//         res.status(200)
//             .cookie("refreshToken", newRefershToken, CookieOptions)
//             .cookie("accessToken", newAccessToken, CookieOptions)
//             .json(
//                 new ApiResponse(
//                     200,
//                     {
//                         accessToken: newAccessToken,
//                         refershToken: newRefershToken
//                     },
//                     "Access Token Refresh Successfully"
//                 )
//             );
//     } catch (error) {
//         return res.status(401).json(new ApiError(401, "Invalid Access Token"));
//     }
// });
// const changePassword = AsyncHandler(async (req: Request, res: Response) => {
//     const { oldPassword, newPassword } = req.body;
//     if (!oldPassword || !newPassword) {
//         return res
//             .status(400)
//             .json(new ApiError(400, "Old and New Password are required"));
//     }
//     // @ts-expect-error
//     const user = await User.findById(req.user?._id);
//     if (!user) {
//         return res.status(404).json(new ApiError(404, "User Not Found"));
//     }
//     const isMatch = await user.comparePassword(oldPassword);
//     if (!isMatch) {
//         return res.status(401).json(new ApiError(401, "Invalid Old Password"));
//     }
//     user.password = newPassword;
//     await user.save({
//         validateBeforeSave: false
//     });
//     return res
//         .status(200)
//         .json(new ApiResponse(200, null, "Password Changed Successfully"));
// });
// const changePhone = AsyncHandler(async (req: Request, res: Response) => {
//     // verify user phone
//     const { phone } = req.body;
//     if (!phone) {
//         return res.status(400).json(new ApiError(400, "Phone is required"));
//     }
//     // @ts-expect-error
//     const user = await User.findById(req.user._id);
//     if (!user) {
//         return res.status(404).json(new ApiError(404, "User Not Found"));
//     }
//     user.phone = phone;
//     await user.save({
//         validateBeforeSave: false
//     });
//     return res
//         .status(200)
//         .json(new ApiResponse(200, null, "Phone Changed Successfully"));
// });
// const changeEmail = AsyncHandler(async (req: Request, res: Response) => {
//     // verify old email
//     const { newEmail } = req.body;
//     // @ts-expect-error
//     const user = await User.findById(req.user._id);
//     if (!user) {
//         return res.status(404).json(new ApiError(404, "User Not Found"));
//     }
//     user.email = newEmail;
//     await user.save({
//         validateBeforeSave: false
//     });
//     return res
//         .status(200)
//         .json(new ApiResponse(200, null, "Email Changed Successfully"));
// });

// const updateUserAvatar = AsyncHandler(async (req: Request, res: Response) => {
//     const avatarFile = (req as MulterRequest).file;
//     console.log(avatarFile.path);
//     if (!avatarFile) {
//         return res.status(400).json(new ApiError(400, "Avatar is required"));
//     }

//     const responce = await uploadImage(avatarFile.path);
//     const user = await User.findByIdAndUpdate(
//         // @ts-expect-error
//         req.user?._id,
//         {
//             $set: {
//                 // @ts-expect-error
//                 avater: responce.url
//             }
//         },
//         {
//             new: true
//         }
//     ).select("-password -refershToken");

//     return res
//         .status(200)
//         .json(new ApiResponse(200, user, "Avatar Changed Successfully"));
// });

// const forgetPasswordEmail = AsyncHandler(
//     async (req: Request, res: Response) => {
//         const { email } = req.body;
//         if (!email) {
//             return res.status(400).json(new ApiError(400, "Email is required"));
//         }
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(404).json(new ApiError(404, "User Not Found"));
//         }
//         const resetToken = generatForgotPasswordToken({
//             user,
//             expires: "10m"
//         });
//         ForgetPassword.create({
//             type: "jobseeker",
//             email: user.email,
//             token: resetToken,
//             expires: new Date(Date.now() + 10 * 60 * 1000)
//         });
//         const resetPasswordLink = `http://localhost:5173/auth/reset-password?token=${resetToken}`;
//         console.log(resetPasswordLink);

//         // const html = template({
//         //     resetPasswordLink
//         // });
//         // const responce = sendMail.enqueue({
//         //     mail: email,
//         //     subject: "Password Reset",
//         //     html
//         // });
//         return res
//             .status(200)
//             .json(
//                 new ApiResponse(200, { responce }, "Reset Password Email Sent")
//             );
//     }
// );
// const validateForgotPasswordPage = (
//     req: Request,
//     res: Response,
//     next: NextFunction
// ) => {
//     // @ts-expect-error
//     const user = req.user;
//     if (!user) {
//         return res.status(401).json(new ApiError(401, "Unauthorized Access"));
//     }
//     return res.status(200).json(new ApiResponse(200, user, "User Valid"));
// };
// const resetPassword = AsyncHandler(async (req: Request, res: Response) => {
//     try {
//         // @ts-expect-error
//         const user = req.user;
//         const { password } = req.body;
//         user.password = password;
//         await user.save({
//             validateBeforeSave: false
//         });
//         return res
//             .status(200)
//             .json(new ApiResponse(200, null, "Password Reset"));
//     } catch (error) {}
// });
// const addFiles = AsyncHandler(async (req: Request, res: Response) => {
//     const { fileType } = req.body;
//     const file = (req as MulterRequest).file;
//     if (!file) {
//         return res.status(400).json(new ApiError(400, "File is required"));
//     }
//     const responce = await uploadImage(file.path);
//     if (!responce) {
//         return res
//             .status(500)
//             .json(
//                 new ApiError(
//                     500,
//                     "Something went wrong while uploading the file"
//                 )
//             );
//     }
//     const user = await User.findByIdAndUpdate(
//         // @ts-expect-error
//         req.user?._id,
//         {
//             $set: {
//                 files: {
//                     [fileType]: responce.url
//                 }
//             }
//         },
//         {
//             new: true
//         }
//     ).select("-password -refershToken");
//     return res
//         .status(201)
//         .json(new ApiResponse(200, user, "File Added Successfully"));
// });
// const jobSave = AsyncHandler(async (req: Request, res: Response) => {
//     const { jobId } = req.body;
//     try {
//         if (!jobId) {
//             return res
//                 .status(400)
//                 .json(new ApiError(400, "Job Id is required"));
//         }
//         // @ts-expect-error
//         const user = await User.findById(req.user?._id);
//         if (!user) {
//             return res.status(404).json(new ApiError(404, "User Not Found"));
//         }
//         const jobSave = await JobSave.create({
//             userId: user._id,
//             jobId
//         });
//         if (!jobSave) {
//             return res
//                 .status(500)
//                 .json(
//                     new ApiError(
//                         500,
//                         "Something went wrong while saving the job"
//                     )
//                 );
//         }
//         return res
//             .status(201)
//             .json(new ApiResponse(201, jobSave, "Job Saved Successfully"));
//     } catch (error) {
//         console.log("jobSave -> error", error);
//     }
// });

export {
    userRegister,
    userLogin,
    userLogout
    // refreshAccessToken,
    // changePassword,
    // changePhone,
    // changeEmail,
    // updateUserAvatar,
    // forgetPasswordEmail,
    // resetPassword,
    // validateForgotPasswordPage,
    // addFiles,
    // jobSave
};
