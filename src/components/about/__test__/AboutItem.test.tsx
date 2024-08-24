import { render, screen } from "@testing-library/react";
import AboutItem from "../AboutItem";
import { Service } from "../types";

// Mocking the Service object
const service: Service = {
  title: "Test Service",
  description: "This is a description of the test service.",
  icon: "test-icon.svg",
};

describe("AboutItem Component", () => {
  it("should render the service title and description", () => {
    render(<AboutItem service={service} />);
    expect(screen.getByText("Test Service")).toBeInTheDocument();
    expect(
      screen.getByText("This is a description of the test service."),
    ).toBeInTheDocument();
  });

  it("should render the service icon with correct alt text", () => {
    render(<AboutItem service={service} />);
    const icon = screen.getByAltText("Test Service");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("src", "test-icon.svg");
  });

  it("should apply the correct layout classes when pushLeft is false", () => {
    render(<AboutItem service={service} pushLeft={false} />);
    const container = screen.getByTestId("about-item");
    expect(container).toHaveClass("md:flex-row");
    expect(container).not.toHaveClass("md:flex-row-reverse");
  });

  it("should apply the correct layout classes when pushLeft is true", () => {
    render(<AboutItem service={service} pushLeft={true} />);
    const container = screen.getByTestId("about-item");
    expect(container).toHaveClass("md:flex-row-reverse");
    expect(container).not.toHaveClass("md:flex-row");
  });

  it("should apply the correct text alignment classes when pushLeft is false", () => {
    render(<AboutItem service={service} pushLeft={false} />);
    const textContainer = screen.getByText("Test Service").closest("div");
    expect(textContainer).toHaveClass("md:text-left");
    expect(textContainer).not.toHaveClass("md:text-right");
  });

  it("should apply the correct text alignment classes when pushLeft is true", () => {
    render(<AboutItem service={service} pushLeft={true} />);
    const textContainer = screen.getByText("Test Service").closest("div");
    expect(textContainer).toHaveClass("md:text-right");
    expect(textContainer).not.toHaveClass("md:text-left");
  });
});
