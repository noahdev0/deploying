// pages/api/secure-route.js

import { verifyToken } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db"; // Import the database connection module

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = authorization.split(" ")[1];

  try {
    const decoded = verifyToken(token);

    // Connect to the database
    const db = await connectToDatabase();

    // Retrieve all user information from the database
    const users = await db.collection("users").find().toArray();

    return res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.error("Error verifying token:", error);
    return res.status(401).json({ error: "Unauthorized" });
  }
}
