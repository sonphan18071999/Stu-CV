import { Col, Row } from "antd";
import React from "react";

const SocialPreview: React.FC = () => {
  return (
    <>
      <Row className="mt-4">
        <Col span={24}>
          <div className="background--opacity ml-4 mr-4 rounded-md">
            <h2 className="text-white ml-6 font-bold pt-4 text-2xl mb-2">
              Socials
            </h2>
            <ul className="list-none text-white ml-8 pb-4">
              <li>
                <a href="https://www.facebook.com/">Facebook</a>
              </li>
              <li>
                <a href="https://github.com/sonphan18071999/Stu-CV">
                  Github Account
                </a>
              </li>
              <li>
                <a href="https://dev.to/cloudcannon/data-files-in-jekyll-32ic">
                  Visit <b>Dev.to</b> account
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default SocialPreview;
