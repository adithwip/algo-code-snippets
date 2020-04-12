import React from "react";
import { css } from "@emotion/core";

type Props = {
  label: string;
  onClick?: () => void;
};

const Button: React.FC<Props> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      css={css`
        background-color: #007acc;
        border-radius: 0.4rem;
        border: 0.1rem solid black;
        cursor: pointer;

        max-height: 4rem;
        padding: 1.2rem 2.4rem;

        font-family: "Bungee Inline";
        font-size: 1.4rem;
        color: white;
      `}
    >
      {label}
    </button>
  );
};

export default Button;
