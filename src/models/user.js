import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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
  address: String,
  phone: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  company: String,
  target: {
    type: String,
    required: true,
  },
  message: {
    type: [Object],
    required: true,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
