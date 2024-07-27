import express from 'express';
import { createApplication, deleteApplication, getApplicationById, getApplications, updateApplicationStatus } from '../controllers/application-controller.js';

const applicationRouter = express.Router();

applicationRouter.route('/')
    .get(getApplications)
    .post(createApplication);

applicationRouter.route('/:applicationId')
    .get(getApplicationById)
    .put(updateApplicationStatus)
    .delete(deleteApplication);

export default applicationRouter;