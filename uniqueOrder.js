const uniqueInOrder = (iterable) =>
  (typeof iterable !== "string" ? iterable : iterable.split("")).reduce(
    (o, v, i, arr) => (v !== arr[i + 1] && o.push(v), o),
    []
  );
