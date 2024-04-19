function firstNonRepeatingLetter(s) {
  let s2 = s.toLowerCase();
  for (let i = 0; i < s2.length; i++) {
    if (s2.split(s2[i]).length === 2) {
      return s[i];
    }
  }
  return "";
}
