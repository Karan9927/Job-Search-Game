"use client";

import { useState, useRef } from "react";
import type {
  Achievement,
  Education,
  Experience,
  Skill,
} from "@/types/profile";
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Download } from "lucide-react";
import TemplateSidebar from "./template-sidebar";
import Spinner from "./spinner/spinner";
import { formatDate } from "@/lib/utils";

const templateStyles = {
  modern: {
    container: "bg-slate-50",
    header: "bg-slate-700 text-white p-6 flex flex-col items-center",
    content: "px-8 py-6",
    section: "mb-6",
    sectionTitle:
      "text-slate-800 text-xl font-semibold mb-4 border-b-2 border-slate-200 pb-2",
    itemTitle: "text-slate-700 font-semibold",
    itemSubtitle: "text-slate-600",
    text: "text-slate-600",
  },
  classic: {
    container: "bg-white border-t-8 border-gray-800 p-5",
    header: "py-6 text-center flex justify-between items-center",
    content: " py-6",
    section: "mb-6",
    sectionTitle:
      "text-gray-800 text-xl font-serif font-bold mb-4 uppercase border-b border-gray-300 pb-2",
    itemTitle: "text-gray-800 font-serif font-semibold",
    itemSubtitle: "text-gray-600 font-serif",
    text: "text-gray-700 font-serif",
  },
  minimalist: {
    container: "bg-white p-5",
    header:
      "py-6 border-b border-gray-200 py-6 text-center flex justify-between items-center",
    content: " py-6",
    section: "mb-6",
    sectionTitle: "text-black text-lg font-medium mb-4",
    itemTitle: "text-black font-medium",
    itemSubtitle: "text-gray-600",
    text: "text-gray-600",
  },
};

const Resume = ({ profile }: any) => {
  const [selectedTemplate, setSelectedTemplate] = useState("modern");
  const styles =
    templateStyles[selectedTemplate as keyof typeof templateStyles];
  const resumeRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const downloadPDF = async () => {
    setIsLoading(true);
    if (resumeRef.current) {
      const scale = 6;
      const canvas = await html2canvas(resumeRef.current, {
        scale: scale,
        useCORS: true,
        logging: false,
        allowTaint: true,
      });
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const pdf = new jsPDF({
        format: "a4",
        unit: "px",
      });
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;
      pdf.addImage(
        imgData,
        "JPEG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      const fileName = profile?.fullName;
      pdf.save(fileName + "_Resume");
      setIsLoading(false);
    }
  };

  const renderHeader = () => {
    switch (selectedTemplate) {
      case "modern":
        return (
          <div className={styles.header}>
            <Avatar className="w-32 h-32 mb-4">
              <AvatarImage
                src={profile.avatar || "/placeholder.svg"}
                alt={profile.fullName || "Profile"}
              />
              <AvatarFallback>{profile.fullName[0] || "U"}</AvatarFallback>
            </Avatar>
            <h1 className="text-2xl font-bold text-white">
              {profile.fullName}
            </h1>
            <p className="text-blue-100">
              {profile.email} | {profile.phone}
            </p>
          </div>
        );
      case "classic":
      case "minimalist":
        return (
          <div className={styles.header}>
            <Avatar className="w-24 h-24">
              <AvatarImage
                src={profile.avatar || "/placeholder.svg"}
                alt={profile.fullName || "Profile"}
              />
              <AvatarFallback>{profile.fullName[0] || "U"}</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <h1
                className={` ${
                  selectedTemplate === "classic" ? "font-serif" : ""
                }`}
              >
                <span className="font-semibold">Name: </span>
                {profile.fullName}
              </h1>
              <p className={selectedTemplate === "classic" ? "font-serif" : ""}>
                <span className="font-semibold">Email:</span> {profile.email}
              </p>
              <p className={selectedTemplate === "classic" ? "font-serif" : ""}>
                <span className="font-semibold">Phone:</span> {profile.phone}
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="space-y-8 p-10">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Resume Builder</h2>
        <Button
          onClick={downloadPDF}
          disabled={isLoading}
          className="min-w-[162px]"
        >
          {isLoading ? (
            <Spinner className="h-4 w-4" />
          ) : (
            <>
              Download PDF <Download className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
      <div className="flex space-x-8">
        <div className="w-1/3">
          <TemplateSidebar
            selectedTemplate={selectedTemplate}
            onSelectTemplate={setSelectedTemplate}
          />
        </div>
        <div className="w-2/3">
          <div className="border flex justify-center p-5">
            <div
              ref={resumeRef}
              className={`w-full max-w-4xl ${styles.container}`}
            >
              {renderHeader()}
              <div className={styles.content}>
                <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>Education</h3>
                  {profile.education.map((edu: Education, index: number) => (
                    <div key={index} className="mb-4">
                      <div className="flex justify-between items-baseline">
                        <h4 className={styles.itemTitle}>{edu.degree}</h4>
                        <span className={`text-sm ${styles.itemSubtitle}`}>
                          {formatDate(edu.startDate)} -{" "}
                          {formatDate(edu.endDate)}
                        </span>
                      </div>
                      <p className={styles.itemSubtitle}>{edu.institution}</p>
                      <p className={`${styles.text} mt-1`}>{edu.description}</p>
                    </div>
                  ))}
                </div>

                <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>Experience</h3>
                  {profile.experience.map((exp: Experience, index: number) => (
                    <div key={index} className="mb-4">
                      <div className="flex justify-between items-baseline">
                        <h4 className={styles.itemTitle}>{exp.title}</h4>
                        <span className={`text-sm ${styles.itemSubtitle}`}>
                          {formatDate(exp.startDate)} -{" "}
                          {formatDate(exp.endDate)}
                        </span>
                      </div>
                      <p className={styles.itemSubtitle}>{exp.companyName}</p>
                      <p className={`${styles.text} mt-1`}>{exp.description}</p>
                    </div>
                  ))}
                </div>

                <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map((skill: Skill, index: number) => (
                      <span
                        key={index}
                        className={`${styles.text}  px-2 py-1 rounded-full text-sm`}
                      >
                        {skill.skillName}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>Achievements</h3>
                  {profile.achievements.map(
                    (achievement: Achievement, index: number) => (
                      <div key={index} className="mb-4">
                        <div className="flex justify-between items-baseline">
                          <h4 className={styles.itemTitle}>
                            {achievement.title}
                          </h4>
                          <span className={`text-sm ${styles.itemSubtitle}`}>
                            {formatDate(achievement.date)}
                          </span>
                        </div>
                        <p className={`${styles.text} mt-1`}>
                          {achievement.description}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
