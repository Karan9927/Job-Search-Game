"use server";
import { auth } from "@/auth";
import prisma from "@/prisma/prisma";
import { revalidatePath } from "next/cache";

export type LeaderboardEntry = {
  id: number;
  user: {
    id: string;
    fullName: string;
    email: string;
    role: string;
    profile?: {
      avatar?: string;
      education?: string;
    };
  };
  userBadges: {
    badge: {
      name: string;
    };
  }[];
  totalPoints: number;
};

export async function getLeaderboardData(): Promise<LeaderboardEntry[]> {
  try {
    const leaderboard = await prisma.leaderboard.findMany({
      include: {
        user: {
          include: {
            profile: {
              select: { avatar: true },
            },
            userBadges: {
              select: {
                badge: {
                  select: {
                    name: true,
                  },
                },
              },
            },
          },
        },
      },
      orderBy: {
        totalPoint: "desc",
      },
      take: 10,
    });

    return leaderboard.map((entry) => ({
      id: entry.id,
      user: {
        id: entry.user.id,
        fullName: entry.user.fullName,
        email: entry.user.email,
        role: entry.user.role,
        profile: entry.user.profile || {},
      },
      userBadges: entry.user.userBadges.map((ub) => ({
        badge: {
          name: ub.badge.name,
        },
      })),
      totalPoints: entry.totalPoint,
    }));
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    throw new Error("Failed to fetch leaderboard data");
  }
}

export async function updateLeaderboard(points: number) {
  if (points === undefined) {
    throw new Error("Invalid userId or points");
  }

  try {
    const session = await auth();

    // If no user is logged in, return false
    if (!session?.user?.id) {
      return { completed: false };
    }

    const userId = session.user.id;
    const updateLeaderboard = await prisma.leaderboard.upsert({
      where: { userId },
      update: { totalPoint: { increment: points } },
      create: { userId, totalPoint: points },
    });

    revalidatePath("/leaderboard");
    return updateLeaderboard;
  } catch (error) {
    console.error("Full error object:", error);
    throw new Error("Failed to update leaderboard data: " + error);
  }
}
