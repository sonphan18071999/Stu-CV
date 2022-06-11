import { Col, Row } from "antd";
import React from "react";
import AppHeader from "../../commons/header/header";
import CVDisplayUI from "./cv-display/CVDisplayUI";
import FieldSideBar from "./fields-drawer/FieldSideBar";

const CreateCV: React.FC = () => {
  return (
    <>
      Your CV will look like below
      <div>
        <AppHeader />
        <Row>
          <Col span={6}>
            <FieldSideBar />
          </Col>
          <Col span={18}>
            <CVDisplayUI />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CreateCV;
