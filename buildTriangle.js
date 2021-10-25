function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* ";
  }
  return line + "\n";
}

function buildTriangle(baseWidth) {
  let triangle = '';
  for (let i = 1; i <= baseWidth; i++) {
    triangle += makeLine(i);
  }
  return triangle;
}

console.log(buildTriangle(10));