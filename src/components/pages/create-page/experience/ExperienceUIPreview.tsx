import React from "react";
import { Col, Row } from "antd";
import { experienceMock } from "../../../../mocks/ExperienceMock";

const ExperienceUIPreview: React.FC = () => {
  return (
    <>
      <Row>
        <Col span={24}>
          <button className="rounded-lg btn--grey-display pl-8 pr-8 py-2">
            <span className="text-xl uppercase">
              <b>Experience</b>
            </span>
          </button>
        </Col>
        <Col span={18}></Col>
      </Row>
      {experienceMock.map((company, idx) => (
        <div key={idx}>
          <Row className="mt-2">
            <Col span={24}>
              <p className="text-xl font-bold">{company.name}</p>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <p className="text-xl italic ">{company.role}</p>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <span className="text-sm mt-4 text-gray mr-2">
                {company.startDate} - {company.endDate}
              </span>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <p className="mt-2">{company.description}</p>
            </Col>
          </Row>
        </div>
      ))}
    </>
  );
};

export default ExperienceUIPreview;
