import React from "react";
import { Col, Collapse, Row } from "antd";
import { MailFilled, FacebookFilled, LinkedinFilled } from "@ant-design/icons";
import Input from "antd/lib/input/Input";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSocialLinks,
  updateSocialLink,
} from "../../../../redux/reducer/socialSlice";

const { Panel } = Collapse;

const Social: React.FC = () => {
  const dispatch = useDispatch();
  const socialLinks = useSelector(selectSocialLinks);

  const handleSocialChange = (
    field: "facebook" | "linkedin" | "email",
    value: string
  ) => {
    dispatch(updateSocialLink({ field, value }));
  };

  return (
    <Collapse expandIconPosition={`right`} className="w-full rounded">
      <Panel className="font-bold" header="Socials" key="1">
        <Row>
          <Col span={24}>
            <Input
              addonBefore={<FacebookFilled />}
              placeholder="Facebook"
              value={socialLinks.facebook}
              onChange={(e) => handleSocialChange("facebook", e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Input
              className="mt-2"
              placeholder="LinkedIn"
              addonBefore={<LinkedinFilled />}
              value={socialLinks.linkedin}
              onChange={(e) => handleSocialChange("linkedin", e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Input
              className="mt-2"
              placeholder="Mail"
              addonBefore={<MailFilled />}
              value={socialLinks.email}
              onChange={(e) => handleSocialChange("email", e.target.value)}
            />
          </Col>
        </Row>
      </Panel>
    </Collapse>
  );
};

export default Social;
