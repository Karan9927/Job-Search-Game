"use client";

import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import { JobGame } from "./Game/JobGame";
import { getCategories } from "@/lib/dataActions";

export type Category = {
  id: number;
  name: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
};

const Game = ({ userId }: { userId: string }) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <>
      {categories.map((category) => (
        <Card key={category.id} className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">{category.name}</CardTitle>
            <CardDescription>
              Explore challenges in {category.name}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <JobGame category={category} userId={userId} />
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default Game;
