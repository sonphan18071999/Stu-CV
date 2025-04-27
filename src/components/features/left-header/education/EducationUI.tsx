import React, { FC } from "react";
import { Button, Col, Collapse, DatePicker, Input, Row, Tooltip } from "antd";
import Education from "../../../../models/Education";
import { useDispatch, useSelector } from "react-redux";
import {
  addEducation,
  removeEducation,
  updateEducation,
  selectEducations,
} from "../../../../redux/reducer/educationSlice";
import { DeleteOutlined } from "@ant-design/icons";
import moment from "moment";

const { Panel } = Collapse;

const EducationUI: FC = () => {
  const dispatch = useDispatch();
  const educations = useSelector(selectEducations);

  const handleInputChange = (
    index: number,
    field: keyof Education,
    value: string
  ) => {
    const updatedEducation = { ...educations[index], [field]: value };
    dispatch(updateEducation({ index, education: updatedEducation }));
  };

  const handleDateChange = (
    index: number,
    field: "startDate" | "endDate",
    dateString: string
  ) => {
    const updatedEducation = { ...educations[index], [field]: dateString };
    dispatch(updateEducation({ index, education: updatedEducation }));
  };

  const handleAddEducation = () => {
    dispatch(
      addEducation({
        name: "",
        role: "",
        startDate: "",
        endDate: "",
      })
    );
  };

  const handleRemoveEducation = (index: number) => {
    dispatch(removeEducation(index));
  };

  return (
    <Collapse expandIconPosition={`right`} className="rounded">
      <Panel className="font-bold" header="Education" key={10}>
        {educations.map((education, idx) => (
          <div className="mt-2 rounded" key={idx}>
            <Collapse className="rounded" key={idx}>
              <Panel
                className="font-bold rounded"
                header={education.name ? education.name : `School ${idx + 1}`}
                key={idx}
                extra={
                  <Tooltip title="Remove">
                    <DeleteOutlined
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveEducation(idx);
                      }}
                    />
                  </Tooltip>
                }
              >
                <Row>
                  <Col span={24}>
                    <Input
                      className="text-sm rounded"
                      placeholder="School name"
                      value={education.name}
                      onChange={(e) =>
                        handleInputChange(idx, "name", e.target.value)
                      }
                    />
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col span={24}>
                    <Input
                      className="text-xs rounded"
                      placeholder="Name of degree. Ex: Bachelor of Information..."
                      value={education.role}
                      onChange={(e) =>
                        handleInputChange(idx, "role", e.target.value)
                      }
                    />
                  </Col>
                </Row>
                <Row className="mt-2" gutter={{ lg: 8 }}>
                  <Col span={12}>
                    <DatePicker
                      className="w-full text-xs rounded"
                      onChange={(_, dateString) =>
                        handleDateChange(idx, "startDate", dateString)
                      }
                      placeholder="Start date"
                      bordered={true}
                      value={
                        education.startDate ? moment(education.startDate) : null
                      }
                    />
                  </Col>
                  <Col span={12}>
                    <DatePicker
                      className="w-full text-xs rounded"
                      onChange={(_, dateString) =>
                        handleDateChange(idx, "endDate", dateString)
                      }
                      placeholder="End date"
                      bordered={true}
                      value={
                        education.endDate ? moment(education.endDate) : null
                      }
                    />
                  </Col>
                </Row>
              </Panel>
            </Collapse>
          </div>
        ))}
        <Row>
          <Col className="flex justify-center mt-2" span={24}>
            <Button className="mt-2 btn rounded" onClick={handleAddEducation}>
              Add more
            </Button>
          </Col>
        </Row>
      </Panel>
    </Collapse>
  );
};

export default EducationUI;
