import React from "react";
import { render } from "@testing-library/react";
import Flex from "./component";

test("renders children inside Flex", () => {
  const { getByText } = render(
    <Flex>
      <div>children</div>
    </Flex>
  );

  const childrenElement = getByText(/children/i);
  expect(childrenElement).toBeInTheDocument();
});
