"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
