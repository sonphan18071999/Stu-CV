import { Col, Collapse, Row } from "antd";
import Input from "antd/lib/input/Input";
import React from "react";
const { Panel } = Collapse;

const IndustryKnowledge: React.FC = () => {
  return (
    <Collapse expandIconPosition={`right`} className="w-full rounded">
      <Panel className="font-bold" header="Industry Knowledge" key="1">
        <Row>
          <Col span={12}>
            <Input placeholder="First name" bordered={true} />
          </Col>
          <Col span={12}>
            <Input placeholder="Last name" bordered={true} />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Input placeholder="Job title" bordered={true} />
          </Col>
          <Col span={12}>
            <Input placeholder="Phone" bordered={true} />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Input placeholder="Email" />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Input placeholder="Website" />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Input placeholder="Location" />
          </Col>
        </Row>
      </Panel>
    </Collapse>
  );
};

export default IndustryKnowledge;
