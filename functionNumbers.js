const zero = (n) => (n ? n(0) : 0);
const one = (n) => (n ? n(1) : 1);
const two = (n) => (n ? n(2) : 2);
const three = (n) => (n ? n(3) : 3);
const four = (n) => (n ? n(4) : 4);
const five = (n) => (n ? n(5) : 5);
const six = (n) => (n ? n(6) : 6);
const seven = (n) => (n ? n(7) : 7);
const eight = (n) => (n ? n(8) : 8);
const nine = (n) => (n ? n(9) : 9);

const plus = (n1) => (n2) => n1 + n2;
const minus = (n1) => (n2) => n2 - n1;
const dividedBy = (n1) => (n2) => Math.floor(n2 / n1);
const times = (n1) => (n2) => n1 * n2;
