import { Col, Collapse, Row } from "antd";
import Input from "antd/lib/input/Input";
import React from "react";
import {
  increaseCounter,
  decreaseCounter,
} from "../../../../redux/Counter/counter.actions";
import { connect } from "react-redux";

const { Panel } = Collapse;

const UserInformation: React.FC = (props: any) => {
  return (
    <Collapse expandIconPosition={`right`} className="w-full rounded">
      <div>Count: {props.count}</div>

      <button onClick={() => props.increaseCounter()}>Increase Count</button>
      <button onClick={() => props.decreaseCounter()}>Decrease Count</button>

      <Panel className="font-bold" header="User Information" key="1">
        <Row>
          <Col span={12}>
            <Input
              placeholder="First name"
              bordered={true}
              className="rounded text-xs"
            />
          </Col>
          <Col span={12}>
            <Input
              placeholder="Last name"
              bordered={true}
              className="rounded text-xs"
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col span={12}>
            <Input
              placeholder="Job title"
              bordered={true}
              className="rounded text-xs"
            />
          </Col>
          <Col span={12}>
            <Input
              placeholder="Phone"
              bordered={true}
              className="rounded text-xs"
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col span={24}>
            <Input placeholder="Email" className="rounded text-xs text-xs" />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col span={24}>
            <Input placeholder="Website" className="rounded text-xs" />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col span={24}>
            <Input placeholder="Location" className="rounded text-xs" />
          </Col>
        </Row>
      </Panel>
    </Collapse>
  );
};

const mapStateToProps = (state: any) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInformation);
