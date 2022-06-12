import React from "react";
import { Button, Card, Col, Row } from "antd";
import UserInformationPreview from "../user-information/UserInformationPreview";
import IndustryKnowledgePreview from "../industry-knowledge/IndustryKnowledgePreview";
import LanguagesPreview from "../languages/LanguagesPreview";
import SocialPreview from "../social/SocialPreview";
import HobbiesPreview from "../hobbies/HobbiesPreview";
import ExperienceUIPreview from "../experience/ExperienceUIPreview";
import EducationPreview from "../education/EducationPreview";
import MySkillPreview from "../my-skill/MySkillPreview";
import OtherSkillPreview from "../other-skills/OtherSkill";

const exportCV = () => {
  console.log(document.querySelector(".cv__display")?.innerHTML);
};

const CVDisplayUI: React.FC = () => {
  return (
    <>
      <Card className="h-full ">
        <Row className="flex justify-center">
          <Col span={18} className="a">
            <h2 className="font-bold text-lg ">
              Your CV will look like below...
            </h2>
          </Col>
          <Col span={4} className="flex justify-end">
            <Button className="btn rounded mr-2">Save as Draft</Button>
            <Button className="btn rounded" onClick={() => exportCV()}>
              Export
            </Button>
          </Col>
        </Row>
        <Row className="h-full mt-6 flex justify-center">
          <Col span={22}>
            <Card
              className="rounded
background--gradient h-full
cv__display
"
            >
              <Row gutter={{ lg: 16 }} className="flex justify-center ">
                <Col
                  span={12}
                  className="background--opacity p-2 rounded-3xl pb-6"
                >
                  <UserInformationPreview />
                  <IndustryKnowledgePreview />
                  <LanguagesPreview />
                  <SocialPreview />
                  <HobbiesPreview />
                </Col>
                <Col span={12}>
                  <Card className="rounded-3xl">
                    <ExperienceUIPreview />
                    <EducationPreview />
                    <MySkillPreview />
                    <OtherSkillPreview />
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Card>
    </>
  );
};
export default CVDisplayUI;
