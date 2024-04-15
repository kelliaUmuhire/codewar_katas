// function createPhoneNumber(numbers) {
//   numbers = numbers.join("");
//   return (
//     "(" +
//     numbers.slice(0, 3) +
//     ")" +
//     ` ${numbers.slice(3, 6)}-${numbers.slice(-4)}`
//   );
// }

function createPhoneNumber(numbers) {
  let format = "(xxx) xxx-xxxx";
  for (let i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }
  return format;
}
