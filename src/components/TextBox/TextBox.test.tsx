import React from "react";
import { render } from "@testing-library/react";
import TextBox from "./component";

test("renders TextBox children", () => {
  const { getByText } = render(<TextBox>120</TextBox>);

  const childrenElement = getByText(/120/i);
  expect(childrenElement).toBeInTheDocument();
});
