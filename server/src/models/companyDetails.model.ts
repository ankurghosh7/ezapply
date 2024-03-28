import mongoose, { HydratedDocument } from "mongoose";
import type { CompanyDetailsSType } from "../types/global.js";

const companyDetailsSchema = new mongoose.Schema<CompanyDetailsSType>({
    // refgister id
    // company name
    // company logo
    // company cover image
    // tags and links
    // info tags
    // social links
    // industry type
    // description
    // features goles
    // founded
    // address
    // is varified

    companyRegisterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CompanyRegister",
        required: true
    },
    name: {
        type: String,
        required: [true, "Name is required as per kyc"]
    },
    logo: {
        type: String,
        required: true
    },
    coverImage: {
        type: String
    },
    tagsLins: {
        type: [String],
        required: true
    },
    infoTags: {
        type: [String],
        required: true
    },
    socialLinks: {
        type: Map,
        of: String
    },
    industry: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    featuresGoles: {
        type: [String]
    },
    founded: {
        type: Map,
        of: String
    },
    address: {
        type: Map,
        of: String,
        required: true
    },
    isVarified: {
        type: Boolean,
        default: false
    }
});
export const CompanyDetails = mongoose.model(
    "CompanyDetails",
    companyDetailsSchema
);
