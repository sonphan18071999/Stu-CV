import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef,
  useLayoutEffect,
} from "react";
import { Button, Card, Col, Modal, Row, Dropdown, Menu, message } from "antd";
import {
  DownOutlined,
  FilePdfOutlined,
  FileWordOutlined,
} from "@ant-design/icons";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import UserInformationPreview from "../left-header/user-information/UserInformationPreview";
import IndustryKnowledgePreview from "../left-header/industry-knowledge/IndustryKnowledgePreview";
import LanguagesPreview from "../left-header/languages/LanguagesPreview";
import SocialPreview from "../left-header/social/SocialPreview";
import ExperienceUIPreview from "../left-header/experience/ExperienceUIPreview";
import EducationPreview from "../left-header/education/EducationPreview";
import MySkillPreview from "../left-header/my-skill/MySkillPreview";
import OtherSkillPreview from "../left-header/other-skills/OtherSkill";
import DemoGuide from "../demo/DemoGuide";
import CVTemplate from "../../features/cv-templates/cv-template";
import { TemplateType } from "../../../redux/reducer/templateSlice";
import "./cv-display.scss";

// Document dimensions constants
const DOCUMENT_DIMENSIONS = {
  // Standard US Letter size in mm (8.5 x 11 inches)
  width: 215.9,
  height: 279.4,
  // Margins in mm
  margins: {
    top: 12.7,
    right: 12.7,
    bottom: 12.7,
    left: 12.7,
  },
};

// Update the display function to handle responsive sizing - move outside component
const displayCVOnModal = async (
  cvLayout: HTMLElement,
  cvExport: HTMLElement
) => {
  // Clear previous content
  if (cvExport) {
    cvExport.innerHTML = "";
  }

  if (!cvLayout) {
    console.error("CV Layout element not found");
    return;
  }

  try {
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
  } catch (error) {
    console.error("Error generating preview:", error);
  }
};

// Function to split content into pages based on height - move outside component
const splitContentIntoPages = (
  canvas: HTMLCanvasElement,
  maxHeight: number
) => {
  const totalHeight = canvas.height;
  const width = canvas.width;
  const pageCount = Math.ceil(totalHeight / maxHeight);
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    // Create a new canvas for each page
    const pageCanvas = document.createElement("canvas");
    pageCanvas.width = width;

    // For the last page, only use the remaining height
    const remainingHeight = totalHeight - i * maxHeight;
    const currentPageHeight = Math.min(remainingHeight, maxHeight);
    pageCanvas.height = currentPageHeight;

    const ctx = pageCanvas.getContext("2d");
    if (ctx) {
      // Draw the appropriate section of the original canvas
      ctx.drawImage(
        canvas,
        0,
        i * maxHeight,
        width,
        currentPageHeight,
        0,
        0,
        width,
        currentPageHeight
      );
    }

    pages.push(pageCanvas);
  }

  return pages;
};

const CVDisplayUI: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportFormat, setExportFormat] = useState<"pdf" | "word">("pdf");
  const [pages, setPages] = useState<number>(1);
  const [contentOverflows, setContentOverflows] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const pageRefs = useRef<Array<React.RefObject<HTMLDivElement>>>([]);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  // Get the selected template from Redux
  const selectedTemplate = useSelector<RootState, TemplateType>(
    (state) => state.template.selectedTemplate
  );

  // Memoize the document style to prevent recalculation on each render
  const documentStyle = useMemo(
    () => ({
      width: "100%",
      aspectRatio: `${DOCUMENT_DIMENSIONS.width} / ${DOCUMENT_DIMENSIONS.height}`,
      position: "relative" as const,
      marginBottom: contentOverflows && pages > 1 ? "20px" : "0",
    }),
    [contentOverflows, pages]
  );

  // Calculate page height in pixels
  const pageHeightInPixels = useMemo(() => {
    const contentElement = contentRef.current;
    if (!contentElement) return 0;

    // Get the width of the content element (this will be the width of our CV)
    const elementWidth = contentElement.clientWidth;

    // Calculate the height based on aspect ratio
    const aspectRatio = DOCUMENT_DIMENSIONS.height / DOCUMENT_DIMENSIONS.width;
    return elementWidth * aspectRatio;
  }, []);

  // Function to check content overflow and calculate pages
  const checkOverflow = useCallback(() => {
    const contentElement = contentRef.current;
    if (!contentElement) return;

    // Initialize refs for each page if needed
    while (pageRefs.current.length < pages) {
      pageRefs.current.push(React.createRef<HTMLDivElement>());
    }

    // Get total content height - use a more reliable method
    // Clone the content to measure it without pagination constraints
    const tempContainer = document.createElement("div");
    tempContainer.style.position = "absolute";
    tempContainer.style.visibility = "hidden";
    tempContainer.style.width = `${contentElement.clientWidth}px`;
    tempContainer.style.left = "-9999px";

    // Clone the content to measure its natural height
    const contentClone = contentElement.cloneNode(true) as HTMLElement;

    // Reset any height constraints on the clone
    const resetHeightStyles = (element: HTMLElement) => {
      if (element.style) {
        element.style.height = "auto";
        element.style.maxHeight = "none";
        element.style.overflow = "visible";
      }

      Array.from(element.children).forEach((child) => {
        resetHeightStyles(child as HTMLElement);
      });
    };

    resetHeightStyles(contentClone);
    tempContainer.appendChild(contentClone);
    document.body.appendChild(tempContainer);

    // Measure actual content height
    const measuredHeight = contentClone.scrollHeight;

    // Clean up
    document.body.removeChild(tempContainer);

    // Update the stored content height
    setContentHeight(measuredHeight);

    // Calculate the height of a single page
    const pageHeight = pageHeightInPixels;

    if (pageHeight > 0) {
      // Calculate how many pages we need
      const neededPages = Math.max(1, Math.ceil(measuredHeight / pageHeight));

      // Update state if necessary
      if (neededPages !== pages) {
        setPages(neededPages);
      }

      setContentOverflows(neededPages > 1);
    }
  }, [pageHeightInPixels, pages]);

  // Set up a resize observer to detect content changes
  useLayoutEffect(() => {
    const contentElement = contentRef.current;
    if (!contentElement) return;

    // Create a new ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      // When content size changes, check for overflow
      checkOverflow();
    });

    // Observe both the content container and its children
    resizeObserver.observe(contentElement);

    // Also observe specific content elements that might change
    const observeChildren = (parent: HTMLElement) => {
      Array.from(parent.children).forEach((child) => {
        resizeObserver.observe(child);
        if (child.children.length > 0) {
          observeChildren(child as HTMLElement);
        }
      });
    };

    observeChildren(contentElement);

    // Store the observer reference
    resizeObserverRef.current = resizeObserver;

    return () => {
      // Clean up observer on unmount
      resizeObserver.disconnect();
    };
  }, [checkOverflow]);

  // Periodically check for content changes that might not trigger resize events
  useEffect(() => {
    // Initial check
    checkOverflow();

    // Set up periodic checking
    const intervalId = setInterval(() => {
      checkOverflow();
    }, 1000); // Check every second

    return () => clearInterval(intervalId);
  }, [checkOverflow]);

  // Check for overflow on window resize
  useEffect(() => {
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [checkOverflow]);

  // Force check overflow before rendering pages - moved from renderPages
  useEffect(() => {
    checkOverflow();
  }, [checkOverflow]);

  useEffect(() => {
    // Only run this effect when the modal becomes visible (not when it closes)
    let isMounted = true;
    if (isModalVisible) {
      // Use setTimeout to ensure the modal has rendered before accessing elements
      const timeoutId = setTimeout(() => {
        if (!isMounted) return;

        const cvLayout = document.getElementById("cv-layout");
        const cvExport = document.getElementById("preview-cv");

        if (cvLayout && cvExport) {
          displayCVOnModal(cvLayout, cvExport);
        }
      }, 100);

      return () => {
        isMounted = false;
        clearTimeout(timeoutId);
      };
    }
  }, [isModalVisible]);

  const exportCV = useCallback(async () => {
    try {
      setIsExporting(true);
      const cvLayout = document.getElementById("cv-layout") as HTMLElement;

      if (!cvLayout) {
        console.error("CV Layout element not found");
        return;
      }

      // Get the original canvas first
      const canvas = await html2canvas(cvLayout, {
        useCORS: true,
        allowTaint: true,
        logging: false,
        scale: 2, // Higher quality
      });

      if (exportFormat === "pdf") {
        // Create PDF with US Letter size dimensions
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: [DOCUMENT_DIMENSIONS.width, DOCUMENT_DIMENSIONS.height],
        });

        // Calculate dimensions
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const contentWidth =
          pdfWidth -
          (DOCUMENT_DIMENSIONS.margins.left +
            DOCUMENT_DIMENSIONS.margins.right);
        const contentHeight =
          pdfHeight -
          (DOCUMENT_DIMENSIONS.margins.top +
            DOCUMENT_DIMENSIONS.margins.bottom);

        // Scale the content width to fit the page
        const scaleFactor = contentWidth / canvas.width;

        // Calculate pixel equivalent of content height
        const maxContentHeightInPixels = contentHeight / scaleFactor;

        // Split content into pages
        const pages = splitContentIntoPages(canvas, maxContentHeightInPixels);

        // Add each page to the PDF
        pages.forEach((pageCanvas, index) => {
          // Add a new page for pages after the first one
          if (index > 0) {
            pdf.addPage();
          }

          const imageData = pageCanvas.toDataURL("image/png", 0.8);
          const scaledPageHeight = pageCanvas.height * scaleFactor;

          pdf.addImage(
            imageData,
            "PNG",
            DOCUMENT_DIMENSIONS.margins.left,
            DOCUMENT_DIMENSIONS.margins.top,
            contentWidth,
            scaledPageHeight
          );
        });

        pdf.save("cv-export.pdf");
      } else {
        // Export as Word document with pagination
        try {
          // Get the HTML content from the CV layout
          const content = cvLayout.innerHTML;

          // Calculate total height and page dimensions
          const scaleFactor = DOCUMENT_DIMENSIONS.width / canvas.width;
          const contentHeightInMm = canvas.height * scaleFactor;
          const pageHeightInMm =
            DOCUMENT_DIMENSIONS.height -
            (DOCUMENT_DIMENSIONS.margins.top +
              DOCUMENT_DIMENSIONS.margins.bottom);
          const pageCount = Math.ceil(contentHeightInMm / pageHeightInMm);

          // Create Word document with page break styling
          let wordContent = `
            <html xmlns:o='urn:schemas-microsoft-com:office:office' 
                  xmlns:w='urn:schemas-microsoft-com:office:word' 
                  xmlns='http://www.w3.org/TR/REC-html40'>
              <head>
                <meta charset="utf-8">
                <title>CV Export</title>
                <style>
                  @page {
                    size: ${DOCUMENT_DIMENSIONS.width}mm ${
            DOCUMENT_DIMENSIONS.height
          }mm;
                    margin: ${DOCUMENT_DIMENSIONS.margins.top}mm ${
            DOCUMENT_DIMENSIONS.margins.right
          }mm ${DOCUMENT_DIMENSIONS.margins.bottom}mm ${
            DOCUMENT_DIMENSIONS.margins.left
          }mm;
                  }
                  body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    width: ${
                      DOCUMENT_DIMENSIONS.width -
                      (DOCUMENT_DIMENSIONS.margins.left +
                        DOCUMENT_DIMENSIONS.margins.right)
                    }mm;
                  }
                  .page-break {
                    page-break-after: always;
                  }
                  .cv-container {
                    position: relative;
                  }
                </style>
              </head>
              <body>
                <div class="cv-container">
                  ${content}
                </div>`;

          // Add page break indicators if needed
          if (pageCount > 1) {
            wordContent = wordContent.replace(
              /<\/div><\/body>/,
              `<div class="page-break"></div></div></body>`
            );
          }

          wordContent += `</body></html>`;

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
  const downloadMenu = useMemo(
    () => (
      <Menu onClick={handleDownloadOption}>
        <Menu.Item key="pdf" icon={<FilePdfOutlined />}>
          PDF Document
        </Menu.Item>
        <Menu.Item key="word" icon={<FileWordOutlined />}>
          Word Document
        </Menu.Item>
      </Menu>
    ),
    [handleDownloadOption]
  );

  // Memoize CV Content so it's only rendered once, but recreate when template changes
  const cvContent = useMemo(() => {
    // Return the CV content with the selected template
    return <CVTemplate />;
  }, [selectedTemplate]); // Recreate when template changes

  // Memoize modal styles
  const modalStyles = useMemo(
    () => ({
      content: {
        maxHeight: "80vh",
        overflow: "auto",
        padding: "20px",
      },
    }),
    []
  );

  // Memoize the page styles
  const pageStyles = useMemo(
    () => ({
      width: "100%",
      aspectRatio: `${DOCUMENT_DIMENSIONS.width} / ${DOCUMENT_DIMENSIONS.height}`,
      margin: "0 auto 20px auto",
      position: "relative" as const,
      pageBreakAfter: "always" as const,
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
      backgroundColor: "white",
      overflow: "hidden" as const,
    }),
    []
  );

  // Render multiple pages if content overflows
  const renderPages = () => {
    if (!contentOverflows) {
      // If no overflow, just render a single page
      return (
        <Card
          className="cv-layout"
          id="cv-layout"
          style={documentStyle}
          ref={contentRef}
        >
          {cvContent}
        </Card>
      );
    }

    // Create an array of page indexes
    const pageIndexes = Array.from({ length: pages }, (_, i) => i);

    return (
      <div className="cv-multi-page-container" ref={contentRef}>
        {pageIndexes.map((pageIndex) => {
          // First page gets the original ID for export functionality
          const id = pageIndex === 0 ? "cv-layout" : `cv-page-${pageIndex}`;
          const ref =
            pageRefs.current[pageIndex] || React.createRef<HTMLDivElement>();

          // For debugging
          console.log(`Rendering page ${pageIndex + 1} of ${pages}`);

          return (
            <Card
              key={id}
              className={`cv-layout cv-page ${
                pageIndex === pages - 1 ? "last-page" : ""
              }`}
              id={id}
              style={{
                ...pageStyles,
                height: `${pageHeightInPixels}px`,
                // Apply different styles to pages after the first
                marginTop: pageIndex > 0 ? "30px" : "0",
              }}
              ref={ref}
            >
              {/* Visual indicator for page breaks */}
              {pageIndex > 0 && (
                <div
                  className="page-break-indicator"
                  style={{
                    position: "absolute",
                    top: "-15px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#f0f0f0",
                    padding: "2px 10px",
                    borderRadius: "12px",
                    border: "1px dashed #ccc",
                    fontSize: "12px",
                    zIndex: 10,
                  }}
                >
                  Page {pageIndex + 1}
                </div>
              )}

              {/* Set position and clip for content on each page */}
              <div
                className="page-content"
                style={{
                  position: "absolute",
                  top:
                    pageIndex === 0
                      ? "0"
                      : `-${pageIndex * pageHeightInPixels}px`,
                  left: "0",
                  width: "100%",
                  height: pages * pageHeightInPixels,
                  overflow: "hidden",
                }}
              >
                {cvContent}
              </div>
            </Card>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className="cv-display-container">
        <Card className="cv-card mx-2">
          <Row className="flex justify-center">
            <Col span={16}>
              <h2 className="cv-title">Your CV will look like below...</h2>
              {contentOverflows && (
                <p
                  className="pagination-info"
                  style={{ color: "#666", fontSize: "14px" }}
                >
                  Your CV spans {pages} pages. Each page represents how it will
                  appear when printed.
                </p>
              )}
            </Col>
            <Col span={6} className="flex justify-end download-actions">
              <DemoGuide />
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
            <Col span={22}>{renderPages()}</Col>
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

      {/* Add additional styles for multi-page display */}
      <style>
        {`
          .cv-multi-page-container {
            display: flex;
            flex-direction: column;
            width: 100%;
          }
          .cv-page {
            break-inside: avoid;
            page-break-inside: avoid;
          }
          .last-page {
            page-break-after: auto;
          }
        `}
      </style>
    </>
  );
};

export default React.memo(CVDisplayUI);
