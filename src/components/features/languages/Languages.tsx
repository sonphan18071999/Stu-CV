import { Button, Col, Collapse, Input, Row, Tag } from "antd";
import React, { useState } from "react";
const { Panel } = Collapse;

const Languages: React.FC = () => {
  const [languages, setLanguages] = useState<string[]>([]);
  const [newLanguage, setNewLanguage] = useState<string>("");

  const addLanguages = () => {
    if (languages) {
      setLanguages((prev) => [...prev, newLanguage]);
      setNewLanguage("");
    }
  };

  const showLanguagesAsTags = languages.map((job) => (
    <Tag className="pt-2 pb-2 pl-4 pr-4 rounded mt-2" closable={true} key={job}>
      {job}
    </Tag>
  ));

  return (
    <Collapse expandIconPosition={`right`} className="w-full rounded">
      <Panel className="font-bold pb-2" header="Languages" key="1">
        <Row>
          <Col span={19}>
            <Input
              className="text-sm rounded"
              placeholder="Ex: English, Chinese, Japanese.."
              name="industryKnowledge"
              value={newLanguage}
              onChange={(e) => setNewLanguage(e.target.value)}
            />
          </Col>
          <Col span={4} className="justify-end ml-2">
            <Button className="btn rounded h-9" onClick={() => addLanguages()}>
              Add
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="mt-2">{showLanguagesAsTags}</Col>
        </Row>
      </Panel>
    </Collapse>
  );
};

export default Languages;
