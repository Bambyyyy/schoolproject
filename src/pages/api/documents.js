import { query } from "../../lib/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const schoolproject = await query({
        query: "SELECT * FROM schoolproject",
      });
      console.log(schoolproject);
      res.status(200).json({ schoolproject: schoolproject });
    } catch (error) {
      console.log("Error: ", error);
      res.status(500).json({ message: "Error querying from database ", error });
    }
  }
}
