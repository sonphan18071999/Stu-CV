import React, { useEffect, useState } from "react";
import { Col, Collapse, Row } from "antd";
import Input from "antd/lib/input/Input";
import UserInformation from "../../../../models/UserInformation";
import { useAppDispatch } from "../../../../app/hook";
import { setUserInformation } from "../../../../redux/reducer/userInformationSlice";
const { Panel } = Collapse;

const initUser = {} as UserInformation;

const UserInformationUI: React.FC = () => {
  const [user, setUser] = useState<UserInformation>(initUser);

  const dispatch = useAppDispatch();

  const updateUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    dispatch(setUserInformation(user));
  }, [user]);

  return (
    <Collapse
      expandIconPosition={`right`}
      className="w-full rounded"
      activeKey={10}
    >
      <Panel className="font-bold" header="User Information" key={10}>
        <Row gutter={{ lg: 8 }}>
          <Col span={12}>
            <Input
              bordered={true}
              className="rounded text-sm"
              placeholder="First Name"
              name="firstName"
              onChange={(e) => updateUser(e)}
              value={user.firstName}
            />
          </Col>
          <Col span={12}>
            <Input
              placeholder="Last Name"
              bordered={true}
              className="rounded text-sm"
              name="lastName"
              onChange={(e) => updateUser(e)}
              value={user.lastName}
            />
          </Col>
        </Row>
        <Row className="mt-2" gutter={{ lg: 8 }}>
          <Col span={12}>
            <Input
              placeholder="Job title"
              bordered={true}
              className="rounded text-sm"
              name="title"
              onChange={(e) => updateUser(e)}
              value={user.title}
            />
          </Col>
          <Col span={12}>
            <Input
              placeholder="Phone"
              bordered={true}
              className="rounded text-sm"
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
              className="rounded text-sm"
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
              className="rounded text-sm"
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
              className="rounded text-sm"
              name="location"
              onChange={(e) => updateUser(e)}
              value={user.location}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col span={24}>
            <input type="file"/>
          </Col>
        </Row>
      </Panel>
    </Collapse>
  );
};

export default UserInformationUI;
