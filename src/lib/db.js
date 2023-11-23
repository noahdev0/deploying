import mongoose from "mongoose";

const connectToDatabase = async () => {
  const uri = process.env.MONGODB_URI;

  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: process.env.MONGODB_DB, 
      });
      console.log("Connected to database");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectToDatabase;
