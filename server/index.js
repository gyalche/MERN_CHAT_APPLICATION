import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import connectDB from './config/db.js';
import userRoutes from './Routes/userRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//error handling;
//for not found routes;
app.use(notFound);
//for other error ;
app.use(errorHandler);

//end points;
app.use('/api/user', userRoutes);
connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log(`server at http://localhost:${PORT}`);
});
