import { request, response } from "express";
import {Application} from '../models/application-model.js';

// create application
export const createApplication = async (req = request, res = response) => {
    const { job, resume, status } = req.body;

    try {
        const newApplication = await Application.create({ job, resume, status });

        res.status(201).json({ application: newApplication });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// update application status
export const updateApplicationStatus = async (req = request, res = response) => {
    const { status } = req.body;
    const { applicationId } = req.params;

    try {
        const application = await Application.findById(application = applicationId);

        if (!application) {
            return res.status(404).json({ error: 'Application not found' });
        }

        application.status = status;
        await application.save();

        res.status(200).json({ application });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// get all applications

export const getApplications = async (req = request, res = response) => {
    try {
        const applications = await Application.find();

        res.status(200).json({ applications });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// get application by id

export const getApplicationById = async (req = request, res = response) => {
    const { applicationId } = req.params;

    try {
        const application = await Application.findById(applicationId);

        if (!application) {
            return res.status(404).json({ error: 'Application not found' });
        }

        res.status(200).json({ application });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// delete application

export const deleteApplication = async (req = request, res = response) => {
    const { applicationId } = req.params;

    try {
        const application = await Application.findById(applicationId);

        if (!application) {
            return res.status(404).json({ error: 'Application not found' });
        }

        await application.remove();

        res.status(200).json({ message: 'Application deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}