"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { getUserBadges } from "@/lib/badgeActions";
import { Badge } from "./ui/badge";

// Define a type for badge
interface BadgeData {
  id: number;
  name: string;
}

export const Badges = ({ badgeData }: { badgeData: BadgeData[] }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Badges</CardTitle>
        <CardDescription>Your achievements</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {badgeData?.length > 0 ? (
            badgeData?.map((badge) => (
              <Badge key={badge.id} variant="secondary" className="p-2">
                {badge.name}
              </Badge>
            ))
          ) : (
            <p>No badges yet! Keep going, you&apos;ll earn some soon!</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Badges;
