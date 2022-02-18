import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import { createConnection } from 'typeorm';




const app = express();
createConnection();

// MIDLEWARE
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.listen(process.env.PORT || 3000);
console.log("SERVER IS RUNNING ON PORT ",3000);