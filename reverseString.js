function reverseString(notReverse) {
  let reverse = '';
  for (let i = notReverse.length - 1; i >= 0; i--) {
    reverse += notReverse[i];
  }
  return reverse;
}

let reverseName = reverseString('Jon');
console.log(reverseName);

console.log(`Hello World! ${reverseString('Hello World!')}`);