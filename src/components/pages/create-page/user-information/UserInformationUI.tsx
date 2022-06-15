import React, { useEffect, useState } from "react";
import { Button, Col, Collapse, Row } from "antd";
import Input from "antd/lib/input/Input";
import { UploadOutlined } from "@ant-design/icons";
import UserInformation from "../../../../models/UserInformation";
import Upload, { UploadProps } from "antd/lib/upload/Upload";
import _ from "lodash";
import { UploadFile } from "antd/lib/upload/interface";
const { Panel } = Collapse;
const initUser = {} as UserInformation;

const props: UploadProps = {
  listType: "picture",
};

const UserInformationUI: React.FC = () => {
  const [user, setUser] = useState<UserInformation>(initUser);
  const [avatars, setAvatars] = useState<UploadFile[]>([]);

  useEffect(() => {
    if (avatars.length > 0) {
      avatars.forEach((file: any) => {
        let reader = new FileReader();
        reader.onload = (e) => {
          if (e.target) {
            file.base64 = e.target.result;
          }
        };
      });
    }
  }, [avatars]);

  const updateUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: avatar }) =>
    setAvatars(avatar);

  return (
    <Collapse expandIconPosition={`right`} className="w-full rounded">
      <Panel className="font-bold" header="User Information" key={2}>
        <Row gutter={{ lg: 8 }}>
          <Col span={12}>
            <Input
              bordered={true}
              className="rounded text-sm"
              placeholder="First Name"
              name="firstName"
              onChange={(e) => updateUser(e)}
              value={user.fistName}
            />
          </Col>
          <Col span={12}>
            <Input
              placeholder="Last Name"
              bordered={true}
              className="rounded text-sm"
              name="lastName"
              onChange={(e) => updateUser(e)}
              value={user.lastName}
            />
          </Col>
        </Row>
        <Row className="mt-2" gutter={{ lg: 8 }}>
          <Col span={12}>
            <Input
              placeholder="Job title"
              bordered={true}
              className="rounded text-sm"
              name="title"
              onChange={(e) => updateUser(e)}
              value={user.title}
            />
          </Col>
          <Col span={12}>
            <Input
              placeholder="Phone"
              bordered={true}
              className="rounded text-sm"
              name="phone"
              onChange={(e) => updateUser(e)}
              value={user.phone}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col span={24}>
            <Input
              placeholder="Email"
              className="rounded text-sm"
              name="email"
              onChange={(e) => updateUser(e)}
              value={user.email}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col span={24}>
            <Input
              placeholder="Website"
              className="rounded text-sm"
              name="website"
              onChange={(e) => updateUser(e)}
              value={user.website}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col span={24}>
            <Input
              placeholder="Location"
              className="rounded text-sm"
              name="location"
              onChange={(e) => updateUser(e)}
              value={user.location}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col span={24}>
            <Upload
              {...props}
              className="block"
              showUploadList={true}
              onChange={handleChange}
              multiple={false}
              accept="image/png, image/jpeg"
            >
              <Button icon={<UploadOutlined />}>Upload your avatar</Button>
            </Upload>
          </Col>
        </Row>
      </Panel>
    </Collapse>
  );
};

export default UserInformationUI;
