const score = (dice) =>
  Object.entries(
    dice.reduce((o, n) => (!o[n] ? (o[n] = 1) : o[n]++, o), {})
  ).reduce(
    (o, n) =>
      (o +=
        5 % n[0] == 0
          ? (n[1] % 3) * (n[0] == 1 ? 100 : 50) +
            (n[1] >= 3 ? (n[0] == 1 ? 1000 : 500) : 0)
          : n[1] >= 3
          ? 100 * n[0]
          : 0),
    0
  );
