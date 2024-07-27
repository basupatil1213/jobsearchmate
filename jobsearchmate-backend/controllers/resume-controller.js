import { request, response } from "express";
import {Resume} from '../models/resume-model.js';

// upload resume
export const uploadResume = async (req = request, res = response) => {
    const { name, resume, contentType } = req.body;

    try {
        const newResume = await Resume.create({ name, resume, contentType });

        res.status(201).json({ resume: newResume });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}