import { multiplyOfNum } from "./index";

test("Multiplying 1 x 2 equals 2", () => {
  expect(multiplyOfNum(1, 2)).toBe(2);
});
test("Multiplying 10 x 2 equals 20", () => {
  expect(multiplyOfNum(10, 2)).toBe(20);
});
test("Multiplying 10 x (-2) equals -20", () => {
  expect(multiplyOfNum(10, -2)).toBe(-20);
});
