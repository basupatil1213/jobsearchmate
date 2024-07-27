import express from 'express';
import {createJob} from '../controllers/job-contorller.js';


const jobRouter = express.Router();

jobRouter.route('/upload')
        .post(createJob);

export default jobRouter;