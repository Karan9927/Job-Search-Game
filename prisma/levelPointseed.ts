import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedLevelsAndPoints() {
  // Seed points
  await prisma.point.createMany({
    data: [
      { point: 100 },
      { point: 200 },
      { point: 300 }
    ],
  });

  // Fetch inserted points (assuming autoincrement IDs)
  const allPoints = await prisma.point.findMany();

  // Seed levels, linking them to respective points
  await prisma.level.createMany({
    data: [
      { level: 1, pointId: allPoints[0].id },
      { level: 2, pointId: allPoints[1].id },
      { level: 3, pointId: allPoints[2].id }
    ],
  });

  console.log("✅ Levels and Points seeded successfully!");
}