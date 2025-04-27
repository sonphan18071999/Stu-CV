import React, { useEffect, useRef, useState } from "react";
import { Avatar, Button, Col, Input, Row } from "antd";
import {
  ChromeFilled,
  MailFilled,
  HomeFilled,
  PhoneFilled,
  UserOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import UserInformation from "../../../../models/UserInformation";
import "../../../../styles/userInformationPreview.scss";
import "../../../../styles/icon-alignment.scss";

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

  // Helper function to check if field is empty and should show placeholder
  const isFieldEmpty = (fieldName: keyof UserInformation) => {
    return !userInformation[fieldName] || userInformation[fieldName] === "";
  };

  // Placeholder text for empty fields
  const placeholders = {
    firstName: "Your First Name",
    lastName: "Your Last Name",
    title: "Your Professional Title",
    phone: "Your Phone Number",
    email: "Your Email Address",
    website: "Your Website URL",
    location: "Your Location",
  };

  return (
    <div className="user-information__preview p-4">
      <Row>
        <Col span={10}>
          {userInformation.avatar ? (
            <Avatar
              size={{ xs: 24, sm: 32, md: 64, lg: 64, xl: 100, xxl: 120 }}
              src={userInformation.avatar}
              className={animatedFields["avatar"] ? "animated-icon" : ""}
            />
          ) : (
            <Avatar
              size={{ xs: 24, sm: 32, md: 64, lg: 64, xl: 100, xxl: 120 }}
              icon={<UserOutlined />}
              className="bg-primary-light"
            />
          )}
        </Col>
        <Col span={14}>
          <h2>
            <p className="text-3xl text-white font-bold">
              <span className={getAnimationClass("firstName")}>
                {isFieldEmpty("firstName") ? (
                  <span className="italic opacity-70">
                    {placeholders.firstName}
                  </span>
                ) : (
                  userInformation.firstName
                )}{" "}
              </span>
              <span className={getAnimationClass("lastName")}>
                {isFieldEmpty("lastName") ? (
                  <span className="italic opacity-70">
                    {placeholders.lastName}
                  </span>
                ) : (
                  userInformation.lastName
                )}
              </span>
            </p>
          </h2>

          <h3 className="text-sm italic mt-3 text-gray-light">
            <p className={getAnimationClass("title")}>
              {isFieldEmpty("title") ? (
                <span className="italic opacity-70">{placeholders.title}</span>
              ) : (
                userInformation.title
              )}
            </p>
          </h3>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col span={24}>
          <div
            className={`icon-button ${getButtonAnimationClass("phone")} ${
              isFieldEmpty("phone") ? "placeholder" : ""
            }`}
          >
            <div className="icon-button__icon">
              <PhoneFilled className={getIconAnimationClass("phone")} />
            </div>
            <div className="icon-button__text">
              <p className={getAnimationClass("phone")}>
                {isFieldEmpty("phone")
                  ? placeholders.phone
                  : userInformation.phone}
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col span={24}>
          <div
            className={`icon-button ${getButtonAnimationClass("email")} ${
              isFieldEmpty("email") ? "placeholder" : ""
            }`}
          >
            <div className="icon-button__icon">
              <MailFilled className={getIconAnimationClass("email")} />
            </div>
            <div className="icon-button__text">
              <p className={getAnimationClass("email")}>
                {isFieldEmpty("email")
                  ? placeholders.email
                  : userInformation.email}
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col span={24}>
          <div
            className={`icon-button ${getButtonAnimationClass("website")} ${
              isFieldEmpty("website") ? "placeholder" : ""
            }`}
          >
            <div className="icon-button__icon">
              <ChromeFilled className={getIconAnimationClass("website")} />
            </div>
            <div className="icon-button__text">
              <p className={getAnimationClass("website")}>
                {isFieldEmpty("website")
                  ? placeholders.website
                  : userInformation.website}
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col span={24}>
          <div
            className={`icon-button ${getButtonAnimationClass("location")} ${
              isFieldEmpty("location") ? "placeholder" : ""
            }`}
          >
            <div className="icon-button__icon">
              <HomeFilled className={getIconAnimationClass("location")} />
            </div>
            <div className="icon-button__text">
              <p className={`break-normal ${getAnimationClass("location")}`}>
                {isFieldEmpty("location")
                  ? placeholders.location
                  : userInformation.location}
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserInformationPreview;
