import mongoose from "mongoose";

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "csenClients", // Specify the database name
      });
      console.log("db connected");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
