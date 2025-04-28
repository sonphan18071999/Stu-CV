import { RootState } from "../../../app/store";
import Experience from "../../../models/Experience";
import Education from "../../../models/Education";
import { Skill } from "../../../redux/reducer/mySkillSlice";

export interface TemplateExperience {
  position: string;
  company: string;
  startDate: string;
  endDate?: string;
  description: string;
}

export interface TemplateEducation {
  degree: string;
  school: string;
  startDate: string;
  endDate?: string;
  description: string;
}

export interface TemplateSkill {
  name: string;
  level?: number;
}

export interface TemplateLanguage {
  name: string;
  level: string;
}

export interface TemplateKnowledge {
  name: string;
}

export interface ExperienceItems {
  items: TemplateExperience[];
}

export interface EducationItems {
  items: TemplateEducation[];
}

export interface SkillItems {
  items: TemplateSkill[];
}

export interface LanguageItems {
  items: TemplateLanguage[];
}

export interface KnowledgeItems {
  items: TemplateKnowledge[];
}

// Adapt experience data
export const adaptExperience = (experiences: Experience[]): ExperienceItems => {
  return {
    items: experiences.map((exp) => ({
      position: exp.role || "",
      company: exp.name || "",
      startDate: exp.startDate || "",
      endDate: exp.endDate || "",
      description: exp.description || "",
    })),
  };
};

// Adapt education data
export const adaptEducation = (educations: Education[]): EducationItems => {
  return {
    items: educations.map((edu) => ({
      degree: edu.role || "",
      school: edu.name || "",
      startDate: edu.startDate || "",
      endDate: edu.endDate || "",
      description: edu.description || "",
    })),
  };
};

// Adapt skill data
export const adaptSkills = (skills: Skill[]): SkillItems => {
  return {
    items: skills.map((skill) => ({
      name: skill.name || "",
      level: 3, // Default level
    })),
  };
};

// Adapt language data
export const adaptLanguages = (languages: string[]): LanguageItems => {
  return {
    items: languages.map((lang) => ({
      name: lang || "",
      level: "Intermediate", // Default level
    })),
  };
};

// Adapt industry knowledge data
export const adaptKnowledge = (knowledge: string[]): KnowledgeItems => {
  return {
    items: knowledge.map((item) => ({
      name: item || "",
    })),
  };
};

// Get formatted user info
export const getUserFullName = (userInfo: any): string => {
  if (userInfo.fullName) return userInfo.fullName;
  return (
    `${userInfo.firstName || ""} ${userInfo.lastName || ""}`.trim() ||
    "Your Name"
  );
};

export const getUserPosition = (userInfo: any): string => {
  return userInfo.position || userInfo.title || "Position";
};

export const getUserAddress = (userInfo: any): string => {
  return userInfo.address || userInfo.location || "Location";
};

export const getUserSummary = (userInfo: any): string => {
  return userInfo.summary || "Your professional summary goes here...";
};

// Hook to get all adapted data
export const useTemplateData = (state: RootState) => {
  const userInfo = state.userInformation;
  const experience = adaptExperience(state.experience);
  const education = adaptEducation(state.education);
  const skills = adaptSkills(state.mySkill);
  const languages = adaptLanguages(state.languages);
  const industryKnowledge = adaptKnowledge(state.industryKnowledge);

  return {
    userInfo,
    experience,
    education,
    skills,
    languages,
    industryKnowledge,
    getUserFullName,
    getUserPosition,
    getUserAddress,
    getUserSummary,
  };
};
