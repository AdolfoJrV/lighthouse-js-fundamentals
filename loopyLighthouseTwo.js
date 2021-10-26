function loopyLighthouse(range, multipliers, words) {
  let start = range[0];
  let end = range[1];
  let divisor_1 = multipliers[0];
  let divisor_2 = multipliers[1];
  let word_1 = words[0];
  let word_2 = words[1];

  for (let i = start; i <= end; i++) {
    if (i % divisor_1 === 0 && i % divisor_2 === 0) {
      console.log(word_1 + word_2);
    } else if (i % divisor_1 === 0) {
      console.log(word_1);
    } else if (i % divisor_2 === 0) {
      console.log(word_2);
    } else {
      console.log(i);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);