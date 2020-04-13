import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import Flex from "../Flex/component";

const StyledLink = styled(Link)`
  color: white !important;
`;

const withFooter = (WrappedComponent: React.ComponentType) => {
  return class extends React.Component {
    render() {
      return (
        <>
          <WrappedComponent />
          <Flex justifyContent="center" alignItems="center">
            <span
              css={css`
                font-family: "Bungee Inline", sans-serif;
                font-size: 1.4rem;

                background-color: black;
                padding: 1.6rem 3.2rem;
                width: 100%;
                text-align: center;

                cursor: pointer;
              `}
            >
              <StyledLink to="/">🏠 Return to home</StyledLink>
            </span>
          </Flex>
        </>
      );
    }
  };
};

export default withFooter;
