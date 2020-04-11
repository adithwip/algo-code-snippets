import React from "react";
import { render } from "@testing-library/react";
import Header from "./index";

test("renders learn react link", () => {
  const { getByText } = render(
    <Header children={<div>this is header component</div>} />
  );
  const linkElement = getByText(/this is header component/i);
  expect(linkElement).toBeInTheDocument();
});
