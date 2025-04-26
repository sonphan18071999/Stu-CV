import React, { useState } from "react";
import { Col, Row, Button, Tooltip } from "antd";
import { mySkillIcons } from "../../../mocks/MySkillMock";
import { useAnimations } from "../../../utils/animations";
import { PlayCircleOutlined } from "@ant-design/icons";
import "../../../styles/animations.scss";

interface Skill {
  name: string;
  url: string;
}

interface SkillsData {
  items: Skill[];
  title: string;
}

const MySkillPreview: React.FC = () => {
  // For demo purposes, we'll use the mock data
  const [skillsData, setSkillsData] = useState<SkillsData>({
    items: mySkillIcons,
    title: "My Skills",
  });

  // Use our animation utilities
  const {
    animatedFields,
    isDemoPlaying,
    demoAllAnimations,
    getAnimationClass,
  } = useAnimations(skillsData);

  return (
    <>
      <Row className="mt-4">
        <Col span={24}>
          <Row className="justify-between align-middle">
            <Col>
              <button className="py-2">
                <span
                  className={`text-xl uppercase ${getAnimationClass(
                    "title",
                    "section-title-highlight"
                  )}`}
                >
                  <h3>
                    <b>{skillsData.title}</b>
                  </h3>
                </span>
              </button>
            </Col>
            <Col className="mr-4">
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
        </Col>
        <Col span={18}></Col>
      </Row>
      <hr />
      <Row className="mt-4">
        <Col span={24}>
          <div className="mr-4 rounded-md">
            <Row gutter={{ lg: 4 }} className="pb-4">
              {skillsData.items.map((skill) => (
                <Col
                  span={6}
                  key={skill.name}
                  className={getAnimationClass("items", "animated-item")}
                >
                  <p
                    className={`text-gray font-bold ${getAnimationClass(
                      "items",
                      "text-highlight"
                    )}`}
                  >
                    {skill.name}
                  </p>
                  <img
                    src={skill.url}
                    className={`flex justify-center w-1/2 mt-2 ${getAnimationClass(
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

export default MySkillPreview;
