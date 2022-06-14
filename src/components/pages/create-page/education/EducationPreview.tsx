import React from "react";
import { Col, Row } from "antd";
import { educationMock } from "../../../../mocks/EducationMock";

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

      {educationMock.map((school, idx) => (
        <div key={idx}>
          <Row className="mt-2">
            <Col span={24}>
              <p className="text-xl font-bold">{school.name}</p>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <p className="text-xl italic ">{school.role}</p>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <span className="text-sm mt-4 text-gray mr-2">
                {school.startDate} - {school.endDate}
              </span>
            </Col>
          </Row>
        </div>
      ))}
    </>
  );
};

export default EducationPreview;
