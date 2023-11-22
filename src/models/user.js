import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  // Define the schema for your data
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },

  // Add more fields as needed
});

// Create a model for the schema
const User = mongoose.model("User", userSchema);

export default User;
