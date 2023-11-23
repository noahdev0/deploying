import connectToDatabase from "@/lib/db";
import User from "@/models/user";

export default async function handler(req, res) {
  try {
    await connectToDatabase();

    // Check if email already exists
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }
    //check if the phone already exists
    const existingPhone = await User.findOne({ phone: req.body.phone });
    if (existingPhone) {
      return res.status(400).json({ error: "Phone already exists" });
    }

    const user = await User.create(req.body);

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
