import React from "react";
import { Button, Card, Col, Row } from "antd";
import UserInformationPreview from "../user-information/UserInformationPreview";

const CVDisplayUI: React.FC = () => {
  return (
    <>
      <Card className="h-full">
        <Row>
          <Col span={18} className="a">
            <h2 className="font-bold text-lg ">
              Your CV will look like below...
            </h2>
          </Col>
          <Col span={6} className="flex justify-end">
            <Button className="btn rounded mr-2">Save as Draft</Button>
            <Button className="btn rounded">Export</Button>
          </Col>
        </Row>
        <Row className="h-full mt-4">
          <Col span={24}>
            <Card
              className="rounded w-5/6
background--gradient h-full"
            >
              <Row>
                <Col span={12} className="background--opacity p-2 rounded">
                  <UserInformationPreview />
                </Col>
                <Col span={12}></Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Card>
    </>
  );
};
export default CVDisplayUI;
