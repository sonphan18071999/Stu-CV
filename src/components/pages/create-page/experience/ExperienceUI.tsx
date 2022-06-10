import {
  Button,
  Col,
  Collapse,
  DatePicker,
  DatePickerProps,
  Input,
  Row,
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { FC, useState } from "react";
import Experience from "../../../../models/Experience";

const { Panel } = Collapse;

const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

const ExperienceUI: FC = () => {
  const initExperience = {} as Experience;
  const [yearsOfExperience, setYearsOfExperience] = useState<Experience[]>([
    initExperience,
  ]);

  const addMoreCompany = yearsOfExperience.map((experience, idx) => (
    <div className="mt-2">
      <Collapse>
        <Panel className="font-bold" header={"Company " + ++idx} key="2">
          <Row>
            <Col span={24}>
              <Input className="text-sm" placeholder="Company name"></Input>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col span={24}>
              <Input className="text-xs" placeholder="Role | Position"></Input>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col span={12}>
              <DatePicker
                className="w-full text-xs"
                onChange={onChange}
                placeholder="Start day"
                bordered={true}
              />
            </Col>
            <Col span={12}>
              <DatePicker
                className="w-full text-xs"
                onChange={onChange}
                placeholder="End day"
                bordered={true}
              />
            </Col>
          </Row>
          <TextArea
            className="mb-2 mt-2"
            placeholder="Describe your experience here ^^"
            rows={5}
            maxLength={300}
            bordered={true}
          ></TextArea>
        </Panel>
      </Collapse>
    </div>
  ));

  return (
    <Collapse expandIconPosition={`right`} className="rounded">
      <Panel className="font-bold" header="Experience" key="2">
        {addMoreCompany}

        <Row>
          <Col className="flex justify-center mt-2" span={24}>
            <Button
              className="btn rounded mt-2"
              onClick={(e) =>
                setYearsOfExperience([...yearsOfExperience, initExperience])
              }
            >
              Add more
            </Button>
          </Col>
        </Row>
      </Panel>
    </Collapse>
  );
};

export default ExperienceUI;
