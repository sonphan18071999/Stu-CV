import React, { useEffect, useState, useCallback } from "react";
import { Col, Collapse, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useAppDispatch } from "../../../../app/hook";
import { setUserInformation } from "../../../../redux/reducer/userInformationSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import _ from "lodash";

const { Panel } = Collapse;

const SummaryUI: React.FC = () => {
  const dispatch = useAppDispatch();

  const userInformation = useSelector(
    (state: RootState) => state.userInformation
  );

  const [summary, setSummary] = useState<string>(userInformation.summary || "");

  // Use lodash's debounce to prevent too many Redux updates
  const debouncedDispatch = useCallback(
    _.debounce((newSummary: string) => {
      dispatch(
        setUserInformation({
          ...userInformation,
          summary: newSummary,
        })
      );
    }, 300),
    [dispatch, userInformation]
  );

  useEffect(() => {
    debouncedDispatch(summary);
    // Cleanup on unmount
    return () => {
      debouncedDispatch.cancel();
    };
  }, [summary, debouncedDispatch]);

  const updateSummary = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setSummary(e.target.value);
    },
    []
  );

  return (
    <Collapse
      expandIconPosition={`right`}
      className="w-full rounded"
      activeKey={11}
    >
      <Panel className="font-bold" header="Professional Summary" key={11}>
        <Row>
          <Col span={24}>
            <TextArea
              placeholder="Write a professional summary that highlights your skills, experience, and career goals..."
              bordered={true}
              className="rounded text-sm"
              name="summary"
              onChange={updateSummary}
              value={summary}
              rows={4}
            />
          </Col>
        </Row>
      </Panel>
    </Collapse>
  );
};

export default React.memo(SummaryUI);
