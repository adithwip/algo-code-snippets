import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { space } from "styled-system";

import { FlexProps } from "./types";

const Box = styled.div`
  ${space}
`;

const Flex: React.FC<FlexProps> = ({
  children,

  flexDirection = "row",
  flexWrap = "nowrap",
  justifyContent = "flex-start",
  alignItems = "stretch",
  alignContent = "stretch",

  flex,
  padding,
  margin,

  align = "left",
  height = "auto",
  minHeight = "initial",

  ...rest
}) => {
  const containerStyles = css`
    display: flex;

    flex-direction: ${flexDirection};
    flex-wrap: ${flexWrap};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    align-content: ${alignContent};

    flex: ${flex};

    margin: ${margin};
    padding: ${padding};
    text-align: ${align};
    height: ${height};
    min-height: ${minHeight};
  `;

  return (
    <Box className="flex-component" css={containerStyles} {...rest}>
      {children}
    </Box>
  );
};

export default Flex;
