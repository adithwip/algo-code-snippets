import React from "react";
import { css } from "@emotion/core";

import "./header.css";

type Props = {
  children: React.ReactNode;
};

const Header: React.FC<Props> = ({ children }) => {
  return (
    <div
      css={css`
        text-align: center;
      `}
    >
      <header
        css={css`
          background-color: #282c34;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: "Bungee Inline";
          font-size: calc(10px + 2vmin);
          color: white;
        `}
      >
        {children}
      </header>
    </div>
  );
};

export default Header;
