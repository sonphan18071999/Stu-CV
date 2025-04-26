import { lazy } from "react";

// Centralized lazy loading of components with consistent naming
export const LazyComponents = {
  UserInformation: lazy(
    () => import("../../left-header/user-information/UserInformationUI")
  ),
  IndustryKnowledge: lazy(
    () => import("../../left-header/industry-knowledge/IndustryKnowledge")
  ),
  Languages: lazy(() => import("../../left-header/languages/Languages")),
  Social: lazy(() => import("../../left-header/social/Social")),
  Hobbies: lazy(() => import("../../left-header/hobbies/Hobbies")),
  Experience: lazy(() => import("../../left-header/experience/ExperienceUI")),
  Education: lazy(() => import("../../left-header/education/EducationUI")),
  MySkill: lazy(() => import("../../left-header/my-skill/MySkill")),
};
