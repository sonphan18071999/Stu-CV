import { Col, Row } from "antd";
import React from "react";

const ExperienceUIPreview: React.FC = () => {
  return (
    <>
      <Row>
        <Col span={6}>
          <button className=" rounded-lg btn--grey-display pl-8 pr-8 py-2">
            <span className="text-sm">
              <b>Experience</b>
            </span>
          </button>
        </Col>
        <Col span={18}></Col>
      </Row>
      <Row className="mt-2">
        <Col span={24}>
          <p className="text-2xl font-bold">Blue Moon Consultency Studio</p>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <p className="text-xl italic ">Seniour UI designer</p>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <span className="text-sm mt-4 text-gray mr-2">
            Aug 2020 - Present 2022
          </span>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <p className="mt-2">
            Product team to prototype, design and deliver the UI and UX
            experience with a lean design process: research, design, test, and
            iterate.
          </p>
        </Col>
      </Row>

      <Row className="mt-2">
        <Col span={24}>
          <p className="text-2xl font-bold">Black Yark product design</p>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <p className="text-xl italic ">Seniour UX designer</p>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <span className="text-sm mt-4 text-gray mr-2">
            Aug 2015 - Aug 2020
          </span>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <p className="mt-2">
            Lead the UI design with the accountability of the design system,
            collaborated with product and development teams on core projects to
            improve product interfaces and experiences.
          </p>
        </Col>
      </Row>
    </>
  );
};

export default ExperienceUIPreview;
