"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";

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

  return (
    <>
      {jobs.map((job) => (
        <Card
          key={job.id}
          className={`cursor-pointer hover:bg-gray-50 ${
            selectedJobId === job.id ? "border-primary" : ""
          }`}
          onClick={() => handleJobSelect(job.id)}
        >
          <CardContent className="p-4">
            <h3 className="font-semibold">{job.title}</h3>
            <p className="text-sm text-muted-foreground">{job.company}</p>
            <p className="text-sm">{job.location}</p>
            <p className="text-sm">${job.salary.toLocaleString()}</p>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
