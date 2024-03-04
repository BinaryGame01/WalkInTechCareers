// import mongoose from "mongoose";

// export const dbConnection = () => {
//   mongoose.connect(process.env.MONGO_URI, {
//       dbName: "MERN_JOB_SEEKING_WEBAPP",
//     })
//     .then(() => {
//       console.log("Connected to database.");
//     })
//     .catch((err) => {
//       console.log(`Some Error occured. ${err}`);
//     });
// };


import mongoose from "mongoose";

export const dbConnection = () => {
  // Check if the MONGO_URI environment variable is defined
  if (!process.env.MONGO_URI) {
    console.error("MONGO_URI environment variable is not defined.");
    return; // Stop execution if MONGO_URI is not defined
  }

  mongoose.connect(process.env.MONGO_URI, {
    dbName: "MERN_JOB_SEEKING_WEBAPP"
  })
  .then(() => {
    console.log("Connected to database.");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });
};


