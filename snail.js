const snail = (arr) => {
  let vector = [];
  while (arr.length) {
    vector.push(...arr.shift());
    arr.map((row) => vector.push(row.pop()));
    arr.reverse().map((row) => row.reverse());
  }
  return vector;
};
