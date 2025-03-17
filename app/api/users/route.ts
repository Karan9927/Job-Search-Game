import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const users = await prisma.user.findMany({
    include: {
      leaderboard: true,
      questions: true,
    },
  });
  return NextResponse.json(users);
}
