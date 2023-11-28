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
  title: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: false,
  },
  target: {
    type: String,
    required: true,
  },
  message: {
    type: [Object],
    required: true,
  },
});

// Create a model for the schema
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
