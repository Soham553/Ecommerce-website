import express from 'express';
import cors from 'cors';

export const app = express();


app.use(cors({
    origin : process.env.CORS_ORG,
    credentials : true
}));


