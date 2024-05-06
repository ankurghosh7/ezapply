import { upload } from "../middlewares/multer.middleware.js";
import { Router } from "express";
import { varifyJWT, verifyResetTokon } from "../middlewares/auth.middleware.js";
import { userRegister } from "../controllers/user.controller.js";

const router = Router();
router.route("/register").post(upload.single("resume"), userRegister);
// router.route("/login").post(userLogin);
// secure route
// router.route("/logout").post(varifyJWT, userLogout);
// router.route("/refresh-token").post(refreshAccessToken);
// router.route("/change-password").post(varifyJWT, changePassword);
// router.route("/change-email").post(varifyJWT, changeEmail);
// router.route("/change-phone").post(varifyJWT, changePhone);
// router
//     .route("/update-avater")
//     .patch(varifyJWT, upload.single("avater"), updateUserAvatar);
// router.route("/forgot-password").post(forgetPasswordEmail);
// router
//     .route("/auth/reset-password")
//     .get(verifyResetTokon, validateForgotPasswordPage)
//     .post(verifyResetTokon, resetPassword);

export default router;
