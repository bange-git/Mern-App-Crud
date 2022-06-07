import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import userRouter from './routes/user.js';

const app = express();

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended:true}));
app.use(express.urlencoded({ limit: "30mb", extended:true}));
app.use(cors());


app.use('/users', userRouter);


const MongoDb_url ="mongodb+srv://admin12345:admin12345@cluster0.j7t2o.mongodb.net/tour-db?retryWrites=true&w=majority";

const port = 5000;

mongoose.connect(MongoDb_url).then(() => {
  app.listen(port, () => console.log(`server is running on ${port}`) );
}).catch((error) => console.log(`${error} did not connect`));

