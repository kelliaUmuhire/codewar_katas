const narcissistic = (value) =>
  eval(
    `${value}`
      .split("")
      .reduce((o, c, i, arr) => (o += `+${c}**${arr.length}`), "0")
  ) === value;

// const narcissistic = (value) => {
//   let strValue = String(value);
//   let result = 0;
//   for(let c of strValue){
//     result += Number(c)**strValue.length;
//   }
//   return result === value;
// }
