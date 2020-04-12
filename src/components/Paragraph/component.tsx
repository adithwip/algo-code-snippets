import React from "react";
import { css } from "@emotion/core";

type Props = {
  children: React.ReactNode;
  textAlign?: "left" | "right" | "center" | "justify" | "initial" | "inherit";
};

const Paragraph: React.FC<Props> = ({ children, textAlign }) => {
  return (
    <p
      css={css`
        text-align: ${textAlign};
        font-family: "Montserrat", sans-serif;
        font-size: 1.4rem;
        margin: 0;
      `}
    >
      {children}
    </p>
  );
};

export default Paragraph;
