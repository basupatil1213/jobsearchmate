import { request, response } from "express";
import {Job} from '../models/job-model.js';

// create job
export const createJob = async (req = request, res = response) => {
    const { title, company, description } = req.body;

    try {
        const newJob = await Job.create({ title, company, location, description });

        res.status(201).json({ job: newJob });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}