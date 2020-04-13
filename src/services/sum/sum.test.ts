import { sumOfNum } from "./index";

test("Adding 1 + 2 equals 3", () => {
  expect(sumOfNum(1, 2)).toBe(3);
});
test("Adding 5 + 3 equals 8", () => {
  expect(sumOfNum(5, 3)).toBe(8);
});
test("Adding 10 + (-1) equals 9", () => {
  expect(sumOfNum(10, -1)).toBe(9);
});
