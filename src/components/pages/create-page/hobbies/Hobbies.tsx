import { Button, Col, Collapse, Input, Row, Tag } from "antd";
import React, { useState } from "react";
const { Panel } = Collapse;

const Hobbies: React.FC = () => {
  const [hobbies, setHobbies] = useState<string[]>([]);
  const [newHobby, setNewHobby] = useState<string>("");

  const addHobbies = () => {
    if (hobbies) {
      setHobbies((prev) => [...prev, newHobby]);
      setNewHobby("");
    }
  };

  const showHobbiesAsTags = hobbies.map((hobby) => (
    <Tag
      className="pt-2 pb-2 pl-4 pr-4 rounded mt-2"
      closable={true}
      key={hobby}
    >
      {hobby}
    </Tag>
  ));

  return (
    <Collapse expandIconPosition={`right`} className="w-full rounded">
      <Panel className="font-bold pb-2" header="Hobbies" key="1">
        <Row>
          <Col span={19}>
            <Input
              className="text-sm rounded"
              placeholder="Ex: Football, badminton, swimming..."
              name="industryKnowledge"
              value={newHobby}
              onChange={(e) => setNewHobby(e.target.value)}
            />
          </Col>
          <Col span={4} className="justify-end ml-2">
            <Button className="btn rounded h-9" onClick={() => addHobbies()}>
              Add
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="mt-2">{showHobbiesAsTags}</Col>
        </Row>
      </Panel>
    </Collapse>
  );
};

export default Hobbies;
