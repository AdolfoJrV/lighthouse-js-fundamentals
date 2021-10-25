// !!!NOTE - This will not work.
//   Mutable is a type of variable that can be changed. In JavaScript,
//   only objects and arrays are mutable, not primitive values.
//   String and numbers are not mutable. They are primitive values.

function reverseString(string) {
  let reversed = string;
  let i = string.length - 1;
  for (let letter of string) {
    reversed[i] = letter;
    console.log(reversed[i]);
    console.log(reversed);
    i--;
  }
  return reversed;
}

console.log(reverseString('Julian'));