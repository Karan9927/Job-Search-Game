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
      referredBy: userId,
    },
  });

  const userCompletedTasks = userProgress.length;
  const badgesToAssign = [];

  if (
    userProgress.some((p) => p.levelId === 3) &&
    !userBadges.some((b) => b.badge.name === "Level Master")
  ) {
    badgesToAssign.push("Level Master");
  }

  const totalScore = userPoints?.totalPoint;
  if (
    totalScore !== undefined &&
    totalScore >= 3000 &&
    !userBadges.some((b) => b.badge.name === "Points Accumulator")
  ) {
    badgesToAssign.push("Points Accumulator");
  }

  if (
    totalScore !== undefined &&
    totalScore >= 10000 &&
    !userBadges.some((b) => b.badge.name === "Elite Challenger")
  ) {
    badgesToAssign.push("Elite Challenger");
  }

  if (
    userCompletedTasks >= 40 &&
    !userBadges.some((b) => b.badge.name === "Quiz Master")
  ) {
    badgesToAssign.push("Quiz Master");
  }

  if (
    userCompletedTasks >= 80 &&
    !userBadges.some((b) => b.badge.name === "Task Completer")
  ) {
    badgesToAssign.push("Task Completer");
  }

  if (
    userBadges.length >= 5 &&
    !userBadges.some((b) => b.badge.name === "Badges Collector")
  ) {
    badgesToAssign.push("Badges Collector");
  }

  if (
    totalScore !== undefined &&
    totalScore >= 6000 &&
    !userBadges.some((b) => b.badge.name === "High Scorer")
  ) {
    badgesToAssign.push("High Scorer");
  }

  const categoryCompletionCounts: Record<string, number> = {};

  userProgress.forEach((progress) => {
    const categoryId = progress.levelId.toString();
    categoryCompletionCounts[categoryId] =
      (categoryCompletionCounts[categoryId] || 0) + 1;
  });

  const hasCategoryConquerorBadge = Object.values(
    categoryCompletionCounts
  ).some((count) => count === 10);

  if (
    hasCategoryConquerorBadge &&
    !userBadges.some((b) => b.badge.name === "Category Conqueror")
  ) {
    badgesToAssign.push("Category Conqueror");
  }

  if (
    userReferrals >= 1 &&
    !userBadges.some((b) => b.badge.name === "Referral Newbie")
  ) {
    badgesToAssign.push("Referral Newbie");
  }

  if (
    userReferrals >= 5 &&
    !userBadges.some((b) => b.badge.name === "Referral Expert")
  ) {
    badgesToAssign.push("Referral Expert");
  }

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
