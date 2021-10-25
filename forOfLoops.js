let amounts = [25.00, 36.50, 12.30, 52.00];
let total = 0;

for (let amount of amounts) {
  total += amount;
}

console.log(total.toFixed(2));
