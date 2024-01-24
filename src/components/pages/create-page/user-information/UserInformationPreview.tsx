import React from "react";
import { Avatar, Button, Col, Input, Row } from "antd";
import {
  ChromeFilled,
  MailFilled,
  HomeFilled,
  PhoneFilled,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import '../../../../styles/userInformationPreview.scss';

const UserInformationPreview: React.FC = () => {
  const userInformation = useSelector(
    (state: RootState) => state.userInformation
  );

  return (
    <div className="user-information__preview p-4" >
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
              <span>{userInformation.firstName} </span>
              <span>
                {userInformation.lastName}
              </span>
            </p>
          </h2>

          <h3 className="text-sm italic mt-3 text-gray-light">
            <p>{userInformation.title}</p>
          </h3>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col span={24}>
          <Button className="w-full h-10 rounded-3xl btn--white-display">
            <Row>
              <Col span={24} className="flex text-left">
                <Col span={3} >
                  <PhoneFilled className="btn__icon mr-2" />
                </Col>
                <p>{userInformation.phone}</p>
              </Col>
            </Row>
          </Button>
        </Col>
      </Row>
      <Row className="mt-4 ">
        <Col className="w-full">
          <Button className="w-full h-10 rounded-3xl btn--white-display ">
            <Row >
              <Col span={24} className="flex">
                <Col span={3}>
                  <MailFilled className="btn__icon mr-2" />
                </Col>
                <p>{userInformation.email}</p>
              </Col>
            </Row>
          </Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Button className="w-full h-10 rounded-3xl btn--white-display">
          <Row>
            <Col span={24} className="text-left flex">
              <Col span={3}>
                <ChromeFilled className="btn__icon mr-2" />
              </Col>
              <p>
                {userInformation.website}
              </p>
            </Col>
          </Row>
        </Button>
      </Row>
      <Row className="mt-4" >
        <Button className="w-full h-10 rounded-3xl btn--white-display text-left">
          <Row>
            <Col span={24} className="w-full flex">
              <Col span={3}><HomeFilled className="btn__icon mr-2" /></Col>
              <p className="break-normal">{userInformation.location}</p>
            </Col>
          </Row>
        </Button>
      </Row>
    </div>
  );
};

export default UserInformationPreview;
