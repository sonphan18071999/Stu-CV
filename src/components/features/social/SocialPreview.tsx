import { Col, Row, Tooltip, Button } from "antd";
import React, { useEffect, useState } from "react";
import { socialMock } from "../../../mocks/SocialMock";
import { useAnimations } from "../../../utils/animations";
import { PlayCircleOutlined } from "@ant-design/icons";
import "../../../styles/animations.scss";

interface SocialData {
  items: string[];
  title: string;
}

const SocialPreview: React.FC = () => {
  // For demo purposes, we'll use the mock data
  const [socialData, setSocialData] = useState<SocialData>({
    items: socialMock,
    title: "Socials",
  });

  // Use our animation utilities
  const {
    animatedFields,
    isDemoPlaying,
    demoAllAnimations,
    getAnimationClass,
  } = useAnimations(socialData);

  return (
    <>
      <Row className="mt-4">
        <Col span={24}>
          <div className="background--opacity ml-4 mr-4 rounded-md">
            <Row className="justify-between align-middle">
              <Col>
                <h2
                  className={`text-white ml-6 font-bold pt-4 text-2xl mb-2 ${getAnimationClass(
                    "title",
                    "section-title-highlight"
                  )}`}
                >
                  {socialData.title}
                </h2>
              </Col>
              <Col className="mr-4 mt-4">
                <Tooltip title="Show animation effects">
                  <Button
                    type="primary"
                    shape="round"
                    size="small"
                    icon={<PlayCircleOutlined />}
                    onClick={demoAllAnimations}
                    className="demo-button"
                    disabled={isDemoPlaying}
                  >
                    Demo
                  </Button>
                </Tooltip>
              </Col>
            </Row>
            <ul className="list-none text-white ml-8 pb-4">
              {socialData.items.map((link, index) => (
                <li
                  key={index}
                  className={getAnimationClass("items", "list-item-highlight")}
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default SocialPreview;
