import {
  Button,
  Col,
  Collapse,
  DatePicker,
  DatePickerProps,
  Input,
  Row,
} from "antd";
import React, { FC, useState } from "react";
import Education from "../../../../models/Education";
const { Panel } = Collapse;

const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

const EducationUI: FC = () => {
  const initEducation = {} as Education;
  const [educations, setEducations] = useState<Education[]>([initEducation]);

  const addMoreEducation = educations.map(
    (education: Education, idx: number) => (
      <div className="mt-2 rounded" key={idx}>
        <Collapse className="rounded" key={idx}>
          <Panel
            className="font-bold rounded"
            header={"School of Education " + ++idx}
            key={idx}
          >
            <Row>
              <Col span={24}>
                <Input
                  className="text-sm rounded"
                  placeholder="School name"
                ></Input>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col span={24}>
                <Input
                  className="text-xs rounded"
                  placeholder="Name of degree. Ex: Bachelor of Information..."
                ></Input>
              </Col>
            </Row>
            <Row className="mt-2" gutter={{ lg: 8 }}>
              <Col span={12}>
                <DatePicker
                  className="w-full text-xs rounded"
                  onChange={onChange}
                  placeholder="Start day"
                  bordered={true}
                />
              </Col>
              <Col span={12}>
                <DatePicker
                  className="w-full text-xs rounded"
                  onChange={onChange}
                  placeholder="End day"
                  bordered={true}
                />
              </Col>
            </Row>
          </Panel>
        </Collapse>
      </div>
    )
  );

  return (
    <Collapse expandIconPosition={`right`} className="rounded">
      <Panel className="font-bold" header="Education" key={10}>
        {addMoreEducation}
        <Row>
          <Col className="flex justify-center mt-2" span={24}>
            <Button
              className="mt-2 btn rounded"
              onClick={() => setEducations([...educations, initEducation])}
            >
              Add more
            </Button>
          </Col>
        </Row>
      </Panel>
    </Collapse>
  );
};

export default EducationUI;
