// import { ApiError } from "../utils/ApiError.js";
// import { ApiResponse } from "../utils/ApiResponse.js";
// import { AsyncHandler } from "../utils/AsyncHandler.js";
// import { CompanyRegister } from "../models/companyRegister.model.js";
// import { CookieOptions } from "../constants.js";
// import { generatAccessAndRefershToken } from "../utils/TokenGenerator.js";
// import JWT from "jsonwebtoken";
// import type { ReqResType } from "../types/global.js";


// // company register

// const companyRegister = AsyncHandler(async ({ req, res }: ReqResType) => {
//     const {
//         name,
//         email,
//         phone,
//         user_role,
//         companyName,
//         password,
//         address,
//         companySize,
//         designation,
//         pincode
//     } = req.body;
//     if (
//         [
//             name,
//             email,
//             phone,
//             password,
//             address,
//             user_role,
//             companyName,
//             designation
//         ].some((filed) => filed?.trim() === "")
//     ) {
//         return res
//             .status(400)
//             .json(new ApiError(400, "All Fields are required"));
//     }
//     const exitisCompany = await CompanyRegister.findOne({
//         $or: [{ email }, { phone }]
//     });
//     if (exitisCompany) {
//         return res
//             .status(400)
//             .json(
//                 new ApiError(
//                     400,
//                     "Company Already Exitis with this Email or Phone Number"
//                 )
//             );
//     }
//     const newCompany = await CompanyRegister.create({
//         name,
//         email,
//         phone,
//         user_role,
//         companyName,
//         password,
//         address,
//         companySize,
//         designation,
//         pincode
//     });
//     if (!newCompany) {
//         return res
//             .status(500)
//             .json(
//                 new ApiError(500, "Internal Server Error place try again later")
//             );
//     }
//     const gattingCompanyDetails = await CompanyRegister.findById(
//         newCompany._id
//     ).select("-password -refereshToken");
//     if (!gattingCompanyDetails) {
//         return res
//             .status(500)
//             .json(
//                 new ApiError(
//                     500,
//                     "Internal Server Error while gatting company details"
//                 )
//             );
//     }
//     // email verification
//     // phone verification
//     // const emailVerificationToken = JWT.sign({
//     //     id: newCompany._id,
//     //     email: newCompany.email
//     // });

//     const { accessToken, refershToken } = await generatAccessAndRefershToken(
//         newCompany._id,
//         CompanyRegister
//     );

//     res.cookie("accessToken", accessToken, CookieOptions);
//     res.cookie("refershToken", refershToken, CookieOptions);
//     res.status(201).json(
//         new ApiResponse(
//             201,
//             {
//                 company: gattingCompanyDetails,
//                 accessToken,
//                 refershToken
//             },
//             "Company Registered Successfully"
//         )
//     );
// });

// const companyLogin = AsyncHandler(async ({ req, res }: ReqResType) => {
//     const { email, password } = req.body;
//     if (!email || !password) {
//         return res
//             .status(400)
//             .json(new ApiError(400, "Email and Password are required"));
//     }
//     const company = await CompanyRegister.findOne({ email });
//     if (!company) {
//         return res.status(404).json(new ApiError(404, "Company Not Found "));
//     }
//     const isPasswordMatch = await company.comparePassword(password);
//     if (!isPasswordMatch) {
//         return res
//             .status(401)
//             .json(new ApiError(401, "Password is not correct"));
//     }
//     const { accessToken, refershToken } = await generatAccessAndRefershToken(
//         company._id,
//         CompanyRegister
//     );
//     const lockedInCompany = await CompanyRegister.findById(company._id).select(
//         "-password -refershToken"
//     );
//     res.cookie("accessToken", accessToken, CookieOptions);
//     res.cookie("refershToken", refershToken, CookieOptions);
//     res.status(200).json(
//         new ApiResponse(
//             200,
//             { company: lockedInCompany, accessToken, refershToken },
//             "Company Login Successfully"
//         )
//     );
// });
// const companyLogout = AsyncHandler(async ({ req, res }: ReqResType) => {
//     await CompanyRegister.findByIdAndUpdate(
//         req.company._id,
//         {
//             $unset: {
//                 refershToken: 1
//             }
//         },
//         { new: true }
//     );
//     return res
//         .status(200)
//         .clearCookie("accessToken", CookieOptions)
//         .clearCookie("refershToken", CookieOptions)
//         .json(new ApiResponse(200, {}, "Company Logout Successfully"));
// });

// const refreshAccessToken = AsyncHandler(async ({ req, res }: ReqResType) => {
//     const refershToken = req.cookies.refershToken || req.body.refershToken;
//     if (!refershToken) {
//         return res
//             .status(400)
//             .json(new ApiError(400, "Refersh Token is required"));
//     }
//     try {
//         const decodedToken = JWT.verify(
//             refershToken,
//             process.env.REFRESH_TOKEN_SECRET
//         );
//         if (!decodedToken) {
//             return res
//                 .status(401)
//                 .json(new ApiError(401, "Unauthorized request"));
//         }
//         const company = await CompanyRegister.findById(decodedToken.id);
//         if (!company) {
//             return res.status(404).json(new ApiError(404, "Company Not Found"));
//         }
//         if (company.refershToken !== refershToken) {
//             return res
//                 .status(401)
//                 .json(new ApiError(401, "Invalid assess token "));
//         }
//         const { accessToken: newAccessToken, refershToken: newRefershToken } =
//             await generatAccessAndRefershToken(company._id, CompanyRegister);
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
//         res.status(500).json(new ApiError(500, "Internal Server Error"));
//     }
// });

// export { companyRegister, companyLogin, companyLogout, refreshAccessToken };
