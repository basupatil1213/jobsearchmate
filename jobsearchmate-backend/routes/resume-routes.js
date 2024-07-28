import express from 'express';
import { uploadResume } from '../controllers/resume-controller.js';
import { upload } from '../config/multer-config.js';


const jobRouter = express.Router();

jobRouter.route('/upload')
        .post(upload.single('resume'), uploadResume);



export default jobRouter;