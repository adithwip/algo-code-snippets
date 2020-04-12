import React from "react";
import { css } from "@emotion/core";

import Flex from "../Flex/component";

type Card = {
  title: string;
  description: string;
};

const titleDefVal: string = "Card Title";
const descriptionDefVal: string = "You should add a descrption here";

const Card: React.FC<Card> = ({
  title = titleDefVal,
  description = descriptionDefVal,
}) => {
  return (
    <div
      css={css`
        border: 1px solid black;
        padding: 8px;
        cursor: pointer;
      `}
    >
      <Flex flexDirection="column">
        <Flex mb={1}>
          <label
            css={css`
              font-family: "Bungee Inline", sans-serif;
              font-size: 1.4rem;
            `}
          >
            {title}
          </label>
        </Flex>
        <p
          css={css`
            font-family: "Montserrat", sans-serif;
            font-size: 1.2rem;
            margin: 0;
          `}
        >
          {description}
        </p>
      </Flex>
    </div>
  );
};

export default Card;
