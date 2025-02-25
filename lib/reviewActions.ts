"use server";

import prisma from "@/prisma/prisma";
import { revalidatePath } from "next/cache";

interface CreateReviewData {
  userId: string;
  rating: number;
  comment: string;
  reviewerName: string;
  reviewerId: string;
}

export async function createReview(data: CreateReviewData) {
  try {
    const userProfile = await prisma.profile.findFirst({
      where: {
        userId: data.userId,
      },
    });

    if (!userProfile) {
      throw new Error("Profile not found for this user");
    }

    const review = await prisma.review.create({
      data: {
        rating: data.rating,
        comment: data.comment,
        reviewerName: data.reviewerName,
        reviewerId: data.reviewerId,
        profile: {
          connect: {
            id: userProfile.id,
          },
        },
      },
    });

    revalidatePath(`/profile/${data.userId}`);

    return review;
  } catch (error) {
    console.error("Failed to create review:", error);
    throw new Error("Failed to create review");
  }
}

export async function getReviewsByUserId(userId: string) {
  try {
    const userProfile = await prisma.profile.findFirst({
      where: {
        userId: userId,
      },
      include: {
        reviews: {
          orderBy: {
            createdAt: "desc",
          },
          include: {
            profile: true,
          },
        },
      },
    });

    if (!userProfile) {
      return [];
    }

    return userProfile.reviews;
  } catch (error) {
    console.error("Failed to fetch reviews:", error);
    return [];
  }
}
