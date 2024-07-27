import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
    },
    name: {
        type: String,
        required: true,
    },
    resume: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Resume",
        required: true,
    },
    status: {
        type: String,
        enum: ["Applied", "Accepted", "Rejected"],
        default: "Pending",
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

export const Application = mongoose.model("Application", applicationSchema);