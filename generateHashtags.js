function generateHashtag(str) {
  str = str.trim().replace(/ +/g, " ");
  if (str === "") return false;
  let output =
    "#" +
    str
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.substr(1, w.length))
      .join("");
  return output.length > 140 ? false : output;
}
