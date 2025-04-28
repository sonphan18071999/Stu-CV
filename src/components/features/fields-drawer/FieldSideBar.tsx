import { Col, Row, Input, Empty } from "antd";
import React, { FC, useState, useCallback, useMemo } from "react";
import "./FieldSideBar.scss";

// Import from restructured files
import { ComponentNameKey } from "./constants/componentNames";
import { FilteredSection } from "./components/FilteredSection";
import { LazyComponents } from "./components/LazyComponents";
import { SectionConfig } from "./types/section.types";
import { filterSectionsByQuery } from "./utils/searchUtils";
import TemplateSelectorDrawer from "../cv-templates/TemplateSelectorDrawer";

/**
 * FieldSideBar Component
 * Displays all field sections with search functionality
 */
const FieldSideBar: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Handle search input changes
  const handleSearch = useCallback((value: string) => {
    setSearchQuery(value);
  }, []);

  // Create sections array with all components
  const sections = useMemo(
    (): SectionConfig[] => [
      {
        name: "UserInformation",
        component: <LazyComponents.UserInformation />,
      },
      {
        name: "IndustryKnowledge",
        component: <LazyComponents.IndustryKnowledge />,
      },
      { name: "Languages", component: <LazyComponents.Languages /> },
      { name: "Social", component: <LazyComponents.Social /> },
      { name: "Hobbies", component: <LazyComponents.Hobbies /> },
      { name: "Experience", component: <LazyComponents.Experience /> },
      { name: "Education", component: <LazyComponents.Education /> },
      { name: "MySkill", component: <LazyComponents.MySkill /> },
    ],
    []
  );

  // Filter sections based on search query
  const visibleSections = useMemo(
    () => filterSectionsByQuery(sections, searchQuery),
    [sections, searchQuery]
  );

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
                allowClear
              />
            </Col>
          </Row>

          <div className="mt-4"></div>

          {/* Template Selector Drawer */}
          <TemplateSelectorDrawer />

          <div className="mt-2"></div>

          {visibleSections.length === 0 && searchQuery ? (
            <Empty
              description={`No sections match "${searchQuery}"`}
              // className="my-8"
            />
          ) : (
            sections.map((section) => (
              <FilteredSection
                key={section.name}
                name={section.name}
                component={section.component}
                searchQuery={searchQuery}
              />
            ))
          )}
        </Col>
      </Row>
    </>
  );
};

export default React.memo(FieldSideBar);
