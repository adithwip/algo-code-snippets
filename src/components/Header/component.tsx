import React from "react";
import { css } from "@emotion/core";

import "./header.css";

type Props = {
  title?: string;
};
const titleDefVal: string = "Javascript Algos 30 Seconds of Code";

const Header: React.FC<Props> = ({ title = titleDefVal }) => {
  return (
    <header
      css={css`
        background-color: #007acc;
        padding: 16px;
        text-align: center;
      `}
    >
      <span
        css={css`
          font-family: "Bungee Inline", sans-serif;
          color: white;
          font-size: 2.4rem;
        `}
      >
        {title}
      </span>
    </header>
  );
};

export default Header;
