import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma";
import { ZodError } from "zod";
import checkAndAssignBadges from "@/lib/badgeActions";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body) {
      throw new Error();
    }

    const hashed_password = await hash(body.password, 12);

    let referrer = null;

    if (body.referredBy) {
      referrer = await prisma.user.findUnique({
        where: { referralCode: body.referredBy },
        include: { leaderboard: true },
      });

      if (!referrer) {
        return NextResponse.json(
          { status: "fail", message: "Invalid referral code" },
          { status: 400 }
        );
      }
    }

    const user = await prisma.user.create({
      data: {
        fullName: body.fullName,
        email: body.email.toLowerCase(),
        password: hashed_password,
        role: body.role,
        phoneNumber: body.phoneNumber,
        referredBy: body.referredBy,
        profile: {
          create: {
            bio: "",
            avatar: null,
            education: {
              create: [],
            },
            experience: {
              create: [],
            },
            skills: {
              create: [],
            },
            achievements: {
              create: [],
            },
            reviews: {
              create: [],
            },
          },
        },
      },
      include: {
        profile: true,
      },
    });

    if (referrer) {
      await prisma.$transaction([
        prisma.leaderboard.create({
          data: {
            userId: user.id,
            totalPoint: 50,
          },
        }),

        prisma.leaderboard.update({
          where: { userId: referrer.id },
          data: { totalPoint: { increment: 100 } },
        }),
      ]);
    }

    await checkAndAssignBadges(user.id);

    return NextResponse.json({
      user: {
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (error: any) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          status: "error",
          message: "Validation failed",
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    if (error.code === "P2002") {
      return NextResponse.json(
        {
          status: "fail",
          message: "user with that email already exists",
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        status: "error",
        message: error.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
