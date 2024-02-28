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
rightTrianglePattern(5);

function leftTrianglePattern(num) {
  let string = "";
  for (let i = 0; i <= num; i++) {
    for (let k = 0; k < i; k++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
  return string;
}
leftTrianglePattern(5);

function pyramidStarPattern(num) {
  let string = "";
  for (let i = 1; i <= num; i++) {
    for (let j = num - i; j >= 1; j--) {
      string += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      string += "*";
    }
    string += "\n";
  }

  console.log(string);
  return string;
}
pyramidStarPattern(5);

function diamondStarPattern(num) {
  let string = "";
  for (let i = 1; i <= num; i++) {
    for (let j = num - i; j >= 1; j--) {
      string += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      string += "*";
    }
    string += "\n";
  }
  for (let i = num - 1; i >= 1; i--) {
    for (let j = num - i; j >= 1; j--) {
      string += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
  return string;
}
diamondStarPattern(5);
