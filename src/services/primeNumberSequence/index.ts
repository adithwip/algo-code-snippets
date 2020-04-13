const isPrime = (n: number): boolean => {
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

export const primeNumSequence = (n: number): number[] => {
  const primes: number[] = [];
  let count: number = 2;

  while (primes.length < n) {
    if (isPrime(count)) {
      primes.push(count);
    }
    count++;
  }

  return primes;
};
