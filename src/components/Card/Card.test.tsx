import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import Card from "./component";

test("renders Header with default title", () => {
  const { getByText } = render(
    <Router>
      <Card title="Card Title" description="Card Description" />
    </Router>
  );

  const titleEmelent = getByText(/Card Title/i);
  const descriptionEmelent = getByText(/Card Description/i);
  expect(titleEmelent).toBeInTheDocument();
  expect(descriptionEmelent).toBeInTheDocument();
});
