//npx nodemon server.js
//npm run dev
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import workoutRoutes from "./routes/workouts.js";
import mongoose from "mongoose";

dotenv.config();

//express app
const app = express();
app.use(cors());

//middleware
app.use(express.json()); //it looks for any body for inside the request  req.body()
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workouts", workoutRoutes);
//listen for requests

//connect to db
mongoose
  .connect(process.env.MONG_URI) //accept request after connecting to the db
  .then(() => {
    //listen for request
    app.listen(process.env.PORT, () => {
      console.log("Connected to db & listening on port ", process.env.PORT);
    });
  })
  .catch((Error) => {
    console.log(Error);
  });

process.env;
