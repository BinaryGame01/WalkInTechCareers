import mongoose from "mongoose";

export const dbConnection = () => {
  const mongoURI = process.env.MONGO_URI;
  if (!mongoURI) {
    console.error("MongoDB URI is not defined.");
    return;
  }

  mongoose.connect(mongoURI, {
      dbName: "MERN_JOB_SEEKING_WEBAPP"
    })
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.error(`Some Error occurred. ${err}`);
    });
};