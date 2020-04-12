import React from "react";
import { css } from "@emotion/core";
import { space } from "styled-system";
import styled from "@emotion/styled";

import { InputProps } from "./types";

const Box = styled.input`
  ${space}
`;

const Input: React.FC<InputProps> = ({
  type = "number",
  placeholder = "placeholder here",
  onChange,
  ...rest
}) => {
  return (
    <Box
      css={css`
        padding: 0.8rem;

        border-radius: 0.4rem;
        border: 0.1rem solid black;

        min-width: 12rem;
        text-align: center;
        font-size: 1.2rem;
      `}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      {...rest}
    />
  );
};

export default Input;
