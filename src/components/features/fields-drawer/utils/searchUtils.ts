import { SectionConfig } from "../types/section.types";
import { componentNames } from "../constants/componentNames";

/**
 * Filters sections based on a search query
 * @param sections Array of section configurations
 * @param searchQuery The search string to filter by
 * @returns Filtered array of sections
 */
export const filterSectionsByQuery = (
  sections: SectionConfig[],
  searchQuery: string
): SectionConfig[] => {
  if (!searchQuery) return sections;

  const normalizedQuery = searchQuery.toLowerCase().trim();

  return sections.filter((section) =>
    componentNames[section.name].toLowerCase().includes(normalizedQuery)
  );
};
