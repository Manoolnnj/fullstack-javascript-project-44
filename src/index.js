export const randomInteger = (min, max) => {
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
};

export const gcdFinder = (a, b) => b === 0 ? Math.abs(a) : gcdFinder(b, a % b);

export const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};