import userRouter from "./user-routes.js";
import jobRouter from "./job-routes.js";
import resumeRouter from "./resume-routes.js";
import applicationRouter from "./application-routes.js";

export default (app) => {
    app.use('/user', userRouter);
    app.use('/job', jobRouter);
    app.use('/resume', resumeRouter);
    app.use('/application', applicationRouter);
}