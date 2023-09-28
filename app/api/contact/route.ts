import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const user = await prisma.user.create({
    data: {
      name,
      email,
      message,
    },
  });

  return NextResponse.json({ message: "successfull sent", user });
}
