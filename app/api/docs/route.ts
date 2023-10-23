import { dbQuery } from "@/src/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  const result = await dbQuery({
    query: "SELECT * FROM schoolproject",
    values: [],
  });
  return NextResponse.json(result);
}

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const { title, description } = body;

  const result = await dbQuery({
    query: "INSERT INTO schoolproject (title, description) VALUES (?, ?)",
    values: [title, description],
  });
  return NextResponse.json(result, { status: 200 });
}
