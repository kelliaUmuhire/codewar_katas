const spinWords = (string) =>
  string
    .split(" ")
    .reduce(
      (words, w) =>
        (words += `${w.length >= 5 ? w.split("").reverse().join("") : w} `),
      ""
    )
    .trimEnd();

//   let words = string.split(" ")
//   for(let i=0;i<words.length;i++){
//     if(words[i].length>=5){
//       words[i] = words[i].split("").reverse().join("")
//     }
//   }
//   return words.join(" ")
