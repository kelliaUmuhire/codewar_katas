const isValidIP = (str) => {
  str = str.split(".");
  return str.length != 4
    ? false
    : str.every(
        (s) =>
          !/[a-zA-Z \n]/g.test(s) &&
          (s[0] == 0 ? /^0$/g.test(s) : true) &&
          parseInt(s) >= 0 &&
          parseInt(s) <= 255
      );
};
