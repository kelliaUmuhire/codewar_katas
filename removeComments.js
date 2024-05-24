const removeComments = (text, markers) =>
  text
    .split("\n")
    .map((t) => markers.reduce((o, m) => o.split(m)[0], t).trimEnd())
    .join("\n");
