import { primeNumSequence } from "./index";

test("Give 3 as n will return [2, 3, 5, 7]", () => {
  expect(primeNumSequence(4)).toStrictEqual([2, 3, 5, 7]);
});
test("Give 5 as n will return [2, 3, 5, 7, 11, 13, 17]", () => {
  expect(primeNumSequence(7)).toStrictEqual([2, 3, 5, 7, 11, 13, 17]);
});
test("Give 17 as n will return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]", () => {
  expect(primeNumSequence(10)).toStrictEqual([
    2,
    3,
    5,
    7,
    11,
    13,
    17,
    19,
    23,
    29,
  ]);
});
