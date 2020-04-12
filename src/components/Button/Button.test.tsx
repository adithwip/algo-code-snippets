import React from "react";
import { render } from "@testing-library/react";
import Button from "./component";

test("renders Header with default title", () => {
  const { getByText } = render(<Button label="Button Test" />);

  const labelElement = getByText(/Button Test/i);
  expect(labelElement).toBeInTheDocument();
});
