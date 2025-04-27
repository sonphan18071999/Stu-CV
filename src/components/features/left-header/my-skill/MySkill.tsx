import { Col, Collapse, Row, Select, Tag } from "antd";
import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSkill,
  removeSkill,
  selectMySkills,
} from "../../../../redux/reducer/mySkillSlice";

const { Option } = Select;
const { Panel } = Collapse;

// Define skill icons mapping
const skillIconsMapping: Record<string, string> = {
  "Adobe Photoshop":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_Mobile_icon.svg/1200px-Adobe_Photoshop_Mobile_icon.svg.png",
  "Adobe Illutrator":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Adobe_Illustrator_Icon_%28CS6%29.svg/1046px-Adobe_Illustrator_Icon_%28CS6%29.svg.png",
  "Adobe Premiere":
    "https://icon-library.com/images/adobe-premiere-icon/adobe-premiere-icon-18.jpg",
  "Adobe Lightroom":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg/2101px-Adobe_Photoshop_Lightroom_CC_logo.svg.png",
  "Visual Code":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
  MongoDB: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
  Intelliji:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/1024px-IntelliJ_IDEA_Icon.svg.png",
  Webstorm:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/WebStorm_Icon.svg/1200px-WebStorm_Icon.svg.png",
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

const MySkill: FC = () => {
  const dispatch = useDispatch();
  const skills = useSelector(selectMySkills);

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  const onChange = (value: string) => {
    if (!skills.some((skill) => skill.name === value)) {
      dispatch(
        addSkill({
          name: value,
          url: skillIconsMapping[value] || "",
        })
      );
    }
  };

  const handleRemove = (skillName: string) => {
    dispatch(removeSkill(skillName));
  };

  const skillOptions = initSkills.map((skill) => (
    <Option value={skill} key={skill}>
      {skill}
    </Option>
  ));

  const skillTags = skills.map((skill) => (
    <Tag
      className="pt-2 pb-2 pl-4 pr-4 rounded mt-2"
      closable={true}
      key={skill.name}
      onClose={() => handleRemove(skill.name)}
    >
      {skill.name}
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
              placeholder="Select a skill"
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
