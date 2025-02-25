import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedCategories() {
  await prisma.category.createMany({
    data: [
      { name: "Job Application" },
      { name: "Interview Preparation" },
      { name: "Networking" },
      { name: "Career Development" },
    ],
  });
  console.log("Categories seeded successfully!");
}
