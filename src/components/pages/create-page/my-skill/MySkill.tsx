import { Col, Collapse, Row, Select, Tag } from "antd";
import React, { FC, useState } from "react";
const { Option } = Select;
const { Panel } = Collapse;

const onSearch = (value: string) => {
  console.log("search:", value);
};

const initSkills = [
  "Adobe Photoshop",
  "Adobe Illutrator",
  "Adobe Premiere",
  "Adobe Lightroom",
  "Visual Code",
  "MongoDB",
  "Intelliji",
  "Webstorm",
];

const skillOptions = initSkills.map((skill) => (
  <Option value={skill}>{skill}</Option>
));
const MySkill: FC = () => {
  const [skills, setSkills] = useState<string[]>([]);

  const onChange = (value: string) => {
    setSkills([...skills, value]);
  };

  const skillTags = skills.map((skill, idx) => (
    <Tag className="pt-2 pb-2 pl-4 pr-4 rounded mt-2" closable={true} key={idx}>
      {skill}
    </Tag>
  ));
  return (
    <Collapse expandIconPosition={`right`} className="w-full rounded">
      <Panel className="font-bold" header="My Skills" key="2">
        <Row>
          <Col span={24}>
            <Select
              className="w-full rounded"
              showSearch
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={(input, option) =>
                (option!.children as unknown as string)
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
            >
              {skillOptions}
            </Select>
          </Col>
        </Row>
        {skillTags}
      </Panel>
    </Collapse>
  );
};

export default MySkill;
