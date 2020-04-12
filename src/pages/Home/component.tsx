import React from "react";

import Header from "../../components/Header/component";
import Flex from "../../components/Flex/component";
import Paragraph from "../../components/Paragraph/component";
import Card from "../../components/Card/component";

type pagesDataType = {
  slug: string;
  title: string;
  description: string;
};
const pagesData: pagesDataType[] = [
  {
    slug: "sum-of-num",
    title: "Sum of Num",
    description: "A function that returns the sum of 2 numbers as an argument.",
  },
  {
    slug: "multiply-of-num",
    title: "Multiply of Num",
    description:
      "A function that returns the result of multiplying 2 numbers as an argument.",
  },
  {
    slug: "prime-number-sequence",
    title: "Prime Num Sequence",
    description: "A function that returns prime numbers based on N.",
  },
  {
    slug: "fibonacci-number-sequence",
    title: "Fibonacci Num Sequence",
    description: "A function that returns fibonacci numbers based on N.",
  },
];

const Home: React.FC = () => {
  return (
    <Flex flexDirection="column">
      <Header />
      <Flex pl={3} pr={3} mt={4} mb={4}>
        <Paragraph textAlign="center">
          Collection of code bits of algorithms wrote in Javascript/TypeScript.
          With a simple example and code that can be run. The list will be
          growing across a period. And an immeasurable chance this will be a
          maintained open-source project.
        </Paragraph>
      </Flex>
      <Flex flexDirection="column" pl={3} pr={3}>
        {pagesData.map((data) => {
          return (
            <Flex mb={3}>
              <Card
                to={data.slug}
                title={data.title}
                description={data.description}
              />
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Home;
