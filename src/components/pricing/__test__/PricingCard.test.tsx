import { render, screen } from "@testing-library/react";
import PricingCard from "../PricingCard";
import { Tier } from "../types";

const tier: Tier = {
  name: "Pro",
  pricing: 299,
  description: "Best for professionals",
  features: ["Feature 1", "Feature 2", "Feature 3"],
};

describe("PricingCard Component", () => {
  it("should render the tier name", () => {
    render(<PricingCard tier={tier} />);
    expect(screen.getByText("Pro")).toBeInTheDocument();
  });

  it("should render the pricing", () => {
    render(<PricingCard tier={tier} />);
    expect(screen.getByText("$299")).toBeInTheDocument();
    expect(screen.getByText("/ year")).toBeInTheDocument();
  });

  it("should render the description", () => {
    render(<PricingCard tier={tier} />);
    expect(screen.getByText("Best for professionals")).toBeInTheDocument();
  });

  it("should render all features", () => {
    render(<PricingCard tier={tier} />);
    tier.features.forEach((feature) => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  it('should render the "Choose" button with tier name', () => {
    render(<PricingCard tier={tier} />);
    expect(screen.getByText("Choose Pro")).toBeInTheDocument();
  });
});
