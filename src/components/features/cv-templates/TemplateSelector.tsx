import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Radio, Card, Row, Col, Typography } from "antd";
import {
  setTemplate,
  TemplateType,
} from "../../../redux/reducer/templateSlice";
import { RootState } from "../../../app/store";
import "./templates.scss";

const { Title } = Typography;

const TemplateSelector: React.FC = () => {
  const dispatch = useDispatch();
  const selectedTemplate = useSelector(
    (state: RootState) => state.template.selectedTemplate
  );

  const handleTemplateChange = (value: any) => {
    dispatch(setTemplate(value as TemplateType));
  };

  return (
    <div className="template-selector">
      <Title level={4}>Choose a Template</Title>
      <Radio.Group
        onChange={(e) => handleTemplateChange(e.target.value)}
        value={selectedTemplate}
        style={{ width: "100%" }}
      >
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Card
              hoverable
              className={`template-card ${
                selectedTemplate === "modern" ? "selected" : ""
              }`}
            >
              <Radio value="modern">Modern</Radio>
              <div className="template-preview modern-preview"></div>
            </Card>
          </Col>
          <Col span={12}>
            <Card
              hoverable
              className={`template-card ${
                selectedTemplate === "classic" ? "selected" : ""
              }`}
            >
              <Radio value="classic">Classic</Radio>
              <div className="template-preview classic-preview"></div>
            </Card>
          </Col>
          <Col span={12}>
            <Card
              hoverable
              className={`template-card ${
                selectedTemplate === "professional" ? "selected" : ""
              }`}
            >
              <Radio value="professional">Professional</Radio>
              <div className="template-preview professional-preview"></div>
            </Card>
          </Col>
          <Col span={12}>
            <Card
              hoverable
              className={`template-card ${
                selectedTemplate === "creative" ? "selected" : ""
              }`}
            >
              <Radio value="creative">Creative</Radio>
              <div className="template-preview creative-preview"></div>
            </Card>
          </Col>
        </Row>
      </Radio.Group>
    </div>
  );
};

export default TemplateSelector;
