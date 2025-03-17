import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import {
  getLeaderboardData,
  type LeaderboardEntry,
} from "@/lib/leaderboardActions";
import { Suspense } from "react";
import { getRoleName } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Crown, Flame, Medal, Trophy, Share2 } from "lucide-react";
import { auth } from "@/auth";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import LeaderboardClient from "./LeaderboardClient";

function LeaderboardSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((index) => (
        <Card key={index} className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Skeleton className="w-8 h-8" />
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-4 w-48" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Crown className="w-6 h-6 text-yellow-400" />;
    case 2:
      return <Medal className="w-6 h-6 text-gray-400" />;
    case 3:
      return <Medal className="w-6 h-6 text-amber-600" />;
    default:
      return <Trophy className="w-6 h-6 text-blue-500" />;
  }
};

async function LeaderboardContent() {
  const leaderboardData = await getLeaderboardData();
  const session = await auth();
  const userId = session?.user.id;

  return (
    <LeaderboardClient leaderboardData={leaderboardData} userId={userId} />
  );
}

export function Leaderboard() {
  return (
    <CardContent>
      <Suspense fallback={<LeaderboardSkeleton />}>
        <LeaderboardContent />
      </Suspense>
    </CardContent>
  );
}
