import { PrismaClient } from "@prisma/client";
import { seedBadges } from "./badgeSeed";

const prisma = new PrismaClient();

async function main() {
  // await seedBadges();

  console.log("All seed data inserted successfully !");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
