import { Col, Row, Input } from "antd";
import React, { FC, lazy, Suspense, useState, useCallback } from "react";
import "./FieldSideBar.scss";

const UserInformation = lazy(
  () => import("../user-information/UserInformationUI")
);
const IndustryKnowledge = lazy(
  () => import("../industry-knowledge/IndustryKnowledge")
);
const Languages = lazy(() => import("../languages/Languages"));
const Social = lazy(() => import("../social/Social"));
const Hobbies = lazy(() => import("../hobbies/Hobbies"));
const Experience = lazy(() => import("../experience/ExperienceUI"));
const Education = lazy(() => import("../education/EducationUI"));
const MySkill = lazy(() => import("../my-skill/MySkill"));

const LoadingPlaceholder = () => (
  <div className="p-3 bg-gray-100 rounded animate-pulse">
    <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
  </div>
);

const FieldSideBar: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = useCallback((value: string) => {
    setSearchQuery(value);
  }, []);

  return (
    <>
      <Row>
        <Col span={24} className="sidebar pt-4 pb-2 px-2 w-full h-full">
          <Row>
            <Col span={24} className="rounded">
              <Input.Search
                placeholder="Search for information"
                onChange={(e) => handleSearch(e.target.value)}
                value={searchQuery}
              />
            </Col>
          </Row>
          <div className="mt-4"></div>
          <Suspense fallback={<LoadingPlaceholder />}>
            <UserInformation />
          </Suspense>
          <div className="mt-2"></div>
          <Suspense fallback={<LoadingPlaceholder />}>
            <IndustryKnowledge />
          </Suspense>
          <div className="mt-2"></div>
          <Suspense fallback={<LoadingPlaceholder />}>
            <Languages />
          </Suspense>
          <div className="mt-2"></div>
          <Suspense fallback={<LoadingPlaceholder />}>
            <Social />
          </Suspense>
          <div className="mt-2"></div>
          <Suspense fallback={<LoadingPlaceholder />}>
            <Hobbies />
          </Suspense>
          <div className="mt-2"></div>
          <Suspense fallback={<LoadingPlaceholder />}>
            <Experience />
          </Suspense>
          <div className="mt-2"></div>
          <Suspense fallback={<LoadingPlaceholder />}>
            <Education />
          </Suspense>
          <div className="mt-2"></div>
          <Suspense fallback={<LoadingPlaceholder />}>
            <MySkill />
          </Suspense>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(FieldSideBar);
