import React from "react";
import { css } from "@emotion/core";
import { space } from "styled-system";
import styled from "@emotion/styled";

import { mq } from "../../services/breakpoints";

const Box = styled.div`
  ${space}
`;

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  return (
    <Box
      css={css`
        margin: 0 auto;
        ${mq({
          maxWidth: ["42rem", "42rem", "64rem"],
        })}
      `}
    >
      {children}
    </Box>
  );
};

export default Container;
