import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    resume: {
        type: Buffer,
        required: true,
    },
    contentType: {
        type: String,
        required: true,
        enum: ['application/pdf'],
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

export const Resume = mongoose.model("Resume", resumeSchema);