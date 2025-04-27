import { Col, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { selectSocialLinks } from "../../../../redux/reducer/socialSlice";
import { useAnimations } from "../../../../utils/animations";
import "../../../../styles/animations.scss";

const SocialPreview: React.FC = () => {
  const socialLinks = useSelector(selectSocialLinks);

  // Create animatable data object
  const socialData = {
    title: "Socials",
    items: [
      socialLinks.facebook && `Facebook: ${socialLinks.facebook}`,
      socialLinks.linkedin && `LinkedIn: ${socialLinks.linkedin}`,
      socialLinks.email && `Email: ${socialLinks.email}`,
    ].filter(Boolean),
  };

  // Use our animation utilities
  const { getAnimationClass } = useAnimations(socialData);

  const hasLinks = socialData.items.length > 0;

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

            {!hasLinks ? (
              <p className="text-white ml-6 italic pb-4">
                Add your social links to connect with others...
              </p>
            ) : (
              <ul className="list-none text-white ml-8 pb-4">
                {socialData.items.map((link, index) => (
                  <li
                    key={index}
                    className={getAnimationClass(
                      "items",
                      "list-item-highlight"
                    )}
                  >
                    {link}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default SocialPreview;
