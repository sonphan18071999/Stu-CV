import React from "react";
import { Col, Row } from "antd";
import { mySkillIcons } from "../../../../mocks/MySkillMock";

const showMySkills = mySkillIcons.map((skill) => (
  <Col span={6} key={skill.name}>
    <p className="text-gray font-bold">{skill.name}</p>
    <img src={skill.url} className="flex justify-center w-1/2 mt-2" />
  </Col>
));

const MySkillPreview: React.FC = () => {
  return (
    <>
      <Row className="mt-4">
        <Col span={24}>
          <button className="py-2">
            <span className="text-xl uppercase">
              <h3><b>My Skills</b></h3>
            </span>
          </button>
        </Col>
        <Col span={18}></Col>
      </Row>
      <hr/>
      <Row className="mt-4">
        <Col span={24}>
          <div className="mr-4 rounded-md">
            <Row gutter={{ lg: 4 }} className=" pb-4">
              {showMySkills}
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default MySkillPreview;
