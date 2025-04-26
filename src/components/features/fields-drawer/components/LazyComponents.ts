import { lazy } from "react";

// Centralized lazy loading of components with consistent naming
export const LazyComponents = {
  UserInformation: lazy(
    () => import("../../user-information/UserInformationUI")
  ),
  IndustryKnowledge: lazy(
    () => import("../../industry-knowledge/IndustryKnowledge")
  ),
  Languages: lazy(() => import("../../languages/Languages")),
  Social: lazy(() => import("../../social/Social")),
  Hobbies: lazy(() => import("../../hobbies/Hobbies")),
  Experience: lazy(() => import("../../experience/ExperienceUI")),
  Education: lazy(() => import("../../education/EducationUI")),
  MySkill: lazy(() => import("../../my-skill/MySkill")),
};
