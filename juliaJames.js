// this is a variation of the FizzBuzz program interview

let x = 1;
let juliaJames = "";

while (x <= 20) {
  x % 3 === 0 ? ( x % 5 === 0 ? juliaJames = 'JuliaJames' : juliaJames = 'Julia') : ( x % 5 === 0 ? juliaJames = 'James' : juliaJames = x );
  console.log(juliaJames);
  x += 1;
}