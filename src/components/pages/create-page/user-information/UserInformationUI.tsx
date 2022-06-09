import { Col, Collapse, Row } from "antd";
import Input from "antd/lib/input/Input";
import React, { useState } from "react";
import UserInformation from "../../../../models/UserInformation";
const { Panel } = Collapse;
const initUser = {} as UserInformation;

const UserInformationUI: React.FC = () => {
  const [user, setUser] = useState<UserInformation>(initUser);

  const updateUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Collapse expandIconPosition={`right`} className="w-full rounded">
      <Panel className="font-bold" header="User Information" key="1">
        <Row>
          <Col span={12}>
            <Input
              bordered={true}
              className="rounded text-xs"
              placeholder="First Name"
              name="firstName"
              onChange={(e) => updateUser(e)}
              value={user.fistName}
            />
          </Col>
          <Col span={12}>
            <Input
              placeholder="Last Name"
              bordered={true}
              className="rounded text-xs"
              name="lastName"
              onChange={(e) => updateUser(e)}
              value={user.lastName}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col span={12}>
            <Input
              placeholder="Job title"
              bordered={true}
              className="rounded text-xs"
              name="title"
              onChange={(e) => updateUser(e)}
              value={user.title}
            />
          </Col>
          <Col span={12}>
            <Input
              placeholder="Phone"
              bordered={true}
              className="rounded text-xs"
              name="phone"
              onChange={(e) => updateUser(e)}
              value={user.phone}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col span={24}>
            <Input
              placeholder="Email"
              className="rounded text-xs text-xs"
              name="email"
              onChange={(e) => updateUser(e)}
              value={user.email}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col span={24}>
            <Input
              placeholder="Website"
              className="rounded text-xs"
              name="website"
              onChange={(e) => updateUser(e)}
              value={user.website}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col span={24}>
            <Input
              placeholder="Location"
              className="rounded text-xs"
              name="location"
              onChange={(e) => updateUser(e)}
              value={user.location}
            />
          </Col>
        </Row>
      </Panel>
    </Collapse>
  );
};

export default UserInformationUI;
