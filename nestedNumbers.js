for (let i = 0; i < numbers.length ; i++){
  for (let j = 0; j < numbers[i].length; j++){
      if (numbers[i][j] % 2 === 0){
          numbers[i][j] = 'even';
      } else {
          numbers[i][j] = 'odd';
      }
  }
}

console.log(numbers);
