import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Button, Card, Col, Modal, Row, Dropdown, Menu, message } from "antd";
import {
  DownOutlined,
  FilePdfOutlined,
  FileWordOutlined,
} from "@ant-design/icons";
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
import "./cv-display.scss";

// Update the display function to handle responsive sizing
const displayCVOnModal = async (
  cvLayout: HTMLElement,
  cvExport: HTMLElement
) => {
  cvExport.innerHTML = "";
  const canvas = await html2canvas(cvLayout, {
    useCORS: true,
    allowTaint: true,
    logging: false,
    scale: 2, // Higher quality
  });

  // Scale the canvas to fit the modal
  const scaledCanvas = document.createElement("canvas");
  const ctx = scaledCanvas.getContext("2d");

  // Set max width for the preview (80% of the modal width)
  const maxWidth = Math.min(800, window.innerWidth * 0.8);

  // Calculate scaling ratio to fit within maxWidth
  const ratio = maxWidth / canvas.width;
  scaledCanvas.width = canvas.width * ratio;
  scaledCanvas.height = canvas.height * ratio;

  if (ctx) {
    // Draw the original canvas onto the scaled canvas
    ctx.drawImage(canvas, 0, 0, scaledCanvas.width, scaledCanvas.height);

    // Add a style to make it responsive
    scaledCanvas.style.maxWidth = "100%";
    scaledCanvas.style.height = "auto";
  }

  if (document.body.contains(cvExport)) {
    cvExport.appendChild(scaledCanvas);
  } else {
    console.error("cvExport is not in the document.");
  }
};

const CVDisplayUI: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportFormat, setExportFormat] = useState<"pdf" | "word">("pdf");

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

      if (exportFormat === "pdf") {
        // Export as PDF - existing functionality
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
      } else {
        // Export as Word document
        try {
          // Get the HTML content from the CV layout
          const content = cvLayout.innerHTML;

          // Create a blob with Word document content
          // We need to wrap the HTML in Word-compatible XML
          const wordContent = `
            <html xmlns:o='urn:schemas-microsoft-com:office:office' 
                  xmlns:w='urn:schemas-microsoft-com:office:word' 
                  xmlns='http://www.w3.org/TR/REC-html40'>
              <head>
                <meta charset="utf-8">
                <title>CV Export</title>
                <style>
                  /* Include essential styles here */
                  body { font-family: Arial, sans-serif; }
                </style>
              </head>
              <body>
                ${content}
              </body>
            </html>
          `;

          // Create blob and download link
          const blob = new Blob([wordContent], { type: "application/msword" });
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = "cv-export.doc";

          // Trigger download
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          message.success("Word document has been generated");
        } catch (error) {
          console.error("Error generating Word document:", error);
          message.error("Failed to generate Word document");
        }
      }
    } catch (error) {
      console.error(`Error generating ${exportFormat.toUpperCase()}:`, error);
      message.error(`Failed to generate ${exportFormat.toUpperCase()}`);
    } finally {
      setIsExporting(false);
    }
  }, [exportFormat]);

  // Handle download options selection
  const handleDownloadOption = useCallback(({ key }: { key: string }) => {
    setExportFormat(key as "pdf" | "word");
    setIsModalVisible(true);
  }, []);

  // Create download menu
  const downloadMenu = (
    <Menu onClick={handleDownloadOption}>
      <Menu.Item key="pdf" icon={<FilePdfOutlined />}>
        PDF Document
      </Menu.Item>
      <Menu.Item key="word" icon={<FileWordOutlined />}>
        Word Document
      </Menu.Item>
    </Menu>
  );

  // Memoize the main UI components to prevent unnecessary re-renders
  const leftColumn = useMemo(
    () => (
      <Col span={12} className="left-column">
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
      <Col span={12} className="right-column">
        <Card className="content-card">
          <ExperienceUIPreview />
          <EducationPreview />
          <MySkillPreview />
          <OtherSkillPreview />
        </Card>
      </Col>
    ),
    []
  );

  // Add some CSS styles for the modal
  const modalStyles = {
    content: {
      maxHeight: "80vh",
      overflow: "auto",
      padding: "20px",
    },
  };

  return (
    <>
      <div className="cv-display-container">
        <Card className="cv-card">
          <Row className="flex justify-center">
            <Col span={18}>
              <h2 className="cv-title">Your CV will look like below...</h2>
            </Col>
            <Col span={4} className="flex justify-end download-actions">
              <Button className="action-button save-draft">
                Save as Draft
              </Button>
              <Dropdown overlay={downloadMenu} placement="bottomRight">
                <Button
                  className="action-button download-cv"
                  disabled={isExporting}
                >
                  {isExporting ? "Generating..." : "Download your CV"}{" "}
                  <DownOutlined />
                </Button>
              </Dropdown>
            </Col>
          </Row>
          <Row className="h-full mt-6 flex justify-center">
            <Col span={22}>
              <Card className="cv-layout" id="cv-layout">
                <Row gutter={{ lg: 16 }} className="flex justify-center">
                  {leftColumn}
                  {rightColumn}
                </Row>
              </Card>
            </Col>
          </Row>
        </Card>
      </div>
      <Modal
        title={`Preview your CV before download as ${exportFormat.toUpperCase()}`}
        visible={isModalVisible}
        onOk={exportCV}
        onCancel={() => setIsModalVisible(false)}
        okButtonProps={{ loading: isExporting }}
        className="cv-preview-modal"
        width="80%"
        bodyStyle={modalStyles.content}
        centered
      >
        <Row className="cv-preview-content" id="preview-cv"></Row>
      </Modal>
    </>
  );
};

export default React.memo(CVDisplayUI);
