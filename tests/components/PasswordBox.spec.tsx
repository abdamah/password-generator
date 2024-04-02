import { fireEvent, render } from "@testing-library/react";
import { PasswordBox } from "../../app/components/PasswordBox";

describe("PasswordBox", () => {
  it("should receive input value as empty if password is empty", () => {
    const { getByPlaceholderText } = render(<PasswordBox password="" />);

    const input = getByPlaceholderText(/P4\$5W0rD!/i);
    const inputValue = (input as HTMLInputElement).value;

    expect(inputValue).toBe("");
  });

  it("should receive input value as the same of the password", () => {
    const { getByPlaceholderText } = render(
      <PasswordBox password="a-secure-password" />
    );

    const input = getByPlaceholderText(/P4\$5W0rD!/i);
    const inputValue = (input as HTMLInputElement).value;

    expect(inputValue).toBe("a-secure-password");
  });

  it("should hide COPIED span if copy button has not been clicked", () => {
    const { getByText } = render(<PasswordBox password="a-secure-password" />);
    const span = getByText("COPIED");
    expect(span).toHaveClass("opacity-0");
  });

  it("should display COPIED span if copy button has been clicked", () => {
    Object.defineProperty(navigator, "clipboard", {
      value: {
        writeText: jest.fn(),
      },
      writable: true,
    });

    const { getByText, getByTestId } = render(
      <PasswordBox password="a-secure-password" />
    );

    const button = getByTestId("password-box-copy-button") as HTMLButtonElement;

    fireEvent.click(button);

    const span = getByText("COPIED");
    expect(span).toHaveClass("opacity-100");
  });

  it("should not copy password if it is empty", () => {
    const writeText = jest.fn();

    Object.defineProperty(navigator, "clipboard", {
      value: {
        writeText: writeText,
      },
      writable: true,
    });

    const { getByText, getByTestId } = render(<PasswordBox password="" />);

    const button = getByTestId("password-box-copy-button") as HTMLButtonElement;

    fireEvent.click(button);

    expect(writeText).not.toHaveBeenCalled();
  });

  it("should copy password if it is filled", () => {
    const writeText = jest.fn();

    Object.defineProperty(navigator, "clipboard", {
      value: {
        writeText: writeText,
      },
      writable: true,
    });

    const { getByTestId } = render(
      <PasswordBox password="a-secure-password" />
    );

    const button = getByTestId("password-box-copy-button") as HTMLButtonElement;

    fireEvent.click(button);

    expect(writeText).toHaveBeenCalledWith("a-secure-password");
  });
});
