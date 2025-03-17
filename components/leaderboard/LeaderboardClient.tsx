"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Crown,
  Flame,
  Medal,
  Trophy,
  Share2,
  Copy,
  Check,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { getRoleName } from "@/lib/utils";
import { useState } from "react";
import { toast } from "sonner";

function getRankIcon(rank: number) {
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
}

export default function LeaderboardClient({ leaderboardData, userId }: any) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      toast.success("Share link has been copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    });
  };

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
        leaderboardData.map((entry: any, index: any) => {
          const isCurrentUser = userId === entry.user.id;
          const leaderboardUrl = `${process.env.NEXT_PUBLIC_APP_UR}/leaderboard`;

          const shareText = encodeURIComponent(
            `🔥 I scored ${entry.totalPoints} points and earned ${
              entry.userBadges.length > 0
                ? entry.userBadges
                    .map((badge: any) => badge.badge.name)
                    .join(", ")
                : "no badges yet"
            } on the leaderboard! 🚀\n\nCheck it out: ${leaderboardUrl}`
          );

          const shareUrls = {
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${leaderboardUrl}`,
            twitter: `https://twitter.com/intent/tweet?text=${shareText}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${leaderboardUrl}`,
          };

          return (
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
                      src={
                        entry.user.profile?.avatar ||
                        "/placeholder.svg?height=48&width=48"
                      }
                      alt={entry.user.fullName}
                    />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {entry.user.fullName
                        ? entry.user.fullName[0].toUpperCase()
                        : "?"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    {isCurrentUser ? (
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
                        entry.userBadges.map((badge: any) => (
                          <Badge key={badge.badge.name} className="mr-2 badge">
                            {badge.badge.name}
                          </Badge>
                        ))
                      ) : (
                        <span>No badges yet</span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold tabular-nums">
                      {entry.totalPoints} points
                    </span>
                    {isCurrentUser && (
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-1 rounded-full hover:bg-primary/10 hover:text-primary"
                          >
                            <Share2 className="w-4 h-4" />
                            <span className="hidden sm:inline">Share</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-72 p-0 overflow-hidden">
                          <div className="p-4 bg-muted/30">
                            <h3 className="font-medium mb-1">
                              Share your achievement
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              Let others know about your {entry.totalPoints}{" "}
                              points and {entry.userBadges.length} badges!
                            </p>
                          </div>

                          <div className="p-4 space-y-4">
                            <div className="flex items-center justify-between gap-2 bg-muted/20 rounded-md p-2">
                              <span className="text-xs text-muted-foreground truncate flex-1">
                                {leaderboardUrl}
                              </span>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0"
                                onClick={() => copyToClipboard(leaderboardUrl)}
                              >
                                {copied ? (
                                  <Check className="h-4 w-4" />
                                ) : (
                                  <Copy className="h-4 w-4" />
                                )}
                                <span className="sr-only">Copy link</span>
                              </Button>
                            </div>

                            <div className="grid grid-cols-3 gap-2">
                              <a
                                href={shareUrls.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center gap-1 p-3 rounded-md bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors"
                              >
                                <Facebook className="h-5 w-5" />
                                <span className="text-xs font-medium">
                                  Facebook
                                </span>
                              </a>
                              <a
                                href={shareUrls.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center gap-1 p-3 rounded-md bg-sky-50 hover:bg-sky-100 text-sky-500 transition-colors"
                              >
                                <Twitter className="h-5 w-5" />
                                <span className="text-xs font-medium">
                                  Twitter
                                </span>
                              </a>
                              <a
                                href={shareUrls.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center gap-1 p-3 rounded-md bg-blue-50 hover:bg-blue-100 text-blue-700 transition-colors"
                              >
                                <Linkedin className="h-5 w-5" />
                                <span className="text-xs font-medium">
                                  LinkedIn
                                </span>
                              </a>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })
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
