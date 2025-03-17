"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Building,
  CalendarDays,
  DollarSign,
  MapPin,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { formatSalary } from "@/lib/utils";

export default function JobsList({
  jobs,
  selectedJobId,
}: {
  jobs: any[];
  selectedJobId?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleJobSelect = (jobId: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("jobId", jobId);
    router.push(`?${params.toString()}`);
  };

  const getTimeAgo = (dateInput?: string | Date | null): string => {
    if (!dateInput) return "Recently";

    const pastDate =
      dateInput instanceof Date ? dateInput : new Date(dateInput);
    if (isNaN(pastDate.getTime())) return "Invalid date";

    const now = new Date();
    const diffInSeconds = Math.floor(
      (now.getTime() - pastDate.getTime()) / 1000
    );

    const units: { unit: Intl.RelativeTimeFormatUnit; seconds: number }[] = [
      { unit: "year", seconds: 31536000 },
      { unit: "month", seconds: 2592000 },
      { unit: "week", seconds: 604800 },
      { unit: "day", seconds: 86400 },
      { unit: "hour", seconds: 3600 },
      { unit: "minute", seconds: 60 },
    ];

    for (const { unit, seconds } of units) {
      const value = Math.floor(diffInSeconds / seconds);
      if (value >= 1) {
        return new Intl.RelativeTimeFormat("en", { numeric: "auto" }).format(
          -value,
          unit
        );
      }
    }

    return "Just now";
  };

  return (
    <div className="space-y-3">
      {jobs.length === 0 ? (
        <Card className="border-dashed">
          <CardContent className="p-6 text-center">
            <p className="text-muted-foreground">No jobs match your filters</p>
          </CardContent>
        </Card>
      ) : (
        jobs.map((job) => (
          <Card
            key={job.id}
            className={`cursor-pointer transition-all hover:shadow-md ${
              selectedJobId === job.id
                ? "border-primary border-2 shadow-sm"
                : "hover:border-muted-foreground/20"
            }`}
            onClick={() => handleJobSelect(job.id)}
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  {job.companyLogo ? (
                    <img
                      src={job.companyLogo || "/placeholder.svg"}
                      alt={job.company}
                      className="h-10 w-10 object-contain"
                    />
                  ) : (
                    <Building className="h-6 w-6" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold truncate">{job.title}</h3>
                    <ArrowRight
                      className={`h-4 w-4 mt-1 transition-opacity ${
                        selectedJobId === job.id ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </div>

                  <p className="text-sm text-muted-foreground mb-2">
                    {job.company}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-2">
                    {/* {job.type && (
                    <Badge variant="outline" className={`${getJobTypeColor(job.type)}`}>
                      {job.type || "Full-time"}
                    </Badge>
                  )} */}

                    {job.experience && (
                      <Badge
                        variant="outline"
                        className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                      >
                        {job.experience}
                      </Badge>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{job.location}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <DollarSign className="h-3.5 w-3.5" />
                      <span>${formatSalary(job.salary)}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <CalendarDays className="h-3.5 w-3.5" />
                      <span>
                        {job.createdAt
                          ? getTimeAgo(new Date(job.createdAt))
                          : "Recently"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}
