function squareStarPattern(num) {
  let string = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
  return string;
}

squareStarPattern(5);

function hollowSquareStarPattern(num) {
  let string = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if (i == 0 || i == num - 1) {
        string += "*";
      } else if (j === 0 || j === num - 1) {
        string += "*";
      } else string += " ";
    }
    string += "\n";
  }
  console.log(string);
  return string;
}

hollowSquareStarPattern(5);

function rightTrianglePattern(num) {
  let string = "";
  for (let i = 0; i <= num; i++) {
    for (let j = 0; j < num - i; j++) {
      string += " ";
    }
    for (let k = 0; k < i; k++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
  return string;
}
rightTrianglePattern(6);
