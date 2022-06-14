import React from "react";
import { Col, Row } from "antd";
import AppHeader from "../../commons/header/header";
import CVDisplayUI from "./cv-display/CVDisplayUI";
import FieldSideBar from "./fields-drawer/FieldSideBar";

const CreateCV: React.FC = () => {
  return (
    <>
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
