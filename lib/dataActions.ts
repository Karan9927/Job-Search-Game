"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getCategories() {
  try {
    const categories = await prisma.category.findMany();

    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error("Failed to fetch categories.");
  }
}

export async function fetchCategories() {
  const categories = await prisma.category.findMany({
    select: { name: true },
  });
  return categories.map((category) => category.name);
}

export async function fetchSubcategories(categoryId: number) {
  const category = await prisma.category.findFirst({
    where: { id: categoryId },
    include: { subCategories: true },
  });

  return category ? category.subCategories.map((sub) => sub) : [];
}

export async function fetchQuestions(
  categoryId: number,
  subcategoryId: number,
  difficulty: string
) {
  const difficultyLevelMap: { [key: string]: number } = {
    Beginner: 1,
    Intermediate: 2,
    Advanced: 3,
  };

  const level = await prisma.level.findFirst({
    where: { level: difficultyLevelMap[difficulty] },
  });
  if (!level) {
    throw new Error("Level not found");
  }

  const category = await prisma.category.findFirst({
    where: { id: categoryId },
    include: {
      subCategories: {
        where: { id: subcategoryId },
        include: {
          questions: {
            where: { levelId: level.id },
            select: {
              id: true,
              question: true,
              options: true,
              correctAnswer: true,
              levelId: true,
              points: { select: { point: true } },
            },
          },
        },
      },
    },
  });

  if (!category || !category.subCategories.length) {
    throw new Error("Category or Subcategory not found");
  }

  const questions = category.subCategories[0].questions.map((q) => ({
    id: q.id,
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    levelId: q.levelId,
    points: { point: q.points.point },
  }));

  if (questions.length === 0) {
    throw new Error(
      "No questions found for the specified category, subcategory, and difficulty"
    );
  }

  return questions;
}

export async function getJobs() {
  try {
    const jobs = await prisma.job.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        title: true,
        company: true,
        location: true,
        salary: true,
        description: true,
        requirements: true,
        createdAt: true,
        updatedAt: true,
        applications: {
          select: {
            userId: true,
            status: true,
          },
        },
      },
    });
    return jobs;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw new Error("Failed to fetch jobs");
  }
}
