import { ApiError } from "./ApiError.js";
import { Types, Model } from "mongoose";

export async function generatAccessAndRefershToken(
    userId: Types.ObjectId,
    modelName: Model<any>
) {
    try {
        const user = await modelName.findById(userId);
        const accessToken: string = await user.generatAccessToken();
        const refershToken: string = await user.generatRefershToken();
        user.refershToken = refershToken;
        await user.save({
            validateBeforeSave: false
        });
        return {
            accessToken,
            refershToken
        };
    } catch (error) {
        console.error(error);
        throw new ApiError(
            500,
            "Internal Server Error while generat AccessAndRefersh Token"
        );
    }
}
