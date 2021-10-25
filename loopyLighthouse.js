for (let num = 100; num <= 200; num++) {
  num % 3 === 0 ? (num % 4 === 0 ? console.log('LoopyLighthouse') : console.log('Loopy')) : (num % 4 === 0 ? console.log('Lighthouse') : console.log(num));
}