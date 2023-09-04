import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { CounterTwo } from "./CounterTwo";

describe("Counter two", () => {
  test("renders correctly", () => {
    render(<CounterTwo count={0} />);
    const textElement = screen.getByText("Counter Two");
    expect(textElement).toBeInTheDocument();
  });

  //a test can be added to check the correct rendering of the count
  test("renders a count of 0", () => {
    render(<CounterTwo count={0} />);
    //had to use testId as although p tag has a "paragraph" role by default, the role is not valid, so used test-id instead
    const countElement = screen.getByTestId("count");
    expect(countElement).toHaveTextContent("0");
  });

  test("handlers are called", async () => {
    user.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />,
    );
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const decrementButton = screen.getByRole("button", { name: "Decrement" });
    await user.click(incrementButton);
    await user.click(decrementButton);
    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
