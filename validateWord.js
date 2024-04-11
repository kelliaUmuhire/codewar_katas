const validateWord = (s) =>
  Object.values(
    [...s.toLowerCase()].reduce(
      (occurences, item) => (
        occurences[item] ? occurences[item]++ : (occurences[item] = 1),
        occurences
      ),
      {}
    )
  ).every((item, index, array) => item === array[0]);
