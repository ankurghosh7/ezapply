import mongoose from "mongoose";

const jobPostSchema = new mongoose.Schema(
    {
        companyId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Company"
        },
        catagory: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        location: {
            type: [String],
            required: true
        },
        jobType: {
            type: String,
            required: true
        },
        sallary: {
            type: String,
            required: true
        },
        skills: {
            type: [String],
            required: true
        },
        benefits: {
            type: [String],
            required: true
        },
        education: {
            type: Map,
            of: String,
            required: true
        },
        experience: {
            type: String,
            required: true
        },
        jobShift: {
            type: String,
            required: true
        },
        jobLevel: {
            type: String,
            required: true
        },
        vacancy: {
            type: Number,
            required: true
        },
        deadline: {
            type: Date,
            required: true
        },
        status: {
            type: String,
            default: "Pending"
        },
        tags: {
            type: [String]
        }
    },
    { timestamps: true }
);
export const JobPost = mongoose.model("JobPost", jobPostSchema);
