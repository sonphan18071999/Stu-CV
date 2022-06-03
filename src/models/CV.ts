import Education from "./Education";
import Experience from "./Experience";
import Language from "./Language";
import UserInformation from "./UserInformation";

export interface CV {
  information: UserInformation;
  industryKnowledge: string[];
  languages: Language[];
  social: string[];
  hobbies: string[];
  experience: Experience;
  education: Education;
  skill: string[];
  otherSkill?: string[];
}
