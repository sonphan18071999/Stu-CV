import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import React, { ReactNode } from "react";
import CreateCV from "../CreateCV";
import { Provider } from "react-redux";
import { store } from "../../../../app/store";
import { BrowserRouter } from "react-router-dom";

// Mock antd components
vi.mock("antd", async () => {
  const actual = await vi.importActual("antd");
  return {
    ...actual,
    Row: ({ children, ...props }: { children: ReactNode }) => (
      <div data-testid="mock-row" {...props}>
        {children}
      </div>
    ),
    Col: ({
      children,
      span,
      ...props
    }: {
      children: ReactNode;
      span: number;
    }) => (
      <div data-testid="mock-col" className={`ant-col-${span}`} {...props}>
        {children}
      </div>
    ),
  };
});

// Mock child components
vi.mock("../../../commons/header/header", () => ({
  default: () => <div data-testid="mock-header">Header Mock</div>,
}));

vi.mock("../../../features/cv-display/CVDisplayUI", () => ({
  default: () => <div data-testid="mock-cv-display">CV Display Mock</div>,
}));

vi.mock("../../../features/fields-drawer/FieldSideBar", () => ({
  default: () => <div data-testid="mock-field-sidebar">Field Sidebar Mock</div>,
}));

describe("CreateCV Component", () => {
  const renderComponent = () => {
    return render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateCV />
        </Provider>
      </BrowserRouter>
    );
  };

  it("should render all main components", () => {
    renderComponent();

    expect(screen.getByTestId("mock-header")).toBeInTheDocument();
    expect(screen.getByTestId("mock-cv-display")).toBeInTheDocument();
    expect(screen.getByTestId("mock-field-sidebar")).toBeInTheDocument();
  });

  it("should have correct layout structure", () => {
    renderComponent();

    // Check if the layout components are rendered with correct classes
    const rows = screen.getAllByTestId("mock-row");
    const cols = screen.getAllByTestId("mock-col");

    expect(rows.length).toBeGreaterThan(0);
    expect(cols.length).toBeGreaterThan(0);

    // Check for specific column sizes
    const sidebarCol = screen
      .getByTestId("mock-field-sidebar")
      .closest(".ant-col-6");
    const mainCol = screen
      .getByTestId("mock-cv-display")
      .closest(".ant-col-18");

    expect(sidebarCol).toBeInTheDocument();
    expect(mainCol).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
