"use client";
import { Job } from "@/types/job";
import { useState } from "react";
import JobForm from "./JobForm";
import { JobList } from "./JobList";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { changeStatus } from "@/lib/employerDashboardActions";
import { toast } from "sonner";
import Link from "next/link";

interface DashboardContentProps {
  userId: string;
  initialJobs: Job[];
}

export function DashboardContent({
  userId,
  initialJobs,
}: DashboardContentProps) {
  const [jobs, setJobs] = useState(initialJobs);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const handleJobPosted = (newJob: Job) => {
    setJobs((prevJobs) => [newJob, ...prevJobs]);
    setSelectedJob(null);
  };

  const handleJobDelete = (jobId: string) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== jobId));
  };

  const handleApplicationStatus = async (
    applicationId: string,
    action: "ACCEPTED" | "REJECTED"
  ) => {
    try {
      if (action === "ACCEPTED") {
        await changeStatus(applicationId, "ACCEPTED");
        toast.success("Application Accepted !");
      } else if (action === "REJECTED") {
        await changeStatus(applicationId, "REJECTED");
        toast.success("Application Rejected !");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Employer Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">Post a New Job</h2>
            <JobForm userId={userId} onJobPosted={handleJobPosted} />
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Posted Jobs</h2>
            <JobList
              jobs={jobs}
              onJobSelect={setSelectedJob}
              onJobDelete={handleJobDelete}
              selectedJobId={selectedJob?.id}
            />
          </section>
        </div>

        {selectedJob && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>{selectedJob.title}</CardTitle>
              <CardDescription>{selectedJob.company}</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">Applications</h3>
              <div className="space-y-4">
                {selectedJob?.applications.map((application) => (
                  <Card key={application.id}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <Link
                            href={`/profile/${application.userId}`}
                            className="inline-block text-lg font-semibold hover:text-primary hover:underline truncate"
                          >
                            {application.user.fullName}
                          </Link>
                          <p className="text-sm text-muted-foreground">
                            Status: {application.status}
                          </p>
                        </div>
                        <div className="space-x-2">
                          <Button
                            size="sm"
                            disabled={application.status !== "PENDING"}
                            onClick={() => {
                              handleApplicationStatus(
                                application.id,
                                "ACCEPTED"
                              );
                            }}
                          >
                            Accept
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            disabled={application.status !== "PENDING"}
                            onClick={() => {
                              handleApplicationStatus(
                                application.id,
                                "REJECTED"
                              );
                            }}
                          >
                            Reject
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}
