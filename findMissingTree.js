const findTheMissingTree = (trees) =>
  Number(
    Object.entries(
      trees.reduce(
        (output, tree) => (
          output[tree] ? output[tree]++ : (output[tree] = 1), output
        ),
        {}
      )
    ).sort((a, b) => a[1] - b[1])[0][0]
  );
