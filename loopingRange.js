function range(start, end, step) {
  let array = [];
  let newElement = start;
  if (start === undefined || end === undefined || step === undefined) {
    return array;
  } else if (start > end || step > (end - start)) {
    return array;
  } else if (step <= 0) {
    return array;
  } else {
    for (let i = start; i <= end; i += step) {
      array.push(newElement);
      newElement += step;
    }
  }
  return array;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(0, 8, 2));
console.log(range(-9, 3, 3));