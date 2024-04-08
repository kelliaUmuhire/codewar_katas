const histogram = (results) => {
  return (
    results.reduce(
      (output, result, index) =>
        `${index + 1}|${"#".repeat(result)}${
          result > 0 ? " " + result : ""
        }\n${output}`,
      ""
    ) + ""
  );
};
