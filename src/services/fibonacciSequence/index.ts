export const findFibonacci = (n: number): number[] => {
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
