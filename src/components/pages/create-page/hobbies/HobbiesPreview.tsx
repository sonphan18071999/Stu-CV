import { Col, Row } from "antd";
import React from "react";
import football from "../../../commons/images/icons/football.png";
import hike from "../../../commons/images/icons/hike.png";
import photo from "../../../commons/images/icons/photo.png";
import reading from "../../../commons/images/icons/reading.png";
import singing from "../../../commons/images/icons/microphone.png";

interface Hobby {
  url: string;
  name: string;
}

const hobbyIcons: Hobby[] = [
  { url: photo, name: "Photo" },
  { url: reading, name: "Reading" },
  { url: singing, name: "Singing" },
  { url: hike, name: "Trekking" },
  { url: football, name: "Football" },
];

const showHobbies = hobbyIcons.map((hobby) => (
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
