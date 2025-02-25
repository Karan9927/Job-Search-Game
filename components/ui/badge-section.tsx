"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription } from "@/components/ui/card";
import { getBadges } from "@/lib/badgeActions";
import * as LucideIcons from "lucide-react"; // Import all icons

interface BadgeType {
  id: number;
  name: string;
  description: string;
  icon: string | null;
}

export default function BadgeSection() {
  const [badges, setBadges] = useState<BadgeType[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getBadges();
        setBadges(data);
      } catch (error) {
        console.error("Failed to fetch badges:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Badges and Achievements
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {badges.length > 0 ? (
          badges.map((badge) => {
            const iconName = badge.icon ? `${badge.icon}Icon` : null;
            const IconComponent = iconName && (LucideIcons as any)[iconName];

            return (
              <Card
                key={badge.id}
                className="flex flex-col items-center text-center p-6 space-y-3"
              >
                {IconComponent ? (
                  <IconComponent size={48} className="text-black" />
                ) : (
                  <div className="w-12 h-12 bg-gray-300 rounded-full" />
                )}
                <Badge className="text-lg font-bold px-3 py-1">
                  {badge.name}
                </Badge>
                <CardDescription>{badge.description}</CardDescription>
              </Card>
            );
          })
        ) : (
          <p className="text-center col-span-3">No badges available.</p>
        )}
      </div>
    </section>
  );
}
