import React from "react";
import { Col, Row } from "antd";

const OtherSkillPreview: React.FC = () => {
  return (
    <>
      <Row>
        <Col>
          <div className="py-2">
            <span className="text-xl uppercase pb-2 mb-2">
              <b>Other Skills</b>
            </span>
          </div>
        </Col>
      </Row>
      <hr/>
      <Row>
        <Col>
          <p className="mt-4">This place is to show any of place.</p>
        </Col>
      </Row>
    </>
  );
};

export default OtherSkillPreview;
