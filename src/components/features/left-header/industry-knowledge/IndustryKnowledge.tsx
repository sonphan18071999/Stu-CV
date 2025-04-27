import React, { useState } from "react";
import { Button, Col, Collapse, Row, Tag } from "antd";
import Input from "antd/lib/input/Input";
import { useDispatch, useSelector } from "react-redux";
import {
  addKnowledge,
  removeKnowledge,
  selectIndustryKnowledge,
} from "../../../../redux/reducer/industryKnowledgeSlice";

const { Panel } = Collapse;

const IndustryKnowledge: React.FC = () => {
  const dispatch = useDispatch();
  const knowledges = useSelector(selectIndustryKnowledge);
  const [jobTitle, setJobTitle] = useState<string>("");

  const addJobTitle = () => {
    if (jobTitle) {
      dispatch(addKnowledge(jobTitle));
      setJobTitle("");
    }
  };

  const handleRemove = (job: string) => {
    dispatch(removeKnowledge(job));
  };

  const showJobsAsTags = knowledges.map((job) => (
    <Tag
      className="pt-2 pb-2 pl-4 pr-4 rounded mt-2"
      closable={true}
      key={job}
      onClose={() => handleRemove(job)}
    >
      {job}
    </Tag>
  ));

  return (
    <Collapse
      expandIconPosition={`right`}
      className="w-full rounded"
      activeKey={3}
    >
      <Panel className="font-bold pb-2" header="Industry Knowledge" key={3}>
        <Row>
          <Col span={19}>
            <Input
              className="text-sm rounded"
              placeholder="Ex: User interface, design research, web design... Use tab for each title."
              name="industryKnowledge"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Tab") {
                  e.preventDefault();
                  addJobTitle();
                }
              }}
            />
          </Col>
          <Col span={4} className="justify-end ml-2">
            <Button className="btn rounded h-9" onClick={() => addJobTitle()}>
              Add
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="mt-2">{showJobsAsTags}</Col>
        </Row>
      </Panel>
    </Collapse>
  );
};

export default IndustryKnowledge;
