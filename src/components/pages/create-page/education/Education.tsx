import { Collapse } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { FC } from "react";
const { Panel } = Collapse;

const Education: FC = () => {
  return (
    <Collapse expandIconPosition={`right`} className="rounded">
      <Panel className="font-bold" header="Education" key="2">
        <TextArea rows={5} showCount maxLength={300}></TextArea>
      </Panel>
    </Collapse>
  );
};

export default Education;
