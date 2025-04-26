import React, { useEffect, useState, useCallback } from "react";
import { Col, Collapse, Row } from "antd";
import UserInformation from "../../../models/UserInformation";
import { useAppDispatch } from "../../../app/hook";
import { setUserInformation } from "../../../redux/reducer/userInformationSlice";
import ImageUploader from "../../commons/image-upload/ImageUploader";
import HighlightInput from "../../commons/inputs/HighlightInput";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import _ from "lodash";
const { Panel } = Collapse;

const UserInformationUI: React.FC = () => {
  const dispatch = useAppDispatch();

  const userInformation = useSelector(
    (state: RootState) => state.userInformation
  );

  const [user, setUser] = useState<UserInformation>(userInformation);

  // Use lodash's debounce to prevent too many Redux updates
  const debouncedDispatch = useCallback(
    _.debounce((userData: UserInformation) => {
      dispatch(setUserInformation(userData));
    }, 300),
    [dispatch]
  );

  useEffect(() => {
    debouncedDispatch(user);
    // Cleanup on unmount
    return () => {
      debouncedDispatch.cancel();
    };
  }, [user, debouncedDispatch]);

  const updateUser = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleImageUpload = useCallback((dataUrl: string) => {
    setUser((prev) => ({ ...prev, avatar: dataUrl }));
  }, []);

  return (
    <Collapse
      expandIconPosition={`right`}
      className="w-full rounded"
      activeKey={10}
    >
      <Panel className="font-bold" header="User Information" key={10}>
        <Row gutter={{ lg: 8 }}>
          <Col span={12}>
            <HighlightInput
              bordered={true}
              className="rounded text-sm"
              placeholder="First Name"
              name="firstName"
              onChange={updateUser}
              value={user.firstName}
            />
          </Col>
          <Col span={12}>
            <HighlightInput
              placeholder="Last Name"
              bordered={true}
              className="rounded text-sm"
              name="lastName"
              onChange={updateUser}
              value={user.lastName}
            />
          </Col>
        </Row>
        <Row className="mt-2" gutter={{ lg: 8 }}>
          <Col span={12}>
            <HighlightInput
              placeholder="Job title"
              bordered={true}
              className="rounded text-sm"
              name="title"
              onChange={updateUser}
              value={user.title}
            />
          </Col>
          <Col span={12}>
            <HighlightInput
              placeholder="Phone"
              bordered={true}
              className="rounded text-sm"
              name="phone"
              onChange={updateUser}
              value={user.phone}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col span={24}>
            <HighlightInput
              placeholder="Email"
              className="rounded text-sm"
              name="email"
              onChange={updateUser}
              value={user.email}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col span={24}>
            <HighlightInput
              placeholder="Website"
              className="rounded text-sm"
              name="website"
              onChange={updateUser}
              value={user.website}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col span={24}>
            <HighlightInput
              placeholder="Location"
              className="rounded text-sm"
              name="location"
              onChange={updateUser}
              value={user.location}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col span={24}>
            <ImageUploader onImageUpload={handleImageUpload} />
          </Col>
        </Row>
      </Panel>
    </Collapse>
  );
};

export default React.memo(UserInformationUI);
