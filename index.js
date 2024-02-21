function sunOfNNumbers(...arg) {
  return arg.reduce((val, acc) => (acc = acc + val));
}
const result = sunOfNNumbers(2, 3, 4, 5);
console.log(result);

function reverseOfString(str) {
  let string = "";
  let stringLength = str.length;
  for (let i = 0; i < stringLength; i++) {
    string = str[i] + string;
  }
  return string;
}
console.log(reverseOfString("rahul"));
