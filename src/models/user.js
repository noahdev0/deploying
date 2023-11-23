import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  // Define the schema for your data
  title: {
    type: String,
    required: true,
  },
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
    unique: true,
  },
  message: {
    type: String,
    required: true,
  },
  selectedOption: {
    type: String,
    required: true,
  },
});

// Create a model for the schema
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
