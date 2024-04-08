const collinearity = (x1, y1, x2, y2) => {
  if (
    (x1 === 0 && y1 === 0) ||
    (x2 === 0 && y2 === 0) ||
    (y1 === 0 && y2 === 0) ||
    (x1 === 0 && x2 === 0)
  ) {
    return true;
  }
  return x1 / x2 === y1 / y2;
};
