import React, { FC, useState } from "react";
import {
  Button,
  Col,
  Collapse,
  DatePicker,
  Input,
  Row,
  Tooltip,
  Space,
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import Experience from "../../../../models/Experience";
import { useDispatch, useSelector } from "react-redux";
import {
  addExperience,
  removeExperience,
  updateExperience,
  selectExperiences,
} from "../../../../redux/reducer/experienceSlice";
import { DeleteOutlined } from "@ant-design/icons";
import moment from "moment";

const { Panel } = Collapse;

const ExperienceUI: FC = () => {
  const dispatch = useDispatch();
  const experiences = useSelector(selectExperiences);

  const [newExperience, setNewExperience] = useState<Experience>({
    name: "",
    role: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleInputChange = (
    index: number,
    field: keyof Experience,
    value: string
  ) => {
    const updatedExperience = { ...experiences[index], [field]: value };
    dispatch(updateExperience({ index, experience: updatedExperience }));
  };

  const handleDateChange = (
    index: number,
    field: "startDate" | "endDate",
    dateString: string
  ) => {
    const updatedExperience = { ...experiences[index], [field]: dateString };
    dispatch(updateExperience({ index, experience: updatedExperience }));
  };

  const handleAddExperience = () => {
    dispatch(
      addExperience({
        name: "",
        role: "",
        startDate: "",
        endDate: "",
        description: "",
      })
    );
  };

  const handleRemoveExperience = (index: number) => {
    dispatch(removeExperience(index));
  };

  return (
    <Collapse expandIconPosition={`right`} className="rounded">
      <Panel className="font-bold" header="Experience" key="2">
        {experiences.map((experience, idx) => (
          <div className="mt-2" key={idx}>
            <Collapse key={idx}>
              <Panel
                className="font-bold"
                header={
                  experience.name ? `${experience.name}` : `Company ${idx + 1}`
                }
                key={idx}
                extra={
                  <Tooltip title="Remove">
                    <DeleteOutlined
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveExperience(idx);
                      }}
                    />
                  </Tooltip>
                }
              >
                <Row>
                  <Col span={24}>
                    <Input
                      className="text-sm"
                      placeholder="Company name"
                      value={experience.name}
                      onChange={(e) =>
                        handleInputChange(idx, "name", e.target.value)
                      }
                    />
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col span={24}>
                    <Input
                      className="text-xs"
                      placeholder="Role | Position"
                      value={experience.role}
                      onChange={(e) =>
                        handleInputChange(idx, "role", e.target.value)
                      }
                    />
                  </Col>
                </Row>
                <Row className="mt-2" gutter={{ lg: 8 }}>
                  <Col span={12}>
                    <DatePicker
                      className="w-full text-xs"
                      onChange={(_, dateString) =>
                        handleDateChange(idx, "startDate", dateString)
                      }
                      placeholder="Start date"
                      bordered={true}
                      value={
                        experience.startDate
                          ? moment(experience.startDate)
                          : null
                      }
                    />
                  </Col>
                  <Col span={12}>
                    <DatePicker
                      className="w-full text-xs"
                      onChange={(_, dateString) =>
                        handleDateChange(idx, "endDate", dateString)
                      }
                      placeholder="End date"
                      bordered={true}
                      value={
                        experience.endDate ? moment(experience.endDate) : null
                      }
                    />
                  </Col>
                </Row>
                <TextArea
                  className="mb-2 mt-2"
                  placeholder="Describe your experience here ^^"
                  rows={5}
                  maxLength={300}
                  bordered={true}
                  value={experience.description}
                  onChange={(e) =>
                    handleInputChange(idx, "description", e.target.value)
                  }
                />
              </Panel>
            </Collapse>
          </div>
        ))}

        <Row>
          <Col className="flex justify-center mt-2" span={24}>
            <Button className="btn rounded mt-2" onClick={handleAddExperience}>
              Add more
            </Button>
          </Col>
        </Row>
      </Panel>
    </Collapse>
  );
};

export default ExperienceUI;
