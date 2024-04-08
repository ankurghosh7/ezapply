import Mongoose from "mongoose";

const jobApplySchema = new Mongoose.Schema(
    {
        jobPostId: {
            type: Mongoose.Schema.Types.ObjectId,
            ref: "JobPost"
        },
        userId: {
            type: Mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        resumeOrCv: {
            type: String,
            required: true
        },
        coverLetter: {
            type: String
        },
        status: {
            type: String,
            default: "Pending"
        }
    },
    { timestamps: true }
);

export const JobApply = Mongoose.model("JobApply", jobApplySchema);
