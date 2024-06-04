const topThreeWords = (text) =>
  Object.entries(
    text
      .toLowerCase()
      .split(/[^\w']+/)
      .filter((w) => w && w !== "'")
      .reduce((o, w) => (o[w] ? o[w]++ : (o[w] = 1), o), {})
  )
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map((x) => x[0]);
