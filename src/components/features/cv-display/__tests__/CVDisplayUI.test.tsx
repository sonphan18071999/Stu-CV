import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import CVDisplayUI from "../CVDisplayUI";
import { Provider } from "react-redux";
import { store } from "../../../../app/store";
import { BrowserRouter } from "react-router-dom";
import { message } from "antd";

// Mock antd message
vi.mock("antd", async () => {
  const actual = await vi.importActual("antd");
  return {
    ...actual,
    message: {
      success: vi.fn(),
      error: vi.fn(),
    },
  };
});

// Mock html2canvas
vi.mock("html2canvas", () => ({
  default: vi.fn(() =>
    Promise.resolve({
      toDataURL: () => "mock-data-url",
      width: 800,
      height: 1000,
      style: {},
      scrollHeight: 1000,
    })
  ),
}));

// Mock jsPDF
vi.mock("jspdf", () => ({
  jsPDF: vi.fn().mockImplementation(() => ({
    addImage: vi.fn(),
    addPage: vi.fn(),
    save: vi.fn(),
    internal: {
      pageSize: {
        getWidth: () => 215.9,
        getHeight: () => 279.4,
      },
    },
  })),
}));

// Mock CVTemplate component
vi.mock("../../../features/cv-templates/cv-template", () => ({
  default: () => <div data-testid="mock-cv-template">CV Template Mock</div>,
}));

// Mock localStorage
const mockLocalStorage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
};

// Mock window properties and methods
const mockWindow = {
  ...window,
  localStorage: mockLocalStorage,
  URL: {
    createObjectURL: vi.fn(() => "mock-url"),
    revokeObjectURL: vi.fn(),
  },
  ResizeObserver: vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  })),
};

Object.defineProperty(window, "localStorage", {
  value: mockLocalStorage,
});

// Mock document methods
document.createElement = vi.fn().mockImplementation((tag) => {
  if (tag === "a") {
    return {
      click: vi.fn(),
      setAttribute: vi.fn(),
      style: {},
    };
  }
  if (tag === "canvas") {
    return {
      getContext: () => ({
        drawImage: vi.fn(),
      }),
      toDataURL: () => "mock-data-url",
      style: {},
      width: 800,
      height: 1000,
    };
  }
  if (tag === "div") {
    return {
      style: {},
      appendChild: vi.fn(),
      getBoundingClientRect: () => ({
        width: 800,
        height: 1000,
      }),
      children: [],
    };
  }
  return {};
});

describe("CVDisplayUI Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockLocalStorage.getItem.mockReturnValue("[]");
    Object.defineProperty(global, "window", { value: mockWindow });
  });

  const renderComponent = () => {
    return render(
      <BrowserRouter>
        <Provider store={store}>
          <CVDisplayUI />
        </Provider>
      </BrowserRouter>
    );
  };

  it("should render the CV display with basic elements", () => {
    const { container } = renderComponent();

    // Check for main title
    expect(
      screen.getByText(/Your CV will look like below/i)
    ).toBeInTheDocument();

    // Check for action buttons
    expect(screen.getByText(/Download your CV/i)).toBeInTheDocument();
    expect(screen.getByText(/Save as Draft/i)).toBeInTheDocument();

    // Check if CV template is rendered
    expect(screen.getByTestId("mock-cv-template")).toBeInTheDocument();

    // Take a snapshot
    expect(container).toMatchSnapshot();
  });

  it("should handle download button click and PDF export", async () => {
    renderComponent();

    // Click download button to open dropdown
    const downloadButton = screen.getByText(/Download your CV/i);
    fireEvent.click(downloadButton);

    // Click PDF option in dropdown
    const pdfOption = await screen.findByText(/PDF Document/i);
    fireEvent.click(pdfOption);

    // Check if modal appears
    await waitFor(() => {
      expect(
        screen.getByText(/Preview your CV before download as PDF/i)
      ).toBeInTheDocument();
    });

    // Click export button
    const exportButton = screen.getByText(/OK/i);
    fireEvent.click(exportButton);

    // Verify PDF generation was attempted
    await waitFor(() => {
      expect(message.success).toHaveBeenCalled();
    });
  });

  it("should handle save as draft", async () => {
    renderComponent();

    // Click save as draft button to open dropdown
    const saveButton = screen.getByText(/Save as Draft/i);
    fireEvent.click(saveButton);

    // Click "Save current as draft" option
    const saveOption = await screen.findByText(/Save current as draft/i);
    fireEvent.click(saveOption);

    // Check if localStorage was called and success message shown
    await waitFor(() => {
      expect(mockLocalStorage.setItem).toHaveBeenCalled();
      expect(message.success).toHaveBeenCalledWith(
        "CV saved as draft successfully"
      );
    });
  });

  it("should handle multiple pages when content overflows", async () => {
    const { container } = renderComponent();

    // Wait for initial render and overflow check
    await waitFor(() => {
      const contentElement = container.querySelector(".cv-layout");
      expect(contentElement).toBeInTheDocument();
    });

    // Take a snapshot of paginated view
    expect(container).toMatchSnapshot();
  });

  it("should match snapshot", () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
