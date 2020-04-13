import React, { useState } from "react";

import withFooter from "../../components/Footer/component";
import Flex from "../../components/Flex/component";
import Button from "../../components/Button/component";
import Paragraph from "../../components/Paragraph/component";
import Input from "../../components/Input/component";
import TextBox from "../../components/TextBox/component";
import PrismJS from "../../components/PrismJS/components";

import { primeNumSequence } from "../../services/primeNumberSequence/index";

import * as styles from "./prime-number-sequence.styles";

const tsCode: string = `
function isPrime(n: number): boolean {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

function primeNumSequence(n: number): number[] {
  let primes: number[] = [];

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
};
`.trim();

const jsCode: string = `
function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

function primeNumSequence(n) {
  let primes = [];

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
};
`.trim();

const PrimeNumberSequence: React.FC = () => {
  const [a, setA] = useState(0);
  const [result, setResult] = useState([0]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setA(Number(e.target.value));
  };

  const handleClick = () => {
    const primes: number[] = primeNumSequence(a);

    setResult(primes);
  };

  return (
    <Flex flexDirection="column" pl={3} pr={3} mt={5} mb={5}>
      <Flex justifyContent="center">
        <h1 css={styles.headerTitle}>Prime Number Sequence</h1>
      </Flex>

      <Flex mt={3} mb={4} align="center">
        <h3 css={styles.headerTitle}>
          A function that returns prime number sequence from n as maximum
          distance.
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
          Given a number as an argument. the function will find every prime
          number and push it to an array and return it.
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

export default withFooter(PrimeNumberSequence);
