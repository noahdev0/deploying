import connectToDatabase from "@/lib/db";
import User from "@/models/user";

export default async function handler(req, res) {
  try {
    await connectToDatabase();

    // Check if email has been used before
    const existingUser = await User.findOne({
      email: req.body.email,
    });

    if (existingUser !== null) {
      // Add message to existing user with date
      existingUser.message.push({
        text: req.body.message,
        date: new Date(),
      });
      await existingUser.save();
      console.log("success");
      res.status(200).json(existingUser);
    } else {
      // Create new user
      const user = await User.create({
        ...req.body,
        message: [
          {
            text: req.body.message,
            date: new Date(),
          },
        ],
      });

      res.status(200).json({ success: true, data: "User created" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
