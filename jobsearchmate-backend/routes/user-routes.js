import express from 'express';
import { login, signup } from '../controllers/user-controller.js';

const userRouter = express.Router();

userRouter.route('/login')
        .post(login);

userRouter.route('/signup')
        .post(signup);

export default userRouter;