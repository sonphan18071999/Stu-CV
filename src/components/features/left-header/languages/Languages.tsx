import { Button, Col, Collapse, Input, Row, Tag } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addLanguage,
  removeLanguage,
  selectLanguages,
} from "../../../../redux/reducer/languagesSlice";

const { Panel } = Collapse;

const Languages: React.FC = () => {
  const dispatch = useDispatch();
  const languages = useSelector(selectLanguages);
  const [newLanguage, setNewLanguage] = useState<string>("");

  const addLanguages = () => {
    if (newLanguage) {
      dispatch(addLanguage(newLanguage));
      setNewLanguage("");
    }
  };

  const handleRemove = (language: string) => {
    dispatch(removeLanguage(language));
  };

  const showLanguagesAsTags = languages.map((language) => (
    <Tag
      className="pt-2 pb-2 pl-4 pr-4 rounded mt-2"
      closable={true}
      key={language}
      onClose={() => handleRemove(language)}
    >
      {language}
    </Tag>
  ));

  return (
    <Collapse expandIconPosition={`right`} className="w-full rounded">
      <Panel className="font-bold pb-2" header="Languages" key="1">
        <Row>
          <Col span={19}>
            <Input
              className="text-sm rounded"
              placeholder="Ex: English, Chinese, Japanese.."
              name="language"
              value={newLanguage}
              onChange={(e) => setNewLanguage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Tab") {
                  e.preventDefault();
                  addLanguages();
                }
              }}
            />
          </Col>
          <Col span={4} className="justify-end ml-2">
            <Button className="btn rounded h-9" onClick={() => addLanguages()}>
              Add
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="mt-2">{showLanguagesAsTags}</Col>
        </Row>
      </Panel>
    </Collapse>
  );
};

export default Languages;
