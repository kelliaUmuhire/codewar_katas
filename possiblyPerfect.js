const possiblyPerfect = (key, answers) =>
  key
    .reduce(
      (output, item, index) => (
        item !== "_" && output.push(item === answers[index]), output
      ),
      []
    )
    .every((el, index, arr) => el === arr[0]);
