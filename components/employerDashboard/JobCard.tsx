"use client";
import { Job } from "@/types/job";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X } from "lucide-react";
import { deleteJob } from "@/lib/employerDashboardActions";
import { toast } from "sonner";
import { formatSalary } from "@/lib/utils";

interface JobCardProps {
  job: Job;
  onSelect: (job: Job) => void;
  onJobDelete: (jobId: string) => void;
}

export function JobCard({ job, onSelect, onJobDelete }: JobCardProps) {
  const handleDelete = async () => {
    try {
      await deleteJob(job.id);
      onJobDelete(job.id);
      toast.success("Job deleted successfully !");
    } catch (err) {
      console.error("Error deleting job:", err);
    }
  };
  return (
    <Card
      className="cursor-pointer hover:shadow-md transition-shadow"
      onClick={() => onSelect(job)}
    >
      <CardHeader>
        <CardTitle className="text-lg">
          <div className="flex justify-between">
            {job.title}
            <X onClick={handleDelete} />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{job.company}</p>
        <p className="text-sm mt-2">Applications: {job.applications.length}</p>
        <p className="text-sm text-muted-foreground mt-1">
          Location: {job.location}
        </p>
        <p className="text-sm text-muted-foreground">
          Salary: ${formatSalary(job.salary)}
        </p>
      </CardContent>
    </Card>
  );
}
