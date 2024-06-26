// iterate though object

var skill = {
  company: "js",
  city: "Noida",
  state: "UP",
};

for (let i in skill) {
  console.log(`${i} : ${skill[i]}`);
}

// doubleNumber using while

let numArray = [21, 22, 12, 22, 34, 12, 23];

function doubleNumber(arr) {
  let lenthOfArray = arr.length;
  // console.log(lenthOfArray);
  let count = 0;
  let newArr = [];
  while (count < lenthOfArray) {
    newArr[count] = arr[count] * 2;
    count++;
  }
  return newArr;
}
console.log(doubleNumber(numArray));

let removedarray = new Set(numArray);
console.log(...removedarray);
// sorting of array
console.log(numArray.sort());

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

// Custom filter function HOF
function myFilter(arr, func) {
  let filterdArray = [];
  for (let i in arr) {
    if (func(arr[i])) {
      filterdArray.push(arr[i]);
    }
  }
  return filterdArray;
}

console.log(myFilter([1, 2, 3, 4], (num) => num % 2 === 0));

// Custom map function HOF

function myMap(arr, func) {
  let mappedArray = [];
  for (let i in arr) {
    mappedArray.push(func(arr[i]));
  }
  return mappedArray;
}

console.log(myMap([1, 2, 3, 4], (num) => (num = num * 3)));

/*
Boo who
Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.
*/
function booWho(bool) {
  if (typeof bool === "boolean") return true;
  else return false;
}

console.log(booWho(false));

/* 
Title Case a Sentence
Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.
*/

function titleCase(str) {
  let strArray = str.split(" ");
  let newString = "";
  for (let i of strArray) {
    let newStr = "";
    for (let j in i) {
      if (j == 0) {
        newStr = newStr + i[j].toUpperCase();
      } else newStr = newStr + i[j].toLowerCase();
    }
    newString = newString + " " + newStr;
  }
  return newString;
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));

/*
Sum All Numbers in a Range
We'll pass you an array of two numbers. 
Return the sum of those two numbers plus the sum of all the numbers between them. 
The lowest number will not always come first.

*/

function sumAll(arr) {
  let sum = 0;
  if (arr[0] < arr[1]) {
    for (let i = arr[0]; i <= arr[1]; i++) {
      sum += i;
    }
  } else if (arr[0] > arr[1]) {
    for (let i = arr[1]; i <= arr[0]; i++) {
      sum += i;
    }
  } else sum += arr[0];
  return sum;
}

console.log("sum :", sumAll([1, 4]));
/*
Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
  let newArr = [];
  newArr = arr1.concat(arr2);

  let diff = newArr.filter((num) => {
    if (arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1) {
      return num;
    }
  });
  console.log(diff);
}

diffArray([1, 2, 3, 5], [1, 2, 7, 3, 4, 5]);

// Remove duplicate from array

function removeDulicate(arr) {
  let uniqueItem = arr.filter((item, index) => arr.indexOf(item) === index);
  console.log(uniqueItem);
  return uniqueItem;
}

removeDulicate([1, 2, 2, 3, 4, 5, 2, 5]);

/*
Seek and Destroy
You will be provided with an initial array as the first argument to the destroyer function, followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.

The function must accept an indeterminate number of arguments, also known as a variadic function. 
You can access the additional arguments by adding a rest parameter to the function definition or using the arguments object.
*/

function destroyer(arr, ...rest) {
  let newArr = [];
  newArr = arr.concat(rest);
  let array = newArr.filter((num) => {
    if (arr.includes(num) == !rest.includes(num)) {
      return num;
    }
  });
  console.log(array);
  return array;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer(["tree", "hamburger", 53], "tree", 53);

/*
Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. 
For example, 2 is a prime number because it is only divisible by 1 and 2. 
In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

function sumPrimes(num) {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i !== j && i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      sum += i;
    }
  }
  console.log(sum);
  return sum;
}

sumPrimes(10);

const firstname = fun();
var userName = `vivek`;
function fun() {
  return `my is ${userName} malviya`;
}
console.log(firstname);

// Question on Async data handling in nodejs

let a = 10;
let b = 5;

// setTimeout(() => {
//   let b = 10;
// }, 1000);

// let awaitedData = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let b = 10;
//     resolve(b);
//   }, 1000);
// });
// awaitedData.then((b) => {
//   console.log("sum of a+b :", a + b); // required answer - 20
// });

console.log("Starting up"); // 1
setTimeout(() => {
  console.log("2 second log"); //4
}, 2000);
setTimeout(() => {
  console.log("0 second log"); //3
}, 0);
console.log("Finishing up"); // 2

// Output bases quesyion
const obj = {};
let key = "constructor";
if (key in obj) {
  console.log("Key Found");
} else {
  console.log("Key not Found");
}
// we are getting out as key found to fic that we can use Object.hasOwn(obj, key)
if (Object.hasOwn(obj, key)) {
  console.log("Key Found");
} else {
  console.log("Key not Found");
}
