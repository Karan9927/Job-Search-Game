"use client";

import { startTransition, useEffect, useState, useTransition } from "react";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Job } from "@/types/job";
import Spinner from "../ui/spinner/spinner";

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
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Select a job to view details</p>
      </div>
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
  return (
    <Card>
      <CardHeader>
        <CardTitle>{selectedJob.title}</CardTitle>
        <CardDescription>{selectedJob.company}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Job Description</h3>
            <p>{selectedJob.description}</p>
          </div>
          <div>
            <h3 className="font-semibold">Requirements</h3>
            <ul className="list-disc pl-5">
              {Array.isArray(selectedJob.requirements)
                ? selectedJob.requirements.map((req: string, index: number) => (
                    <li key={index}>{req}</li>
                  ))
                : JSON.parse(selectedJob.requirements).map(
                    (req: string, index: number) => <li key={index}>{req}</li>
                  )}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Location</h3>
            <p>{selectedJob.location}</p>
          </div>
          <div>
            <h3 className="font-semibold">Salary</h3>
            <p>${selectedJob.salary.toLocaleString()}</p>
          </div>
          <Button
            onClick={() => handleApplyJob(selectedJob.id)}
            disabled={isPending || hasApplied}
          >
            {hasApplied ? (
              "Already Applied"
            ) : isPending ? (
              <Spinner />
            ) : (
              "Apply Now"
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
