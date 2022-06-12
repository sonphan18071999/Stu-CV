import React from "react";
import { Col, Row } from "antd";

const OtherSkillPreview: React.FC = () => {
  return (
    <>
      <Row>
        <Col>
          <button className=" rounded-lg btn--grey-display pl-8 pr-8 py-2">
            <span className="text-xl uppercase">
              <b>Other Skills</b>
            </span>
          </button>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="mt-4">This place is to show any of place.</p>
        </Col>
      </Row>
    </>
  );
};

export default OtherSkillPreview;
