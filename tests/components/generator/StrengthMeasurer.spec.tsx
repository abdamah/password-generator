import React from "react";
import { render } from "@testing-library/react";
import {
  LevelBars,
  StrengthMeasurer,
} from "../../../app/components/generator/StrengthMeasurer";

describe("LevelBars", () => {
  it("should render 4 bars", () => {
    const { getAllByTestId } = render(<LevelBars level="1" />);

    const bars = getAllByTestId(`level-bar`);

    expect(bars[0]).toBeDefined();
    expect(bars[1]).toBeDefined();
    expect(bars[2]).toBeDefined();
    expect(bars[3]).toBeDefined();
    expect(bars[4]).not.toBeDefined();
  });

  it("should apply correct styles for level 1", () => {
    const { getAllByTestId } = render(<LevelBars level="1" />);

    const bars = getAllByTestId(`level-bar`);

    expect(bars[0]).toHaveClass("bg-red border-red");
    expect(bars[1]).toHaveClass("bg-transparent border-almost-white");
    expect(bars[2]).toHaveClass("bg-transparent border-almost-white");
    expect(bars[3]).toHaveClass("bg-transparent border-almost-white");
  });

  it("should apply correct styles for level 2", () => {
    const { getAllByTestId } = render(<LevelBars level="2" />);

    const bars = getAllByTestId(`level-bar`);

    expect(bars[0]).toHaveClass("bg-orange border-orange");
    expect(bars[1]).toHaveClass("bg-orange border-orange");
    expect(bars[2]).toHaveClass("bg-transparent border-almost-white");
    expect(bars[3]).toHaveClass("bg-transparent border-almost-white");
  });

  it("should apply correct styles for level 3", () => {
    const { getAllByTestId } = render(<LevelBars level="3" />);

    const bars = getAllByTestId(`level-bar`);

    expect(bars[0]).toHaveClass("bg-yellow border-yellow");
    expect(bars[1]).toHaveClass("bg-yellow border-yellow");
    expect(bars[2]).toHaveClass("bg-yellow border-yellow");
    expect(bars[3]).toHaveClass("bg-transparent border-almost-white");
  });

  it("should apply correct styles for level 4", () => {
    const { getAllByTestId } = render(<LevelBars level="4" />);

    const bars = getAllByTestId(`level-bar`);

    expect(bars[0]).toHaveClass("bg-neon-green border-neon-green");
    expect(bars[1]).toHaveClass("bg-neon-green border-neon-green");
    expect(bars[2]).toHaveClass("bg-neon-green border-neon-green");
    expect(bars[3]).toHaveClass("bg-neon-green border-neon-green");
  });
});

describe("StrengthMeasurer", () => {
  it('should display "Too Weak!" for level 1', () => {
    const { getByText } = render(<StrengthMeasurer level="1" />);
    expect(getByText("Too Weak!")).toBeInTheDocument();
  });

  it('should display "Weak" for level 2', () => {
    const { getByText } = render(<StrengthMeasurer level="2" />);
    expect(getByText("Weak")).toBeInTheDocument();
  });

  it('should display "Medium" for level 3', () => {
    const { getByText } = render(<StrengthMeasurer level="3" />);
    expect(getByText("Medium")).toBeInTheDocument();
  });

  it('should display "Strong" for level 4', () => {
    const { getByText } = render(<StrengthMeasurer level="4" />);
    expect(getByText("Strong")).toBeInTheDocument();
  });
});
