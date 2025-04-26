import React, { useState } from "react";
import { Col, Row, Button, Tooltip } from "antd";
import { hobbyIconMock } from "../../../mocks/HobbyMock";
import { useAnimations } from "../../../utils/animations";
import { PlayCircleOutlined } from "@ant-design/icons";
import "../../../styles/animations.scss";

interface Hobby {
  name: string;
  url: string;
}

interface HobbiesData {
  items: Hobby[];
  title: string;
}

const HobbiesPreview: React.FC = () => {
  // For demo purposes, we'll use the mock data
  const [hobbiesData, setHobbiesData] = useState<HobbiesData>({
    items: hobbyIconMock,
    title: "Hobbies",
  });

  // Use our animation utilities
  const {
    animatedFields,
    isDemoPlaying,
    demoAllAnimations,
    getAnimationClass,
  } = useAnimations(hobbiesData);

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
                  {hobbiesData.title}
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
            <Row gutter={{ lg: 2 }} className="pl-6 pb-4">
              {hobbiesData.items.map((hobby, index) => (
                <Col
                  span={6}
                  key={hobby.name}
                  className={getAnimationClass("items", "animated-item")}
                >
                  <p
                    className={`text-white ${getAnimationClass(
                      "items",
                      "text-highlight"
                    )}`}
                  >
                    {hobby.name}
                  </p>
                  <img
                    src={hobby.url}
                    className={`flex justify-center ${getAnimationClass(
                      "items",
                      "animated-icon"
                    )}`}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default HobbiesPreview;
