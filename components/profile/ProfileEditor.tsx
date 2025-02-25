"use client";
import type React from "react";
import { startTransition, useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Camera, Plus, Trash } from "lucide-react";
import { toast } from "sonner";
import { formatDate, getRoleName } from "@/lib/utils";
import Spinner from "../ui/spinner/spinner";
import { Achievement, Education, Experience, Skill } from "@/types/profile";
import { Badge } from "../ui/badge";

interface ProfileEditorProps {
  profile: any;
  updateProfile: (formData: FormData) => Promise<void>;
  isEditing?: boolean;
}

export function ProfileEditor({
  profile,
  updateProfile,
  isEditing: externalIsEditing,
}: ProfileEditorProps) {
  const [isEditing, setIsEditing] = useState(externalIsEditing || false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(
    profile?.avatar || null
  );
  const [educations, setEducations] = useState<Education[]>(
    profile?.education || []
  );
  const [experiences, setExperiences] = useState<Experience[]>(
    profile?.experience || []
  );
  const [skills, setSkills] = useState<Skill[]>(profile?.skills || []);
  const [achievements, setAchievements] = useState<Achievement[]>(
    profile?.achievements || []
  );
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      setIsUploading(true);
      if (imageFile) {
        const imageFormData = new FormData();
        imageFormData.append("file", imageFile);
        imageFormData.append("userId", profile?.userId);

        const uploadResponse = await fetch("/api/upload", {
          method: "POST",
          body: imageFormData,
        });

        if (!uploadResponse.ok) {
          throw new Error("Failed to upload image");
        }

        const { url } = await uploadResponse.json();
        formData.append("avatar", url);
      }

      formData.append("education", JSON.stringify(educations));
      formData.append("experience", JSON.stringify(experiences));
      formData.append("skills", JSON.stringify(skills));
      formData.append("achievements", JSON.stringify(achievements));

      startTransition(async () => {
        await updateProfile(formData);
        setIsEditing(false);
        toast.success("Profile updated successfully");
      });
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile");
    } finally {
      setIsUploading(false);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setImageFile(file);
    }
  };

  const ProfileField = ({ label, value }: { label: string; value: string }) => (
    <div className="space-y-1">
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      <p className="text-sm">{value || "Not specified"}</p>
    </div>
  );

  const addEducation = () => {
    setEducations([
      ...educations,
      {
        degree: "",
        institution: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const removeEducation = (index: number) => {
    setEducations(educations.filter((_, i) => i !== index));
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        title: "",
        companyName: "",
        description: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const removeExperience = (index: number) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  const addSkill = () => {
    setSkills([...skills, { skillName: "", proficiency: 50 }]);
  };

  const removeSkill = (index: number) => {
    setSkills(skills?.filter((_, i) => i !== index));
  };

  const addAchievement = () => {
    setAchievements([
      ...achievements,
      { title: "", description: "", date: "" },
    ]);
  };

  const removeAchievement = (index: number) => {
    setAchievements(achievements.filter((_, i) => i !== index));
  };

  if (!isEditing) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between space-x-4">
          <Avatar className="w-20 h-20">
            <AvatarImage
              src={imagePreview || "/placeholder.svg"}
              alt={profile?.fullName || "Profile"}
            />
            <AvatarFallback>{profile?.fullName?.[0] || "U"}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            {profile?.fullName && (
              <p className="text-sm">
                <span className="font-semibold">Name: </span>{" "}
                {profile?.fullName}
              </p>
            )}
            {profile?.email && (
              <p className="text-sm">
                <span className="font-semibold">Email: </span>
                {profile?.email}
              </p>
            )}
            {profile?.phoneNumber && (
              <p className="text-sm">
                <span className="font-semibold">Phone: </span>
                {profile?.phone}
              </p>
            )}
          </div>
        </div>

        <div className="grid gap-6">
          <ProfileField label="Bio" value={profile?.bio || "No bio provided"} />

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Education</h3>
            {profile?.education && profile?.education.length > 0 ? (
              (profile?.education || []).map(
                (edu: Education, index: number) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{edu.degree}</h4>
                      <Badge variant="secondary">
                        {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                      </Badge>
                    </div>
                    <p>{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {edu.description}
                    </p>
                  </Card>
                )
              )
            ) : (
              <p className="text-sm whitespace-pre-line">
                No education details provided
              </p>
            )}
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Experience</h3>
            {profile?.experience && profile?.experience.length > 0 ? (
              (profile?.experience || []).map(
                (exp: Experience, index: number) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{exp.title}</h4>
                      <Badge variant="secondary">
                        {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                      </Badge>
                    </div>
                    <p>{exp.companyName}</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {exp.description}
                    </p>
                  </Card>
                )
              )
            ) : (
              <p className="text-sm whitespace-pre-line">
                No experience details provided
              </p>
            )}
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Skills</h3>
            {profile?.skills && profile?.skills?.length > 0 ? (
              (profile?.skills || []).map((skill: Skill, index: number) => (
                <Badge key={index} variant="default" className="mx-2">
                  <p className="font-semibold">{skill.skillName}</p>
                </Badge>
              ))
            ) : (
              <p className="text-sm whitespace-pre-line">
                No skills details provided
              </p>
            )}
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Achievements</h3>
            {profile?.achievements && profile?.achievements.length > 0 ? (
              (profile?.achievements || []).map(
                (achievement: Achievement, index: number) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{achievement.title}</h4>
                      <Badge variant="secondary">
                        {formatDate(achievement.date)}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      {achievement.description}
                    </p>
                  </Card>
                )
              )
            ) : (
              <p className="text-sm whitespace-pre-line">
                No achievement details provided
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
        </div>
      </div>
    );
  }

  const formatDateForInput = (dateString?: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toISOString().split("T")[0]; // Converts to YYYY-MM-DD format
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Avatar className="w-20 h-20">
            <AvatarImage
              src={imagePreview || "/placeholder.svg"}
              alt={profile?.fullName}
            />
            <AvatarFallback>{profile?.fullName[0]}</AvatarFallback>
          </Avatar>
          <Button
            type="button"
            variant="secondary"
            size="icon"
            className="absolute bottom-0 right-0 rounded-full w-8 h-8"
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
          >
            <Camera className="w-4 h-4" />
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            name="avatar"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>
      </div>

      <div className="grid gap-4">
        <div>
          <label htmlFor="bio">Bio</label>
          <Textarea id="bio" name="bio" defaultValue={profile?.bio || ""} />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold">Education</h3>
            <Button
              type="button"
              className="rounded-full p-3"
              onClick={addEducation}
            >
              <Plus className="" />
            </Button>
          </div>
          {educations.map((education, index) => (
            <Card key={index} className="p-4 space-y-2">
              <Input
                placeholder="Degree"
                value={education.degree}
                onChange={(e) => {
                  const newEducations = [...educations];
                  newEducations[index].degree = e.target.value;
                  setEducations(newEducations);
                }}
              />
              <Input
                placeholder="Institution"
                value={education.institution}
                onChange={(e) => {
                  const newEducations = [...educations];
                  newEducations[index].institution = e.target.value;
                  setEducations(newEducations);
                }}
              />
              <Input
                type="date"
                placeholder="Start Date"
                value={formatDateForInput(education.startDate)}
                onChange={(e) => {
                  const newEducations = [...educations];
                  newEducations[index].startDate = e.target.value;
                  setEducations(newEducations);
                }}
              />
              <Input
                type="date"
                placeholder="End Date"
                value={formatDateForInput(education.endDate)}
                onChange={(e) => {
                  const newEducations = [...educations];
                  newEducations[index].endDate = e.target.value;
                  setEducations(newEducations);
                }}
              />
              <Textarea
                placeholder="Description"
                value={education.description}
                onChange={(e) => {
                  const newEducations = [...educations];
                  newEducations[index].description = e.target.value;
                  setEducations(newEducations);
                }}
              />
              <Button
                type="button"
                variant="destructive"
                onClick={() => removeEducation(index)}
              >
                <Trash className="w-4 h-4 mr-2" /> Remove
              </Button>
            </Card>
          ))}
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold">Experience</h3>
            <Button
              type="button"
              className="rounded-full p-3"
              onClick={addExperience}
            >
              <Plus />
            </Button>
          </div>
          {experiences.map((experience, index) => (
            <Card key={index} className="p-4 space-y-2">
              <Input
                placeholder="Title"
                value={experience.title}
                onChange={(e) => {
                  const newExperiences = [...experiences];
                  newExperiences[index].title = e.target.value;
                  setExperiences(newExperiences);
                }}
              />
              <Input
                placeholder="Company Name"
                value={experience.companyName}
                onChange={(e) => {
                  const newExperiences = [...experiences];
                  newExperiences[index].companyName = e.target.value;
                  setExperiences(newExperiences);
                }}
              />
              <Input
                type="date"
                placeholder="Start Date"
                value={formatDateForInput(experience.startDate)}
                onChange={(e) => {
                  const newExperiences = [...experiences];
                  newExperiences[index].startDate = e.target.value;
                  setExperiences(newExperiences);
                }}
              />
              <Input
                type="date"
                placeholder="End Date"
                value={formatDateForInput(experience.endDate)}
                onChange={(e) => {
                  const newExperiences = [...experiences];
                  newExperiences[index].endDate = e.target.value;
                  setExperiences(newExperiences);
                }}
              />
              <Textarea
                placeholder="Description"
                value={experience.description}
                onChange={(e) => {
                  const newExperiences = [...experiences];
                  newExperiences[index].description = e.target.value;
                  setExperiences(newExperiences);
                }}
              />
              <Button
                type="button"
                variant="destructive"
                onClick={() => removeExperience(index)}
              >
                <Trash className="w-4 h-4 mr-2" /> Remove
              </Button>
            </Card>
          ))}
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold">Skills</h3>
            <Button
              type="button"
              className="rounded-full p-3"
              onClick={addSkill}
            >
              <Plus />
            </Button>
          </div>
          {skills?.map((skill, index) => (
            <Card key={index} className="p-4 space-y-2">
              <Input
                placeholder="Skill Name"
                value={skill.skillName}
                onChange={(e) => {
                  const newSkills = [...skills];
                  newSkills[index].skillName = e.target.value;
                  setSkills(newSkills);
                }}
              />
              <div className="space-y-2">
                <label
                  htmlFor={`skill-${index}`}
                  className="text-sm font-medium"
                >
                  Proficiency: {skill.proficiency}%
                </label>
                <Slider
                  id={`skill-${index}`}
                  min={0}
                  max={100}
                  step={1}
                  value={[skill.proficiency]}
                  onValueChange={(value) => {
                    const newSkills = [...skills];
                    newSkills[index].proficiency = value[0];
                    setSkills(newSkills);
                  }}
                />
              </div>
              <Button
                type="button"
                variant="destructive"
                onClick={() => removeSkill(index)}
              >
                <Trash className="w-4 h-4 mr-2" /> Remove
              </Button>
            </Card>
          ))}
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold">Achievements</h3>
            <Button
              type="button"
              className="rounded-full p-3"
              onClick={addAchievement}
            >
              <Plus />
            </Button>
          </div>
          {achievements.map((achievement, index) => (
            <Card key={index} className="p-4 space-y-2">
              <Input
                placeholder="Title"
                value={achievement.title}
                onChange={(e) => {
                  const newAchievements = [...achievements];
                  newAchievements[index].title = e.target.value;
                  setAchievements(newAchievements);
                }}
              />
              <Textarea
                placeholder="Description"
                value={achievement.description}
                onChange={(e) => {
                  const newAchievements = [...achievements];
                  newAchievements[index].description = e.target.value;
                  setAchievements(newAchievements);
                }}
              />
              <Input
                type="date"
                placeholder="Date"
                value={formatDateForInput(achievement.date)}
                onChange={(e) => {
                  const newAchievements = [...achievements];
                  newAchievements[index].date = e.target.value;
                  setAchievements(newAchievements);
                }}
              />
              <Button
                type="button"
                variant="destructive"
                onClick={() => removeAchievement(index)}
              >
                <Trash className="w-4 h-4 mr-2" /> Remove
              </Button>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex justify-end space-x-2 pt-4">
        <Button
          variant="outline"
          onClick={() => setIsEditing(false)}
          type="button"
        >
          Cancel
        </Button>
        <Button type="submit" disabled={isUploading}>
          {isUploading ? <Spinner /> : "Save Changes"}
        </Button>
      </div>
    </form>
  );
}
