import React from "react";
import { Col, Row } from "antd";
import { useSelector } from "react-redux";
import { selectMySkills } from "../../../../redux/reducer/mySkillSlice";
import { useAnimations } from "../../../../utils/animations";
import "../../../../styles/animations.scss";
import "../../../../styles/icon-alignment.scss";

const MySkillPreview: React.FC = () => {
  const skills = useSelector(selectMySkills);

  // Use our animation utilities with the skills data
  const { getAnimationClass } = useAnimations({
    items: skills,
    title: "My Skills",
  });

  // Check if there are any skills
  const hasSkills = skills.length > 0;

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
                <b>My Skills</b>
              </h3>
            </span>
          </button>
        </Col>
      </Row>
      <hr />
      {!hasSkills ? (
        <p className="text-base italic mt-2">
          Add your skills to showcase your technical expertise...
        </p>
      ) : (
        <div className="mt-4">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-item">
              <div className="skill-item__icon-container">
                {skill.url && (
                  <img
                    src={skill.url}
                    alt={skill.name}
                    className={`skill-item__icon ${getAnimationClass(
                      "items",
                      "animated-icon"
                    )}`}
                  />
                )}
              </div>
              <div className="skill-item__content">
                <p
                  className={`skill-item__title ${getAnimationClass(
                    "items",
                    "text-highlight"
                  )}`}
                >
                  {skill.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MySkillPreview;
