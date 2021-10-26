let donuts = ['jelly donut', 'chocolate donut', 'glazed donut'];

function printDonuts(donut) {
  donut += ' hole';
  donut = donut.toUpperCase();
  console.log(donut);
}

donuts.forEach(printDonuts);

// using and inline function expression

// var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// donuts.forEach(function(donut) {
//   donut += " hole";
//   donut = donut.toUpperCase();
//   console.log(donut);
// });