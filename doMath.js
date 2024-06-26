const doMath = (string) => {
  let operations = "+-*/",
    opIndex = 0;
  let result = string
    .split(" ")
    .map((s) => {
      let str = s.split(/(?=[a-z])/g);
      return [
        str.slice(0, str.length - 1) + str[str.length - 1].slice(1),
        str[str.length - 1][0],
      ];
    })
    .sort((a, b) => a[1].localeCompare(b[1]));
  let res1 = parseInt(result[0][0]);
  for (let i = 1; i < result.length; i++) {
    res1 = eval(
      `${res1}${operations[opIndex % operations.length]}${result[i][0]}`
    );
    opIndex++;
  }
  return Number(res1.toFixed());
};
