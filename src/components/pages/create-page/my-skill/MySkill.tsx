import { Collapse } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { FC } from "react";
const { Panel } = Collapse;

const MySkill: FC = () => {
  return (
    <Collapse expandIconPosition={`right`} className="rounded">
      <Panel className="font-bold" header="My skills" key="2">
        <TextArea rows={5} showCount maxLength={300}></TextArea>
      </Panel>
    </Collapse>
  );
};

export default MySkill;
