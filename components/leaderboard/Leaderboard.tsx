import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Crown, Flame, Medal, Trophy } from "lucide-react";
import { auth } from "@/auth";

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
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          <Flame className="w-8 h-8 text-orange-500" />
          Leaderboard
        </h1>
        <div className="bg-white rounded-full px-4 py-2 shadow-sm">
          <span className="text-sm font-medium text-gray-500">
            Last updated: Just now
          </span>
        </div>
      </div>
      {leaderboardData.length > 0 ? (
        leaderboardData.map((entry, index) => (
          <Card
            key={entry.id}
            className="overflow-hidden hover:shadow-md transition-shadow"
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-muted-foreground min-w-[2rem]">
                  {getRankIcon(index + 1)}
                </span>
                <Avatar className="h-12 w-12 border-2 border-primary">
                  <AvatarImage
                    src={entry.user.profile?.avatar || "/placeholder.svg"}
                    alt={entry.user.fullName}
                  />
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {entry.user.fullName
                      ? entry.user.fullName[0].toUpperCase()
                      : "?"}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  {userId === entry.user.id ? (
                    <span className="inline-block text-lg font-semibold truncate">
                      {entry.user.fullName || "Anonymous"}
                    </span>
                  ) : (
                    <Link
                      href={`/profile/${entry.user.id}`}
                      className="inline-block text-lg font-semibold hover:text-primary hover:underline truncate"
                    >
                      {entry.user.fullName || "Anonymous"}
                    </Link>
                  )}
                  <p className="text-sm text-muted-foreground">
                    {entry.user.profile?.education ||
                      getRoleName(entry.user.role) ||
                      "No qualification"}
                  </p>
                  <div className="text-sm text-muted-foreground mt-1">
                    {entry.userBadges.length > 0 ? (
                      entry.userBadges.map((badge) => (
                        <Badge key={badge.badge.name} className="mr-2 badge">
                          {badge.badge.name}
                        </Badge>
                      ))
                    ) : (
                      <span>No badges yet</span>
                    )}
                  </div>
                </div>
                <span className="text-lg font-semibold tabular-nums">
                  {entry.totalPoints} points
                </span>
              </div>
            </CardContent>
          </Card>
        ))
      ) : (
        <Card>
          <CardContent className="p-6 text-center text-muted-foreground">
            No players found
          </CardContent>
        </Card>
      )}
    </div>
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
