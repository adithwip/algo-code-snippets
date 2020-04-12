import React from "react";
import { css } from "@emotion/core";
import { space } from "styled-system";
import styled from "@emotion/styled";

import { TextBoxProps } from "./types";

const Box = styled.div`
  ${space}
`;

const TextBox: React.FC<TextBoxProps> = ({ children, ...rest }) => {
  return (
    <Box
      css={css`
        padding: 2.4rem;
        font-size: 2.4rem;
        text-align: center;
        border-radius: 0.4rem;
        border: 0.1rem solid black;
        width: 100%;
      `}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default TextBox;
