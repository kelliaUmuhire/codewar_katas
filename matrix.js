const matrix = (array) =>
  [...array].map((item, index) =>
    item[index] >= 0
      ? Object.assign([], item, { [index]: 1 })
      : Object.assign([], item, { [index]: 0 })
  );
