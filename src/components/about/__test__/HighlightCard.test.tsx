import { render, screen } from "@testing-library/react";
import HighlightCard from "../HighlightCard";
import { Highlight } from "../types";

// Mocking the Highlight object
const service: Highlight = {
  title: "Test Highlight",
  description: "This is a description of the test highlight.",
  icon: "test-icon.svg",
};

describe("HighlightCard Component", () => {
  it("should render the service title", () => {
    render(<HighlightCard service={service} />);
    expect(screen.getByText("Test Highlight")).toBeInTheDocument();
  });

  it("should render the service description", () => {
    render(<HighlightCard service={service} />);
    expect(
      screen.getByText("This is a description of the test highlight."),
    ).toBeInTheDocument();
  });

  it("should render the service icon with correct alt text and src", () => {
    render(<HighlightCard service={service} />);
    const icon = screen.getByAltText("Test Highlight");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("src", "test-icon.svg");
  });

  it("should have the correct class names applied to the card container", () => {
    render(<HighlightCard service={service} />);
    const card = screen.getByTestId("highlight-card");
    expect(card).toHaveClass(
      "w-full p-8 rounded-lg bg-white shadow-xl shadow-indigo-50",
    );
  });

  it("should apply correct text alignment based on screen size", () => {
    render(<HighlightCard service={service} />);
    const container = screen.getByText("Test Highlight").closest("div");
    expect(container).toHaveClass("text-center md:text-left");
  });

  it("should apply the correct styling to the icon", () => {
    render(<HighlightCard service={service} />);
    const icon = screen.getByAltText("Test Highlight");
    expect(icon).toHaveClass("h-[90px] w-fit mx-auto md:mx-0");
  });
});
