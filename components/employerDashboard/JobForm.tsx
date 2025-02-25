"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Spinner from "../ui/spinner/spinner";
import { postJob } from "@/lib/employerDashboardActions";
import { Job, JobFormData } from "@/types/job";
import { Plus, X } from "lucide-react";

interface JobFormProps {
  userId: string;
  onJobPosted: (job: Job) => void;
}

export default function JobForm({ userId, onJobPosted }: JobFormProps) {
  const [isPosting, setIsPosting] = useState(false);
  const [requirements, setRequirements] = useState<any[]>([]);
  const [requirementInput, setRequirementInput] = useState("");

  const addRequirement = () => {
    if (requirementInput.trim()) {
      setRequirements([...requirements, requirementInput.trim()]);
      setRequirementInput("");
    }
  };

  const removeRequirement = (index: number) => {
    setRequirements(requirements.filter((_, i) => i !== index));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!userId) {
      toast.error("User ID is required");
      return;
    }

    try {
      setIsPosting(true);
      const formData = new FormData(event.currentTarget);

      const jobData: JobFormData = {
        title: formData.get("title") as string,
        company: formData.get("company") as string,
        description: formData.get("description") as string,
        requirements: requirements, // Convert array to JSON
        location: formData.get("location") as string,
        salary: Number(formData.get("salary")),
      };

      const newJob = await postJob(userId, jobData);
      onJobPosted(newJob);
      toast.success("Job posted successfully!");
      (event.target as HTMLFormElement).reset();
      setRequirements([]); // Reset requirements after posting
    } catch (err) {
      console.error("Error posting job:", err);
      toast.error(err instanceof Error ? err.message : "Failed to post job");
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-1">
          Job Title
        </label>
        <Input id="title" name="title" required />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-1">
          Company
        </label>
        <Input id="company" name="company" required />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-1">
          Job Description
        </label>
        <Textarea id="description" name="description" required />
      </div>
      <div>
        <label
          htmlFor="requirements"
          className="block text-sm font-medium mb-1"
        >
          Requirements
        </label>
        <div className="flex gap-2">
          <Input
            id="requirements"
            value={requirementInput}
            onChange={(e) => setRequirementInput(e.target.value)}
            placeholder="Add a requirement"
          />
          <Button
            className="bg-black text-white p-3 rounded-full hover:bg-gray-700"
            type="button"
            onClick={addRequirement}
          >
            <Plus className="text-white" />
          </Button>
        </div>
        <ul className="mt-2 space-y-1">
          {requirements.map((req, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 px-3 py-1 rounded"
            >
              <span>{req}</span>
              <Button
                type="button"
                onClick={() => removeRequirement(index)}
                variant="ghost"
              >
                <X />
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <label htmlFor="location" className="block text-sm font-medium mb-1">
          Location
        </label>
        <Input id="location" name="location" required />
      </div>
      <div>
        <label htmlFor="salary" className="block text-sm font-medium mb-1">
          Salary
        </label>
        <Input id="salary" name="salary" type="number" required />
      </div>
      <Button type="submit" disabled={isPosting} className="w-full">
        {isPosting ? <Spinner /> : "Post Job"}
      </Button>
    </form>
  );
}
