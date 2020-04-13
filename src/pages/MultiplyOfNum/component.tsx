import React, { useState } from "react";

import withFooter from "../../components/Footer/component";
import Flex from "../../components/Flex/component";
import Button from "../../components/Button/component";
import Paragraph from "../../components/Paragraph/component";
import Input from "../../components/Input/component";
import TextBox from "../../components/TextBox/component";
import PrismJS from "../../components/PrismJS/components";

import { multiplyOfNum } from "../../services/multiply/index";

import * as styles from "./multiply-of-num.styles";

const tsCode: string = `
function multiplyOfNum = (
  a: number,
  b: number
): number {
  return a * b;
};
`.trim();

const jsCode: string = `
function multiplyOfNum = (a, b) {
  return a * b;
};
`.trim();

const MultiplyOfNum: React.FC = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    val: string
  ) => {
    if (val === "a") {
      setA(Number(e.target.value));
    }

    if (val === "b") {
      setB(Number(e.target.value));
    }
  };

  const handleClick = () => {
    const multiply: number = multiplyOfNum(a, b);

    setResult(multiply);
  };

  return (
    <Flex flexDirection="column" pl={3} pr={3} mt={5} mb={5}>
      <Flex justifyContent="center">
        <h1 css={styles.headerTitle}>Multiplication of Num</h1>
      </Flex>

      <Flex mt={3} mb={4} align="center">
        <h3 css={styles.headerTitle}>
          A function that returns the result of multiplication from 2 numbers as
          an argument.
        </h3>
      </Flex>

      <Flex flexDirection="column">
        <label>TypeScript</label>
        <PrismJS code={tsCode} language="ts" plugins={["show-language"]} />
      </Flex>

      <Flex flexDirection="column">
        <label>JavaScript</label>
        <PrismJS code={jsCode} language="js" plugins={["show-language"]} />
      </Flex>

      <Flex mt={3} flexDirection="column">
        <Paragraph size="1.2rem" mb={3}>
          Given two numbers as arguments, the function will multiply the two
          numbers and return the new number of that multiplication.
        </Paragraph>
        <Paragraph size="1.2rem">
          Expected arguments to be given are numbers. Because we use TypeScript,
          if you try to give one of the arguments with a value with a data type
          other than a number, it will error.
        </Paragraph>
      </Flex>

      <Flex mt={5} flex={1}>
        <Flex flexDirection="column">
          <Input
            mb={3}
            placeholder="Number"
            onChange={(e) => handleChange(e, "a")}
          />
          <Input placeholder="Number" onChange={(e) => handleChange(e, "b")} />
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          align="center"
          flex={1}
        >
          <Button label="Run Code" onClick={handleClick} />
        </Flex>
      </Flex>

      <Flex mt={3}>
        <TextBox>{result}</TextBox>
      </Flex>
    </Flex>
  );
};

export default withFooter(MultiplyOfNum);
