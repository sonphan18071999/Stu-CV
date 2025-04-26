import { Col, Row } from "antd";
import React, { useState } from "react";
import { socialMock } from "../../../../mocks/SocialMock";
import { useAnimations } from "../../../../utils/animations";
import "../../../../styles/animations.scss";

interface SocialData {
  items: string[];
  title: string;
}

const SocialPreview: React.FC = () => {
  // For demo purposes, we'll use the mock data
  const [socialData, setSocialData] = useState<SocialData>({
    items: socialMock,
    title: "Socials",
  });

  // Use our animation utilities
  const { getAnimationClass } = useAnimations(socialData);

  return (
    <>
      <Row className="mt-4">
        <Col span={24}>
          <div className="background--opacity ml-4 mr-4 rounded-md">
            <h2
              className={`text-white ml-6 font-bold pt-4 text-2xl mb-2 ${getAnimationClass(
                "title",
                "section-title-highlight"
              )}`}
            >
              {socialData.title}
            </h2>
            <ul className="list-none text-white ml-8 pb-4">
              {socialData.items.map((link, index) => (
                <li
                  key={index}
                  className={getAnimationClass("items", "list-item-highlight")}
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default SocialPreview;
