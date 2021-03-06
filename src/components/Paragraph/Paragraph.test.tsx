import React from "react";
import { render } from "@testing-library/react";
import Paragraph from "./component";

test("renders paragraph children", () => {
  const { getByText } = render(<Paragraph>This is paragraph</Paragraph>);

  const childrenElement = getByText(/This is paragraph/i);
  expect(childrenElement).toBeInTheDocument();
});
