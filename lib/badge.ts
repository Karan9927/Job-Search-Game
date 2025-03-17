"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getBadges() {
  try {
    const badges = await prisma.badge.findMany();

    return badges;
  } catch (error) {
    console.error("Error fetching badges:", error);
    throw new Error("Failed to fetch badges.");
  }
}

export async function getUserBadges(userId: string) {
  try {
    const userBadges = await prisma.userBadge.findMany({
      where: { userId: userId },
      include: {
        badge: true,
      },
    });

    return userBadges.map((userBadge) => userBadge.badge);
  } catch (error) {
    console.error("Error fetching user badges:", error);
    throw new Error("Failed to fetch user badges.");
  }
}

async function checkAndAssignBadges(userId: string) {
  const userProgress = await prisma.userLevelProgress.findMany({
    where: { userId },
    include: {
      level: true,
      subcategory: true,
    },
  });

  const userBadges = await prisma.userBadge.findMany({
    where: { userId },
    include: { badge: true },
  });

  const userPoints = await prisma.leaderboard.findUnique({
    where: {
      userId: userId,
    },
    select: {
      totalPoint: true,
    },
  });

  const userReferrals = await prisma.user.count({
    where: {
      referredBy: userId, // Count how many users were referred by the current user
    },
  });

  const userCompletedTasks = userProgress.length;
  const badgesToAssign = [];

  // 1. Level Master Badge
  if (
    userProgress.some((p) => p.level.id === 3) && // Adjust the level condition as necessary
    !userBadges.some((b) => b.badge.name === "Level Master")
  ) {
    badgesToAssign.push("Level Master");
  }

  // 2. Points Accumulator Badge
  const totalScore = userPoints?.totalPoint;
  if (
    totalScore !== undefined &&
    totalScore >= 3000 && // Example threshold for points
    !userBadges.some((b) => b.badge.name === "Points Accumulator")
  ) {
    badgesToAssign.push("Points Accumulator");
  }

  // 3. Quiz Master Badge
  if (
    userCompletedTasks >= 40 && // Example threshold for questions
    !userBadges.some((b) => b.badge.name === "Quiz Master")
  ) {
    badgesToAssign.push("Quiz Master");
  }

  // 4. Task Completer Badge
  if (
    userCompletedTasks >= 80 && // Example threshold for tasks
    !userBadges.some((b) => b.badge.name === "Task Completer")
  ) {
    badgesToAssign.push("Task Completer");
  }

  // 5. Badges Collector Badge
  if (
    userBadges.length >= 5 && // Example threshold for badges earned
    !userBadges.some((b) => b.badge.name === "Badges Collector")
  ) {
    badgesToAssign.push("Badges Collector");
  }

  // 7. High Scorer Badge
  if (
    totalScore !== undefined &&
    totalScore >= 6000 && // Example threshold for score
    !userBadges.some((b) => b.badge.name === "High Scorer")
  ) {
    badgesToAssign.push("High Scorer");
  }

  // 8. Category Conqueror Badge
  const categoryCompletionCounts: Record<string, number> = {};

  userProgress.forEach((progress) => {
    const categoryId = progress.subcategory.id.toString();
    categoryCompletionCounts[categoryId] =
      (categoryCompletionCounts[categoryId] || 0) + 1;
  });

  // Check if any subcategory has all levels completed
  const hasCategoryConquerorBadge = Object.values(
    categoryCompletionCounts
  ).some(
    (count) => count === 10 // Example threshold for completing all levels in a category
  );

  if (
    hasCategoryConquerorBadge &&
    !userBadges.some((b) => b.badge.name === "Category Conqueror")
  ) {
    badgesToAssign.push("Category Conqueror");
  }

  // 9. Referral Newbie Badge (1 referral)
  if (
    userReferrals >= 1 &&
    !userBadges.some((b) => b.badge.name === "Referral Newbie")
  ) {
    badgesToAssign.push("Referral Newbie");
  }

  // 10. Referral Expert Badge (5 referrals)
  if (
    userReferrals >= 5 &&
    !userBadges.some((b) => b.badge.name === "Referral Expert")
  ) {
    badgesToAssign.push("Referral Expert");
  }

  // Assign badges to user
  for (const badgeName of badgesToAssign) {
    const badge = await prisma.badge.findFirst({ where: { name: badgeName } });
    if (badge) {
      await prisma.userBadge.create({
        data: { userId, badgeId: badge.id },
      });
    }
  }
  return badgesToAssign;
}

export default checkAndAssignBadges;
