import { ComponentNameKey } from "../constants/componentNames";

// Props for the FilteredSection component
export interface SectionProps {
  name: ComponentNameKey;
  component: JSX.Element;
  searchQuery: string;
}

// Structure for section components in the sidebar
export interface SectionConfig {
  name: ComponentNameKey;
  component: JSX.Element;
}
