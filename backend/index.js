import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import { PORT, mongoDBURL } from "./config.js";
import booksRoute from "./routes/booksRoute.js";

const app = express();

//Middleware for parsing request body
app.use(express.json());


app.use(cors());//allow all origns, default
// app.use(
//     cors({
//         origin:'http://localhost:3000',
//         methods:['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders:['Content-Type']
//     })
// )

app.get("/", (req, res) => {
  //yeh callback function hai, get method
  console.log(res);
  return res.status(234).send({ mesg: "Welcome to Book Store System" }); //sending in form JSON key value pair
});



app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL) //it is API work, asynchronous, it will retun promise
  .then(() => {
    //if promise resolves to sucess, fir yeh console hoga  (CALLBACK)
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port :${PORT}`);
    });
  })
  .catch((error) => {
    //agar reject hua.. fir error ko consume karega
    console.log(error);
  });
