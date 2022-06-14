import React from "react";
import { Col, Row } from "antd";
import { hobbyIconMock } from "../../../../mocks/HobbyMock";

const showHobbies = hobbyIconMock.map((hobby) => (
  <Col span={6} key={hobby.name}>
    <p className="text-white">{hobby.name}</p>
    <img src={hobby.url} className="flex justify-center" />
  </Col>
));

const HobbiesPreview: React.FC = () => {
  return (
    <>
      <Row className="mt-4">
        <Col span={24}>
          <div className="background--opacity ml-4 mr-4 rounded-md">
            <h2 className="text-white ml-6 font-bold pt-4 text-2xl mb-2">
              Hobbies
            </h2>
            <Row gutter={{ lg: 2 }} className="pl-6 pb-4">
              {showHobbies}
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default HobbiesPreview;
