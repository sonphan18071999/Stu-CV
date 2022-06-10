import { Additional } from "./Additional";
import Education from "./Education";
import Experience from "./Experience";
import Language from "./Language";

export interface CV {
  industryKnowledge: string[];
  languages: Language[];
  social: string[];
  hobbies: string[];
  experience: Experience[];
  education: Education;
  skill: string[];
  otherSkill?: string[];
  additional?: Additional;
}
