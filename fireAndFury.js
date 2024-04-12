var fireAndFury = function (tweet) {
  let matches = tweet.match(/(FIRE|FURY)/g);
  if (!matches || /[^EFIRUY]/g.test(tweet)) return "Fake tweet.";
  let output = "";
  let count = 0;
  for (let i = 0; i < matches.length; i++) {
    if (matches[i] === matches[i + 1]) count++;
    else {
      output +=
        matches[i] === "FIRE"
          ? `You${" and you".repeat(count)} are fired! `
          : `I am${" really".repeat(count)} furious. `;
      count = 0;
    }
  }
  return output.trim();
};
