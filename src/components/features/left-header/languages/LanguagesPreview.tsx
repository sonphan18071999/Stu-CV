import { Col, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { selectLanguages } from "../../../../redux/reducer/languagesSlice";

const LanguagesPreview: React.FC = () => {
  const languages = useSelector(selectLanguages);

  return (
    <>
      <Row className="mt-4">
        <Col span={24}>
          <div className="background--opacity ml-4 mr-4 rounded-md">
            <h2 className="text-white ml-6 font-bold pt-4 text-2xl mb-2">
              Languages
            </h2>
            {languages.length === 0 ? (
              <p className="text-white ml-6 italic pb-4">
                Add your languages to showcase your linguistic abilities...
              </p>
            ) : (
              <ul className="list-none text-white ml-8 pb-4">
                {languages.map((language, idx) => (
                  <li key={idx}>{language}</li>
                ))}
              </ul>
            )}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default LanguagesPreview;
