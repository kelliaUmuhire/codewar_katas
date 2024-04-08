const pyramid = (n) => {
  let output = "";
  for (let i = 0; i < n; i++) {
    output += " ".repeat(n - i - 1);
    output += "/";
    output += i !== n - 1 ? " ".repeat(i * 2) : "_".repeat(i * 2);
    output += "\\\n";
  }
  return output;
};
