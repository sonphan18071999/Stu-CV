import React from "react";
import { Avatar, Button, Col, Row } from "antd";
import {
  ChromeFilled,
  MailFilled,
  HomeFilled,
  PhoneFilled,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";

const UserInformationPreview: React.FC = () => {
  const userInformation = useSelector(
    (state: RootState) => state.userInformation
  );

  return (
    <div className="p-4">
      <Row>
        <Col span={10}>
          <Avatar
            size={{ xs: 24, sm: 32, md: 64, lg: 64, xl: 100, xxl: 120 }}
            src={userInformation.avatar}
          />
        </Col>
        <Col span={14}>
          <h2>
            <p className="text-3xl text-white font-bold">
              {userInformation.firstName}
              {userInformation.lastName}
            </p>
          </h2>

          <h3 className="text-sm italic mt-3 text-gray-light">
            <p>{userInformation.title}</p>
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
                <p>{userInformation.email}</p>
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
                <p>{userInformation.phone}</p>
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
                <a href={userInformation.website} target="_blank">
                  {userInformation.website}
                </a>
              </Col>
            </Row>
          </Button>
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
                <p className="break-normal">{userInformation.location}</p>
              </Col>
            </Row>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default UserInformationPreview;
