import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

/**
 * if we follow TDD pattern of development - steps are :-
 * Greet should render the text hello and if a name is passed into the component, is should render hello followed by the name
 */

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  test("renders correctly with a name", () => {
    render(<Greet name="Bruce" />);
    const textElement = screen.getByText(/hello Bruce/i);
    expect(textElement).toBeInTheDocument();
  });
});
