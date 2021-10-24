// Implementing a switch statement (not ideal).

// let countDown = 60;

// while (countDown >= 0) {
//   switch (true) {
//     case (countDown === 50):
//       console.log(`Orbiter transfers from ground to internal power`);
//       break;
//     case (countDown === 31):
//       console.log(`Ground launch sequencer is go for auto sequence start`);
//       break;
//     case (countDown === 16):
//       console.log(`Activate launch pad sound suppression system`);
//       break;
//     case (countDown === 10):
//       console.log(`Activate main engine hydrogen burnoff system`);
//       break;
//     case (countDown === 6):
//       console.log(`Main engine start`);
//       break;
//     case (countDown === 0):
//       console.log(`Solid rocket booster ignition and liftoff!`);
//       break;
//     default:
//       console.log(`T-${countDown} seconds`);
//       break;
//   }
//   countDown -= 1;
// }

// Implementing an if-else statement.

let countDown = 60;

while (countDown >= 0) {  
  if (countDown === 50) {
    console.log(`Orbiter transfers from ground to internal power`);
  } else if (countDown === 31) {
    console.log(`Ground launch sequencer is go for auto sequence start`);
  } else if (countDown === 16) {
    console.log(`Activate launch pad sound suppression system`);
  } else if (countDown === 10) {
    console.log(`Activate main engine hydrogen burnoff system`);
  } else if (countDown === 6) {
    console.log(`Main engine start`);
  } else if (countDown === 0) {
    console.log(`Solid rocket booster ignition and liftoff!`);
  } else {
    console.log(`T-${countDown} seconds`)
  }

  countDown -= 1;
}