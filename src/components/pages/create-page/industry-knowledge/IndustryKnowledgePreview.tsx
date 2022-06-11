import { Col, Row } from "antd";
import React from "react";

const IndustryKnowledgePreview: React.FC = () => {
  return (
    <>
      <Row>
        <Col span={24}>
          <div className="background--opacity ml-4 mr-4 rounded-md">
            <h2 className="text-white ml-6 font-bold pt-4 text-2xl mb-2">
              Industry Knowledge
            </h2>
            <ul className="list-disc text-white ml-8 pb-4">
              <li>User Interface</li>
              <li>User Experience</li>
              <li>Product Design</li>
              <li>Web Design</li>
            </ul>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default IndustryKnowledgePreview;
