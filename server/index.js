import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
const app = express();
dotenv.config();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Api is running');
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log(`server at http://localhost:${PORT}`);
});
