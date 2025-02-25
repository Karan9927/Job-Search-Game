"use client"; // Add this directive to make it a Client Component

import { JobCard } from "@/components/employerDashboard/JobCard";
import { Job } from "@/types/job";
import { Dispatch, SetStateAction } from "react";

interface JobListProps {
  jobs: Job[];
  onJobSelect: Dispatch<SetStateAction<Job | null>>; // Correctly typed prop
  selectedJobId?: string;
  onJobDelete: (jobId: string) => void;
}

export function JobList({ jobs, onJobSelect, onJobDelete }: JobListProps) {
  const handleJobSelect = (selectedJob: Job) => {
    onJobSelect(selectedJob);
  };

  return (
    <div
      className="space-y-2 max-h-[600px] overflow-y-auto [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
    >
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onSelect={handleJobSelect}
            onJobDelete={onJobDelete}
          />
        ))
      ) : (
        <div className="text-center py-8 text-muted-foreground">
          No jobs posted yet !
        </div>
      )}
    </div>
  );
}
