const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

const finalPosition = function (moves) {
  let xCoordinate = 0;
  let yCoordinate = 0;
  let finalCoordinates = [];

  for (let move of moves) {
    switch (move) {
      case 'north':
        yCoordinate += 1;
        break;
      case 'east':
        xCoordinate += 1;
        break;
      case 'south':
        yCoordinate -= 1;
        break;
      case 'west':
        xCoordinate -= 1;
        break;
    }
  }
  return finalCoordinates = [xCoordinate, yCoordinate];
}

// const finalPosition = function (moves) {
//   let xCoordinate = 0;
//   let yCoordinate = 0;
//   let finalCoordinates = [0, 0];

//   for (let move of moves) {
//     if (move === 'north') {
//       yCoordinate += 1;
//     } else if (move === 'east') {
//       xCoordinate += 1;
//     } else if (move === 'south') {
//       yCoordinate -= 1;
//     } else if (move === 'west') {
//       xCoordinate -= 1;
//     }
//   }
//   finalCoordinates[0] = xCoordinate;
//   finalCoordinates[1] = yCoordinate;
//   return finalCoordinates;
// }

console.log(finalPosition(moves));
