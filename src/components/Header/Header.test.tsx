import React from "react";
import { render } from "@testing-library/react";
import Header from "./component";

test("renders Header with default title", () => {
  const { getByText } = render(<Header />);

  const headerDefaultTextElement = getByText(
    /Javascript Algos 30 Seconds of Code/i
  );
  expect(headerDefaultTextElement).toBeInTheDocument();
});
