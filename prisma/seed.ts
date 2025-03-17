import { PrismaClient } from "@prisma/client";
// import { seedBadges } from "./badgeSeed";
// import { seedCategories } from "./categorySeed";
// import { seedSubCategories } from "./subCategorySeed";
import { createQuestionOne } from "./categoryOne/catOne";
import { createQuestionTwo } from "./categoryOne/catTwo";
import { createQuestionThree } from "./categoryOne/catThree";
import { createQuestionFour } from "./categoryTwo/catOne";
import { createQuestionFive } from "./categoryTwo/catTwo";
import { createQuestionSix } from "./categoryTwo/catThree";
import { createQuestionSeven } from "./categoryThree/catOne";
import { createQuestionEight } from "./categoryThree/catTwo";
import { createQuestionNine } from "./categoryThree/catThree";
import { createQuestionTen } from "./categoryFour/catOne";
import { createQuestionEleven } from "./categoryFour/catTwo";
import { createQuestionTwelve } from "./categoryFour/catThree";
import { seedLevelsAndPoints } from "./levelPointseed";
import { seedBadges } from "./badgeSeed";
import { seedCategories } from "./categorySeed";
import { seedSubCategories } from "./subCategorySeed";

const prisma = new PrismaClient();

async function main() {
  await seedBadges();
  await seedCategories();
  await seedSubCategories();
  await seedLevelsAndPoints();
  await createQuestionOne();
  await createQuestionTwo();
  await createQuestionThree();
  await createQuestionFour();
  await createQuestionFive();
  await createQuestionSix();
  await createQuestionSeven();
  await createQuestionEight();
  await createQuestionNine();
  await createQuestionTen();
  await createQuestionEleven();
  await createQuestionTwelve();

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
