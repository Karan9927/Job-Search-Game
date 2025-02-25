import type React from "react";
import { Card, CardContent } from "@/components/ui/card";

const templates = [
  { id: "modern", name: "Modern" },
  { id: "classic", name: "Classic" },
  { id: "minimalist", name: "Minimalist" },
];

interface TemplateSidebarProps {
  selectedTemplate: string;
  onSelectTemplate: (templateId: string) => void;
}

const TemplateSidebar: React.FC<TemplateSidebarProps> = ({
  selectedTemplate,
  onSelectTemplate,
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Choose a Template</h2>
      <div className="space-y-4">
        {templates.map((template) => (
          <Card
            key={template.id}
            className={`cursor-pointer transition-all duration-200 ${
              selectedTemplate === template.id
                ? "ring-2 ring-blue-500"
                : "hover:shadow-md"
            }`}
            onClick={() => onSelectTemplate(template.id)}
          >
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2">{template.name}</h3>
              <div className="w-full h-32 bg-gray-100 mb-2 overflow-hidden">
                {/* Template Preview */}
                <div
                  className={`w-full h-full ${getTemplatePreviewStyle(
                    template.id
                  )}`}
                >
                  <div className="w-full h-6 bg-gray-300 mb-2"></div>
                  <div className="w-3/4 h-4 bg-gray-200 mb-1"></div>
                  <div className="w-1/2 h-4 bg-gray-200"></div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                {getTemplateDescription(template.id)}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const getTemplatePreviewStyle = (templateId: string) => {
  switch (templateId) {
    case "modern":
      return "bg-gradient-to-r from-blue-100 to-indigo-100 p-4";
    case "classic":
      return "bg-white border-t-4 border-gray-800 p-4";
    case "minimalist":
      return "bg-white p-4";
    default:
      return "bg-white p-4";
  }
};

const getTemplateDescription = (templateId: string) => {
  switch (templateId) {
    case "modern":
      return "A sleek and contemporary design with a focus on visual appeal.";
    case "classic":
      return "A traditional layout that emphasizes professionalism and clarity.";
    case "minimalist":
      return "A clean and simple design that puts your content front and center.";
    default:
      return "";
  }
};

export default TemplateSidebar;
