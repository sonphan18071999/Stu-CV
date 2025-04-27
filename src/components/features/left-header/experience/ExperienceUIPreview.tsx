import React from "react";
import { Col, Row } from "antd";
import { useSelector } from "react-redux";
import { selectExperiences } from "../../../../redux/reducer/experienceSlice";
import moment from "moment";

const ExperienceUIPreview: React.FC = () => {
  const experiences = useSelector(selectExperiences);

  // Helper function to format date as Month Year
  const formatDate = (dateString: string) => {
    return dateString ? moment(dateString).format("MMM YYYY") : "Present";
  };

  if (experiences.length === 0) {
    return (
      <>
        <div>
          <button className="py-2">
            <h2 className="text-xl">
              <b>Experience</b>
            </h2>
          </button>
        </div>
        <hr />
        <p className="text-base italic mt-2">
          Add your work experience to showcase your professional journey...
        </p>
      </>
    );
  }

  return (
    <>
      <div>
        <button className="py-2">
          <h2 className="text-xl">
            <b>Experience</b>
          </h2>
        </button>
      </div>
      <hr />
      {experiences.map((experience, idx) => (
        <div key={idx} className="mb-4">
          <Row className="mt-2">
            <Col span={24}>
              <span className="text-xl font-bold">{experience.name}</span>
              <span className="text-lg italic ml-1">| {experience.role}</span>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <span className="text-sm text-gray-500">
                {formatDate(experience.startDate)} -{" "}
                {experience.endDate
                  ? formatDate(experience.endDate)
                  : "Present"}
              </span>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <p className="mt-2 text-base">{experience.description}</p>
            </Col>
          </Row>
          {idx < experiences.length - 1 && <hr className="mt-3" />}
        </div>
      ))}
    </>
  );
};

export default ExperienceUIPreview;
