import React, { useEffect, useRef, useState } from "react";
import { Avatar, Button, Col, Input, Row } from "antd";
import {
  ChromeFilled,
  MailFilled,
  HomeFilled,
  PhoneFilled,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import UserInformation from "../../../../models/UserInformation";
import "../../../../styles/userInformationPreview.scss";

const UserInformationPreview: React.FC = () => {
  const userInformation = useSelector(
    (state: RootState) => state.userInformation
  );

  // Track previous values to detect changes
  const prevValuesRef = useRef<UserInformation>({ ...userInformation });

  // Track which fields have changed to apply animations
  const [animatedFields, setAnimatedFields] = useState<Record<string, boolean>>(
    {}
  );

  // Check for changes when userInformation updates
  useEffect(() => {
    const changedFields: Record<string, boolean> = {};
    let hasChanges = false;

    // Compare current values with previous values
    (Object.keys(userInformation) as Array<keyof UserInformation>).forEach(
      (key) => {
        // Skip avatar field as it's not text
        if (key === "avatar") return;

        if (userInformation[key] !== prevValuesRef.current[key]) {
          changedFields[key] = true;
          hasChanges = true;
        }
      }
    );

    if (hasChanges) {
      // Update animated fields
      setAnimatedFields(changedFields);

      // Store current values for next comparison
      prevValuesRef.current = { ...userInformation };

      // Reset animations after duration
      setTimeout(() => {
        setAnimatedFields({});
      }, 1500); // Match animation duration
    }
  }, [userInformation]);

  // Helper function to check if a field should be animated
  const getAnimationClass = (fieldName: keyof UserInformation) => {
    return animatedFields[fieldName] ? "text-highlight" : "";
  };

  // Helper function to animate icons
  const getIconAnimationClass = (fieldName: keyof UserInformation) => {
    return animatedFields[fieldName] ? "animated-icon" : "";
  };

  // Helper function to animate buttons
  const getButtonAnimationClass = (fieldName: keyof UserInformation) => {
    return animatedFields[fieldName] ? "highlight" : "";
  };

  return (
    <div className="user-information__preview p-4">
      <Row>
        <Col span={10}>
          <Avatar
            size={{ xs: 24, sm: 32, md: 64, lg: 64, xl: 100, xxl: 120 }}
            src={userInformation.avatar}
            className={animatedFields["avatar"] ? "animated-icon" : ""}
          />
        </Col>
        <Col span={14}>
          <h2>
            <p className="text-3xl text-white font-bold">
              <span className={getAnimationClass("firstName")}>
                {userInformation.firstName}{" "}
              </span>
              <span className={getAnimationClass("lastName")}>
                {userInformation.lastName}
              </span>
            </p>
          </h2>

          <h3 className="text-sm italic mt-3 text-gray-light">
            <p className={getAnimationClass("title")}>
              {userInformation.title}
            </p>
          </h3>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col span={24}>
          <Button
            className={`w-full h-10 rounded-3xl btn--white-display ${getButtonAnimationClass(
              "phone"
            )}`}
          >
            <Row>
              <Col span={24} className="flex text-left">
                <Col span={3}>
                  <PhoneFilled
                    className={`btn__icon mr-2 ${getIconAnimationClass(
                      "phone"
                    )}`}
                  />
                </Col>
                <Col className="overflow">
                  <p className={getAnimationClass("phone")}>
                    {userInformation.phone}
                  </p>
                </Col>
              </Col>
            </Row>
          </Button>
        </Col>
      </Row>
      <Row className="mt-4 ">
        <Col className="w-full">
          <Button
            className={`w-full h-10 rounded-3xl btn--white-display ${getButtonAnimationClass(
              "email"
            )}`}
          >
            <Row>
              <Col span={24} className="flex">
                <Col span={3}>
                  <MailFilled
                    className={`btn__icon mr-2 ${getIconAnimationClass(
                      "email"
                    )}`}
                  />
                </Col>
                <Col className="overflow">
                  <p className={getAnimationClass("email")}>
                    {userInformation.email}
                  </p>
                </Col>
              </Col>
            </Row>
          </Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Button
          className={`w-full h-10 rounded-3xl btn--white-display ${getButtonAnimationClass(
            "website"
          )}`}
        >
          <Row>
            <Col span={24} className="text-left flex">
              <Col span={3}>
                <ChromeFilled
                  className={`btn__icon mr-2 ${getIconAnimationClass(
                    "website"
                  )}`}
                />
              </Col>
              <Col className="overflow">
                <p className={getAnimationClass("website")}>
                  {userInformation.website}
                </p>
              </Col>
            </Col>
          </Row>
        </Button>
      </Row>
      <Row className="mt-4">
        <Button
          className={`w-full h-10 rounded-3xl btn--white-display text-left ${getButtonAnimationClass(
            "location"
          )}`}
        >
          <Row>
            <Col span={24} className="w-full flex">
              <Col span={3}>
                <HomeFilled
                  className={`btn__icon mr-2 ${getIconAnimationClass(
                    "location"
                  )}`}
                />
              </Col>
              <Col className="overflow">
                <p className={`break-normal ${getAnimationClass("location")}`}>
                  {userInformation.location}
                </p>
              </Col>
            </Col>
          </Row>
        </Button>
      </Row>
    </div>
  );
};

export default UserInformationPreview;
