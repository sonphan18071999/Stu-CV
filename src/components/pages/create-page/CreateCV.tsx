import React from "react";
import { Col, Row } from "antd";
import AppHeader from "../../commons/header/header";
import CVDisplayUI from "./cv-display/CVDisplayUI";
import FieldSideBar from "./fields-drawer/FieldSideBar";
import { Provider } from "react-redux";
import { store } from "../../../app/store";

const CreateCV: React.FC = () => {
  return (
    <>
      <Provider store={store}>

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
      </Provider>
    </>
  );
};

export default CreateCV;
