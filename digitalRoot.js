// const digitalRoot = (n) =>
//   n < 10 ? n : digitalRoot(`${n}`.split("").reduce((sum, d) => (sum += Number(d)), 0));

const digitalRoot = (n) => ((n - 1) % 9) + 1;
