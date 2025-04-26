import React, { useEffect, useState, useCallback, useMemo } from "react";
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
import Hobbies from "../hobbies/Hobbies";

// Memoize this function to avoid recreation on each render
const displayCVOnModal = async (
  cvLayout: HTMLElement,
  cvExport: HTMLElement
) => {
  cvExport.innerHTML = "";
  const canvas = await html2canvas(cvLayout, {
    useCORS: true,
    allowTaint: true,
    logging: false, // Disable logging for better performance
    scale: 2, // Higher quality
  });

  if (document.body.contains(cvExport)) {
    cvExport.appendChild(canvas);
  } else {
    console.error("cvExport is not in the document.");
  }
};

const CVDisplayUI: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  useEffect(() => {
    if (isModalVisible) {
      const cvLayout = document.getElementById("cv-layout") as HTMLElement;
      const cvExport = document.getElementById("preview-cv") as HTMLElement;
      displayCVOnModal(cvLayout, cvExport);
    }
  }, [isModalVisible]);

  const exportCV = useCallback(async () => {
    try {
      setIsExporting(true);
      const cvLayout = document.getElementById("cv-layout") as HTMLElement;

      const canvas = await html2canvas(cvLayout, {
        useCORS: true,
        allowTaint: true,
        logging: false,
        scale: 2, // Higher quality
      });

      const imageDataURL = canvas.toDataURL("image/png", 0.8); // Compress image
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imageDataURL, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("cv-export.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsExporting(false);
    }
  }, []);

  // Memoize the main UI components to prevent unnecessary re-renders
  const leftColumn = useMemo(
    () => (
      <Col span={12} className="background--opacity p-2 rounded-3xl pb-6">
        <UserInformationPreview />
        <IndustryKnowledgePreview />
        <LanguagesPreview />
        <SocialPreview />
      </Col>
    ),
    []
  );

  const rightColumn = useMemo(
    () => (
      <Col span={12}>
        <Card className="rounded-3xl">
          <ExperienceUIPreview />
          <EducationPreview />
          <MySkillPreview />
          <OtherSkillPreview />
        </Card>
      </Col>
    ),
    []
  );

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
              className="btn rounded download__cv"
              onClick={() => setIsModalVisible(true)}
              disabled={isExporting}
            >
              {isExporting ? "Generating..." : "Download your CV"}
            </Button>
          </Col>
        </Row>
        <Row className="h-full mt-6 flex justify-center">
          <Col span={22}>
            <Card
              className="rounded background--gradient h-full cv__display"
              id="cv-layout"
            >
              <Row gutter={{ lg: 16 }} className="flex justify-center ">
                {leftColumn}
                {rightColumn}
              </Row>
            </Card>
          </Col>
        </Row>
      </Card>
      <Modal
        title="Preview your CV before download"
        visible={isModalVisible}
        onOk={exportCV}
        onCancel={() => setIsModalVisible(false)}
        okButtonProps={{ loading: isExporting }}
        className="modal-preview__modal"
      >
        <Row
          className="cv__preview-export flex justify-center cv__display"
          id="preview-cv"
        ></Row>
      </Modal>
    </>
  );
};

export default React.memo(CVDisplayUI);
