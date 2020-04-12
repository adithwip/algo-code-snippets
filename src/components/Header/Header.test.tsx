import React from "react";
import { render } from "@testing-library/react";
import Header from "./component";

test("renders learn react link", () => {
  const { container, getByText } = render(
    <Header children={<div>this is header component</div>} />
  );

  const headerElement = getByText(/this is header component/i);
  expect(headerElement).toBeInTheDocument();
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="App"
    >
      <header
        class="App-header"
      >
        <div>
          this is header component
        </div>
      </header>
    </div>
  `);
});
