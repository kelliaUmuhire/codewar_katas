// const isPowerOfTwo = (n) => {
//   for (let i = n; i > 1; i = i / 2) {
//     if (i % 2 !== 0) return false;
//   }
//   return n === 0 ? false : true;
// };

const isPowerOfTwo = (n) => Number.isInteger(Math.log2(n));
