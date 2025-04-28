import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import ModernTemplate from "./ModernTemplate";
import ClassicTemplate from "./ClassicTemplate";
import ProfessionalTemplate from "./ProfessionalTemplate";
import CreativeTemplate from "./CreativeTemplate";
import { TemplateType } from "../../../redux/reducer/templateSlice";

const CVTemplate: React.FC = () => {
  const selectedTemplate = useSelector<RootState, TemplateType>(
    (state) => state.template.selectedTemplate
  );

  // Render the appropriate template based on selection
  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "modern":
        return <ModernTemplate />;
      case "classic":
        return <ClassicTemplate />;
      case "professional":
        return <ProfessionalTemplate />;
      case "creative":
        return <CreativeTemplate />;
      default:
        return <ModernTemplate />;
    }
  };

  return <>{renderTemplate()}</>;
};

export default CVTemplate;
