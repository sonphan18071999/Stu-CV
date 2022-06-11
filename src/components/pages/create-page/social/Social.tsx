import React, { useState } from "react";
import { Col, Collapse, Row } from "antd";
import { MailFilled, FacebookFilled, LinkedinFilled } from "@ant-design/icons";
import Input from "antd/lib/input/Input";
const { Panel } = Collapse;

const Social: React.FC = () => {
  const [socials, setSocials] = useState<string[]>([]);

  return (
    <Collapse expandIconPosition={`right`} className="w-full rounded">
      <Panel className="font-bold" header="Socials" key="1">
        <Row>
          <Col span={24}>
            <Input
              addonBefore={<FacebookFilled />}
              placeholder="Facebook"
              onChange={(e) => setSocials([...socials, e.target.value])}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Input
              className="mt-2"
              placeholder="LinkedIn"
              addonBefore={<LinkedinFilled />}
              onChange={(e) => setSocials([...socials, e.target.value])}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Input
              className="mt-2"
              placeholder="Mail"
              addonBefore={<MailFilled />}
              onChange={(e) => setSocials([...socials, e.target.value])}
            />
          </Col>
        </Row>
      </Panel>
    </Collapse>
  );
};

export default Social;
