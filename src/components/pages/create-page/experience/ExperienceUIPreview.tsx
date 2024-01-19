import React from "react";
import { Col, Row } from "antd";
import { experienceMock } from "../../../../mocks/ExperienceMock";

const ExperienceUIPreview: React.FC = () => {
  
  return (
    <>
        <div >
          <button className=" py-2" >
              <h2 className="text-xl"><b>Experience</b></h2>
          </button>
        </div>
    <hr/>
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
