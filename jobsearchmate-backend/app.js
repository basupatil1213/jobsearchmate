import express from 'express';
import cors from 'cors';
import { connectDB } from './config/database-connection.js';
import registerRouter from './routes/index.js';

const initialize = (app) => {

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded());

    connectDB();

    registerRouter(app);
}

export default initialize;