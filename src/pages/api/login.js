import connectToDatabase from "../../lib/db";
i;

export default async function handler(req, res) {
  // Check if the request has a valid authentication token
  const authToken = req.headers.authorization;
  if (!authToken || authToken !== "123456789") {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  if (req.method === "GET") {
    try {
      const filter = {};
      const client = await connectToDatabase();

      const coll = client.db("csen-users").collection("users");
      const cursor = coll.find(filter);
      const result = await cursor.toArray();
      await client.close();
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
