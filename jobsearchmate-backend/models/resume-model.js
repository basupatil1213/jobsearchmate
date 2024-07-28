import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
    resumeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Resume",
    },
    name: {
        type: String,
        required: true,
    },
    resumeURL: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

export const Resume = mongoose.model("Resume", resumeSchema);