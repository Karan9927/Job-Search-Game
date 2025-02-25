import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedBadges() {
  // const badges = [
  //   {
  //     name: "Beginner Explorer",
  //     description:
  //       "Awarded when the user completes at least one 'Beginner' level.",
  //     threshold: "Complete at least one 'Beginner' level.",
  //   },
  //   {
  //     name: "High Scorer",
  //     description:
  //       "Awarded when the user accumulates a total score of at least 1000 points.",
  //     threshold: "Accumulate a total score of at least 1000 points.",
  //   },
  //   {
  //     name: "Master Explorer",
  //     description: "Awarded when the user completes 'Advanced' levels.",
  //     threshold: "Complete 'Advanced' levels.",
  //   },
  //   {
  //     name: "Consistent Contributor",
  //     description: "Awarded when the user completes at least 3 tasks.",
  //     threshold: "Complete at least 3 tasks.",
  //   },
  // ];

  const badges = [
    {
      name: "Level Master",
      description:
        "Awarded when the user completes a specific level or set of levels.",
      pointThreshold: "Complete a specific level or set of levels.",
      iconName: "Trophy",
    },
    {
      name: "Points Accumulator",
      description: "Awarded when the user accumulates a set number of points.",
      pointThreshold: "Accumulate a set number of points.",
      iconName: "Star",
    },
    {
      name: "Quiz Master",
      description:
        "Awarded when the user answers a certain number of questions correctly.",
      pointThreshold: "Answer a certain number of questions correctly.",
      iconName: "Brain",
    },
    {
      name: "Task Completer",
      description:
        "Awarded when the user completes a specific number of tasks (questions or levels).",
      pointThreshold:
        "Complete a specific number of tasks (questions or levels).",
      iconName: "CheckSquare",
    },
    {
      name: "Badges Collector",
      description: "Awarded when the user earns a set number of badges.",
      pointThreshold: "Earn a set number of badges.",
      iconName: "Award",
    },
    {
      name: "Fast Learner",
      description:
        "Awarded when the user completes a level or task within a specific time frame.",
      pointThreshold: "Complete a level or task within a specific time frame.",
      iconName: "Zap",
    },
    {
      name: "High Scorer",
      description:
        "Awarded when the user achieves a high score or ranking in a level or category.",
      pointThreshold: "Achieve a high score or ranking in a level or category.",
      iconName: "Target",
    },
    {
      name: "Category Conqueror",
      description:
        "Awarded when the user completes all levels in a specific category or subcategory.",
      pointThreshold:
        "Complete all levels in a specific category or subcategory.",
      iconName: "Layers",
    },
    {
      name: "Referral Newbie",
      description: "Awarded when the user refers 1 person.",
      pointThreshold: "Refer 1 person.",
      iconName: "UserPlus",
    },
    {
      name: "Referral Expert",
      description: "Awarded when the user refers 5 people.",
      pointThreshold: "Refer 5 people.",
      iconName: "Users",
    },
  ];

  for (const badge of badges) {
    await prisma.badge.create({
      data: {
        name: badge.name,
        description: badge.description,
        pointThreshold: badge.pointThreshold,
        icon: badge.iconName,
      },
    });
  }

  console.log("Badges seeded successfully!");
}
