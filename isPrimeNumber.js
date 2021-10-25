function isPrimeNumber(integer) {
  for (let divisor = 2; divisor < integer; divisor++) {
    if (integer % divisor === 0) {
      console.log(`${integer} is dvisible by ${divisor}`);
      return false;
    }
  }
  return true;
}

console.log(isPrimeNumber(21));