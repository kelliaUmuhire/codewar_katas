const toCamelCase = (str) =>
  str.split(/[_-]+/).reduce((o, w) => (o += w[0].toUpperCase() + w.slice(1)));
