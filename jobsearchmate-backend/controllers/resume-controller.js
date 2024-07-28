import { request, response } from "express";
import { Resume } from '../models/resume-model.js';
import { uploadResume as uploadResumeAWS, getResumeUrl as getResumeUrlAWS } from "../config/aws-connection.js";
import { v4 as uuidv4 } from 'uuid';


// upload resume
export const uploadResume = async (req = request, res = response) => {
    try {
        const file = req.file;

        if (!file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        // Generate a unique id
        const uniqueId = uuidv4();
        // Create a unique filename
        const uniqueFilename = `${uniqueId}-${file.originalname}`;


        await uploadResumeAWS({...file, originalname: uniqueFilename});
        console.log(`name: ${file.originalname}`);
        const resumeURL = await getResumeUrlAWS(file.originalname);
        const newResume = new Resume({ name: file.originalname, resumeURL });
        await newResume.save();

        res.status(200).json({ message: 'File uploaded successfully', resumeURL: newResume.resumeURL, name: newResume.name });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// // get resume url

// export const getResumeUrl = async (req = request, res = response) => {
//     const { resumeId } = req.params;

//     try {
//         const resume = await Resume.findById(resumeId);

//         if (!resume) {
//             return res.status(404).json({ error: 'Resume not found' });
//         }

//         const url = await getResumeUrlAWS(resume.resumeURL);

//         res.status(200).json({ url });
//     }
//     catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }