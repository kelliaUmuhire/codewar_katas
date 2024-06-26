const findEvenIndex = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (
      arr.slice(0, i).reduce((o, n) => (o += n), 0) ==
      arr.slice(i + 1, arr.length).reduce((o, n) => (o += n), 0)
    ) {
      return i;
    }
  }
  return -1;
};
