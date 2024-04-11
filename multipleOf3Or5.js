// const solution = (number) => {
//   if (number < 0) return 0;
//   let sum = 0;
//   for (let i = 3; i < number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) sum += i;
//   }
//   return sum;
// };

const solution = (number) =>
  number < 0
    ? 0
    : Array.from({ length: number - 1 }, (e, i) => i + 1).reduce(
        (sum, i) => (sum += i % 5 === 0 || i % 3 === 0 ? i : 0),
        0
      );
