import React from "react";
import { Col, Row } from "antd";

const EducationPreview: React.FC = () => {
  return (
    <>
      <Row className="mt-4">
        <Col span={24}>
          <button className=" rounded-lg btn--grey-display pl-8 pr-8 py-2">
            <span className="text-xl uppercase">
              <b>Education</b>
            </span>
          </button>
        </Col>
        <Col span={18}></Col>
      </Row>
      <Row className="mt-2">
        <Col span={24}>
          <p className="text-xl font-bold">
            Bachelor of Engineering in Information Technology
          </p>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <p className="text-xl italic ">SCAT Education Campus</p>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <span className="text-sm mt-4 text-gray mr-2">2011 - 2015</span>
        </Col>
      </Row>

      <Row className="mt-2">
        <Col span={24}>
          <p className="text-xl font-bold">NJIT Higher</p>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <p className="text-xl italic ">AB Experiment Campus</p>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <span className="text-sm mt-4 text-gray mr-2">2009 - 2011</span>
        </Col>
      </Row>
    </>
  );
};

export default EducationPreview;
