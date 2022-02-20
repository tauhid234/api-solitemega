import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import { createConnection } from 'typeorm';

// AUTH ROUTER
import authRouter from './router/auth.router';

// ACCOUNT ROUTER
import accountRouter from './router/account.router';

// PARAMETER
import pendidikanRouter from './router/parameter/pendidikan.router';
import statusPerkawinanRouter from './router/parameter/status-perkawinan.router';


const app = express();
createConnection();

// MIDLEWARE
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


// ROUTE AUTH
app.use(authRouter);

// ROUTE ACCOUNT
app.use(accountRouter);

// ROUTE PARAMETER
app.use(pendidikanRouter);
app.use(statusPerkawinanRouter);

app.listen(process.env.PORT || 3000);
console.log("SERVER IS RUNNING ON PORT ",3000);