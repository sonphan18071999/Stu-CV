import React from "react";
import { Col, Row } from "antd";
import { useSelector } from "react-redux";
import { selectEducations } from "../../../../redux/reducer/educationSlice";
import moment from "moment";

const EducationPreview: React.FC = () => {
  const educations = useSelector(selectEducations);

  // Helper function to format date as Month Year
  const formatDate = (dateString: string) => {
    return dateString ? moment(dateString).format("MMM YYYY") : "Present";
  };

  if (educations.length === 0) {
    return (
      <>
        <Row className="mt-4">
          <Col span={24}>
            <div className="py-2">
              <span className="text-xl uppercase">
                <b>Education</b>
              </span>
            </div>
          </Col>
        </Row>
        <hr />
        <p className="text-base italic mt-2">
          Add your education to showcase your academic background...
        </p>
      </>
    );
  }

  return (
    <>
      <Row className="mt-4">
        <Col span={24}>
          <div className="py-2">
            <span className="text-xl uppercase">
              <b>Education</b>
            </span>
          </div>
        </Col>
      </Row>
      <hr />
      {educations.map((education, idx) => (
        <div key={idx} className="mb-4">
          <Row className="mt-2">
            <Col span={24}>
              <span className="text-xl font-bold">{education.name}</span>
              <span className="text-lg italic ml-1">| {education.role}</span>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <span className="text-sm text-gray-500">
                {formatDate(education.startDate)} -{" "}
                {education.endDate ? formatDate(education.endDate) : "Present"}
              </span>
            </Col>
          </Row>
          {idx < educations.length - 1 && <hr className="mt-3" />}
        </div>
      ))}
    </>
  );
};

export default EducationPreview;
