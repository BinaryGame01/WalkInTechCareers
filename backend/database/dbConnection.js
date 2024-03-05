import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    // Check if the MONGO_URI environment variable is defined
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI environment variable is not defined.");
    }

    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "MERN_JOB_SEEKING_WEBAPP",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to database.");
  } catch (err) {
    console.error("Error connecting to database:", err);
    // Exit the process if there's an error connecting to the database
    process.exit(1);
  }
};
