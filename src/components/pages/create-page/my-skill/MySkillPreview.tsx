import React from "react";
import { Col, Row } from "antd";
import { IconCustom } from "../../../../models/IconCustom";

const mySkillIcons: IconCustom[] = [
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_Mobile_icon.svg/1200px-Adobe_Photoshop_Mobile_icon.svg.png",
    name: "Adobe Photoshop",
  },
  {
    url: "https://icon-library.com/images/adobe-premiere-icon/adobe-premiere-icon-18.jpg",
    name: "Adobe Premiere",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg/2101px-Adobe_Photoshop_Lightroom_CC_logo.svg.png",
    name: "Adobe Lightroom",
  },
  {
    url: "https://cdn.tgdd.vn/GameApp/4/234592/Screentshots/tai-adobe-after-effects-phan-mem-xu-ly-hieu-ung-video-logo-23-01-2021.png",
    name: "Adobe Effect",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Adobe_Illustrator_Icon_%28CS6%29.svg/1046px-Adobe_Illustrator_Icon_%28CS6%29.svg.png",
    name: "Adobe Illutrator",
  },
];

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
          <button className=" rounded-lg btn--grey-display pl-8 pr-8 py-2">
            <span className="text-xl uppercase">
              <b>My Skills</b>
            </span>
          </button>
        </Col>
        <Col span={18}></Col>
      </Row>
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
