import React from "react";
import { css } from "@emotion/core";
import { Link } from "react-router-dom";

import Flex from "../Flex/component";

const withFooter = (WrappedComponent: React.ComponentType) => {
  return class extends React.Component {
    render() {
      return (
        <>
          <WrappedComponent />
          <Flex justifyContent="center" alignItems="center" mb={4}>
            <Link to="/">
              <span
                css={css`
                  font-family: "Bungee Inline", sans-serif;
                  font-size: 1.4rem;
                  cursor: pointer;
                `}
              >
                Return to home
              </span>
            </Link>
          </Flex>
        </>
      );
    }
  };
};

export default withFooter;
