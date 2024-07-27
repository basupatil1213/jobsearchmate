import express from 'express';
import { createJob, getJobs, getJob, updateJob, deleteJob } from '../controllers/job-controller.js';

const applicationRouter = express.Router();

applicationRouter.route('/')
      .get(getJobs)
      .post(createJob)
      
applicationRouter.route('/:jobId')
      .put(updateJob)
      .get(getJob)
      .delete(deleteJob)

export default applicationRouter;