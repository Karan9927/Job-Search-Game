"use client";

import { startTransition, useState } from "react";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Job } from "@/types/job";
import Spinner from "../ui/spinner/spinner";
import {
  Calendar,
  Building,
  DollarSign,
  ExternalLink,
  MapPin,
  Share2,
} from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Separator } from "@radix-ui/react-select";
import { formatSalary } from "@/lib/utils";

export default function JobDetails({
  selectedJobId,
  jobs,
  userId,
  handleJobApplication,
}: {
  selectedJobId?: string;
  jobs: Job[];
  userId: string;
  handleJobApplication: (
    jobId: string
  ) => Promise<{ success: boolean; message: string }>;
}) {
  const [isPending, setIsPending] = useState(false);

  const selectedJob = jobs.find((job) => job.id === selectedJobId);

  const hasApplied = selectedJob?.applications?.some(
    (application) => application.userId === userId
  );
  if (!selectedJob) {
    return (
      <Card className="h-full flex items-center justify-center border-dashed">
        <CardContent className="text-center p-6">
          <Building className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" />
          <h3 className="text-xl font-medium mb-2">No job selected</h3>
          <p className="text-muted-foreground">
            Select a job from the list to view details
          </p>
        </CardContent>
      </Card>
    );
  }

  const handleApplyJob = async (jobId: string) => {
    if (!userId) {
      toast.error("Please sign in to apply for jobs");
      return;
    }

    setIsPending(true);
    startTransition(async () => {
      try {
        const result = await handleJobApplication(jobId);
        if (result.success) {
          toast.success(result.message);
        } else {
          toast.error(result.message);
        }
      } finally {
        setIsPending(false);
      }
    });
  };

  const handleShareJob = (platform: string) => {
    const jobUrl = `${window.location.origin}/jobs?jobId=${selectedJob.id}`;
    const shareText = `Check out this job: ${selectedJob.title} at ${selectedJob.company}`;

    let shareUrl = "";
    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          shareText
        )}&url=${encodeURIComponent(jobUrl)}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          jobUrl
        )}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          jobUrl
        )}`;
        break;
      case "email":
        shareUrl = `mailto:?subject=${encodeURIComponent(
          `Job Opportunity: ${selectedJob.title}`
        )}&body=${encodeURIComponent(`${shareText}\n\n${jobUrl}`)}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank");
    }
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
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="pl-2">
            <CardTitle className="text-3xl">{selectedJob.title}</CardTitle>
            <CardDescription className="flex items-center mt-1">
              <Building className="h-4 w-4 mr-1" />
              {selectedJob.company}
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">Share job</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-56 p-3" align="end">
                <div className="space-y-1">
                  <h4 className="text-sm font-medium mb-2">Share this job</h4>
                  <div className=" gap-1">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-9 w-9"
                      onClick={() => handleShareJob("twitter")}
                    >
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z" />
                      </svg>
                      <span className="sr-only">Twitter</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-9 w-9"
                      onClick={() => handleShareJob("facebook")}
                    >
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      <span className="sr-only">Facebook</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-9 w-9"
                      onClick={() => handleShareJob("linkedin")}
                    >
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-9 w-9"
                      onClick={() => handleShareJob("email")}
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="sr-only">Email</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-9 w-9"
                      onClick={() => {
                        const jobUrl = `${window.location.origin}/jobs?jobId=${selectedJob.id}`;
                        navigator.clipboard.writeText(jobUrl);
                        toast.success("Link copied to clipboard");
                      }}
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                        />
                      </svg>
                      <span className="sr-only">Copy Link</span>
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </CardHeader>

      <div className="px-6 pb-3">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-muted-foreground flex items-center">
              <MapPin className="h-3 w-3 mr-1" /> Location
            </span>
            <span className="text-sm font-medium">{selectedJob.location}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-muted-foreground flex items-center">
              <DollarSign className="h-3 w-3 mr-1" /> Salary
            </span>
            <span className="text-sm font-medium">
              ${formatSalary(selectedJob.salary)}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xs text-muted-foreground flex items-center">
              <Calendar className="h-3 w-3 mr-1" /> Posted
            </span>
            <span>
              {selectedJob.createdAt
                ? getTimeAgo(new Date(selectedJob.createdAt))
                : "Recently"}
            </span>
          </div>
        </div>
      </div>

      <Separator />

      <CardContent className="pt-4 flex-grow overflow-auto">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Job Description</h3>
            <p className="text-sm leading-relaxed whitespace-pre-line">
              {selectedJob.description}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Requirements</h3>
            <ul className="space-y-2">
              {Array.isArray(selectedJob.requirements)
                ? selectedJob.requirements.map((req: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs text-primary font-medium">
                          {index + 1}
                        </span>
                      </div>
                      {req}
                    </li>
                  ))
                : JSON.parse(selectedJob.requirements).map(
                    (req: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm"
                      >
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs text-primary font-medium">
                            {index + 1}
                          </span>
                        </div>
                        {req}
                      </li>
                    )
                  )}
            </ul>
          </div>
        </div>
      </CardContent>

      <CardFooter className="border-t bg-muted/10 pt-4">
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <Button
            className="flex-1 gap-2"
            size="lg"
            onClick={() => handleApplyJob(selectedJob.id)}
            disabled={isPending || hasApplied}
          >
            {hasApplied ? (
              <>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Already Applied
              </>
            ) : isPending ? (
              <Spinner />
            ) : (
              <>
                <ExternalLink className="h-4 w-4" />
                Apply Now
              </>
            )}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
