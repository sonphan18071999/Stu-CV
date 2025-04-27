import { Col, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { selectIndustryKnowledge } from "../../../../redux/reducer/industryKnowledgeSlice";

const IndustryKnowledgePreview: React.FC = () => {
  const industryKnowledge = useSelector(selectIndustryKnowledge);

  return (
    <>
      <Row>
        <Col span={24}>
          <div className="background--opacity ml-4 mr-4 rounded-md">
            <h2 className="text-white ml-6 font-bold pt-4 text-2xl mb-2">
              Industry Knowledge
            </h2>
            {industryKnowledge.length === 0 ? (
              <p className="text-white ml-6 italic pb-4">
                Add your industry knowledge to showcase your expertise...
              </p>
            ) : (
              <ul className="list-disc text-white ml-8 pb-4">
                {industryKnowledge.map((knowledge, idx) => (
                  <li key={idx}>{knowledge}</li>
                ))}
              </ul>
            )}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default IndustryKnowledgePreview;
