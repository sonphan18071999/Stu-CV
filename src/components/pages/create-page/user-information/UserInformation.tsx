import { Col, Collapse, Row } from "antd";
import Input from "antd/lib/input/Input";
import React from "react";
const { Panel } = Collapse;

const UserInformation: React.FC = () => {
  return (
    <Collapse expandIconPosition={`right`} className="w-full rounded">
      <Panel className="font-bold" header="User Information" key="1">
        <Row>
          <Col span={12}>
            <Input
              placeholder="First name"
              bordered={true}
              className="rounded text-xs"
            />
          </Col>
          <Col span={12}>
            <Input
              placeholder="Last name"
              bordered={true}
              className="rounded text-xs"
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col span={12}>
            <Input
              placeholder="Job title"
              bordered={true}
              className="rounded text-xs"
            />
          </Col>
          <Col span={12}>
            <Input
              placeholder="Phone"
              bordered={true}
              className="rounded text-xs"
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col span={24}>
            <Input placeholder="Email" className="rounded text-xs text-xs" />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col span={24}>
            <Input placeholder="Website" className="rounded text-xs" />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col span={24}>
            <Input placeholder="Location" className="rounded text-xs" />
          </Col>
        </Row>
      </Panel>
    </Collapse>
  );
};

export default UserInformation;
