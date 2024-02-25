// Sum of N Number

function sunOfNNumbers(...arg) {
  return arg.reduce((val, acc) => (acc = acc + val));
}
const result = sunOfNNumbers(2, 3, 4, 5);
console.log("Sum of N numbers: " + result);

// Reverse of a String
function reverseOfString(str) {
  let string = "";
  for (let i in str) {
    string = str[i] + string;
  }
  return string;
}
console.log("ReverseString: " + reverseOfString("Rahul"));

// Question on Shallow copy
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
console.log("array3[0].name: " + array3[0].name);
//	what is the value of array3[0].name?

// Iteration over a nested object

const nestedObject = {
  key1: "value1",
  key2: {
    key3: "value3",
    key4: "value4",
    key5: {
      key6: "value6",
      key7: {
        key8: "value8",
      },
    },
  },
};

const getKey = (obj) => {
  let keys = [];
  for (let key in obj) {
    keys.push(key);
    if (typeof obj[key] === "object") {
      keys = keys.concat(getKey(obj[key]));
    }
  }
  return keys;
};
console.log("All keys in object: " + getKey(nestedObject));

//Find the Longest Word in a String

function findLongestWordLength(str) {
  const strArray = str.split(" ");

  // by using map function and spread operator
  const length = strArray.map((text) => text.length);
  const longestWordLength = Math.max(...length);

  // by using for loop
  let maxLength = 0;
  for (let word of strArray) {
    let workLength = word.length;
    if (workLength > maxLength) {
      maxLength = workLength;
    }
  }
  console.log(longestWordLength);
  console.log(maxLength);
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");

// Return Largest Numbers in Arrays
function largestOfFour(arr) {
  let largestNumbersInArr = arr.map((val) =>
    val.reduce((prev, curr) => {
      if (prev > curr) {
        return prev;
      } else {
        return curr;
      }
    })
  );
  console.log(largestNumbersInArr);
  return largestNumbersInArr;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

// largestOfFour([
//   [4, 9, 1, 3],
//   [13, 35, 18, 26],
//   [32, 35, 97, 39],
//   [1000000, 1001, 857, 1],
// ]);

/* Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).
*/

function confirmEnding(str, target) {
  //   let result = str.endsWith(target) ? true : false;
  let targetLength = target.length;
  let strLength = str.length;
  let result =
    str.substring(strLength - targetLength, strLength) === target
      ? true
      : false;
  return result;
}
console.log(confirmEnding("Hello world", "world"));

/*
Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number.

*/

function repeatStringNumTimes(str, num) {
  let newStr = "";
  if (num > 0) {
    while (num > 0) {
      newStr = newStr + str;
      num--;
    }
  }
  return newStr;
}
console.log(repeatStringNumTimes("abc", 3));

/* 
Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending
*/
function truncateString(str, num) {
  let length = str.length;
  let newStr = "";
  if (num < length) {
    newStr = str.substring(0, num) + "...";
  } else newStr = str.substring(0, num);
  console.log(newStr);
  return newStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

/*
Finders Keepers
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. 
This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
*/
function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}

console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));
