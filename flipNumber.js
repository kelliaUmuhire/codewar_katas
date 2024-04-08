const flipNumber = (n) => {
  n = n.split("").reverse();
  let output = n.join("");
  for (let index = 0; index < n.length; index++) {
    output =
      output.slice(0, index) +
      output[index] +
      output
        .slice(index + 1, n.length)
        .split("")
        .reverse()
        .join("");
  }
  return output;
};
