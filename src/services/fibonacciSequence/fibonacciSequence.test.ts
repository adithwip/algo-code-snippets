import { findFibonacci } from "./index";

test("Give 4 as n will return [0, 1, 1, 2]", () => {
  expect(findFibonacci(4)).toStrictEqual([0, 1, 1, 2]);
});
test("Give 8 as n will return [0, 1, 1, 2, 3, 5, 8, 13]", () => {
  expect(findFibonacci(8)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});
