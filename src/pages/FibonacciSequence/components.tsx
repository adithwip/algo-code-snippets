import React, { useState } from "react";

import withFooter from "../../components/Footer/component";
import Flex from "../../components/Flex/component";
import Button from "../../components/Button/component";
import Paragraph from "../../components/Paragraph/component";
import Input from "../../components/Input/component";
import TextBox from "../../components/TextBox/component";
import PrismJS from "../../components/PrismJS/components";

import { findFibonacci } from "../../services/fibonacciSequence/index";

import * as styles from "./fibonacci-sequence.styles";

const tsCode: string = `
function findFibonacci(n: number): number[] {
  let numbers: number[] = [];

  for (let i = 0; i < n; i++) {
    if (i <= 1) {
      numbers.push(i);
    } else {
      numbers.push(numbers[i - 1] + numbers[i - 2]);
    }
  }

  return numbers;
};
`.trim();

const jsCode: string = `
function findFibonacci(n) {
  let numbers = [];

  for (let i = 0; i < n; i++) {
    if (i <= 1) {
      numbers.push(i);
    } else {
      numbers.push(numbers[i - 1] + numbers[i - 2]);
    }
  }

  return numbers;
};
`.trim();

const FibonacciSequence: React.FC = () => {
  const [a, setA] = useState(0);
  const [result, setResult] = useState([0]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setA(Number(e.target.value));
  };

  const handleClick = () => {
    const fibonaccis: number[] = findFibonacci(a);

    setResult(fibonaccis);
  };

  return (
    <Flex flexDirection="column" pl={3} pr={3} mt={5} mb={5}>
      <Flex justifyContent="center">
        <h1 css={styles.headerTitle}>Fibonacci Sequence</h1>
      </Flex>

      <Flex mt={3} mb={4} align="center">
        <h3 css={styles.headerTitle}>
          A function that returns fibonacci sequence from n as maximum distance.
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
          Given a number as an argument. the function will generate fibonacci
          sequence and push it to an array and return it.
        </Paragraph>
        <Paragraph size="1.2rem">
          Expected an argument to be given is number. Because we use TypeScript,
          if you try to give the argument with a value with a data type other
          than a number, it will error.
        </Paragraph>
      </Flex>

      <Flex mt={5} flex={1}>
        <Flex flexDirection="column" flex={1}>
          <Input mb={3} placeholder="Number" onChange={handleChange} />
          <Button label="Run Code" onClick={handleClick} />
        </Flex>
      </Flex>

      <Flex mt={3}>
        <TextBox>{`[${result}]`}</TextBox>
      </Flex>
    </Flex>
  );
};

export default withFooter(FibonacciSequence);
