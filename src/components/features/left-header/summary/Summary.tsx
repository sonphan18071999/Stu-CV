import { Col, Collapse, Row } from "antd";
import React from "react";
import TextArea from "antd/lib/input/TextArea";

const { Panel } = Collapse;

const Summary: React.FC = (props: any) => {
  return (
    <Collapse expandIconPosition={`right`} className="w-full rounded">
      <Panel className="font-bold" header="Professional Summary" key="1">
        <Row>
          <Col span={24}>
            <TextArea
              placeholder="Write a professional summary..."
              bordered={true}
              className="rounded text-xs"
              rows={4}
            />
          </Col>
        </Row>
      </Panel>
    </Collapse>
  );
};

export default Summary;
