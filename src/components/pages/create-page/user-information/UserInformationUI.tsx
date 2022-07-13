import React, { useState } from "react";
import { Button, Col, Collapse, Row } from "antd";
import Input from "antd/lib/input/Input";
import { UploadOutlined } from "@ant-design/icons";
import UserInformation from "../../../../models/UserInformation";
import Upload, { UploadProps } from "antd/lib/upload/Upload";
import { useAppDispatch, useAppSelector } from "../../../../app/hook";
import { increment } from "../../../../redux/reducer/counterSlice";
import { setUserInformation } from "../../../../redux/reducer/userInformationSlice";
const { Panel } = Collapse;
const initUser = {} as UserInformation;

const props: UploadProps = {
  action: "//jsonplaceholder.typicode.com/posts/",
  listType: "picture",
  previewFile(file) {
    console.log("Your upload file:", file);
    // Your process logic. Here we just mock to the same file
    return fetch("https://next.json-generator.com/api/json/get/4ytyBoLK8", {
      method: "POST",
      body: file,
    })
      .then((res) => res.json())
      .then(({ thumbnail }) => thumbnail);
  },
};

const UserInformationUI: React.FC = () => {
  const [user, setUser] = useState<UserInformation>(initUser);

  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  const updateUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    dispatch(setUserInformation(user));
  };

  return (
    <Collapse
      expandIconPosition={`right`}
      className="w-full rounded"
      activeKey={10}
    >
      <Panel className="font-bold" header="User Information" key={10}>
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
            <Upload {...props} className="flex justify-end">
              <Button icon={<UploadOutlined />}>Upload your avatar</Button>
            </Upload>
          </Col>
        </Row>
      </Panel>
    </Collapse>

  );
};

export default UserInformationUI;
