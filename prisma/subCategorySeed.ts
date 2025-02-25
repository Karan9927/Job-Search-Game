import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedSubCategories() {
  await prisma.subCategory.createMany({
    data: [
      // Sub-categories for Job Application
      { name: "Resume Building", categoryId: 1 },
      { name: "Cover Letter Writing", categoryId: 1 },
      { name: "Application Submission", categoryId: 1 },

      // Sub-categories for Interview Preparation
      { name: "Interview Basics", categoryId: 2 },
      { name: "Interview Skills", categoryId: 2 },
      { name: "Interview Strategies", categoryId: 2 },

      // Sub-categories for Networking
      { name: "Professional Networking", categoryId: 3 },
      { name: "Online Networking", categoryId: 3 },
      { name: "Advanced Networking", categoryId: 3 },

      // Sub-categories for Career Development
      { name: "Continuous Learning", categoryId: 4 },
      { name: "Career Growth", categoryId: 4 },
      { name: "Career Transition", categoryId: 4 },
    ],
  });
  console.log("Sub-categories seeded successfully!");
}
