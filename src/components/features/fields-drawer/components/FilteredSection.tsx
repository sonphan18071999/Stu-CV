import React, { FC, Suspense } from "react";
import { SectionProps } from "../types/section.types";
import { componentNames } from "../constants/componentNames";
import "../../../../styles/theme.scss";

// Placeholder component for when content is loading
const LoadingPlaceholder: FC = () => (
  <div className="p-3 bg-gray-100 rounded animate-pulse loading-placeholder">
    <div className="h-6 bg-gray-200 rounded w-3/4 mb-2 placeholder-line"></div>
    <div className="h-4 bg-gray-200 rounded w-1/2 placeholder-line"></div>
  </div>
);

/**
 * FilteredSection component
 * Conditionally renders a section based on whether it matches the search query
 */
export const FilteredSection: FC<SectionProps> = ({
  name,
  component,
  searchQuery,
}) => {
  const displayName = componentNames[name];
  const isVisible =
    !searchQuery ||
    displayName.toLowerCase().includes(searchQuery.toLowerCase());

  if (!isVisible) return null;

  return (
    <>
      <div className="mt-2"></div>
      <Suspense fallback={<LoadingPlaceholder />}>{component}</Suspense>
    </>
  );
};
