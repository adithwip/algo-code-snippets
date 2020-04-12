import React from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/core";

import Flex from "../Flex/component";

type Card = {
  title: string;
  description: string;
  to?: string;
};

const titleDefVal: string = "Card Title";
const descriptionDefVal: string = "You should add a descrption here";

const Card: React.FC<Card> = ({
  title = titleDefVal,
  description = descriptionDefVal,
  to = "/",
}) => {
  const element = (
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
  );

  const withLink = <Link to={to}>{element}</Link>;

  return (
    <div
      css={css`
        width: 100%;
        min-height: 7rem;
        border-radius: 0.4rem;
        border: 0.1rem solid black;
        padding: 0.8rem;
        cursor: pointer;
      `}
    >
      {to ? withLink : element}
    </div>
  );
};

export default Card;
