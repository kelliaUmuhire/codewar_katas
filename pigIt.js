const pigIt = (str) => str.replace(/\w+/g, (w) => `${w.slice(1)}${w[0]}ay`);
