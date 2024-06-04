import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { config } from "dotenv";
config();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
// cloudinary.config({
//     cloud_name: "dx9lhxxaa",
//     api_key: "917112233195364",
//     api_secret: "sBW41oBg41HVzFBtVD2ZG_sbqM4"
// });

export const uploadImage = async (path: any) => {
    try {
        if (!path) return null;
        console.log(path);

        const responce = await cloudinary.uploader.upload(path, {
            resource_type: "auto"
        });
        fs.unlinkSync(path);
        return responce;
    } catch (error: object | any) {
        fs.unlinkSync(path);
        return null;
    }
};
