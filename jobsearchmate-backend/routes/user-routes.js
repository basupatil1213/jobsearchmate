import express from 'express';
import { login, signup } from '../controllers/user-controller.js';

const userRouter = express.Router();

userRouter.route('/signin')
        .post(login);

userRouter.route('/signup')
        .post(signup);

export default userRouter;