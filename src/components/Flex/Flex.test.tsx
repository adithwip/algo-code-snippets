import React from "react";
import { render } from "@testing-library/react";
import Flex from "./component";

test("renders children inside Flex", () => {
  const { getByText } = render(
    <Flex>
      <div>children</div>
    </Flex>
  );

  const element = getByText(/children/i);
  expect(element).toBeInTheDocument();
});
