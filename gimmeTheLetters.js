function gimmeTheLetters(sp) {
  let output = "";
  for (let i = sp[0].charCodeAt(); i <= sp[2].charCodeAt(); i++) {
    output += String.fromCharCode(i);
  }
  return output;
}

// function gimmeTheLetters(sp) {
//   const letters = "abcdefghijklmnopqrstuvwxyz";
//   let range = letters.slice(
//     letters.indexOf(sp[0].toLowerCase()),
//     letters.indexOf(sp[2].toLowerCase()) + 1
//   );
//   return sp[0] === sp[0].toLowerCase() ? range : range.toUpperCase();
// }
