import { Col, Row } from "antd";
import React from "react";
import { languageMock } from "../../../../mocks/LanguageMock";

const LanguagesPreview: React.FC = () => {
  return (
    <>
      <Row className="mt-4">
        <Col span={24}>
          <div className="background--opacity ml-4 mr-4 rounded-md">
            <h2 className="text-white ml-6 font-bold pt-4 text-2xl mb-2">
              Languages
            </h2>
            <ul className="list-none text-white ml-8 pb-4">
              {languageMock.map((language, idx) => (
                <li key={idx}>{language}</li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default LanguagesPreview;
