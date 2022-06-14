import React, { useEffect, useState } from "react";
import { Button, Card, Col, Modal, Row } from "antd";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import UserInformationPreview from "../user-information/UserInformationPreview";
import IndustryKnowledgePreview from "../industry-knowledge/IndustryKnowledgePreview";
import LanguagesPreview from "../languages/LanguagesPreview";
import SocialPreview from "../social/SocialPreview";
import HobbiesPreview from "../hobbies/HobbiesPreview";
import ExperienceUIPreview from "../experience/ExperienceUIPreview";
import EducationPreview from "../education/EducationPreview";
import MySkillPreview from "../my-skill/MySkillPreview";
import OtherSkillPreview from "../other-skills/OtherSkill";

const displayCVOnModal = () => {
  let cvEditting = document.getElementsByClassName(
    "cv__display"
  )[0] as HTMLElement;
  let cvExport = document.getElementsByClassName(
    "cv__preview-export"
  )[0] as HTMLElement;

  html2canvas(cvEditting).then((canvas) => {
    cvExport.appendChild(canvas);
  });
};

const CVDisplayUI: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  let pdf = new jsPDF("p", "px", [1375, 1170], true);

  useEffect(() => {
    if (isModalVisible) {
      displayCVOnModal();
    }
  }, [isModalVisible]);

  const exportCV = async () => {
    let cvExport = document.getElementsByClassName(
      "cv__preview-export"
    )[0] as HTMLElement;

    await pdf.html(cvExport);
    pdf.save("CV.PDF");
    setIsModalVisible(false);
    cvExport.firstElementChild?.remove();
  };

  return (
    <>
      <Card className="h-full">
        <Row className="flex justify-center">
          <Col span={18} className="a">
            <h2 className="font-bold text-lg ">
              Your CV will look like below...
            </h2>
          </Col>
          <Col span={4} className="flex justify-end">
            <Button className="btn rounded mr-2">Save as Draft</Button>
            <Button
              className="btn rounded"
              onClick={() => setIsModalVisible(true)}
            >
              Export
            </Button>
          </Col>
        </Row>
        <Row className="h-full mt-6 flex justify-center">
          <Col span={22}>
            <Card
              className="rounded
                        background--gradient h-full
                        cv__display"
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
      <Modal
        title="Preview your CV before download"
        visible={isModalVisible}
        onOk={() => exportCV()}
        onCancel={() => setIsModalVisible(false)}
        width={"1300px"}
      >
        <div className="cv__preview-export flex justify-center"></div>
      </Modal>
    </>
  );
};
export default CVDisplayUI;
