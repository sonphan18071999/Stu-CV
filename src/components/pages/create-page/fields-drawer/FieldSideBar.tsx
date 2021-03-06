import { Col, Row } from "antd";
import Search from "antd/lib/transfer/search";
import React, { FC } from "react";
import Education from "../education/EducationUI";
import Experience from "../experience/ExperienceUI";
import Hobbies from "../hobbies/Hobbies";
import IndustryKnowledge from "../industry-knowledge/IndustryKnowledge";
import Languages from "../languages/Languages";
import MySkill from "../my-skill/MySkill";
import Social from "../social/Social";
import UserInformation from "../user-information/UserInformationUI";
import "./FieldSideBar.scss";

const FieldSideBar: FC = () => {
  return (
    <>
      <Row>
        <Col span={24} className="sidebar pt-4 pb-2 px-2 w-full h-full">
          <Row>
            <Col span={24} className="rounded">
              <Search placeholder="Search for information" />
            </Col>
          </Row>
          <div className="mt-4"></div>
          <UserInformation />
          <div className="mt-2"></div>
          <IndustryKnowledge />
          <div className="mt-2"></div>
          <Languages />
          <div className="mt-2"></div>
          <Social />
          <div className="mt-2"></div>
          <Hobbies />
          <div className="mt-2"></div>
          <Experience />
          <div className="mt-2"></div>
          <Education />
          <div className="mt-2"></div>
          <MySkill />
        </Col>
      </Row>
    </>
  );
};

export default FieldSideBar;
