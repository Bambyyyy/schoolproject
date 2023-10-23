import { dbQuery } from "@/src/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  console.log("id", id);

  const result = await dbQuery({
    query: "SELECT * FROM schoolproject where id = " + parseInt(id),
  });
  return NextResponse.json(result, { status: 200 });
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const body = await req.json();
  const { title, description } = body;

  const result = await dbQuery({
    query:
      "UPDATE schoolproject SET title=?, description=? WHERE id =" +
      parseInt(id),
    values: [title, description],
  });
  return NextResponse.json(result, { status: 200 });
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  console.log("id", id);

  const result = await dbQuery({
    query: "DELETE FROM schoolproject where id = " + parseInt(id),
  });
  return NextResponse.json(result, { status: 200 });
}
