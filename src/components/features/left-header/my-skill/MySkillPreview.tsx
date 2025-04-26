import React, { useState } from "react";
import { Col, Row } from "antd";
import { mySkillIcons } from "../../../../mocks/MySkillMock";
import { useAnimations } from "../../../../utils/animations";
import "../../../../styles/animations.scss";

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
  const { getAnimationClass } = useAnimations(skillsData);

  return (
    <>
      <Row className="mt-4">
        <Col span={24}>
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
