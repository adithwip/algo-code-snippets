import React from "react";
import { render } from "@testing-library/react";
import Container from "./component";

test("renders Container with element", () => {
  const { getByText } = render(
    <Container>
      <div>Inside container</div>
    </Container>
  );

  const containerEmelent = getByText(/Inside container/i);
  expect(containerEmelent).toBeInTheDocument();
});
