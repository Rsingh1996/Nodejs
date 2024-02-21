function sunOfNNumbers(...arg) {
  return arg.reduce((val, acc) => (acc = acc + val));
}
const result = sunOfNNumbers(2, 3, 4, 5);
console.log(result);

function reverseOfString(str) {
  let string = "";
  let stringLength = str.length;

  //   for (let i = 0; i < stringLength; i++) {
  //     string = str[i] + string;
  //   }
  for (let i = stringLength - 1; i >= 0; i--) {
    string += str[i];
  }
  return string;
}
console.log(reverseOfString("Rahul Singh"));

const array1 = [
  {
    name: "candidate1",
    place: "tvm",
    test: {
      id: 1,
      user: {
        userId: 1,
      },
    },
  },
];
const array2 = array1;
const array3 = [...array1];
array2[0].name = "Rahul";
console.log(array3[0].name);
//	what is the value of array3[0].name?
