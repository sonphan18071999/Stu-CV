import { Col, Collapse, Row, Space } from "antd";
import Input from "antd/lib/input/Input";
import TextArea from "antd/lib/input/TextArea";
import Search from "antd/lib/transfer/search";
import React, { FC } from "react";
const { Panel } = Collapse;

const getIndustryKnowledge = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  console.log("Change:", e.target.value);
};

const FieldsSideBar: FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-2 h-40 pt-4">
      <Row>
        <Col span={5}>
          <Search placeholder="Search for information" />
          <Collapse expandIconPosition={`right`}>
            <Panel className="font-bold" header="User Information" key="1">
              <Row>
                <Col span={12}>
                  <Input placeholder="First name" bordered={true} />
                </Col>
                <Col span={12}>
                  <Input placeholder="Last name" bordered={true} />
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <Input placeholder="Job title" bordered={true} />
                </Col>
                <Col span={12}>
                  <Input placeholder="Phone" bordered={true} />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Input placeholder="Email" />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Input placeholder="Website" />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Input placeholder="Location" />
                </Col>
              </Row>
            </Panel>
          </Collapse>
          <Collapse expandIconPosition={`right`}>
            <Panel className="font-bold" header="Industry Knowledge" key="2">
              <TextArea
                rows={5}
                showCount
                maxLength={300}
                onChange={getIndustryKnowledge}
              ></TextArea>
            </Panel>
          </Collapse>
          <Collapse expandIconPosition={`right`}>
            <Panel className="font-bold" header="Languages" key="2">
              <TextArea
                rows={5}
                showCount
                maxLength={300}
                onChange={getIndustryKnowledge}
              ></TextArea>
            </Panel>
          </Collapse>
          <Collapse expandIconPosition={`right`}>
            <Panel className="font-bold" header="Social" key="2">
              <TextArea
                rows={5}
                showCount
                maxLength={300}
                onChange={getIndustryKnowledge}
              ></TextArea>
            </Panel>
          </Collapse>
          <Collapse expandIconPosition={`right`}>
            <Panel className="font-bold" header="Hobbies" key="2">
              <TextArea
                rows={5}
                showCount
                maxLength={300}
                onChange={getIndustryKnowledge}
              ></TextArea>
            </Panel>
          </Collapse>
          <Collapse expandIconPosition={`right`}>
            <Panel className="font-bold" header="Experience" key="2">
              <TextArea
                rows={5}
                showCount
                maxLength={300}
                onChange={getIndustryKnowledge}
              ></TextArea>
            </Panel>
          </Collapse>
          <Collapse expandIconPosition={`right`}>
            <Panel className="font-bold" header="Education" key="2">
              <TextArea
                rows={5}
                showCount
                maxLength={300}
                onChange={getIndustryKnowledge}
              ></TextArea>
            </Panel>
          </Collapse>
          <Collapse expandIconPosition={`right`} bordered={true}>
            <Panel className="font-bold" header="My skills" key="2">
              <TextArea
                rows={5}
                showCount
                maxLength={300}
                onChange={getIndustryKnowledge}
              ></TextArea>
            </Panel>
          </Collapse>
        </Col>
        <Col span={18} className="ml-2">
          <p>This is where CV will be display</p>
        </Col>
      </Row>
    </div>
  );
};

export default FieldsSideBar;
