import React from "react";
import { css } from "@emotion/core";
import { space } from "styled-system";
import styled from "@emotion/styled";

import { ParagraphProps } from "./types";

const Box = styled.p`
  ${space}
`;

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  textAlign,
  size = "1.4rem",
  ...rest
}) => {
  return (
    <Box
      css={css`
        text-align: ${textAlign};
        font-family: "Montserrat", sans-serif;
        font-size: ${size};
      `}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Paragraph;
