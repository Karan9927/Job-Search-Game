"use server";
import prisma from "@/prisma/prisma";

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
    // Fetch leaderboard data with Prisma
    const leaderboard = await prisma.leaderboard.findMany({
      include: {
        user: {
          include: {
            profile: {
              select: { avatar: true },
            }, // Include user profile
            userBadges: {
              // Include user badges
              select: {
                badge: {
                  select: {
                    name: true,
                  },
                }, // Only select the badge name
              },
            },
          },
        },
      },
      orderBy: {
        totalPoint: "desc", // Sort by total points in descending order
      },
      take: 10, // Limit to top 10 players, adjust as needed
    });

    // Format and return the data
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
      })), // Include the user's badges
      totalPoints: entry.totalPoint,
    }));
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    throw new Error("Failed to fetch leaderboard data");
  }
}

export async function updateLeaderboard(userId: string, points: number) {
  if (!userId || points === undefined) {
    throw new Error("Invalid userId or points");
  }

  try {
    const updateLeaderboard = await prisma.leaderboard.upsert({
      where: { userId },
      update: { totalPoint: { increment: points } },
      create: { userId, totalPoint: points },
    });

    return updateLeaderboard;
  } catch (error) {
    console.error("Full error object:", error);
    throw new Error("Failed to update leaderboard data: " + error);
  }
}

export async function getUserPoints(userId: string): Promise<number | null> {
  if (!userId) {
    throw new Error("Invalid userId");
  }

  try {
    const user = await prisma.leaderboard.findUnique({
      where: { userId },
      select: { totalPoint: true },
    });

    return user ? user.totalPoint : null;
  } catch (error) {
    console.error("Error fetching user points:", error);
    throw new Error("Failed to fetch user points");
  }
}
