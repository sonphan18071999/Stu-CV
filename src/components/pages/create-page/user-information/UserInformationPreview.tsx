import React from "react";
import { Avatar, Button, Col, Row } from "antd";
import {
  ChromeFilled,
  MailFilled,
  HomeFilled,
  PhoneFilled,
} from "@ant-design/icons";

const UserInformationPreview: React.FC = () => {
  return (
    <div className="p-4">
      <Row>
        <Col span={10}>
          <Avatar
            size={{ xs: 24, sm: 32, md: 64, lg: 64, xl: 100, xxl: 120 }}
            src="https://joeschmoe.io/api/v1/random"
          />
        </Col>
        <Col span={14}>
          <h2>
            <p className="text-2xl text-gray-light"> Folly </p>
          </h2>
          <h2>
            <p className="text-3xl text-white font-bold"> Justin </p>
          </h2>

          <h3 className="text-sm italic mt-3 text-gray-light">
            <p>UI/UX Designer</p>
          </h3>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="w-full">
          <Button className="w-full h-10 rounded-3xl btn--white-display flex">
            <Row>
              <Col span={6}>
                <MailFilled style={{ fontSize: "30px" }} />
              </Col>
              <Col span={18}>
                <p>sonphan18071999@gmail.com</p>
              </Col>
            </Row>
          </Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col span={24}>
          <Button className="w-full h-10 rounded-3xl btn--white-display flex">
            <Row>
              <Col span={12}>
                <PhoneFilled style={{ fontSize: "30px" }} />
              </Col>
              <Col span={12}>
                <p>0765 844 885</p>
              </Col>
            </Row>
          </Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col span={24}>
          <Button className="w-full h-10 rounded-3xl btn--white-display flex">
            <Row>
              <Col span={8}>
                <ChromeFilled style={{ fontSize: "30px" }} />
              </Col>
              <Col span={8}>
                <p>www.student-cv.com</p>
              </Col>
            </Row>
          </Button>{" "}
        </Col>
      </Row>
      <Row className="mt-4">
        <Col span={24}>
          <Button className="w-full h-10 rounded-3xl btn--white-display">
            <Row>
              <Col span={4}>
                <HomeFilled style={{ fontSize: "30px" }} />
              </Col>
              <Col span={6} className="w-full">
                <p className="break-normal">
                  59, Long Thuan, D9, Ho Chi Minh City
                </p>
              </Col>
            </Row>
          </Button>{" "}
        </Col>
      </Row>
    </div>
  );
};

export default UserInformationPreview;
