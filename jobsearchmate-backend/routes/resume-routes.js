import express from 'express';
import { uploadResume } from '../controllers/resume-controller.js';


const jobRouter = express.Router();

jobRouter.route('/upload')
        .post(uploadResume);

export default jobRouter;