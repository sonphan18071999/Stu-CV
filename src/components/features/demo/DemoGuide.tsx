import React, { useState, useEffect, useRef } from "react";
import {
  Modal,
  Button,
  Steps,
  Typography,
  Row,
  Col,
  Card,
  message,
} from "antd";
import {
  QuestionCircleOutlined,
  EditOutlined,
  EyeOutlined,
  DownloadOutlined,
  PlayCircleOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import "../../../styles/demo-guide.scss";

const { Step } = Steps;
const { Title, Paragraph, Text } = Typography;

interface DemoStep {
  title: string;
  icon: React.ReactNode;
  description: string;
  content: React.ReactNode;
}

const DemoGuide: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Clean up timeouts on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Play animation when step changes
  useEffect(() => {
    if (visible) {
      setAnimating(true);
      timeoutRef.current = setTimeout(() => {
        setAnimating(false);
      }, 1500);
    }
  }, [currentStep, visible]);

  const steps: DemoStep[] = [
    {
      title: "Enter Your Information",
      icon: <EditOutlined />,
      description: "Fill in the forms with your personal details",
      content: (
        <Card
          className={`demo-card demo-edit ${
            animating && currentStep === 0 ? "animate" : ""
          }`}
        >
          <Title level={4}>Step 1: Enter Your Information</Title>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <img
                src="/demo-images/edit-form.gif"
                alt="Entering information"
                className="demo-img"
                onError={(e) => {
                  e.currentTarget.src = "";
                }}
              />
            </Col>
            <Col span={12}>
              <Paragraph>
                <ul>
                  <li>Fill in your personal details in each section</li>
                  <li>
                    Add your education, experience, skills, and other
                    information
                  </li>
                  <li>Use tab to quickly add multiple items in tags lists</li>
                  <li>Changes are automatically saved to the store</li>
                </ul>
              </Paragraph>
              <Button
                type="dashed"
                icon={<PlayCircleOutlined />}
                onClick={() =>
                  message.info(
                    "Try editing the form sections to see changes in real-time!"
                  )
                }
              >
                Try it yourself
              </Button>
            </Col>
          </Row>
        </Card>
      ),
    },
    {
      title: "Preview Changes",
      icon: <EyeOutlined />,
      description: "See your changes reflected instantly in the preview",
      content: (
        <Card
          className={`demo-card demo-preview ${
            animating && currentStep === 1 ? "animate" : ""
          }`}
        >
          <Title level={4}>Step 2: Preview Your Changes</Title>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Paragraph>
                <ul>
                  <li>
                    As you type, your changes are instantly reflected in the
                    preview
                  </li>
                  <li>
                    The preview shows exactly how your CV will look when
                    exported
                  </li>
                  <li>
                    Animations highlight recent changes to help you track
                    updates
                  </li>
                  <li>Empty sections display helpful placeholder text</li>
                </ul>
              </Paragraph>
              <Button
                type="dashed"
                icon={<PlayCircleOutlined />}
                onClick={() =>
                  message.info(
                    "Look at the preview section as you make changes to see instant updates!"
                  )
                }
              >
                See it in action
              </Button>
            </Col>
            <Col span={12}>
              <img
                src="/demo-images/preview-changes.gif"
                alt="Preview changes"
                className="demo-img"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/400x300?text=Preview+Animation";
                }}
              />
            </Col>
          </Row>
        </Card>
      ),
    },
    {
      title: "Export & Download",
      icon: <DownloadOutlined />,
      description: "Export your CV as PDF or Word document",
      content: (
        <Card
          className={`demo-card demo-download ${
            animating && currentStep === 2 ? "animate" : ""
          }`}
        >
          <Title level={4}>Step 3: Export & Download</Title>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <img
                src="/demo-images/export-download.gif"
                alt="Exporting CV"
                className="demo-img"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/400x300?text=Export+Animation";
                }}
              />
            </Col>
            <Col span={12}>
              <Paragraph>
                <ul>
                  <li>Click the "Download your CV" button</li>
                  <li>Choose your preferred format (PDF or Word)</li>
                  <li>Preview your CV before downloading</li>
                  <li>
                    Click "OK" to confirm and save the file to your computer
                  </li>
                </ul>
              </Paragraph>
              <Button
                type="dashed"
                icon={<DownloadOutlined />}
                onClick={() =>
                  message.info(
                    'Click the "Download your CV" button to export your completed CV!'
                  )
                }
              >
                Try exporting
              </Button>
            </Col>
          </Row>
        </Card>
      ),
    },
    {
      title: "Ready to Go!",
      icon: <RocketOutlined />,
      description: "Start creating your professional CV",
      content: (
        <Card
          className={`demo-card ${
            animating && currentStep === 3 ? "animate" : ""
          }`}
        >
          <Title level={4} className="text-center">
            You're All Set!
          </Title>
          <Row justify="center">
            <Col span={16}>
              <Paragraph className="text-center">
                Now you know how to use the CV Generator to create a
                professional CV. Start filling in your information and see your
                CV come to life!
              </Paragraph>
              <div className="text-center mt-4">
                <Button
                  type="primary"
                  size="large"
                  icon={<RocketOutlined />}
                  onClick={() => {
                    setVisible(false);
                    message.success("Start creating your professional CV now!");
                  }}
                >
                  Start Creating My CV
                </Button>
              </div>
            </Col>
          </Row>
        </Card>
      ),
    },
  ];

  const openModal = () => {
    setVisible(true);
    setCurrentStep(0);
    setAnimating(true);
    timeoutRef.current = setTimeout(() => {
      setAnimating(false);
    }, 1500);
  };

  const closeModal = () => {
    setVisible(false);
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <>
      <Button
        type="primary"
        icon={<QuestionCircleOutlined />}
        onClick={openModal}
        className="demo-button"
      >
        How to Use
      </Button>

      <Modal
        title={<Title level={3}>How to Use the CV Generator</Title>}
        visible={visible}
        onCancel={closeModal}
        width={800}
        footer={[
          <Button key="back" onClick={prevStep} disabled={currentStep === 0}>
            Previous
          </Button>,
          <Button
            key="next"
            type="primary"
            onClick={currentStep === steps.length - 1 ? closeModal : nextStep}
          >
            {currentStep === steps.length - 1 ? "Done" : "Next"}
          </Button>,
        ]}
        className="demo-modal"
      >
        <Steps current={currentStep}>
          {steps.map((step) => (
            <Step
              key={step.title}
              title={step.title}
              icon={step.icon}
              description={step.description}
            />
          ))}
        </Steps>

        <div className="steps-content">{steps[currentStep].content}</div>
      </Modal>
    </>
  );
};

export default DemoGuide;
